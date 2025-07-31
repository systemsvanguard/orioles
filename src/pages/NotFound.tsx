// src/pages/PageNotFound.tsx 
import { Link } from 'react-router-dom';
import aboutNotFound from '/assets/images/404_page_not_found.webp';


const PageNotFound = () => (
  <div className="container-fluid mt-4 has-text-justified mb-5">
    {/*  <img src='/assets/images/404_page_not_found.webp' alt="404.  Oops! Page NOT Found!" className="my-3 rounded" style={{ maxWidth: '600px', height: '332px' }} />  */} 

    <img src={aboutNotFound} alt="404. Oops! Page NOT Found!" className="img-fluid rounded mb-3"  style={{ maxWidth: '600px', height: '332px' }} />

    <h1 className="text-primary fw-bold mb-3">404 Error. Page Not Found!</h1>
    
    <p className="my-2">Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</p>
    <p className="my-2">Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>

    <br />
    <Link to="/" className="btn btn-outline-primary">
      <i className="mx-2 fa-solid fa-home"></i>
      <strong>Back to Home</strong> 
    </Link>
    <br />
  </div>
);

export default PageNotFound;