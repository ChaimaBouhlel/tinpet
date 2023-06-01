import { useState, useContext } from 'react';
import { useRouter } from 'next/router';





const Form1 = () => {
  

  const [formData, setFormData] = useState({
    name: '',
    race: '',
    photo: '',
    description: '',
    type: '',
    age: ''
  });

  const router = useRouter();

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
      const response = await fetch('http://localhost:3000/animal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        const animalId = data.id;
        console.log(data)
  
        // Pass the animalId as a query parameter when navigating to Form2
        router.push({
          pathname: '/formPage2',
          query: { animalId }
        });
      } else {
        throw new Error('Failed to submit the form');
      }
    } catch (error) {
      console.log(error);
    }
  };
 
    return (
        <div className="flex justify-center items-center h-screen">
          <form className="w-1/3 bg-orange-200 p-6 rounded-md shadow">
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Form 1</h2>
            <div className="space-y-4">
              <div>
                <label className="block">
                  <span className="text-orange-800 font-bold">Name:</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input mt-1 w-full border border-orange-400 rounded-md text-gray-800"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="text-orange-800 font-bold">Race:</span>
                  <input
                    type="text"
                    name="race"
                    value={formData.race}
                    onChange={handleChange}
                    className="form-input mt-1 w-full border border-orange-400 rounded-md text-gray-800"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="text-orange-800 font-bold">Photo:</span>
                  <input
                    type="text"
                    name="photo"
                    value={formData.photo}
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
                  <span className="text-orange-800 font-bold">Type:</span>
                  <input
                    type="text"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="form-input mt-1 w-full border border-orange-400 rounded-md text-gray-800"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="block">
                  <span className="text-orange-800 font-bold">Age:</span>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
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
              Next
            </button>
          </form>
        </div>
      );
    };

export default Form1;
