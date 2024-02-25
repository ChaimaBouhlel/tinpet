import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LikedCard from './likedCard';
import Cookies from 'js-cookie';

const ViewLikedPosts = () => {
    const [createdPosts, setCreatedPosts] = useState([]);
    const router = useRouter();
    const { userId } = router.query;

    useEffect(() => {
        // Fetch liked posts from data mel user
        const fetchLikedPosts = async () => {
            try {
                const token = Cookies.get('token');
                if (!token) {
                    throw new Error('No access token found');
                }
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/fav/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setCreatedPosts(data);
                } else {
                    throw new Error('Failed to fetch liked posts');
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (userId) {
            fetchLikedPosts();
        }
    }, [userId]);

    return (
        <div className="bg-orange-200 min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-4">Your liked Posts</h1>
            {createdPosts.map((post) => (
                <LikedCard key={post.id} animal={post} />
            ))}
            {createdPosts.length === 0 && <p>No liked posts available.</p>}
        </div>
    );
};

export default ViewLikedPosts;
