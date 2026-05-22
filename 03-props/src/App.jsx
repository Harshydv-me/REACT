import React from 'react'
import Card from './Card'

const App = () => {

  return (
    <div className="parent">
      <Card user = 'Pragati Yadav' age = {25} img ="https://images.unsplash.com/photo-1779243829348-85bf26cff23b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user = 'shefali Yadav' age = {22} img ="https://plus.unsplash.com/premium_photo-1681426519636-54bad55b38d8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App
