import Post from "@/components/Feed/Post";
import Layout from "@/layout";
import axios from 'axios';
import React from "react";

const Feed = ({ posts }) => {
  const postsPerRow = 5;
  const rows = Math.ceil(posts.length / postsPerRow);

  const feedStyle = "flex flex-col items-center";
  const rowStyle = "flex justify-center mb-8 sm:mb-12";
  const postStyle = "mx-2";

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={feedStyle}>
      {Array.from({ length: rows }, (_, rowIndex) => (
        <div key={rowIndex} className={rowStyle}>
          {posts
            .slice(rowIndex * postsPerRow, (rowIndex + 1) * postsPerRow)
            .map(({ id, title, description, category, state, publisher, animal }) => (
              <div key={id} className={postStyle}>
                <Post animal={animal} />
              </div>
            ))}
        </div>
      ))}
    </div>
);

};

Feed.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  try {
    const response = await axios.get('http://localhost:3000/annonce');
    const posts = response.data;
    console.log(posts)
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);

    return {
      props: {
        posts: [],
      },
    };
  }
}

export default Feed;


