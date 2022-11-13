import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const theme = extendTheme({ config });

root.render(
    // <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    // </React.StrictMode>
);
