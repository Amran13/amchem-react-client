import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#212E84] text-zinc-50">
      <footer className="footer sm:footer-horizontal p-10 py-24 max-w-[1280px] mx-auto">
        <aside>
          <a href="/" className="mb-3 inline-block -ml-2">
            <img src="/logo.png" alt="AMCHEM Logo" className="h-16 w-auto" />
          </a>
          <p className="text-sm leading-relaxed">
            AMCHEM
            <br />
            Providing reliable solutions since 1985
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a href="/about" className="link link-hover">About Us</a>
          <a href="/products" className="link link-hover">Products</a>
          <a href="/distribute" className="link link-hover">Distribute With Us</a>
          <a href="/contact" className="link link-hover">Contact</a>
        </nav>

        <nav>
          <h6 className="footer-title">Quality & Compliance</h6>
          <a href="/quality-and-safety" className="link link-hover">Quality & Safety</a>
          <a href="/certificate" className="link link-hover">Certificates & Licenses</a>
          <a href="/legal-compliance" className="link link-hover">Legal Compliance</a>
        </nav>

        <nav>
          <h6 className="footer-title">More</h6>
          <a href="/cooperation" className="link link-hover">Co-operation</a>
          <a href="/privacy-policy" className="link link-hover">Privacy Policy</a>
          <a href="/terms" className="link link-hover">Terms of Use</a>
        </nav>
      </footer>
      <div className="border-t border-white/15">
        <div className="max-w-[1280px] mx-auto px-6 py-4 text-center text-sm text-white/80">
          ©{new Date().getFullYear()}AMCHEM. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
