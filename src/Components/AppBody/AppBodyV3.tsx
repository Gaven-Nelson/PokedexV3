import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    SimpleGrid,
  } from "@chakra-ui/react";
import { PokemonArrayItem } from "../../App";
import { useArtStyle } from "../../Context/ArtStyleContextV3";
import ListCardView from "../ListCardViewV3";
import PokemonCard from "../PokemonCardV3";
import "/Users/gavennelson/Documents/PokedexProject3/pokedexReact/pokedexreactapp/src/Components/PokemonCardV3.css";

  
  interface Props {
    pokemonArray: Array<PokemonArrayItem>;
  }
  
  function AppBody({pokemonArray}: Props) {
  
    const { artStyle } = useArtStyle();
    return (
      <Tabs //-------------------TAB SELECTOR-------------------------
      >
        <TabList paddingLeft="5">
          <Tab>&#8862; Grid</Tab>
          <Tab>&#x2263; List</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SimpleGrid
              spacing="10"
              minChildWidth={280}
              justifyItems="center"
            >
              {pokemonArray.map((pokemon: PokemonArrayItem) => (
                <PokemonCard
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.types}
                  artStyle={artStyle}
                  
                />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid
              columns={[1]}
              spacing="10"
              paddingLeft="5"
              paddingRight="5"
              paddingTop="0"
            >
              {pokemonArray.map((pokemon: PokemonArrayItem) => (
                <ListCardView
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.types}
                  artStyle={artStyle}
                  
                />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  }
  
  export default AppBody;
  