import Form1 from '../components/forms/form1';
import {NextPageWithLayout} from "@/types/global";
import Layout from "@/layout";
import {ReactElement} from "react";

const createAnimal : NextPageWithLayout<{}> = () => {
  return (
    <div>
      <Form1 />
    </div>
  );
};
createAnimal.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default createAnimal;
