import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import {NextPageWithLayout} from "@/types/global";
import {ReactElement} from "react";
import Layout from "@/layout";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useRecoilState, useRecoilValue} from "recoil";
import authenticatedUser from "@/atoms/authenticatedUser";
import authentication from "@/atoms/authentication";


const Home: NextPageWithLayout<{}> = () => {
    const [authUser, setAuthUser] = useRecoilState(authenticatedUser)
    const authState = useRecoilValue(authentication)
    const getUserByEmail = async () => await axios.get(`${process.env.NEXT_PUBLIC_GET_USER_BY_EMAIL_URL}/${authUser.email}`)

    const { status, data, error } = useQuery({
        queryKey: ['todos'],
        queryFn: getUserByEmail,
        enabled: !!authState
    })

    if (data) {
        setAuthUser(data.data)
        console.log(authUser)
    }

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
