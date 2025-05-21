import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container-mob">
        <div className="footer-logo-mob">
          <div className="footer-logo-mob-img">
            <Image
              src="/logo-white.png"
              alt="aceplush logo"
              width={150}
              height={100}
            />
          </div>
        </div>
        <p className="footer-logo-mob-text">ACEplus</p>
        <div className="footer-mob-menu-div">
          <div className="footer-mob-menu-div-1">
            <Link href="">Home</Link>
            <Link href="">Guru Speak</Link>
            <p>Learning Zone</p>
            <ul>
              <li>
                <Link href="">Beginner Level</Link>
              </li>
              <li>
                <Link href="">Advanced Level</Link>
              </li>
              <li>
                <Link href="">Expert Level</Link>
              </li>
            </ul>
            <Link href="">ACEplus Dictionary</Link>
          </div>
          <div className="footer-mob-menu-div-2">
            <p>Spoken English</p>
            <ul>
              <li>
                <Link href="">How to speak Better English with Derek</Link>
              </li>
              <li>
                <Link href="" className="footer-mob-menu-div-2-link">
                  How to be a Confident Speaker
                </Link>
              </li>
              <li>
                <Link href="" className="footer-mob-menu-div-2-link">
                  How to be an ACE Public Speaker
                </Link>
              </li>
            </ul>
            <Link href="">Gaming Zone</Link>
            <Link href="">Self-Growth</Link>
          </div>
          <div className="footer-mob-menu-div-3">
            <p>Company</p>
            <Link href="">About Us</Link>
            <Link href="">Contact Us</Link>
            <Link href="">FAQs</Link>
          </div>
          <div className="footer-mob-menu-div-4">
            <p>Contact</p>
            <Link href="mailto:hello@aceplus.in">hello@aceplus.in</Link>
            <Link href="tel:+919007858855">+91 9007858855</Link>
            <div className="footer-mob-menu-div-4-icons">
              <Link href="">
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-policy-div">
          <Link href="">Terms & Conditions</Link>
          <Link href="">Privacy Policy</Link>
        </div>
      </div>
      <div className="container footer-container">
        <div className="footer-div-1">
          <div className="footer-div-1-logo">
            <Image src="/logo-white.png" width={220} height={100} alt="logo" />
          </div>
          <Link href="mailto:hello@aceplus.in">hello@aceplus.in</Link>
          <Link href="tel:+919007858855">+91 9007858855</Link>
          <div className="footer-div-1-icons">
            <Link href="">
              <Image
                src="/instagram.svg"
                width={20}
                height={20}
                alt="instagram"
              />
            </Link>
            <Link href="">
              <Image
                src="/facebook.svg"
                width={20}
                height={20}
                alt="facebook"
              />
            </Link>
            <Link href="">
              <Image src="/youtube.svg" width={24} height={24} alt="youtube" />
            </Link>
          </div>
        </div>
        <div className="footer-div-2-container">
          <div className="footer-div-2-container-1">
            <p>Company</p>
            <Link href="">About Us</Link>
            <Link href="">Contact Us</Link>
            <Link href="">FAQs</Link>
          </div>
          <div className="footer-div-2-container-2">
            <p>ACEplus</p>
            <Link href="">Home</Link>
            <Link href="">Guru Speak</Link>
            <Link href="">ACEplus Dictionary</Link>
            <span>Learning Zone</span>
            <ul>
              <li>
                <Link href="">Beginner </Link>
              </li>
              <li>
                <Link href="">Advanced </Link>
              </li>
              <li>
                <Link href="">Expert </Link>
              </li>
            </ul>
          </div>
          <div className="footer-div-2-container-3">
            <p className="footer-div-2-container-3-p">Spoken English</p>
            <ul>
              <li>
                <Link href="">How to speak Better English with Derek</Link>
              </li>
              <li>
                <Link href="" className="footer-div-2-container-3-link">
                  How to be a Confident Speaker
                </Link>
              </li>
              <li>
                <Link href="" className="footer-div-2-container-3-link">
                  How to be an ACE Public Speaker
                </Link>
              </li>
            </ul>
            <Link href="">Gaming Zone</Link>
            <Link href="">Self-Growth</Link>
          </div>
          <div className="footer-div-2-container-4">
            <p>Legal</p>
            <Link href="">Terms & Conditions</Link>
            <Link href="">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
