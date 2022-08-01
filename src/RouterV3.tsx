import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App/App";
import { Box } from "@chakra-ui/react";
import Details from "./Components/Details/DetailsV3";


function Router() {
  
  return (
    <BrowserRouter>
       <Routes>
        <Route path = "/" element={<App />}/>
        <Route path="/Id/:id" element ={<Details />}/>
        <Route path="*" element={<Box justifyContent="center" fontSize="20">404: Page not found</Box>} />
      </Routes> 
    </BrowserRouter>
  );
}

export default Router;
