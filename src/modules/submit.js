import getWeather from './fetch';

const formSubmit = () => {
  const form = document.querySelector('.city-form');
  form.addEventListener('submit', event => {
    const city = document.getElementById('city-name');
    const chosenCity = city.value;
    const cityLabel = document.getElementById('city-label');
    cityLabel.textContent = `${chosenCity}`;
    getWeather(chosenCity);
    event.preventDefault();
    form.reset();
  });
};

export default formSubmit;
