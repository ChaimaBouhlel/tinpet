import Category from "@/components/Home/Categories/Category";

const categories = [
    {
        name: "Cats",
        logo: "/cat_logo.png"
    },
    {
        name: "Birds",
        logo: "/bird_logo.png"
    },
    {
        name: "Dogs",
        logo: "/dog_logo.png"
    }
]
const Categories = () => {
    return (
        <div className="px-20 py-12 bg-orange-200 flex flex-col md:flex-row md:py-32">
            {
                categories.map((category, index) => {
                    return (<Category {...category} key={index}/>)
                })
            }
        </div>
    )
}
export default Categories