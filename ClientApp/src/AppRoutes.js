import { Counter } from "./page/Counter";
import { FetchData } from "./page/FetchData";
import Home  from "./page/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home/>
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
 
];

export default AppRoutes;
