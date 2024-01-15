import { useState } from 'react'
import './App.css'

import EventListenerFunctionalBroken from './EventListenerFunctionalBroken'
import EventListenerFunctional from './EventListenerFunctional'
import EventListenerFunctionalWithRef from './EventListenerFunctionalWithRef'
import EventListenerClass from './EventListenerClass'

function App() {
  const [count, setCount] = useState(0)

  const handleCountIncreased = () => {
    window.dispatchEvent(new CustomEvent('LOG_CURRENT_STATE'))
  }

  return (
    <>
      <div className="card">
        <h1>
          React + eventListener
          <br />
          memory management
        </h1>
      </div>
      <div className="card">
        <h2>Count: {count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          increase props count
        </button>
        &nbsp;
        <button onClick={handleCountIncreased}>
          dispatch LOG_CURRENT_STATE event
        </button>
      </div>
      <div className="card">
        <p>View console in dev tools to see logged output</p>
        <EventListenerFunctionalBroken count={count} />
        <EventListenerFunctional count={count} />
        <EventListenerFunctionalWithRef count={count} />
        <EventListenerClass count={count} />
      </div>
    </>
  )
}

export default App
