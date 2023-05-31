import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import {NextPageWithLayout} from "@/types/global";
import {ReactElement} from "react";
import Layout from "@/layout";

const About: NextPageWithLayout<{}> = () => {
    return (
        <>
            <div> About us page</div>
        </>
    )
}

About.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default About;
