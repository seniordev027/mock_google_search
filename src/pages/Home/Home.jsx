import { Footer, Header, Main } from "components";
import { useBackgroundContext } from "context/backgroundContext";
import { PageWrapper } from "./HomeStyles";

export const Home = () => {
  const { currentBackground } = useBackgroundContext();

  return (
      <PageWrapper sx={{ backgroundImage: `url(${currentBackground.img})` }}>
        <Header />
        <Main />
        <Footer />
      </PageWrapper>
  );
};
