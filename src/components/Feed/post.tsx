import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const Post = ({animal}) => {
  const [isLiked, setIsLiked] = useState(false);
  const { name, age, sexe, photo, description, type, state } = animal;
  const handleLike = () => {
    setIsLiked(!isLiked);
  };

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
      <img className={imageStyle} src="/pussy.jpg" alt={name} />
      <div className={contentStyle}>
        <div className={actionsStyle}>

            <div className={titleStyle}>{name}</div>
          <FaHeart className={likeButtonStyle} size={18} onClick={handleLike} />
        </div>
        <div className={actionsStyleButton}>
               <button className={adoptMeButtonStyle}>Details</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
