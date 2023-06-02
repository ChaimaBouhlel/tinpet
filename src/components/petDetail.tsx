import React from 'react';
import { FaHeart } from 'react-icons/fa';

const PetDetail = ({ animal }) => {
  const containerStyle = "mx-auto mt-8 w-3/4 bg-gray-200 p-8";
  const flexContainerStyle = "flex";
  const imageSectionStyle = "w-1/2 pr-4"; // Added paddingRight for spacing
  const imageStyle = "w-full";
  const detailsSectionStyle = "w-1/2 pl-4"; // Added paddingLeft for spacing
  const detailsContainerStyle = "flex flex-col justify-between h-full"; // Added space-y-4 for equal spacing between details
  const detailsListStyle = "text-xl leading-relaxed space-y-1"; // Removed the marginBottom class
  const stateStyle = "text-lg mb-4";
  const adoptButtonStyle = "bg-orange-200 hover:bg-orange-300 text-white font-bold py-4 px-6 rounded";

  const { name, age, sexe, photo, description, type, state } = animal;

  return (
    <div className={containerStyle}>
      <div className={flexContainerStyle}>
        <div className={imageSectionStyle}>
          <img className={imageStyle} src={`/${photo}`} alt={name} />
        </div>

        <div className={detailsSectionStyle}>
          <div className={detailsContainerStyle}>
            <div>
              <div className={detailsListStyle}>
                <strong>Name:</strong> {name}
              </div>
              <div className={detailsListStyle}>
                <strong>Age:</strong> {age}
              </div>
              <div className={detailsListStyle}>
                <strong>Sexe:</strong> {sexe}
              </div>
              <div className={detailsListStyle}>
                <strong>Description:</strong> {description}
              </div>
              <div className={detailsListStyle}>
                <strong>Type:</strong> {type}
              </div>
            </div>

            <div>
              <div className={stateStyle}>
                <strong>State:</strong> {state}
              </div>
              <div className="mt-4">
                <button className={adoptButtonStyle}>ADOPT ME</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;

