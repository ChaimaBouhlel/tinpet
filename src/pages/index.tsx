import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import {NextPageWithLayout} from "@/types/global";
import {ReactElement} from "react";
import Layout from "@/layout";

const Home: NextPageWithLayout<{}> = () => {
  return (
     <>
         <Banner/>
         <Categories/>
     </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default Home;
