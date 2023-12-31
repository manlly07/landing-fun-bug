import {Link as LinkScroll} from 'react-scroll'

const Nav = ({ href, title }) => {
  console.log(href);
  return (
    <LinkScroll
      to={href} 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={500} 
      className="block py-2 pl-3 pr-4 text-secondary sm:text-base rounded md:p-0 hover:text-white"
    >
        <span className="text-primary">#</span>
      {title}
    </LinkScroll>
  );
};

export default Nav;