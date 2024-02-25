import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { userId } = router.query; // Get the id from the query parameters

  useEffect(() => {
    // Fetch user data from the backend based on the id
    const fetchUserData = async () => {
      try {
        const token = Cookies.get('token'); // Get the access token from the cookie
        if (!token) {
          throw new Error('No access token found');
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` // Include the access token in the Authorization header
          }
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleEditProfile = () => {
    // Navigate to the user edit profile page
    
    router.push(`/editProfile?userId=${userId}`);
  };

  const handleUpdateProfilePicture = () => {
    // Navigate to the form for updating the profile picture
    router.push(`/updateProfilePicture?userId=${userId}`);
  };

  const handleCreatePosts = () => {
    // Navigate to the page where user can see their created posts
    router.push(`/createAnimal?userId=${userId}`);
  };

  const handleViewLikedPosts = () => {
    // Navigate to the page where user can see their liked posts
    router.push(`/likedPosts?userId=${userId}`);
  };
  
  const handleViewCreatedPosts = () => {
    // Navigate to the page where user can see their created posts
    router.push(`/viewCreatedPosts?userId=${userId}`);
  };
  return (
    <div className="bg-orange-200 min-h-screen flex items-center justify-center">
      {user && (
        <div className="bg-white w-2/3 p-8 rounded shadow">
          <div className="flex items-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
              <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/profile-image/${user.profilePhoto}`} alt="Profile Photo" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{`${user.firstname} ${user.lastname}`}</h2>
              <p className="text-lg">Email: {user.email}</p>
              <p className="text-lg">Phone Number: {user.phoneNumber}</p>
              {/* Display other user information as needed */}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleUpdateProfilePicture}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-1/2"
            >
              Update profile picture
            </button>
            <button
              onClick={handleEditProfile}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-1/2 ml-4"
            >
              Update Profile
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={handleCreatePosts}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Create New Annonce
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={handleViewLikedPosts}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              View Liked Posts
            </button>
          </div>
          <div className="mt-4">
            <button
              onClick={handleViewCreatedPosts}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              View Created Posts
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
