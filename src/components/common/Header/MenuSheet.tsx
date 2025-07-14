import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavList from "./NavList";
import { RiMenuFoldLine } from "react-icons/ri";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";

const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className={`${"md:hidden"}`}>
          <RiMenuFoldLine />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[400px] p-4 bg-[#EEEEEE]"
      >
        <SheetHeader className="p-0">
          <SheetTitle>
            <Button asChild>
              <FaCalendarAlt className="text-secondary" />
              <a href="/">Book an Appointment</a>
            </Button>
          </SheetTitle>
          <SheetDescription asChild className="w-fit">
            <Button asChild variant={"outline"} className="">
              <FaPhoneAlt className="text-secondary" />
              <a href="/">022-6757-0111</a>
            </Button>
          </SheetDescription>
        </SheetHeader>
        <NavList
          classNameList="flex flex-col items-start gap-2"
          classNameItem="w-full"
        />
        <SheetFooter className="p-0">
          <SheetClose asChild>
            <Button>Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
