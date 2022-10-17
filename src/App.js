import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEnteries] = useState([{weight: 175, date: '11-23-2021'}]);

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
