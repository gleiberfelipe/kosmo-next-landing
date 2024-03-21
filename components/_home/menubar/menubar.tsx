import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { IoIosArrowForward } from "react-icons/io";
  import { BoxMenu } from "./style";

  
  export function MenubarComp() {
    return (
      <BoxMenu style={{borderRight: "2px solid rgb(245,245,245)", marginRight: "10px"}}>
      <Menubar className="flex flex-col gap-2 text-sm justify-left whitespace-nowrap border-none" >
        <MenubarMenu >
          <MenubarTrigger  className="flex flex-row gap-2 text-sm justify-left whitespace-nowrap border-none">Woman's Fashion <IoIosArrowForward className="flex flex-row gap-2 text-sm justify-left whitespace-nowrap" /></MenubarTrigger>
          <MenubarContent side="right">
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New Incognito Window</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger  className="flex flex-row gap-2 text-sm justify-left whitespace-nowrap border-none" >Men's Fashion <IoIosArrowForward   className="flex flex-row gap-2 text-sm justify-left whitespace-nowrap border-none"/></MenubarTrigger>
          <MenubarContent side="right">
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Find</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Search the web</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Find...</MenubarItem>
                <MenubarItem>Find Next</MenubarItem>
                <MenubarItem>Find Previous</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger  className="flex flex-row gap-2 text-sm justify-left whitespace-nowrap border-none" >Electronics</MenubarTrigger>          
          <MenubarTrigger  className="flex flex-row gap-2 text-sm justify-left whitespace-nowrap border-none">Home & Lifestyle</MenubarTrigger>
          <MenubarTrigger  className="flex flex-row gap-2 text-sm justify-left whitespace-nowrap border-none">Medicine</MenubarTrigger>          
          <MenubarTrigger  className="flex flex-row gap-2 text-sm justify-left whitespace-nowrap border-none">Sports & Outdoor</MenubarTrigger>
          <MenubarTrigger  className="flex flex-row gap-2 text-sm justify-left whitespace-nowrap border-none">Baby's & Toys</MenubarTrigger>          
          <MenubarTrigger  className="flex flex-row gap-2 text-sm justify-left whitespace-nowrap border-none">Groceries & Pets</MenubarTrigger>
          <MenubarTrigger  className="flex flex-row gap-2 text-sm justify-left whitespace-nowrap border-none">Health & Beauty</MenubarTrigger>
         
        </MenubarMenu>
      </Menubar>
      </BoxMenu>
    )
  }
  