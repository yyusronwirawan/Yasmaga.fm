import Banner from "./components/Banner";
import BottomBar from "./components/BottomBar";
import Header from "./components/Header";
// import ModalShare from "./components/ModalShare";
import Schedule from "./components/Schedule";

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      {/* <ModalShare /> */}
      <Schedule />
      <BottomBar />
    </>
  );
}
