import { FaHome, FaInfoCircle, FaPhone, FaFolderOpen } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='header_container'>
      <h1>Management</h1>
      <nav>
        <ul>
          <li><FaHome /> Home</li>
          <li><FaInfoCircle /> About</li>
          <li><FaPhone /> Contact</li>
          <li><FaFolderOpen /> Project</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;