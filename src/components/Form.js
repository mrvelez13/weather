import React, {useState} from 'react';
import Error from "./Error";


const Form = ({search, saveSearch, saveQuery}) => {

    const [error, saveError] = useState(false);

    const {city, country} = search;

    const handleChange = e => {
        //update state
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if( country.trim() === '' || city.trim() === '' ){
            saveError(true);
            return;
        }
        saveError(false);

        saveQuery(true);
    }

    return(
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error message={"All fields are requierd"}/> : null}
            <div className={"input-field col s12"}>
                <input
                    type={"text"}
                    name={"city"}
                    id={"city"}
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor={"city"}>City</label>
            </div>
            <div className={"input-field col s12"}>
                <select
                    name={"country"}
                    id={"country"}
                    value={country}
                    onChange={handleChange}
                >
                    <option value={""}>-- Select a country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor={"country"}>Country: </label>
            </div>

            <div className={"input-field col s12"}>
                <input
                    type={"submit"}
                    value={"Search"}
                    className={"waves-effect waves-light btn-large btn-block yellow accent-4"}
                />
            </div>
        </form>
    );
}

export default Form;