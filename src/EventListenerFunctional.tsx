import { useEffect, useState } from 'react'

type EventListenerFunctionalProps = {
  count: number
}

/*
The memory handling for React functional components means we would
have to destroy and recreate eventListeners each time the
props/state change.
*/

function EventListenerFunctional({ count }: EventListenerFunctionalProps) {
  const [stateCount, setStateCount] = useState(0)

  useEffect(() => {
    function logProps() {
      console.log(
        'EventListenerFunctional: ',
        'props count',
        count,
        ', state count',
        stateCount
      )
    }

    window.addEventListener('LOG_CURRENT_STATE', logProps)

    return function cleanUp() {
      window.removeEventListener('LOG_CURRENT_STATE', logProps)
    }
  }, [count, stateCount])

  return (
    <div className="component-info-display-card">
      <div>
        <pre>
          EventListenerFunctional
          <br />
          props count ({count})
          <br />
          state count ({stateCount})
        </pre>
      </div>
      <div>
        <button onClick={() => setStateCount(stateCount + 1)}>
          increase state count
        </button>
      </div>
    </div>
  )
}

export default EventListenerFunctional
