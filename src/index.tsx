import { Box, ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App/App";
import Details from "./Components/Details/DetailsV3";
import { ArtStyleProvider } from "./Context/ArtStyleContextV3";
import { MetaValueProvider } from "./Context/MetaValueContextV3";
import { PokemonArrayProvider } from "./Context/PokemonArrayContext";
import Router from "./RouterV3";
import { pokemonColorTheme } from "./Themes/Themes";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider theme={pokemonColorTheme}>
      <MetaValueProvider>
        <PokemonArrayProvider>
          <ArtStyleProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Id/:id" element={<Details />} />
                <Route path="*" element={<Box justifyContent="center" fontSize="20">404: Page not found</Box>} />
              </Routes>
            </BrowserRouter>
          </ArtStyleProvider>
        </PokemonArrayProvider>
      </MetaValueProvider>
    </ChakraProvider>
  </React.StrictMode>
);
