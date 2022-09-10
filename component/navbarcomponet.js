const navbarcomponet = () => {
  return `
    <div id="navbar-container">
    <div id="logo">
    <a href="../index.html"><!--  put here index.html -->
    <img
    src="https://assets.www.happyfox.com/v2/images/site-nav/topbar-logo-black.svg"
    alt="happyfox_logo"
    />
    </a>
    </div>
    <div id="navbar-options">
    <div id="cus-service"  class="options">
    <p>Customer Service</p>
    <span
    ><img
    /></span>
    </div>
    <div id="it-support" class="options">
    <p>IT Support</p>
    <span
    ><img
    /></span>
    </div>
    <div id="ope-support" class="options">
    <p>Operations Support</p>
    <span
    ><img
    /></span>
    </div>
    <div id="opt-hide" class="options active_nav"></div>
    </div>


    <!--put Login link here-->

    
    <div id="login">
    <a href="./login.html" >Log in</a>
    </div>
    
    </div>  
    <div id="appendDropDown"></div>
    `;
};
export default navbarcomponet;
