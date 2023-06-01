import Form2 from '../components/forms/form2';
import {NextPageWithLayout} from "@/types/global";
import {ReactElement} from "react";
import Layout from "@/layout";

const createPost: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <Form2 />
    </div>
  );
};
createPost.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default createPost;