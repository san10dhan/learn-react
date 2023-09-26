import './App.css';
import { addToCart } from './redux/action';
import {useDispatch, useSelector} from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const result = useSelector((state) => {return state.cartData});
  console.log(result);
  const data = {
    id: 101,
    name: 'Sanket',
    age: 26
  }
  return (
    <div className="App">
     <button onClick={() => dispatch(addToCart(data))}>Add To Cart</button>
    </div>
  );
}

export default App;
