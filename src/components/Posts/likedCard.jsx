import React from 'react';
import Cookies from 'js-cookie';

const LikedCard = ({ animal }) => {
    const handleAvailabilityChange = async () => {
        try {
            const token = Cookies.get('token'); // Get the access token from the cookie
            if (!token) {
                throw new Error('No access token found');
            }
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/annonce/not/${animal.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}` // Include the access token in the Authorization header
                }
            });

            if (response.ok) {
                // Handle the successful availability change
                console.log('Availability changed successfully');
                window.location.reload(); // Reload the page
            } else {
                throw new Error('Failed to change availability');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeletePost = async () => {
        try {
            const token = Cookies.get('token'); // Get the access token from the cookie
            if (!token) {
                throw new Error('No access token found');
            }
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/annonce/${animal.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}` // Include the access token in the Authorization header
                }
            });

            if (response.ok) {
                // Handle the successful deletion
                console.log('Post deleted successfully');
                window.location.reload(); // Reload the page
            } else {
                throw new Error('Failed to delete post');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-white rounded shadow p-4 mb-4">
            <h2 className="text-xl font-bold">{animal.title}</h2>

            {/* Add a placeholder for the animal picture */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                {/* Replace 'animal.picture' with the actual property that holds the picture URL */}
                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/animal/animal-image/${animal.animal.photo}`} alt="Animal" className="w-full h-full object-cover" />
            </div>

            <p>description : {animal.description}</p>
            <p>state : {animal.state}</p>
            <p>category : {animal.category}</p>
            <p>sexe : {animal.animal.sexe}</p>


        </div>
    );
};

export default LikedCard;
