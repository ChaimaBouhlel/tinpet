export default function Banner() {
    const divStyle = {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/bg-banner.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return (
        <div style={divStyle} className="h-auto bg-cover text-center px-10 py-32">
            <h1 className="text-amber-50 text-5xl font-poppins font-bold mb-4">
                Find Your new best friend now
            </h1>
            <p className="text-amber-50">
                Find a pet among 5000 and pick your type
            </p>
        </div>
    )
}

