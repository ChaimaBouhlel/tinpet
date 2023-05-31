import Image from "next/image";

interface  Props{
    logo: string,
    name: string
}

const Category = ({logo, name}: Props) => {
return(<div className="rounded-2xl p-10 bg-amber-50 text-center my-4 md:mx-auto md:my-0 md:w-1/5 hover:shadow-2xl hover:bg-amber-100">
<Image src={logo} alt={name} width="70" height="70" className="mx-auto my-0"/>
    <div className="mt-6">
        <h1 className="font-poppins font-bold text-gray-500 text-2xl">
            {name}
        </h1>
    </div>
</div>)
}
export default Category