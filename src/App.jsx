// import { useEffect } from "react";
// import { getMovies } from "./api";
import "./App.css";
import AppContextWrapper from "./appContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Booking from "./pages/booking/Booking";
import Checkout from "./pages/checkout/Checkout";
import Home from "./pages/home/Home";
import MovieDetail from "./pages/movieDetail/MovieDetail";
function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/movieDetail/:movieId",
                    element: <MovieDetail />,
                },
                {
                    path: "/movieBooking/:movieId",
                    element: <Booking />,
                },
                {
                    path: "/checkout/:movieId",
                    element: <Checkout />,
                },
            ],
        },
    ]);

    return (
        <AppContextWrapper>
            <RouterProvider router={router} />
        </AppContextWrapper>
    );
}

export default App;
