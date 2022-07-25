/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { ColorService } from '../../../services';
import { DislikeButton, FavoriteButton, LikeButton, Modal } from '../../examples';
import { Tabs } from '../../examples/Tabs';

interface IPost {
  author: number;
  date: string;
  id: number;
  image: string;
  lesson_num: number;
  text: string;
  title: string;
}

interface IPostsInfo {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPost[];
}

export const PostsPage = () => {
  // const [sendedUser, setSendedUser] = useState(false);

  const [posts, setPosts] = useState<IPostsInfo>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log('useEffect');
    fetch('https://studapi.teachmeskills.by/blog/posts/?limit=20')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  // console.log(posts);
  return (
    // <FormTemplate title="Sign in">
    <>
      <Tabs link1Text="All" url1='/posts' link2Text="My favorites" url2='/posts' link3Text="Popular" url3='/posts'/>
      <br></br>
      <br></br>
      <AllPosts>
        {posts?.results?.map(({ date, title, id, image }) => (
          <PostCard key={id}>
              <PostImg onClick={() => setShowModal(true)} src={image}></PostImg>
              <PostDate>{date}</PostDate>
              <PostTitle href={"/posts/" + `${id}`} > {title} </PostTitle>
              <PostButtons>
                <div>
                  <LikeButton onClick={() => console.log("like")}/>
                  <DislikeButton onClick={() => console.log("dislike")}/>
                </div>
                <FavoriteButton onClick={() => console.log("favorite")}/>
              </PostButtons>
              
              {showModal && (
                <Modal onClick={() => setShowModal(false)}>
                  <ModalImg src={image} />
                </Modal>
              )}

          </PostCard>
        ))}
      </AllPosts>

      

    </>
    // </FormTemplate>
  );
};



const AllPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const PostImg = styled.img`
  height: 246px;
  width: 300px;
  cursor: pointer;
`;
const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  padding: 20px;
  margin: 5px 5px 10px 5px;
  border-bottom: 1px solid ${ColorService.MEDIUM};
`;
const PostDate = styled.p`
  text-align: start;
  font-weight: 400;
  font-size: 16px;
  color : ${ColorService.GRAY};
  margin: 10px 0px;
`;
const PostTitle = styled.a`
  color: ${ColorService.BLACK};
  text-align: start;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  margin-bottom: 10px;

  :hover {
    color:  ${ColorService.PRIMARY};
  }
`;

const PostButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalImg = styled.img`
  max-width: 500px;
`;