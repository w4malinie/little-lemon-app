import React, { Suspense, lazy } from "react";
import loader from "../assets/34338d26023e5515f6cc8969aa027bca_w200.gif";
import Loading from "./Loading";
const Specials = lazy(() => import("./Specials"));
const CustomersSay = lazy(() => import("./CustomersSay"));
const Chicago = lazy(() => import("./Chicago"));

function Homepage() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Specials />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <CustomersSay />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Chicago />
      </Suspense>
    </>
  );
}

export default Homepage;
