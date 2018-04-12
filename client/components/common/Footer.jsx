import React from 'react';

// get the current year for footer
function getCurrentYear () {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <div className="footer text-center">
      <p>&copy; {getCurrentYear()}. LandmarkGram by <a target="_blank" href="https://twitter.com/jattorize">@jattorize</a></p>
    </div>
  );
};

export default Footer;
