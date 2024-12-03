import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
import Counter from "./features/counter/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Counter></Counter>
  </Provider>
);
