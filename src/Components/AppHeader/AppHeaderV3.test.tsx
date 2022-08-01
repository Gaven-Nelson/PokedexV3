import { render } from "@testing-library/react";
import  AppHeader  from "./AppHeaderV3";

describe("AppHeader Component Tests", () => {
   // render(<AppHeader/>);
   // const linkElement = screen.getByText(/Search/);
   expect(/Search/).toBeInTheDocument();
})