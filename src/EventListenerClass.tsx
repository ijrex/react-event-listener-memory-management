import React from 'react'

/*
The memory handling for React Class component props means we don't need
to use a work around to accurately reference the current prop value.
*/

type EventListenerClassProps = {
  count: number
}

class EventListenerClass extends React.Component<EventListenerClassProps> {
  constructor(props: EventListenerClassProps) {
    super(props)

    this.logProps = this.logProps.bind(this)
  }

  state = {
    stateCount: 0,
  }

  logProps() {
    console.log(
      'EventListenerClass: ',
      'props count',
      this.props.count,
      ', state count',
      this.state.stateCount
    )
  }

  componentDidMount(): void {
    window.addEventListener('LOG_CURRENT_STATE', this.logProps)
  }

  componentWillUnmount(): void {
    window.removeEventListener('LOG_CURRENT_STATE', this.logProps)
  }

  render() {
    return (
      <div className="component-info-display-card">
        <div>
          <pre>
            EventListenerFunctional
            <br />
            props count ({this.props.count})
            <br />
            state count ({this.state.stateCount})
          </pre>
        </div>
        <div>
          <button
            onClick={() =>
              this.setState({ stateCount: this.state.stateCount + 1 })
            }
          >
            increase state count
          </button>
        </div>
      </div>
    )
  }
}

export default EventListenerClass
