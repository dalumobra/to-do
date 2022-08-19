import { useState } from 'react';
import './App.css';

function App() {

  const [todos , setTODOS] = useState(30);

  return (
    <div className="container">
    {todos}
    </div>
  );
}

export default App;
