import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cards from './components/cards/index.js';
import ShipMap from "./components/shipMap/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Nothing to see here</h1>,
  },
      {
        path: "cards",
        element: <Cards/>
      },
      {
        path: "shipmap",
        element: <ShipMap/>
      }
  
]);


function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
