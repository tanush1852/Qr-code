import React, { useEffect, useRef } from 'react';
import qrcode from '/images/image-qr-code.png';
import '/src/App.css';
import { gsap } from 'gsap';

function Qr() {
  const componentRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Hover effect on component
    gsap.set(componentRef.current, { scale: 1 });
    gsap.to(componentRef.current, {
      scale: 1.1,
      ease: 'power2.out',
      duration: 0.3,
      paused: true,
      overwrite: true,
      onHover: true,
    });

    componentRef.current.addEventListener('mouseenter', () => {
      gsap.to(componentRef.current, { scale: 1.1, duration: 0.3 });
    });
    componentRef.current.addEventListener('mouseleave', () => {
      gsap.to(componentRef.current, { scale: 1, duration: 0.3 });
    });

    return () => {
      componentRef.current.removeEventListener('mouseenter', () => {
        gsap.to(componentRef.current, { scale: 1.1, duration: 0.3 });
      });
      componentRef.current.removeEventListener('mouseleave', () => {
        gsap.to(componentRef.current, { scale: 1, duration: 0.3 });
      });
    };
  }, []);

  useEffect(() => {
    // Staggered text animation
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full shadow-lg">
      <div ref={componentRef} className="w-[320px] h-[499px] bg-white rounded-xl">
        <div className="m-[16px]">
          <img className="w-[288px] h-[288px]" src={qrcode} alt="qr-code" />
          <div ref={textRef} className="mt-[24px]">
            <p className="text-xl text-slate-900 font-[700] text-center px-[16px]">
              Improve your front-end skills by building projects
            </p>
            <p className="text-base mt-[16px] px-[16px] text-center">
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qr;
