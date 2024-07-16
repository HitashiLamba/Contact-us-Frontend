import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sheet visibility
  const navigate = useNavigate();

  const handleClick = async (path: string) => {
    // Navigate to the specified path
    navigate(path);
    setIsOpen(false); // Close the sheet after navigating
  };

  const handleToggleSheet = () => {
    setIsOpen(!isOpen); // Toggle sheet visibility
  };

  // Define closeSheet function to handle closing the sheet

  return (
    <Sheet open={isOpen}>
      <SheetTrigger>
        <Menu className="text-white" onClick={handleToggleSheet} />
      </SheetTrigger>
      <SheetContent className="space-y-3 bg-black text-white">
        <SheetTitle className="text-white">
          <span>Welcome to To-Let.com!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          <Button
            name="home"
            variant="ghost"
            className="text-white font-bold hover:text-orange-500"
            onClick={() => handleClick("/")}
          >
            Home
          </Button>
          <Separator />
          <Button
            name="service"
            variant="ghost"
            className="text-white font-bold hover:text-orange-500"
            onClick={() => handleClick("/service")}
          >
            Service
          </Button>
          <Separator />
          <Button
            name="blog"
            variant="ghost"
            className="text-white font-bold hover:text-orange-500"
            onClick={() => handleClick("/blog")}
          >
            Blog
          </Button>
          <Separator />
          <Button
            name="contact"
            variant="ghost"
            className="text-white font-bold hover:text-orange-500"
            onClick={() => handleClick("/contact")}
          >
            Contact
          </Button>
          <Separator />
          <Button
            name="about"
            variant="ghost"
            className="text-white font-bold hover:text-orange-500"
            onClick={() => handleClick("/about")}
          >
            About
          </Button>
          <Separator />
          <Button
            name="property-listing"
            variant="ghost"
            className="text-white font-bold hover:text-orange-500"
            onClick={() => handleClick("/property-listing")}
          >
            Property Listing
          </Button>
          <Separator />
          <Button
            name="issues"
            variant="ghost"
            className="text-white font-bold hover:text-orange-500"
            onClick={() => handleClick("/issues")}
          >
            Issues
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
