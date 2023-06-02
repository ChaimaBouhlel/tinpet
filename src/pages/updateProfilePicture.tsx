import Form2 from '../components/userProfile/updateProfilePic';
import {NextPageWithLayout} from "../types/global";
import {ReactElement} from "react";
import Layout from "@/layout";

const updateProfilePic: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <h1>Form Page</h1>
      <Form2 />
    </div>
  );
};

updateProfilePic.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );

};
export default updateProfilePic;