import React from 'react';
import { FaHeart } from 'react-icons/fa';

const PetDetail = ({animal}) => {
  const containerStyle = "mx-auto mt-8 w-3/4 bg-gray-200 p-8";
  const imageContainerStyle = "flex items-center justify-center";
  const imageStyle = "w-full max-w-xs mb-4";
  const sectionStyle = "flex justify-between mb-4";
  const detailsStyle = "flex flex-col w-full text-2xl";
  const labelStyle = "font-bold border-b pb-2";
  const cuteTextStyle = "text-sm italic mb-2";
  const adoptButtonStyle = "bg-orange-200 hover:bg-orange-300 text-white font-bold py-4 px-6 rounded"; // Updated style for the "Adopt me" button
   const { id,name, age, sexe, photo, description, type, state } = animal;
  return (
    <div className={containerStyle}>
      <div className={imageContainerStyle}>
        <img className={imageStyle} src="/pussy.jpg" alt="test" />
      </div>

      <section className={sectionStyle}>
        <div className={detailsStyle}>
          <div className={labelStyle}>Name:</div>
          <div>name</div>
          <div className={labelStyle}>Age:</div>
          <div>age</div>
          <div className={labelStyle}>Sexe:</div>
          <div>sexe</div>
          <div className={labelStyle}>Description:</div>
          <div>description</div>
          <div className={labelStyle}>Type:</div>
          <div>type</div>
          <div className={labelStyle}>State:</div>
          <div>state</div>
        </div>

        <div className="flex flex-col items-center justify-center"> {/* Updated style for the "Adopt me" section */}
          <div className={cuteTextStyle}>Some cute text describing the pet...</div>
          <button className={adoptButtonStyle}>Adopt me</button>
        </div>
      </section>
    </div>
  );
};

export default PetDetail;
