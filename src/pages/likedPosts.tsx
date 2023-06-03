import ViewLikedPosts from '../components/Posts/viewLikedPosts';
import {ReactElement} from "react";
import Layout from "@/layout";
import {NextPageWithLayout} from "@/types/global";

const LikedPosts: NextPageWithLayout<{}> = () => {
    return (
        <div>
            <ViewLikedPosts/>
        </div>
    );
};
LikedPosts.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default LikedPosts;