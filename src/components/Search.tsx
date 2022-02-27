import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setAlert } from 'store/actions/alertActions';
import { getWeather, setLoading } from 'store/actions/weatherActions';

interface SearchProps {
  title: string;
}

const Search: React.FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (city.trim() === '') {
      dispatch(setAlert('City is required'));
      return;
    }

    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity('');
  };

  return (
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="py-5" onSubmit={submitHandler} method="GET">
            <input
              type="text"
              className="input has-text-centered mb-2"
              placeholder="Enter city name"
              style={{ maxWidth: 300 }}
              value={city}
              onChange={changeHandler}
            />
            <button
              type="submit"
              className="button is-primary is-full-width"
              style={{ maxWidth: 300, margin: '0 auto' }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
