import { useEffect } from 'react';
import './App.css';
const socket = new WebSocket('ws://localhost:3000/echo');

function App() {
  useEffect(() => {
    socket.onopen = () => {
      console.log('Connected to server');
      socket.send('Hello from browser to server');
    };

  }, []);

  return (
    <>
      <h1>Code-a-oke</h1>
      <textarea />
    </>
  );
}

export default App;
