import { lazy, Suspense, useState, useTransition } from "react";

function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time)
    })
  }
  
const Home1 = lazy(() => import("./Home1"));
const Home2 = lazy(() => wait(2000).then(() => import("./Home2")));


const Home = () => {
    const [currentVersion, setCurrentVersion] = useState(1)
    const [isPending, startTransition] = useTransition()
    
    const changeVersion = () => {
        // startTransition(() => {
        //     if (currentVersion === 1) setCurrentVersion(2)
        //     if (currentVersion === 2) setCurrentVersion(1)
        // })

        if (currentVersion === 1) setCurrentVersion(2)
        if (currentVersion === 2) setCurrentVersion(1)
    }

    return (
        <>
            <h1>Home</h1>
            <button onClick={changeVersion}>Change page</button>
            <Suspense fallback={<>Loading home...</>}>
                {currentVersion === 1 ? <Home1 /> : <Home2 />}
            </Suspense>
        </>
    )
};

export default Home;
