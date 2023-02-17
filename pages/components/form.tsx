
import React, { useEffect } from 'react';

const Form= () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      // Run loadTally function once script is loaded
      loadTally();
    };
    document.body.appendChild(script);

    // Define loadTally function
    const loadTally = () => {
      if (typeof Tally !== 'undefined') {
        Tally.loadEmbeds();
      } else {
        console.error('Tally is not defined!');
      }
    };
  }, []);
  return (<div className='w-full bg-white justify-center relative h-form'>
    <iframe
    className='absolute'
      data-tally-src="https://tally.so/embed/wL9DNy?alignLeft=1&transparentBackground=1&dynamicHeight=1"
      loading="lazy"
      width="65%"
      height="60%"
      title="¿Cómo podemos ayudarte¡"
      style={{position:"absolute", transform:'translate(20%,20%)'}}
    ></iframe>
    </div>
  );
};
//center this iframe on the middle of a full div width on the x and y axis 
export default Form;


