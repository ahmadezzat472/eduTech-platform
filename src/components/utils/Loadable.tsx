import React, { Suspense } from "react";
import Loading from "../common/Loading/Loading";

// ** Reusable Suspense Loader Component **
const Loadable = ({ Component }: { Component: React.FC }) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export default Loadable;
