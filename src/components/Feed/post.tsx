import React, { useState } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Heart } from "react-feather";
import Link from "next/link";

const Post = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1em",
        marginBottom: "1.5em",
        marginLeft: "1.5em",
        flexDirection: "column",
      }}
    >
      <Link href="/pets/1">
        <div
          style={{
            height: "17.5em",
            overflow: "hidden",
            borderRadius: "5px",
          }}
        >
          <Image
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
            src="/pussy.jpg"
            alt="test"
            width={500}
            height={200}
          />
        </div>
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ margin: 0, marginRight: "10px" }}>Minouch</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            marginTop: 0,
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={handleLike}
          >
            {isLiked ? (
              <AiFillHeart size={32} style={{ marginRight: "5px" }} />
            ) : (
              <AiOutlineHeart size={32} style={{ marginRight: "5px" }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
