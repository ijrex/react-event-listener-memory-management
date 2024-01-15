import { useEffect, useState } from 'react'

type EventListenerBrokenFunctionalProps = {
  count: number
}

/*
This solution is broken, the memory handling for functional components
means the event listener can't reference the most recent props/state.
*/

function EventListenerFunctionalBroken({
  count,
}: EventListenerBrokenFunctionalProps) {
  const [stateCount, setStateCount] = useState(0)

  useEffect(() => {
    function logProps() {
      console.log(
        'EventListenerFunctionalBroken: ',
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
  }, [])

  return (
    <div className="component-info-display-card">
      <div>
        <pre>
          EventListenerFunctionalBroken
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

export default EventListenerFunctionalBroken
