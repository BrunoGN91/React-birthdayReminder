import React, {useState} from 'react'
import data from './data.js'
import List from './List.js'

function App () {
  const [people, setPeople] = useState(data);
  return (
    <main className="container">
    <h3 className="usersBirthdays">{people.length} birthdays today!</h3>
    <List className="listComponent"  people={people}/>
    <button className="clearButton" onClick={() => {setPeople([])}}>Clear All</button>
    
  </main>
  )
}

export default App;
