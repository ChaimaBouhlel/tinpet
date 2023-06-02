import Form3 from '../components/forms/form3';
import {NextPageWithLayout} from "@/types/global";
import {ReactElement} from "react";
import Layout from "@/layout";

const formPage3: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <h1>Form Page</h1>
      <Form3 />
    </div>
  );
};

formPage3.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default formPage3;