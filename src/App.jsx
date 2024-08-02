import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rest from "./pages/Rest";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./assets/components/Footer";
import Contact from "./assets/components/Contact";
const App = () => {
  return (
    <div>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Rest />} />
            <Route path="/invest" element={<div>Hello InvestMent</div>} />
            <Route path="/how" element={<div>Hello How </div>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ChakraProvider>
    </div>
  );
};

export default App;
