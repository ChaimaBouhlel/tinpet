import {NextPageWithLayout} from "@/types/global";
import {ReactElement} from "react";
import Layout from "@/layout";

const Contact: NextPageWithLayout<{}> = () => {
    return (
        <div>
            <p>Contact Us</p>
        </div>
    )
}

Contact.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};
export default Contact;
