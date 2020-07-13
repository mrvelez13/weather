import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {

    const [search, saveSearch] = useState({
        city: '',
        country: ''
    });

    const [query, saveQuery] = useState(false);
    const [response, saveResponse] = useState({});
    const [error, saveError] = useState(false);
    const {city, country} = search;

    useEffect(()=>{
        const getApi = async () => {
            if(query){
                const appId = 'd8a149b6fd99e4b3613f594e72a51a9e';
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
                const result = await fetch(url);
                const response = await result.json();
                saveResponse(response);
                saveQuery(false);

                if(response.cod === "404"){
                    saveError(true);
                }else{
                    saveError(false);
                }
            }
        }
        getApi();
    }, [query]);

    let component;

    if(error){
        component = <Error message={"city not found"}></Error>
    }else{
        component = <Weather
                        weather={response}
                    ></Weather>
    }

  return(
      <Fragment>
        <Header
          title={"Weather App"}
        ></Header>
          <div className={"contenedor-form"}>
              <div className={"container"}>
                  <div className={"row"}>
                      <div className={"col m6 s12"}>
                          <Form
                              search={search}
                              saveSearch={saveSearch}
                              saveQuery={saveQuery}
                          />
                      </div>
                      <div className={"col m6 s12"}>
                          {component}
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
  );
}

export default App;
