import React from 'react';
import { render } from 'react-dom';

const SearchResultCard = (props: { id: integer, title: string }) => (
  <section>
    <h3>{props.title}</h3>
  </section>
);

export default SearchResultCard;
