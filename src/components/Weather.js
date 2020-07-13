import React from 'react';

const Weather = ({weather}) => {

    const {main, name} = weather;

    if(!name) return null;

    const kelvin = 273.15

    return(
        <div className={"card-panel white col s12"}>
            <div className={"black-text"}>
                <h2>The weather of {name} es: </h2>
                <p className={"temperatura"}>
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Maximum temperature
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Minimum temperature
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>

        </div>
    );
}

export default Weather;