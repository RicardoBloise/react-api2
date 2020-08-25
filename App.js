import React, { Component } from "react";
import Contacts from "./components/contacts";

class App extends Component {
  state = {
    contacts: [
      {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            id: "ATAL",
            geometry: {
              type: "Point",
              coordinates: [-57.53611111, -35.01527778],
            },
          },
          {
            type: "Feature",
            id: "ESPE",
            geometry: {
              type: "Point",
              coordinates: [-56.99583333, -63.3952777777778],
            },
          },
        ],
      },
    ],
  };

  /*componentDidMount() {
    // fetch(
    //   "https://servicios.puertobuenosaires.gob.ar/ePuertoBue/barlovento/ws/ws-buques.php?q=buqueNombre&pstring=0&api_key=d27379c31befbb6342aeea9b715488a5"
    // )
    //fetch("http://www.hidro.gob.ar/api/v1/AlturasHorarias")
    fetch("./components/xxx.js")
      .then((res) => res.json())
      // .then((data) => {
      //   this.setState({ contacts: data });
      // })
      //.then((res) => res.text()) // convert to plain text
      //.then((text) => console.log(text)) // then log it out
      .then((data) => {
        this.setState({ contacts: data });
        //console.log(Object.values(data)[1][1].id);
        let x = data.features;
        for (const prop in x) {
          console.log(`x.${prop} = ${x[prop].id}`);
        }
      })

      .catch(console.log);
  }*/

  render() {
    return <Contacts contacts={this.state.contacts} />;
  }
}

export default App;
