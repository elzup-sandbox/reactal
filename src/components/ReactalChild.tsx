import React from 'react'

type Props = {
  level: number
}

function ReactalChild({ level }: Props) {
  const [counter, setCounter] = React.useState(0)
  const children = Array.from({ length: 4 }, (v, k) => (
    <ReactalChild key={k} level={level - 1} />
  ))
  if (level > 0) {
    return <div className="reactal_rect">{children}</div>
  }

  return (
    <div className="reactal_rect">
      <button className="cell" onClick={() => setCounter(v => v + 1)}>
        {counter}
      </button>
    </div>
  )
}

export default ReactalChild
