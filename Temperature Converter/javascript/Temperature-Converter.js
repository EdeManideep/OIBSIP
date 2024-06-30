document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');

    convertBtn.addEventListener('click', temperatureConverter);
    temperatureInput.addEventListener('keydown', temperatureConverterOnKeyDown);

    function temperatureConverterOnKeyDown(event){
        if(event.key === 'Enter'){
            temperatureConverter();
        }
    }

    function temperatureConverter() {
        const temperature = parseFloat(document.getElementById('temperatureInput').value);
        const unit = document.querySelector('input[name="unit"]:checked').value;

        if (isNaN(temperature)) {
            resultDiv.textContent = 'Please enter a valid number';
            return;
        }

        let convertedTemperature, convertedUnit;

        if (unit === 'Celsius') {
            convertedTemperature = (temperature * 9/5) + 32;
            resultDiv.textContent = `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`;

            convertedTemperature = temperature + 273.15;
            resultDiv.textContent += ` and ${convertedTemperature.toFixed(2)} K`;
        } else if (unit === 'Fahrenheit') {
            convertedTemperature = (temperature - 32) * 5/9;
            resultDiv.textContent = `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`;

            convertedTemperature = (temperature - 32) * 5/9 + 273.15;
            resultDiv.textContent += ` and ${convertedTemperature.toFixed(2)} K`;
        } else if (unit === 'Kelvin') {
            convertedTemperature = temperature - 273.15;
            resultDiv.textContent = `${temperature} K is equal to ${convertedTemperature.toFixed(2)}°C`;

            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            resultDiv.textContent += ` and ${convertedTemperature.toFixed(2)}°F`;
        }
    }
});
