import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const UpdateProfileForm = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Fetch user data from the backend based on the user ID
    const fetchUserData = async () => {
      try {
        const token = Cookies.get('token'); // Get the access token from the cookie
        if (!token) {
          throw new Error('No access token found');
        }
        const response = await fetch(`http://localhost:3000/user/${router.query.userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` // Include the access token in the Authorization header
          }
        });

        if (response.ok) {
          const data = await response.json();
          setPhoneNumber(data.phoneNumber);
          setFirstName(data.firstname);
          setLastName(data.lastname);
          console.log(data);
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (router.query.userId) {
      fetchUserData();
    }
  }, [router.query.userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        phoneNumber,
        firstname,
        lastname,
        password,
      };
      const token = Cookies.get('token'); // Get the access token from the cookie
        if (!token) {
          throw new Error('No access token found');
        }

      const userId = router.query.userId;

      const response = await fetch(`http://localhost:3000/user/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` // Include the access token in the Authorization header
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        // Handle success or navigate to the next page
        router.push({
            pathname: '/userProfile',
            query: { userId }
          });
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/3 bg-orange-200 p-6 rounded-md shadow">
        <h2 className="text-2xl font-bold mb-6 text-orange-800">Update Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block">
              <span className="text-orange-800 font-bold">Phone Number:</span>
              <input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-input mt-1 w-full border border-orange-400 rounded-md text-gray-800"
              />
            </label>
          </div>
          <div>
            <label className="block">
              <span className="text-orange-800 font-bold">First Name:</span>
              <input
                type="text"
                name="firstName"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-input mt-1 w-full border border-orange-400 rounded-md text-gray-800"
              />
            </label>
          </div>
          <div>
            <label className="block">
              <span className="text-orange-800 font-bold">Last Name:</span>
              <input
                type="text"
                name="lastName"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="form-input mt-1 w-full border border-orange-400 rounded-md text-gray-800"
              />
            </label>
          </div>
          <div>
            <label className="block">
              <span className="text-orange-800 font-bold">Password:</span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input mt-1 w-full border border-orange-400 rounded-md text-gray-800"
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded mt-6"
          onClick={handleSubmit}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
