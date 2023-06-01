import { useState } from 'react';
import { useRouter } from 'next/router';

const Form2 = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      console.log('No file selected');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const animalId = router.query.animalId;

      const response = await fetch(`http://localhost:3000/animal/${animalId}/uploadImage`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Image uploaded successfully');
        // Handle success or navigate to the next page
        router.push({
            pathname: '/formPage2',
            query: { animalId }
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
        <h2 className="text-2xl font-bold mb-6 text-orange-800">Form 2</h2>
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
