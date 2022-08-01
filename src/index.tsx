import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
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
            <Router />
          </ArtStyleProvider>
        </PokemonArrayProvider>
      </MetaValueProvider>
    </ChakraProvider>
  </React.StrictMode>
);
