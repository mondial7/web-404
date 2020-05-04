import React, { useEffect, useState } from 'react';
import './App.css';

const apiHost = 'http://localhost:3000'
const statuses = ['on', 'off']

function App() {
  
  const [lightsList, setLightsList] = useState([])
  const fetchLights = async () => {
    const { lights } = await fetch(`${apiHost}/`)
      .then(res => res.json())
    setLightsList(lights)
  }
  useEffect(() => {
    fetchLights()
  }, [])
  const lightSwitch = ({ status }) => {
    return async () => {
      const nextStatus = statuses[1-statuses.indexOf(status)]
      const switched = await fetch(`${apiHost}/light/${nextStatus}`)
        .then(res => res.json())
      if (switched) {
        fetchLights()
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      {lightsList.length > 0 && lightsList.map((light) => (<>
          <div
            className={`Light ${light.status}`}
          ></div>
          <p
            className="Light-label"
            onClick={lightSwitch(light)}>{light.name} ~ {light.status}</p>
          <p>Clicks ~ {light.clicks}</p>
      </>))}
      </header>
    </div>
  );
}

export default App;
