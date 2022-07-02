/* eslint-disable prettier/prettier */
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { ButtonExample, List, CustomTitle, ButtonMenuBurger, Link, SearchButton, AboutUserNotAuth, AboutUserAuth, LikeButton, DislikeButton } from './components/examples';

function App() {
  const onClick = () => {
    console.log('click');
  };

  const users = [
    { id: 0, name: 'Lucas' },
    { id: 1, name: 'William' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* <ButtonExample text="Button example" onClick={onClick} />
        <List list={users} /> */}
        <CustomTitle text="Sign in"></CustomTitle>
        <ButtonMenuBurger onClick={onClick} active={false}></ButtonMenuBurger>
        <Link url='https://99px.ru/sstorage/53/2014/03/tmb_98216_2248.jpg' onClick={onClick} text="Ссылка"></Link>
        <SearchButton onClick={onClick}></SearchButton>
        <p>--</p>
        <AboutUserNotAuth onClick={onClick}></AboutUserNotAuth>
        <p>--</p>
        <AboutUserAuth initials="SA" username="Shestak Alina" onClick={onClick}></AboutUserAuth>
        <p>--</p>
        <LikeButton onClick={onClick}></LikeButton>
        <p>--</p>
        <DislikeButton onClick={onClick}></DislikeButton>
      </header>
    </div>
  );
}

export default App;
