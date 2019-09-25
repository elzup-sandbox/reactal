import React from 'react'
import ReactalChild from './ReactalChild'

type Props = {
  level: number
}

function Reactal(props: Props) {
  const children = Array.from({ length: 4 }, (v, k) => (
    <ReactalChild key={k} level={(props.level || 3) - 1} />
  ))
  return <div className="reactal_rect root">{children}</div>
}
export default Reactal
