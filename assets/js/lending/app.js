// any CSS you import will output into a single css file (app.css in this case)

// Include fonts
import '../../styles/fonts/Raleway/RalewayExtraBold/stylename.css';
import '../../styles/fonts/Raleway/RalewayRegular/stylename.css';
import '../../styles/fonts/Raleway/RalewayBold/stylename.css';
import '../../styles/fonts/OpenSans/OpenSansBold/stylename.css';
import '../../styles/fonts/OpenSans/OpenSansExtraBold/stylename.css';
import '../../styles/fonts/OpenSans/OpenSansRegular/stylename.css';

// Include styles page
import './../../styles/lending/app.css';

// Include styles bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Include style font-awesome
import 'font-awesome/css/font-awesome.min.css'

// Include Dropdown
import {Dropdown} from 'bootstrap'

let dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
let dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl)
});

// start the Stimulus application
import './../../bootstrap';