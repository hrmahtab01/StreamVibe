import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootComponent from "./layout/RootComponent";
import Home from "./Pages/Home";
import MovieShow from "./Pages/MovieShow";
import Support from "./Pages/Support";
import Subscription from "./Pages/Subscription";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootComponent />}>
        <Route index element={<Home />} />
        <Route path="/movieshow" element={<MovieShow/>}></Route>
        <Route path="/support" element={<Support/>}/>
        <Route path="/subscription" element={<Subscription/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router}/>
};

export default App;
