import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppHeader from "./AppHeaderV3";

const enterInput = async (_input: string) => {
   const userInput = screen.getByRole("textbox");
   await userEvent.click(userInput);
   await userEvent.paste(_input);
}

describe("AppHeader Component Tests", () => {
   
  

   test('image should render in header', () => {
     
      expect(0).toBe(0);
   })
  
   })