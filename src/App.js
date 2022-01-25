import { useState, useCallback } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = useCallback(() => {
    setIsCartShown(true);
  }, []);
  const hideCartHandler = useCallback(() => {
    setIsCartShown(false);
  }, []);
  return (
    <>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
