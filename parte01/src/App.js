import './App.css';
import Message from './Message';

const Description = () => {
  return <p> React midubootcamp</p>
}

function App() {
  return (
    <div className="App">
      <Message message = "Hello world!"/>
      <Description />      
    </div>
  );
}

export default App;
