import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import "./index.css";



const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
<TransactionsProvider>
<React.StrictMode>
    <App />
  </React.StrictMode>
</TransactionsProvider>);
{/* ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
); */}
