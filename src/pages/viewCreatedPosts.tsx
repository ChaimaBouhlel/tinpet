import ViewCreatedPosts from '../components/Posts/viewCreatedPosts';
import {ReactElement} from "react";
import Layout from "@/layout";
import {NextPageWithLayout} from "@/types/global";

const viewCreatedPosts: NextPageWithLayout<{}> = () => {
  return (
    <div>
      <ViewCreatedPosts/>
    </div>
  );
};
viewCreatedPosts.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default viewCreatedPosts;