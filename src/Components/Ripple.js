import React, { useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';


const Ripple = ({ onClick, onMouseEnter, onMouseLeave }) => {
  const rippleRef = useRef(null);

  useEffect(() => {
    if (rippleRef.current) {
      const ripple = rippleRef.current;
      const handleClick = (e) => {
        const rect = ripple.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const circle = document.createElement('span');
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.classList.add('ripple');
        ripple.appendChild(circle);

        setTimeout(() => {
          circle.remove();
        }, 500);
      };

      ripple.addEventListener('click', handleClick);

      return () => {
        ripple.removeEventListener('click', handleClick);
      };
    }
  }, []);

  return (
    <CSSTransition in={onMouseEnter} unmountOnExit timeout={500} classNames="ripple-effect">
      <span className="ripple-container" ref={rippleRef} onMouseLeave={onMouseLeave} />
    </CSSTransition>
  );
};

export default Ripple;