import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Page, Pagination, Wrapper } from './styled';
import { useQuery } from 'react-query';
import { searchMovies } from 'api/movie';

const SearchPage = () => {
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get('keyword');
  const [page, setPage] = useState(1);

  const { isLoading, data } = useQuery(
    ['search', page],
    () => searchMovies(keyword || '', page),
    { keepPreviousData: true },
  );

  if (isLoading) return <div>...Loading</div>;

  return (
    <Wrapper>
      <table>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>rank</th>
        </thead>
        <tbody>
          {data?.results.map((result) => (
            <tr>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination>
        {[...Array(5).keys()].map((num) => (
          <Page active={num + 1 === page} onClick={() => setPage(num + 1)}>
            {num + 1}
          </Page>
        ))}
      </Pagination>
    </Wrapper>
  );
};

export default SearchPage;
