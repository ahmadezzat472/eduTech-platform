import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavList from "./NavList";
import { RiMenuFoldLine } from "react-icons/ri";

const MenuSheet = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close sheet on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <RiMenuFoldLine />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[400px] p-0 bg-[#EEEEEE] flex flex-col"
      >
        {/* Branding/Logo */}
        <div className="flex items-center gap-2 px-4 pt-4 pb-2 border-b">
          <span className="font-bold text-lg">EduTech Platform</span>
        </div>
        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <NavList
            classNameList="flex flex-col items-center gap-2"
            classNameItem="w-full "
          />
        </div>
        {/* Footer */}
        <SheetFooter className="p-4 border-t">
          <SheetClose asChild>
            <Button className="w-full">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
