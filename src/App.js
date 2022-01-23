import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./store/cart-context";
function App() {
  return (
    <CartContextProvider>
      <Header />;
      <Meals />
    </CartContextProvider>
  );
}

export default App;
