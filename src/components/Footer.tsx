'use client';

const Footer = () => {
    return (
        <footer className="bg-black bg-opacity-65 text-white py-4 text-center border-t border-gray-700 z-[999]">
            <p className="font-lg">
                &copy; {new Date().getFullYear()} {" "}
                <a 
                    href = "https://www.instagram.com/innovriti.vips/" 
                    target = "_blank" 
                    rel = "noopener noreferrer"
                >
                    Innovriti
                </a>. All rights reserved.
            </p>
            <p className = "font-semibold">
                Built by {" "}
                <a 
                    href = "https://www.linkedin.com/in/ishan-sharma-b5b0982b2/" 
                    target = "_blank" 
                    rel = "noopener noreferrer" 
                    className = "ml-1"
                > Ishan Sharma </a> {" "}
                and {" "}
                <a 
                    href = "https://www.linkedin.com/in/utsavsinghal2604/" 
                    target = "_blank" 
                    rel = "noopener noreferrer" 
                    className = "ml-1"
                > Utsav Singhal </a>.
            </p>
        </footer>
    );
};

export default Footer;
