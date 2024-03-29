import { useState, useContext } from 'react';
import { useRouter } from 'next/router';


const Form2 = () => {
    
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      category: ''
    });
  
    const router = useRouter();
    const { animalId } = router.query;
    const { userId } = router.query;
    console.log(animalId);
    console.log(userId);

     // Get the animalId from the query
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('${process.env.NEXT_PUBLIC_BACKEND_URL}/annonce', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            animalId: animalId ,
            publisherId: userId 
          })
        });
  
        if (response) {
          console.log(response);
          console.log('annonce added success');
           // Navigate to success page if the request was successful
        } else {
          throw new Error('Failed to submit the form');
        }
      } catch (error) {
        console.log(error);
      }
    };
  return (
      <div className="flex justify-center items-center h-screen p-8">
        <form className="md:w-1/3 bg-orange-200 p-6 rounded-md shadow mx-auto my-0">
          <h2 className="text-center text-2xl font-bold mb-6 text-orange-800">Create post</h2>
        <div className="space-y-4">
          <div>
            <label className="block">
              <span className="text-orange-800 font-bold">Title:</span>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-input mt-1 w-full border border-orange-400 rounded-md text-gray-800"
                required
              />
            </label>
          </div>
          <div>
            <label className="block">
              <span className="text-orange-800 font-bold">Description:</span>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="form-input mt-1 w-full border border-orange-400 rounded-md text-gray-800"
                required
              />
            </label>
          </div>
          <div>
            <label className="block">
              <span className="text-orange-800 font-bold">Category:</span>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input mt-1 w-full border border-orange-400 rounded-md text-gray-800"
                required
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-6"
          onClick={handleSubmit}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Form2;
