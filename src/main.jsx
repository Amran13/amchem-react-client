import HomePage from "./pages/home/HomePage"
import AboutPage from "./pages/about-us/AboutPage"

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import ProductsPage from "./pages/products/ProductsPage";
import ContactPage from "./pages/contact/ContactPage";
import QualityAndSafetyPage from "./pages/quality-and-safety/QualityAndSafetyPage";
import DistributeWithUsPage from "./pages/distribute-with-us/DistributeWithUsPage";
import CirtificatePage from "./pages/cirtificates/CirtificatePage";
import CooperationPage from "./pages/cooperation/CooperationPage";
import LegalCompliance from "./components/LegalCompliance";
import LegalCompliancePage from "./pages/legal-compliance/LeganCompliancePage";
import ProductCard from "./components/ProductCard";
import ProductCategory from "./components/ProductCategory";
import ProductSpecific from "./components/ProductSpecific";
import SpeciesCategory from "./components/SpeciesCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children : [
      {
        path : '/',
        element : <HomePage></HomePage>
      },
      {
        path : '/about',
        element : <AboutPage></AboutPage>
      },
      {
        path : '/products/category/:slug',
        element : <ProductCategory></ProductCategory>,
        
      },
      {
        path : 'products/species/:id',
        element : <SpeciesCategory></SpeciesCategory>
        
      },
      {
        path : '/products/product/:prodname',
        element : <ProductSpecific></ProductSpecific>
      },
      {
        path : '/products',
        element : <ProductsPage></ProductsPage>
      },
      {
        path : '/contact',
        element : <ContactPage></ContactPage>
      },
      {
        path : '/quality-and-safety',
        element : <QualityAndSafetyPage></QualityAndSafetyPage>
      },
      {
        path : '/distribute',
        element : <DistributeWithUsPage></DistributeWithUsPage>
      },
      {
        path : '/certificate',
        element : <CirtificatePage></CirtificatePage>
      },
      {
        path : '/cooperation',
        element : <CooperationPage></CooperationPage>
      },
      {
        path : 'legal-compliance',
        element : <LegalCompliancePage></LegalCompliancePage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);