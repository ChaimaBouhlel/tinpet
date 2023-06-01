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
export async function getStaticPaths () {
 const response=await fetch(`http://localhost:3000/animal`)
    const data=await response.json();
    console.log("data:" + data)
    const paths = data.map((pet) => {
    return {
        params:{
            petId:`${pet.id}`
        }
    }
  })
return {
    paths,
    fallback:false,
}
}
export async function getStaticProps (context) {
    const {params}=context;
    const response=await fetch(`http://localhost:3000/animal/${params.id}`)
    const data=await response.json();
    console.log(data)
    return  {
    props: {
        animal:data
    }
    }
};

export default Detail;