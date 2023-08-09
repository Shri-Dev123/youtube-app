import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import Main from "./components/Main";
import WatchPage from "./components/WatchPage";
import "./index.css";
import store from "./utilities/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "watch",
                element: <WatchPage />,
            },
            {
                path: "demo",
                element: (
                    <>
                        <Demo />
                        <Demo2 />
                    </>
                ),
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <RouterProvider router={appRouter} />
            </div>
        </Provider>
    );
}

export default App;
