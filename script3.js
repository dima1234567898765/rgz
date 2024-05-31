// функция для получения актуального курса валют
async function fetchCurrencyRates() {
    const response = await fetch('https://api.exchangeratesapi.io/latest');
    const data = await response.json();
    return data.rates;
  }
  
  // функция для отображения курса валют на странице
  async function displayCurrencyRates() {
    const currencyTable = document.getElementById('currency-table');
    const currencyRates = await fetchCurrencyRates();
  
    for (const currency in currencyRates) {
      const row = document.createElement('tr');
      const currencyCell = document.createElement('td');
      const rateCell = document.createElement('td');
  
      currencyCell.textContent = currency;
      rateCell.textContent = currencyRates[currency].toFixed(2);
  
      row.appendChild(currencyCell);
      row.appendChild(rateCell);
      currencyTable.getElementsByTagName('tbody')[0].appendChild(row);
    }
  }
  
  // вызов функции для отображения курса валют
  displayCurrencyRates();