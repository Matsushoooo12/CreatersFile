import React, { ReactNode } from "react";
import { Header } from "../layouts/Header";

interface Props {
  children: ReactNode;
}

export const HeaderLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
