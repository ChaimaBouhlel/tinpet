// import Post from "@/components/Feed/post";
// import Layout from "@/layout"
// import React from "react";
//
// const Feed = ({posts}) => {
//
//   const postsPerRow = 5;
//   const rows = Math.ceil(posts.length / postsPerRow);
//
//   const feedStyle = "flex flex-col items-center";
//   const rowStyle = "flex justify-center mb-8 sm:mb-12";
//   const postStyle = "mx-2";
//
//   return (
//     <div className={feedStyle}>
//       {Array.from({ length: rows }, (_, rowIndex) => (
//         <div key={rowIndex} className={rowStyle}>
//           {posts
//             .slice(rowIndex * postsPerRow, (rowIndex + 1) * postsPerRow)
//             .map(({title,description,category,state,publisher,animal}) => (
//               <div key={post.id} className={postStyle}>
//                 <Post animal={animal} />
//               </div>
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };
// Feed.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };
// export async function getStaticProps() {
//   try {
//     const response = await axios.get('http://localhost:3000/annonce');
//     const posts = response.data;
//
//     return {
//       props: {
//         posts,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//
//     return {
//       props: {
//         posts,
//       },
//     };
//   }
// }
// export default Feed;
// import Post from "@/components/Feed/Post";
// import Layout from "@/layout";
// import axios from 'axios';
// import React, { useState, useEffect } from "react";
//
// const Feed = () => {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//   console.log("fetching data ..")
//   console.log(posts)
//     fetchPosts();
//   }, []);
//
//   const fetchPosts = async () => {
// //     try {
// //       const response = await axios.get('http://localhost:3000/annonce');
// //       console.log(response)
// //       setPosts(response.data);
// //     } catch (error) {
// //       console.error('Error fetching posts:', error);
// //       // Handle error state or display an error message
// //     }
// //         try {
// //         const response = await fetch('http://localhost:3000/annonce', {
// //           method: 'GET',
// //           if (response.status === 200){
// //             }
// //           // Add any required headers or authentication tokens
// //         })catch (error) {
// //                 console.error('Error fetching posts:', error);
// //                 // Handle error state or display an error message
// //               };
// //   };
//
//   useEffect(() => {
//     // Fetch user data from the backend based on the logged-in user
//     const fetchPostsData = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/annonce', {
//           method: 'GET',
//           // Add any required headers or authentication tokens
//         });
//
//         if (response.ok) {
//           const data = await response.json();
//           setPosts(data);
//         } else {
//           throw new Error('Failed to fetch user data');
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchPostsData();
//   }, []);
//   const postsPerRow = 5;
//   const rows = Math.ceil(posts.length / postsPerRow);
//
//   const feedStyle = "flex flex-col items-center";
//   const rowStyle = "flex justify-center mb-8 sm:mb-12";
//   const postStyle = "mx-2";
//
//   if (posts.length === 0) {
//     return <div>Loading...</div>;
//   }
//
//   return (
//     <div className={feedStyle}>
//       {Array.from({ length: rows }, (_, rowIndex) => (
//         <div key={rowIndex} className={rowStyle}>
//           {posts
//             .slice(rowIndex * postsPerRow, (rowIndex + 1) * postsPerRow)
//             .map(({ id, title, description, category, state, publisher, animal }) => (
//               <div key={id} className={postStyle}>
//                 <Post animal={animal} />
//               </div>
//             ))
//           }
//         </div>
//       ))}
//     </div>
//   );
// };
//
// Feed.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };
//
// export default Feed;
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


