import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PostCard from './postCard';
import Cookies from 'js-cookie';

const ViewCreatedPosts = () => {
  const [createdPosts, setCreatedPosts] = useState([]);
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    // Fetch created posts data from the backend based on the user ID
    const fetchCreatedPosts = async () => {
      try {
        const token = Cookies.get('token'); // Get the access token from the cookie
        if (!token) {
          throw new Error('No access token found');
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}/published-announcements`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` // Include the access token in the Authorization header
          }
        });

        if (response.ok) {
          const data = await response.json();
          setCreatedPosts(data);
        } else {
          throw new Error('Failed to fetch created posts');
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) {
      fetchCreatedPosts();
    }
  }, [userId]);

  return (
    <div className="bg-orange-200 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Your Created Posts</h1>
      {createdPosts.map((post) => (
        <PostCard key={post.id} animal={post} />
      ))}
      {createdPosts.length === 0 && <p>No created posts available.</p>}
    </div>
  );
};

export default ViewCreatedPosts;
