import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://twitter.com/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-twitter"></i>
      </a>

      <a
        href="https://www.behance.net/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-behance"></i>
      </a>

      <a
        href="https://www.linkedin.com"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://www.pinterest.ph/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-pinterest"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
