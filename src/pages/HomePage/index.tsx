import React from 'react';
import { useQuery } from 'react-query';
import { fetchPlayingMovies } from 'api/movie';
import { Wrapper, Loading, Banner, Title, Overview } from './styled';
import { makeImagePath } from 'lib/utils/common';

const HomePage = () => {
  const { isLoading, data, isError } = useQuery(
    'fetchPlayingMovies',
    fetchPlayingMovies,
  );

  if (isError) return <div>Error! please refresh</div>;
  if (isLoading) return <Loading>...Loading</Loading>;

  const {
    results: [{ title, overview, backdrop_path }],
  } = data!;

  return (
    <Wrapper>
      <Banner bgPhoto={makeImagePath(backdrop_path)}>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
      </Banner>
    </Wrapper>
  );
};

export default HomePage;
