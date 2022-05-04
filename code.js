import React from 'react'

export default function PleaseReviewMe() {
  const [count, setCount] = React.useState(1)
  const [items, setItems] = React.useState([{ id: 1 }])

  setInterval(() => console.log(count), 1000)

  const click = React.useCallback(() => {
    setCount(count + 1)
    setItems([...items, { id: count + 1 }])
  })

  return (
    <React.Fragment>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
      </ul>
      <button onClick={click}>add one</button>
    </React.Fragment>
  )
}
