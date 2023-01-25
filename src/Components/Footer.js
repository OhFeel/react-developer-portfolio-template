import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Hit me up on discord
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          
        </a>{" "}
        with
        <span className="text-gradient font-medium"> OhFeel</span> &
        <span className="text-gradient font-medium"> #9999</span>
      </p>
    </footer>
  );
}
export default Footer;
