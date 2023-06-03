import  UpdateProfileForm from '../components/userProfile/updateUser';
import {NextPageWithLayout} from "@/types/global";
import Layout from "@/layout";
import {ReactElement} from "react";

const editProfile: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <h1>Form Page</h1>
      <UpdateProfileForm />
    </div>
  );
};
editProfile.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default editProfile;