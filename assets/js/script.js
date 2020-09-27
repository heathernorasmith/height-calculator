const feet = document.querySelector('.feet');

const inches = document.querySelector('.inches');

const meters = document.querySelector('.meters');

const button = document.querySelector('.convert');

function convert(feet, inches) {
  const calculation = inches * 0.0254 + feet * 0.3048;
  return calculation;
}

function onConvertClick() {
  const feet_value = feet.value;
  const inches_value = inches.value;

  const meter_value = convert(feet_value, inches_value).toFixed(2);

  meters.value = meter_value;
}

button.addEventListener('click', onConvertClick);
