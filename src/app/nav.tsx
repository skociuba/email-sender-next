import Link from 'next/link';

const Nav = () => (
  <nav className="start sticky top-0 flex border-b-4 border-custom-purple bg-custom-dark-grey p-5">
    <Link href="/" className="w-max">
      <p className="mr-6 border-r-2 pr-6 text-white hover:text-blue-200">CV</p>
    </Link>
    <Link href="/pages/portfolio" className="w-max">
      <p className="mr-6 border-r-2 pr-6 text-white hover:text-blue-200">
        My Projects
      </p>
    </Link>
    <Link href="/pages/sendEmail" className="w-max">
      <p className="text-white hover:text-blue-200">Send Me Email</p>
    </Link>
  </nav>
);

export default Nav;
