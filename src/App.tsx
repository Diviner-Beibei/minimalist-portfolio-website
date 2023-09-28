// import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ProjectProvider } from "./contexts/ProjectContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <Error />,
    // loader: AppLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "portfolio/:title",
        element: <PortfolioDetail />,
      },
    ],
  },
]);

function App() {
  return (
    <ProjectProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ProjectProvider>
  );
}

export default App;
