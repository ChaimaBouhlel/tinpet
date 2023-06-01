import Form1 from '../components/forms/form1';

const createAnimal = () => {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
  return (
    <div>
      <Form1 />
    </div>
  );
};

export default createAnimal;
