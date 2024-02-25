import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Form2 = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const { userId } = router.query; // Get the userId from the query parameters

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      console.log('No file selected');
      return;
    }

    try {
      const token = Cookies.get('token'); // Get the access token from the cookie
        if (!token) {
          throw new Error('No access token found');
        }
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}/profile-photo`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`, // Include the verification token in the Authorization header
        },
        body: formData
      });

      if (response.ok) {
        console.log('Image uploaded successfully');
        // Handle success or navigate to the next page
        router.push({
          pathname: '/userProfile',
          query: { userId }
        });
      } else {
        throw new Error('Failed to upload image');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/3 bg-orange-200 p-6 rounded-md shadow">
        <h2 className="text-2xl font-bold mb-6 text-orange-800">Update Profile Picture</h2>
        <div className="space-y-4">
          <div>
            <label className="block">
              <span className="text-orange-800 font-bold">Image:</span>
              <input
                type="file"
                name="image"
                onChange={handleFileChange}
                className="form-input mt-1 w-full border border-orange-400 rounded-md text-gray-800"
                required
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded mt-6"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form2;
