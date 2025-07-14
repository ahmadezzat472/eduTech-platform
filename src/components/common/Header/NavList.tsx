import { NavLink } from "react-router";

interface Props {
  classNameList?: string;
  classNameItem?: string;
}

const NavList = ({ classNameList, classNameItem }: Props) => {
  const navLinks = [
    { name: "home", href: `/`, exact: true },
    { name: "about", href: `/about` },
    { name: "contact", href: `/contact` },
    { name: "learning area", href: `/learning-area` },
  ];
  return (
    <ul className={classNameList}>
      {navLinks.map((link, idx) => (
        <li key={`${link.name}-${idx}`}>
          <NavLink
            to={link.href}
            end={link.exact}
            className={({ isActive }) =>
              `hover:text-secondary font-bold inline-block default-transition capitalize ${classNameItem} ${
                isActive ? "text-secondary" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
