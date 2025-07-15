import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Main = ({ children, className, id }: Props) => {
  return (
    <section id={id} className={`custom-container pt-20 pb-16 ${className}`}>
      {children}
    </section>
  );
};

export default Main;
