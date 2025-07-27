import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="flex flex-row items-center justify-between w-full max-w-[1200px] mx-auto py-4 px-2">
            <div>
                <Link to="/">
                    <span className="text-4xl font-extrabold text-gradient tracking-tight leading-tight">CVue</span>
                </Link>
            </div>
            <div>
                <Link to="/upload" className="primary-button w-fit text-base px-6 py-2">
                    <span className="font-semibold">Upload Resume</span>
                </Link>
            </div>
        </nav>
    )
}
export default Navbar

export const Footer = () => (
  <footer className="w-full flex flex-row items-center justify-center py-6 text-gray-500 text-sm">
    <span className="flex items-center gap-2">
      Made with
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle">
        <path d="M9 15s-5.5-3.36-5.5-7.08A3.42 3.42 0 0 1 9 4.5a3.42 3.42 0 0 1 5.5 3.42C14.5 11.64 9 15 9 15z" fill="#EF4444" stroke="#222" strokeWidth="1.2"/>
      </svg>
      by Chethan
    </span>
  </footer>
);
