import Image from "next/image";

const Footer = () => {
  const footerTextStyle = {
    fontFamily: "Cabinet Grotesk, sans-serif",
  };

  return (
    <footer className="bg-blue-500 text-white mt-16">
      <div className="container mx-auto py-8 flex flex-wrap justify-between items-center">
        <div className="flex items-center mr-6 -mt-4">
          <Image
            src="/images/landing/CLOUDBANK-2.png"
            alt="Logo"
            width={170}
            height={60}
          />
        </div>
        <div className="flex">
          <div className="mr-8">
            <h4 className="font-semibold mb-2 text-xl" style={footerTextStyle}>
              Tentang Cloudbank
            </h4>
            <ul style={footerTextStyle}>
              <li>
                <a href="#" className="hover:underline">
                  Teknologi Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pertanyaan yang Sering Dipertanyakan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bergabung dalam Kemitraan
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-8">
            <h4 className="font-semibold mb-2 text-xl" style={footerTextStyle}>
              Sumber
            </h4>
            <ul style={footerTextStyle}>
              <li>
                <a href="#" className="hover:underline">
                  Syarat dan Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Persyaratan Domain Indonesia
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-xl" style={footerTextStyle}>
              Sosial Media
            </h4>
            <div className="mt-4 ml-2">
              <Image
                src="/images/landing/INSTAGRAM.svg"
                alt="Instagram"
                width={30}
                height={20}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
