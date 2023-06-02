import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import {NextPageWithLayout} from "@/types/global";
import {ReactElement} from "react";
import Layout from "@/layout";
import PetDetail from "@/components/PetDetail"

const Detail = ({animal}) => {
    return (
        <>
            <PetDetail animal={animal} />
        </>
    )
}

Detail.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3000/animal`);
  const data = await response.json();
  const paths = data.map((animal) => (
  {
    params: { PetId: JSON.stringify(animal.id) },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:3000/animal/${params.PetId}`);
  const data = await response.json();
  return {
    props: {
      animal: data,
    },
  };
}

export default Detail;