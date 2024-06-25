import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import "./App.css";
import App1 from "./subrepo1/src/App1";
import { useEffect, useState } from 'react';

async function setupRouter() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App1 />,
    },
  ]);
  return router;
}

function App() {
  const [router, setRouter] = useState(null);

  useEffect(() => {
    setupRouter().then(setRouter);
  }, []);

  return router ? <RouterProvider router={router} /> : <div>Loading...</div>;
}

export default App;

