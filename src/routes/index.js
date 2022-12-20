import { lazy, Suspense } from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import NavWrapper from "../components/shared/NavWrapper";

function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
const Home = lazy(() => wait(500).then(() => import("../pages/Home")));
const News = lazy(() => import("../pages/News"));
const Contact = lazy(() => import("../pages/Contact"));

const Routes = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <ReactRoutes>
      <Route path="/" element={<NavWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </ReactRoutes>
  </Suspense>
);

export default Routes;
