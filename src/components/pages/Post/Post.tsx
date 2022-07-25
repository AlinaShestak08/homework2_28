/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { ColorService } from '../../../services';
import { CustomTitle, DislikeButton, LikeButton, Link } from '../../examples';
import { FavoriteButtonWithIcon } from '../../examples/FavoriteButtonWithIcon';

interface IPost {
  author: number;
  date: string;
  id: number;
  image: string;
  lesson_num: number;
  text: string;
  title: string;
}

export const PostPage = () => {
  // const [sendedUser, setSendedUser] = useState(false);

  const [post, setPost] = useState<IPost>();




  const params = useParams();

  useEffect(() => {
    const id = params?.postID;
    if (id) {
      fetch(`https://studapi.teachmeskills.by/blog/posts/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPost(data);
        });
    }
  }, [params?.postID]);

  // console.log(posts);
  return (
    <>
      <Breadcrumbs>
        <Link text='Home' url='/' onClick={() => console.log("back to home")} />
        <Separator>|</Separator>
        <ActivePost>Post {post?.id}</ActivePost>
      </Breadcrumbs>
      <CustomTitle text={`${post?.title}`}></CustomTitle>
      <PostImage src={post?.image}></PostImage>
      <PostText>{post?.text} Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</PostText>
      <PostButtons>
        <div>
          <LikeButton onClick={() => console.log("LikePost")}></LikeButton>
          <DislikeButton onClick={() => console.log("DislikePost")}></DislikeButton>
        </div>
          <FavoriteButtonWithIcon onClick={() => console.log("Add to favorites")}></FavoriteButtonWithIcon>
      </PostButtons>
   
      
    </>
  );
};


const Breadcrumbs = styled.div`
text-align: left;
display: flex;
margin-top: 72px;
margin-bottom: 32px;
`;

const Separator = styled.p`
  margin: 0px 8px;
`;

const ActivePost = styled.p`
  color: ${ColorService.GRAY};
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const PostImage = styled.img `
  margin-top: 48px;
  width: 80%;
`;

const PostText = styled.p `
  margin: 48px 0px;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  width: 920px;
  text-align: justify;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const PostButtons = styled.div `
  align-items: center;
  width: 920px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
`;

