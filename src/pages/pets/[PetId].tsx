import axios from 'axios';
import {AnimalType} from "@/types/global";
import {ReactElement} from "react";
import Layout from "@/layout";
import PetDetail from "@/components/petDetail"

const Detail = ({animal}: { animal: AnimalType }) => {
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
    const response = await axios.get(`http://localhost:3000/animal`);
    const data = response.data;
    const paths = data.map((animal: AnimalType) => (
        {
            params: { PetId: JSON.stringify(animal.id) },
        }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context: any) {
    const { params }: { params: { PetId: string } } = context;
    const response = await axios.get(`http://localhost:3000/animal/${params.PetId}`);
    const data = response.data;
    return {
        props: {
            animal: data,
        },
    };
}

export default Detail;