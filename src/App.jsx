import React from "react";
import { CartProvider } from "./context";
// import styles from "./App.module.css";
import { MainLayout } from "./layouts";
import { MainRoutes } from "./routes/MainRoutes";
function App() {
  return (
    <MainLayout>
      <CartProvider>
        <MainRoutes />
      </CartProvider>
    </MainLayout>
  );
}

export default App;
