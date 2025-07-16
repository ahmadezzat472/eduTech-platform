import NavLinks from "./NavList.tsx";
import { Button } from "@/components/ui/button";
import MenuSheet from "./MenuSheet.tsx";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Logo from "../Logo.tsx";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import CookieService from "@/services/cookies";

const Header = () => {
  const [isBottomNavVisible, setIsBottomNavVisible] = useState(false);
  const token = CookieService.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isBottomNavVisible) {
      timer = setTimeout(() => {
        setIsBottomNavVisible(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [isBottomNavVisible]);

  return (
    <div
      className={`bg-white h-fit ${
        isBottomNavVisible && "shadow-sm"
      } sticky top-0 z-50`}
    >
      {/* top nav */}
      <div className="bg-white shadow-md py-4 relative z-40">
        <div className="custom-container">
          <div className="flex items-center justify-between gap-3">
            <Logo />
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <NavLinks
                  classNameList="flex items-center gap-5 justify-center max-lg:text-[15px] text-primary"
                  classNameItem="text-primary"
                />
              </div>
              {token ? (
                <Button
                  onClick={() => {
                    CookieService.remove("token");
                    navigate("/");
                  }}
                  asChild
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold hover:opacity-85 transition"
                >
                  <FaSignOutAlt />
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary-500 to-sky-500 text-white font-semibold hover:opacity-85 transition"
                  >
                    <FaUser />
                    Login
                  </Button>
                </Link>
              )}
              <MenuSheet />
            </div>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <nav
        className={`bg-primary max-md:hidden transition-all duration-500 ease-in-out absolute top-full left-0 right-0 origin-top z-30 ${
          isBottomNavVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <NavLinks
          classNameList="flex items-center gap-3.5 lg:gap-8 justify-center text-white custom-container max-lg:text-[15px]"
          classNameItem="py-6"
        />
      </nav>
    </div>
  );
};

export default Header;

/* Ensure the bottom nav is positioned correctly behind the top nav */
<style>{`
  nav.bg-primary {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    transform-origin: top;
  }
`}</style>;
