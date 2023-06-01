import {NextPageWithLayout} from "@/types/global";
import {ReactElement} from "react";
import Layout from "@/layout";

const Feed: NextPageWithLayout<{}> = () => {
    return (
        <>
            <div>
                Hello hethia page l feed ay haja theb tarmi tarmiha houuyniiiiiiii!!!!!
            </div>
        </>
    )
}

Feed.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default Feed;
