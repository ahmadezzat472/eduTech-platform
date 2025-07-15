// import { NavLink } from "react-router";

// interface Props {
//   classNameList?: string;
//   classNameItem?: string;
// }

// const NavList = ({ classNameList, classNameItem }: Props) => {
//   const navLinks = [
//     { name: "home", href: `/`, exact: true },
//     { name: "about", href: `/about` },
//     { name: "contact", href: `/contact` },
//     { name: "learning area", href: `/learning-area` },
//     { name: "quiz", href: `/quiz` },
//   ];
//   return (
//     <ul className={classNameList}>
//       {navLinks.map((link, idx) => (
//         <li key={`${link.name}-${idx}`}>
//           <NavLink
//             to={link.href}
//             end={link.exact}
//             className={({ isActive }) =>
//               `hover:text-secondary font-bold inline-block default-transition capitalize ${classNameItem} ${
//                 isActive ? "text-secondary" : ""
//               }`
//             }
//           >
//             {link.name}
//           </NavLink>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NavList;


import { HashLink } from 'react-router-hash-link';
import { NavLink as RouterNavLink } from 'react-router-dom'; // Important to rename it
import type { FC } from "react";

interface Props {
  classNameList?: string;
  classNameItem?: string;
}

const NavList: FC<Props> = ({ classNameList, classNameItem }) => {
  const navLinks = [
    { name: "home", href: "/", exact: true, type: "route" },
    { name: "about", href: "/#about", type: "hash" },
    { name: "contact", href: "/#contact", type: "hash" },
    { name: "learning area", href: "/learning-area", type: "route" },
    { name: "quiz", href: "/quiz", type: "route" },
  ];

  return (
    <ul className={classNameList}>
      {navLinks.map((link, idx) => (
        <li key={`${link.name}-${idx}`}>
          {link.type === "hash" ? (
            <HashLink
              smooth
              to={link.href}
              className={`hover:text-secondary font-bold inline-block default-transition capitalize ${classNameItem}`}
            >
              {link.name}
            </HashLink>
          ) : (
            <RouterNavLink
              to={link.href}
              end={link.exact}
              className={({ isActive }) =>
                `hover:text-secondary font-bold inline-block default-transition capitalize ${classNameItem} ${
                  isActive ? "text-secondary" : ""
                }`
              }
            >
              {link.name}
            </RouterNavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavList;

