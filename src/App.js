import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEnteries] = useState([{weight: 175, date: '11-23-2021'}]);

  function addNewEntry(entry){
    let tempEntries = [...entries, entry];
    setEnteries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry}/>
    </div>
  );
}

export default App;
