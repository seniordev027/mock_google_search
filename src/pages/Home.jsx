import { Box, styled } from "@mui/material";

import img from "../assets/page_bg.jpg";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Wrapper = styled(Box)({
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  minHeight: "100vh",
  padding: "0 12px",
  background: `url(${img}) center / cover no-repeat`,
});

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>
  );
};

export default Home;
