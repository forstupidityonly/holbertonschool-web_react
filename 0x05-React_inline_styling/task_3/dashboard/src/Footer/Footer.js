import './Footer.css';
import {getFullYear, getFooterCopy} from '../utils/utils.js';

function Footer() {
  return (
    <div className="Footer">
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default Footer;
