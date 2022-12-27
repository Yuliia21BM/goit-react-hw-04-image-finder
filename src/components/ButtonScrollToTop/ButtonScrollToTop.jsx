import React, { useState, useEffect } from 'react';
import { BtnScrollTop } from './ButtonScrollToTop.styled';

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div position="relative">
      {' '}
      {showTopBtn && (
        <BtnScrollTop className="icon-position icon-style" onClick={goToTop} />
      )}{' '}
    </div>
  );
};

// import { BtnScrollTop, BtnScrollTopSvg } from './ButtonScrollToTop.styled';
// export const ButtonScrollToTop = () => {
//   const handleClick = e => {};
//   return (
//     <BtnScrollTop type="button" onClick={handleClick}>
//       <BtnScrollTopSvg>
//         <use href="../../imgs/sprite.svg.svg#icon-arrow-up"></use>
//       </BtnScrollTopSvg>
//     </BtnScrollTop>
//   );
// };

// // const btnScrollToTop = document.querySelector('.btn-scroll-to-top');
// // const docHeader = document.querySelector('header');

// // window.onscroll = function () {
// //   scrollFunction();
// // };

// // btnScrollToTop.onclick = e => {
// //   docHeader.scrollIntoView({ behavior: 'smooth' });
// // };

// // function scrollFunction() {
// //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// //     btnScrollToTop.classList.remove('btn-hidden');
// //   } else {
// //     btnScrollToTop.classList.add('btn-hidden');
// //   }
// // }
