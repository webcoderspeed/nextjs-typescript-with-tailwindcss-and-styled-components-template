import tw from 'twin.macro';
import styled from 'styled-components';

const Container = tw.div`flex flex-col items-center justify-center`;

const Title = tw.h1`text-6xl font-bold`;

const Subtitle = tw.h2`text-4xl font-bold`;

const Home = () => {
  return (
    <Container>
      <Title>Home</Title>
      <Subtitle>Welcome to the home page</Subtitle>
    </Container>
  );
};

export default Home;
