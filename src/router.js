
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import ContactsPage from "./pages/ContactsPage";

export default createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'about',
        Component: AboutPage
      },
      {
        path: 'portfolio',
        Component: PortfolioPage
      },
      {
        path: 'services',
        Component: ServicesPage
      },
      {
        path: 'contacts',
        Component: ContactsPage
      }
    ]
  }
])