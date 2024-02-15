// import React from 'react';

// const Navbar = ({cartCount}) => {
//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//             <div class="container px-4 px-lg-5">
//                 <a class="navbar-brand" href="#!">Shopping</a>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
//                         <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
//                         <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
//                         <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
//                             <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <li><a class="dropdown-item" href="#!">All Products</a></li>
//                                 <li><a class="dropdown-item" href="#!">Popular Items</a></li>
//                                 <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
//                             </ul>
//                         </li>
//                     </ul>
//                     <form class="d-flex">
//                         <button class="btn btn-outline-dark" type="submit">
//                         <i class="fa-solid fa-cart-shopping"></i>
//                             Cart
//                             <span class="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
            
//         </div>
//     );
// };

// export default Navbar;
import React from 'react';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#!">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Shop</a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
