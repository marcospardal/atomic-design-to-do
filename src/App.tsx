import './App.css';
import { TodoProvider } from './contexts/ToDoContext';
import Home from './pages/Home';

function App() {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  );
}

export default App;
