import logo from './logo.svg';
import './App.css';
import { useRef } from "react";
import { useState, useEffect } from "react";

  /*function GithubUser({name, location, avatar}) {
    return (
      <div>
        <h1>{name}</h1>
        <p>{location}</p>
        <img src={avatar} height={150} alt={name} />
      </div>
    )
  }*/

  /*const query = `
  query {
    allLifts {
      name
      elevationGain
      status
    }
  }  `;

  const opts = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query})
  };

  function Lift({name, elevationGain, status}) {
    return (
      <div>
        <h1>{name}</h1>
        <p>{elevationGain} {status}</p>
      </div>
    )

  }
  function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      //fetch('https://api.github.com/users/nazimzee8')
      fetch('https://snowtooth.moonhighway.com', opts)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
    }, []);

    if (loading) return <h1> Loading...</h1>;
    if (error) return <pre> {JSON.stringify(error)}</pre>
    if (!data) return null;

    //return <GithubUser name={data.login} location = {data.location} avatar= {data.avatar_url}/>;
    return (
      <div>
        {data.data.allLifts.map(lift => 
        <Lift 
        name = {lift.name} 
        elevationGain = {lift.elevationGain} 
        status = {lift.status}
        />)}
      </div>
    )
    };*/

    const cities = [
      {name: "Seattle", population: 684451},
      {name: "Tacoma", population: 207948 },
      {name: "Portland", population: 632309},
      {name: "Los Angeles", population: 3971883}
    ];

    function List({ data, renderItem, renderEmpty }) {
      return !data.length ? (
        renderEmpty
      ) : (
        <ul>
          {data.map((item) => (
            <li key = {item.name}>
              {renderItem(item)}
            </li>
          ))}
        </ul>
      );
    };

    function App() {
      return (
        <List
          data={cities}
          renderEmpty={<p>This list is empty.</p> }
          renderItem={(item) => 
          <> 
            {item.name} - {item.population} people.
          </>
          }
        />
      )
    }

export default App;