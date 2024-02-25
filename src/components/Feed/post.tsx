import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from "axios";
import {AnimalType, PostType} from "@/types/global";

interface PostProps {
  post: PostType
}

const Post = ({ post }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const { id, animal} = post;
  const [animalData, setAnimalData] = useState<AnimalType>(animal)
  const router = useRouter();
  const [userId, setUserId] = useState(null);

  if (!animal) {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/annonce/${id}`)
        .then(response => {
          const animalee = response.data.animal;
          setAnimalData(animalee);
        })
        .catch(error => {
          console.error(error);
        });
  }

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decodedToken = jwt.decode(token) as jwt.JwtPayload;
        const userEmail = decodedToken.email;
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/email/${userEmail}`)
            .then((response) => response.json())
            .then((data) => {
              setUserId(data.id);
            })
            .catch((error) => {
              console.log(error);
            });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const handleLike = async (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default behavior
    try {
      if (!userId) {
        router.push('/login');
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/annonce/fav/${userId}/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      if (response.ok) {
        setIsLiked(!isLiked);
      } else {
        throw new Error('Failed to like the post');
      }
    } catch (error) {
      console.log(error);
    }  };

  const postStyle = "max-w-xs my-4 rounded overflow-hidden shadow-lg";
  const imageStyle = "w-full";
  const contentStyle = "px-4 py-2";
  const titleStyle = "font-bold text-xl mb-2";
  const actionsStyle = "flex items-center justify-between mt-2";
  const actionsStyleButton = "flex items-center justify-center mt-2";
  const likeButtonStyle = isLiked ? "text-red-500" : "text-gray-500";
  const adoptMeButtonStyle = "bg-orange-200 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded";

  return (
      <div className={postStyle}>
        <img className={imageStyle} src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/animal/animal-image/${animalData.photo}`} alt={animalData.name} />
        <div className={contentStyle}>
          <div className={actionsStyle}>
            <div className={titleStyle}>{animalData.name}</div>
            <FaHeart className={likeButtonStyle} size={18} onClick={handleLike} />
          </div>
          <Link href={`/pets/${animalData.id}`} className={actionsStyleButton}>
            <button className={adoptMeButtonStyle}>{"Details"}</button>
          </Link>
        </div>
      </div>
  );
};

export default Post;