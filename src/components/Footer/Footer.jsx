import React from 'react';
import './Footer.scss';

export const Footer = () => (
  <footer className="text-center">
  <hr/>
    <div className="row text-center">
        <div className="col-xs-3">
            <input placeholder="Drop us an email ..." className="text-center"/>
        </div>

    </div>
    <sub>
      <p> © 2018  </p>
      <p> cod3 of duty </p>
    </sub>
  </footer>
);

// export const Footer = () => (
//     <footer className="section footer-classic context-dark bg-image footer">
//         <div className="container">
//             <div className="row row-30">
//                 <div className="col-md-4 col-xl-5">
//                     <div className="pr-xl-4">
//                         <p>Some background information</p>
//                         <p className="rights"><span>© </span><span
//                             className="copyright-year">2018 </span>
//                             <span>All Rights Reserved.</span></p>
//                     </div>
//                 </div>
//                 <div className="col-md-4 col-xl-3">
//                     <h5>Contacts</h5>
//                     <dl className="contact-list">
//                         <dt>email:</dt>
//                         <dd><a href="mailto:#">codeof@gmail.com</a></dd>
//                     </dl>
//                     <dl className="contact-list">
//                         <dt>phones:</dt>
//                         <dd><a href="tel:#">+254 700 00 00 00</a>
//                         </dd>
//                     </dl>
//                 </div>
//                 <div className="col-md-4 col-xl-3">
//                     <h5>Links</h5>
//                     <ul className="">
//                         <li><a href="#">Facebook</a></li>
//                         <li><a href="#">Twitter</a></li>
//                         <li><a href="#">LinkedIn</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </footer>
// );

