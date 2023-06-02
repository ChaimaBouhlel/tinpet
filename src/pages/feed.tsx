import Post from "@/components/Feed/Post";
import Layout from "@/layout";
import axios from 'axios';
import React, {useState} from "react";

const Feed = ({ posts }) => {
  const postsPerRow = 5;
  const rows = Math.ceil(posts.length / postsPerRow);
  const feedStyle = "flex flex-col items-center";
  const rowStyle = "flex justify-center mb-8 sm:mb-12";
  const postStyle = "mx-2";
  const [categorie, setCategorie] = useState('');
  const [minAge, setMinAge] = useState('0');
  const [maxAge, setMaxAge] = useState('100');
  const [results, setResults] = useState(posts);
  const [sexe, setSexe] = useState('');


  const handleSearch = async () => {
    console.log(minAge, maxAge, categorie)
    const constraintsCat = categorie ? `&category=${categorie}` : ""
    const constraintsSexe = sexe ? `&sex=${sexe}` : ""
    console.log(sexe)
    console.log(constraintsSexe)
    console.log(constraintsCat)
    const SEARCH_URL = `http://localhost:3000/annonce/search?minAge=${minAge}&maxAge=${maxAge}${constraintsCat}${constraintsSexe}`
    console.log(SEARCH_URL)
    try {
      const response = await axios.get(
          SEARCH_URL
      );
      setResults(response.data);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };


  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={feedStyle}>
      <div className="container mx-0 text-amber-800 bg-orange-200 p-4">
        <input
            type="text"
            className="border border-gray-300 rounded p-2 mb-4"
            placeholder="Search..."
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
        />
        <select
            className="border border-gray-300 rounded p-2 mb-4"
            value={minAge}
            onChange={(e) => setMinAge(e.target.value)}
        >
          <option value="">Min Age</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="3">3</option>
        </select>
        <select
            className="border border-gray-300 rounded p-2 mb-4"
            value={maxAge}
            onChange={(e) => setMaxAge(e.target.value)}
        >
          <option value="">Max Age</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select
            className="border border-gray-300 rounded p-2 mb-4"
            value={sexe}
            onChange={(e) => setSexe(e.target.value)}
        >
          <option value="">Sexe</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <button
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {
        results.length ?
        Array.from({ length: rows }, (_, rowIndex) => (
        <div key={rowIndex} className={rowStyle}>
          {results
            .slice(rowIndex * postsPerRow, (rowIndex + 1) * postsPerRow)
            .map((post) => (
              <div key={post.animal?.id || post.id } className={postStyle}>
                <Post animal={post.animal || post} />
              </div>
            ))}
        </div>
      )):
            <div> No announces founds</div>
      }
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


