import { useEffect, useState, useRef } from 'react'

type EventListenerFunctionalWithRefProps = {
  count: number
}

/*
This solution updates a ref each time the props change to save
having to repeatedly destroy and recreate event listeners.
*/

function EventListenerFunctionalWithRef({
  count,
}: EventListenerFunctionalWithRefProps) {
  const [stateCount, setStateCount] = useState(0)

  const countRef = useRef(count)
  const stateCountRef = useRef(stateCount)

  useEffect(() => {
    countRef.current = count
  }, [count])

  useEffect(() => {
    stateCountRef.current = stateCount
  }, [stateCount])

  useEffect(() => {
    window.addEventListener('LOG_CURRENT_STATE', logProps)

    return function cleanUp() {
      window.removeEventListener('LOG_CURRENT_STATE', logProps)
    }
  }, [])

  function logProps() {
    console.log(
      'EventListenerFunctionalWithRef: ',
      'props count',
      countRef.current,
      ', state count',
      stateCountRef.current
    )
  }

  return (
    <div className="component-info-display-card">
      <div>
        <pre>
          EventListenerFunctionalWithRef
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

export default EventListenerFunctionalWithRef
