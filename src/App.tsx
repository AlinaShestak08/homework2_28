/* eslint-disable prettier/prettier */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import styled from 'styled-components';

// import { Button } from './components/atoms/Button';
// import { ReactComponent as FavoriteIcon } from './assets/icons/favoritesIcon.svg';
// import { ColorService } from './services/ColorService';
import { RegistrationPage } from './components/pages/Registration';
import { FormTemplate } from './components/templates/FormTemplate/FormTemplate';
import { PostsPage } from './components/pages/Posts/Posts';
import { PostPage } from './components/pages/Post/Post';
import { PostsTemplate } from './components/templates/PostTemplate/PostTemplate';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="posts"
            element={
              // <div></div>
              <FormTemplate title="Blog">
                <PostsPage />
              </FormTemplate>
            }>
            {/* <Route
              path=":postID"
              element={
                // <div></div>
                <FormTemplate title="text">
                  <PostPage />
                </FormTemplate>
              }></Route> */}
          </Route>
          <Route
            path="/posts/:postID"
            element={
              // <div></div>
              <PostsTemplate>
                <PostPage />
              </PostsTemplate>
            }></Route>
          <Route
            path="/"
            element={
              
                <RegistrationPage />
              
            }>
            {/* <Route
              path="/posts"
              element={
                // <div></div>
                <FormTemplate title="text">
                  <PostsPage />
                </FormTemplate>
              }
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// const FavoriteIconStyled = styled(FavoriteIcon)`
//   path {
//     fill: ${ColorService.SECONDARY};
//   }
// `;

// fetch('https://studapi.teachmeskills.by/blog/posts/?limit=20')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

export default App;