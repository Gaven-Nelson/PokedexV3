import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Flex, Container, Image } from "@chakra-ui/react";
import AppBody from "./Components/AppBody/AppBodyV3";
import AppHeader from "./Components/AppHeader/AppHeaderV3";
import { useArtStyle } from "./Context/ArtStyleContextV3";
import { useMetaValue } from "./Context/MetaValueContextV3";
import AppTools from "./Components/AppTools/AppToolsV3";


export interface PokemonArrayItem {
  id: number;
  name: string;
  image: string;
  types: Array<string>;
  artStyle: string;
  isLoading: boolean;
}

function App() {
  const [pokemonArray, setPokemonArray] = useState<Array<PokemonArrayItem>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { meta, setMeta } = useMetaValue();
  const { artStyle, setArtStyle } = useArtStyle();

  let [searchParams, setSearchParams] = useSearchParams();
  let pageNumber = searchParams.get("page") ?? 1;
  let searchValue = searchParams.get("name") ?? "";

  interface Meta {
    current_page: number;
    last_page: number;
  }

  useEffect(() => {
    const abortController = new AbortController();

    fetch(
      `https://intern-pokedex.myriadapps.com/api/v1/pokemon?name=${searchValue}&page=${pageNumber}`,
      { signal: abortController.signal }
    )
      .then((response) => response.json())
      .then((data) => {
        setMeta(data.meta);
        setPokemonArray(data.data);
        setIsLoading(false);
      });

    return function cancel() {
      abortController.abort();
    };
  }, [pageNumber, artStyle, searchValue]);

  if (isLoading === true) {
    return (
      <Box className="pageContainer" h="100%" minH="100vh">
        <AppHeader />
        <Flex
          paddingTop="20"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          {/* <Image paddingTop="100" maxH="300" maxW="300" src={pikachu} /> */}
          <Box color="white">Loading...</Box>
        </Flex>
      </Box>
    );
  }

  return (
    <Box className="pageContainer" h="100%" minH="100vh" bgColor="rgb(0, 128, 128, .2)">
      <AppHeader />
      <AppTools />
      <AppBody pokemonArray={pokemonArray} />
    </Box>
  );
}

export default App;
