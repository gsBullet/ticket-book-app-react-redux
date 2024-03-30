import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import Header from "./components/Header";
import Ticket from "./components/Ticket";
import DataPreview from "./components/DataPreview";

const App = () => {
  return (
    <Provider store={store}>
      <header id="header">
        <Header />
      </header>

      <section>
        {/* <!-- Input Data --> */}
        <Ticket />

        {/* <!-- Preview Data --> */}

        <DataPreview />
      </section>
    </Provider>
  );
};

export default App;
