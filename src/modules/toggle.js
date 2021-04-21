import convertToF from './converterToF';
import convertToC from './converterToC';

const toggleTemp = () => {
  const toggleBtn = document.getElementById('toggle');
  const temperature = document.getElementById('weather-temp');
  const degree = document.getElementById('weather-degree');
  toggleBtn.addEventListener('click', () => {
    if (degree.textContent === '\xB0C') {
      temperature.textContent = `${convertToF(temperature.textContent)}`;
      degree.textContent = '\xB0F';
    } else {
      temperature.textContent = `${convertToC(temperature.textContent)}`;
      degree.textContent = '\xB0C';
    }
  });
};

export default toggleTemp;
