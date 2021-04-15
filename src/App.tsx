// import { useState } from "react";
import "./App.css";
// import isModalShown from "./contexts/isModalShown";
import { Dialog2 } from "./compornent/Dialog2";

function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    // <isModalShown.Provider value={{ isModalOpen, setIsModalOpen }}>
    //   <CallModal />
    // </isModalShown.Provider>
    <Dialog2 />
  );
}

export default App;
