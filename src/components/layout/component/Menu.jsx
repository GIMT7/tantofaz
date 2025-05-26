import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileFooter from "./MobileFooter";

import { menuList } from "@/data/menu";
import { useLocation } from "react-router-dom";

export default function Menu({ allClasses, headerPosition }) {
  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    menuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split("/")[1] == pathname.split("/")[1]) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.map((elm3) => {
            if (elm3.href?.split("/")[1] == pathname.split("/")[1]) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, []);

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        headerPosition ? headerPosition : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg"></div>

        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <Link to="/Entrar" className="text-dark-1">
            Login
          </Link>
          <Link to="/se inscrever" className="text-dark-1 ml-30">
            Inscrever-se
          </Link>
        </div>

        <div className="menu js-navList">
          <ul className={`${allClasses ? allClasses : ""}`}>
            <li className="menu-item-has-children">
              <Link
                data-barba
                to="/"
                className={menuItem == "Home" ? "activeMenu" : ""}
              >
                Início
              </Link>
            </li>

            <li className="menu-item-has-children -has-mega-menu">
              <Link
                data-barba
                to="/courses-list-4"
                className={menuItem == "Courses" ? "activeMenu" : ""}
              >
                Cursos
                </Link>

            </li>

            <li className="menu-item-has-children">
              <Link
                data-barba
                to="events-list-2"
                className={menuItem == "Events" ? "activeMenu" : ""}
              >
                Eventos 
              </Link>
             
            </li>

            <li className="menu-item-has-children">
              <Link
                data-barba
                to="/blog-list-3"
                className={menuItem == "Blogs" ? "activeMenu" : ""}
              >
                Blog
              </Link>
            </li>


            <li>
              <Link
                data-barba
                to="/contact-1"
                className={
                  pathname == "/contact-1" ? "activeMenu" : "inActiveMenuTwo"
                }
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* mobile footer start */}
        <MobileFooter />
        {/* mobile footer end */}
      </div>

      <div
        className="header-menu-close"
        data-el-toggle=".js-mobile-menu-toggle"
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>

      <div className="header-menu-bg"></div>
    </div>
  );
}