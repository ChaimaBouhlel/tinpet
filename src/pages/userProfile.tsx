import UserProfile from '../components/userProfile/userProfile';
import {ReactElement} from "react";
import Layout from "@/layout";
import {NextPageWithLayout} from "@/types/global";

const userProfile: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <UserProfile/>
    </div>
  );
};
userProfile.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default userProfile;