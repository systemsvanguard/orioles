// src/pages/Resources.tsx
import React from 'react';
import resourcesImage from '/assets/images/site_resources.webp';

const Resources: React.FC = () => {
  return (
    <div className="container-fluid mx-4 mb-5">
      <h1 className="text-primary fw-bold mb-3">Bird Lover's Resources</h1>
      <img src={resourcesImage} alt="Resources" className="img-fluid rounded mb-3" width="640" />

      <h3 className="text-primary fw-bold mb-3">How Do You Make Holy Water?</h3>
      <p className="my-2">You boil the hell out of it. Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>

      <h3 className="text-primary fw-bold mb-3">What's the Best Thing About Switzerland?</h3>
      <p className="my-2">I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.  Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</p>
      
      <h3 className="text-primary fw-bold mb-3">What Do You Call Someone With No Body and No Nose?</h3>
      <p className="my-2">Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Quas cupiditate laboriosam fugiat.</p>
      
      <h3 className="text-primary fw-bold mb-3">Why Do You Never See Elephants Hiding in Trees?</h3>
      <p className="my-2">Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at arcu nec metus vestibulum tempor.<br /> Donec gravida, nibh vel suscipit faucibus, erat lorem vulputate augue, vel faucibus arcu nisl ut elit.</p>

      <br />


    </div>
  );
};

export default Resources;
