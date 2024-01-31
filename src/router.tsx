import { createBrowserRouter } from "react-router-dom";
import Page1 from "./pages/Page1";
import Error from "./components/Error";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ArticlePage from "./pages/ArticlePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <Error />,
  },
  {
    path: "/article1",
    element: <ArticlePage />,
    errorElement: <Error />,
  },
  {
    path: "/page1",
    element: <Page1 />,
    errorElement: <Error />,
  },
  {
    path: "/page2",
    element: <Page2 />,
    errorElement: <Error />,
  },
  {
    path: "/page3",
    element: <Page3 />,
    errorElement: <Error />,
  },
  {
    path: "/page4",
    element: <Page4 />,
    errorElement: <Error />,
  },
]);
