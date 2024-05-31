fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  .then(response => response.json())
  .then(data => {
    const date = data.Date;
    const usd = data.Valute.USD.Value;
    const AUD = data.Valute.AUD.Value;

    document.getElementById('date').textContent = date;
    document.getElementById('usd').textContent = usd;
    document.getElementById('aud').textContent = AUD;
  })
  .catch(error => {
    console.error('Ошибка при загрузке курса валют:', error);
  });