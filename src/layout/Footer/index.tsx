const Footer = () => {
  return (
    <footer className="bg-amber-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <h1 className="text-4xl font-bold text-brown mb-4 md:mb-0">TINPET</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="col-span-1 bg-amber-50 rounded-lg border-black border-2 p-4">
              <h4 className="text-lg font-bold mb-4">RESOURCES</h4>
              <ul className="list-disc pl-4">
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Mobile App Download</a></li>
                <li><a href="#">Partnerships</a></li>
                <li><a href="#">News Center</a></li>
                <li><a href="#">Put Petfinder On Your Site</a></li>
                <li><a href="#">For Developers</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-span-1 bg-amber-50 rounded-lg border-black border-2 p-4">
              <h4 className="text-lg font-bold mb-4">ADOPT OR GET INVOLVED</h4>
              <ul className="list-disc pl-4">
                <li><a href="#">Adopting Pets</a></li>
                <li><a href="#">Animal Shelters & Rescues</a></li>
                <li><a href="#">Other Types of Pets</a></li>
              </ul>
            </div>
            <div className="col-span-1 bg-amber-50 rounded-lg border-black border-2 p-4">
              <h4 className="text-lg font-bold mb-4">ABOUT DOGS & PUPPIES</h4>
              <ul className="list-disc pl-4">
                <li><a href="#">Dog Adoption</a></li>
                <li><a href="#">Dog Breeds</a></li>
                <li><a href="#">Feeding Your Dog</a></li>
                <li><a href="#">Dog Behavior</a></li>
                <li><a href="#">Dog Health & Wellness</a></li>
                <li><a href="#">Dog Training</a></li>
                <li><a href="#">Other Dog Information</a></li>
              </ul>
            </div>
            <div className="col-span-1 bg-amber-50 rounded-lg border-black border-2 p-4">
              <h4 className="text-lg font-bold mb-4">ABOUT CATS & KITTENS</h4>
              <ul className="list-disc pl-4">
                <li><a href="#">Cat Adoption</a></li>
                <li><a href="#">Cat Breeds</a></li>
                <li><a href="#">Feeding Your Cat</a></li>
                <li><a href="#">Cat Behavior</a></li>
                <li><a href="#">Cat Health & Wellness</a></li>
                <li><a href="#">Cat Training</a></li>
                <li><a href="#">Other Cat Information</a></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-500">
            <a href="#">Shelter & Rescue Registration</a> | <a href="#">Sitemap</a> | <a href="#">Terms of Service</a> | <a href="#">Notice at Collection</a> | <a href="#">Privacy Policy (updated)</a> | <a href="#">About Our Ads</a> | <a href="#">Do Not Sell Or Share My Personal Information</a>
          </p>
        </div>
    </footer>
  );
};

export default Footer;
