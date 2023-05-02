import Card from "../components/Card";
import Form from "../components/Form";
import Header from "../components/Header";
import GlobalStyled from "../style/global";

const Home = () => {
  return (
    <>
      <GlobalStyled />
      <Header />
      <div className="container">
        <Card />
        <Form />
      </div>
    </>
  );
};

export default Home;
