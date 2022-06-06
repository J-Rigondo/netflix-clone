import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchPlayingMovies } from 'api/movie';
import {
  Box,
  Wrapper,
  Loading,
  Banner,
  Title,
  Overview,
  Row,
  Slider,
  rowVariants,
  boxVariants,
  BoxInfo,
  boxInfoVariants,
  Overlay,
  BigMovie,
  MovieImg,
  DetailTitle,
  DetailOverview,
} from './styled';
import { makeImagePath } from 'lib/utils/common';
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion';
import { useNavigate, useMatch } from 'react-router-dom';

const offset = 6;

const HomePage = () => {
  const navigate = useNavigate();
  const detailMatch = useMatch('/movies/:movieId');
  const { scrollY } = useViewportScroll();
  const [step, setStep] = useState(0);
  const { isLoading, data, isError } = useQuery(
    'fetchPlayingMovies',
    fetchPlayingMovies,
  );

  const stepUp = () => {
    if (data) {
      const totalMovies = data.results.length;
      const maxIndex = Math.floor(totalMovies / offset);
      setStep((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const onClickBox = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  const sliderMovies = (() => {
    if (!data) return [];

    return data.results.slice(1).slice(offset * step, offset * step + offset);
  })();

  if (isError) return <div>Error! please refresh</div>;
  if (isLoading) return <Loading>...Loading</Loading>;

  const {
    results: [{ title, overview, backdrop_path }],
  } = data!;

  const clickedMovie =
    detailMatch?.params.movieId &&
    data?.results.find(
      (movie) => String(movie.id) === detailMatch.params.movieId,
    );

  return (
    <Wrapper>
      <Banner onClick={stepUp} bgphoto={makeImagePath(backdrop_path)}>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
      </Banner>
      <Slider>
        <AnimatePresence initial={false}>
          <Row
            key={step}
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: 'tween', duration: 1 }}
          >
            {sliderMovies.map((movie) => (
              <Box
                layoutId={movie.id + ''}
                variants={boxVariants}
                initial="normal"
                whileHover="hover"
                key={movie.id}
                bgphoto={makeImagePath(movie.backdrop_path, 'w500')}
                onClick={() => onClickBox(movie.id)}
              >
                <BoxInfo variants={boxInfoVariants}>
                  <h4>{movie.title}</h4>
                </BoxInfo>
              </Box>
            ))}
          </Row>
        </AnimatePresence>
      </Slider>
      <AnimatePresence>
        {detailMatch && (
          <>
            <Overlay onClick={() => navigate('/')} animate={{ opacity: 1 }} />
            <BigMovie layoutId={detailMatch.params.movieId} top={scrollY.get()}>
              {clickedMovie && (
                <>
                  <MovieImg
                    src={makeImagePath(clickedMovie.backdrop_path, 'w500')}
                  />
                  <DetailTitle>{clickedMovie.title}</DetailTitle>
                  <DetailOverview>{clickedMovie.overview}</DetailOverview>
                </>
              )}
            </BigMovie>
          </>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default HomePage;
