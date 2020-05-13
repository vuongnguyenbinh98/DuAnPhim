import React, {Component} from "react";
import "./styled.scss";
import {NavLink} from "react-router-dom";

export default class Navbar extends Component {
    clickNav = () => {
        const hambuger = document.querySelector(".hambuger");
        const navLinks = document.querySelector(".content__menu");
        const links = document.querySelectorAll(".nav-links li");
        const login = document.querySelector(".content__right__login");
        // const line = document.querySelector(".line");

        navLinks.classList.toggle("open");
        login.classList.toggle("open");
        //   line.classList.toggle("open");

        links.forEach((link) => {
            link.classList.toggle("fade");
        });
    };

    render() {
        return (
            <header>
                <div className="hambuger" onClick={this.clickNav}>
                    <div className="line"/>
                </div>
                <div className="content">
                    <div className="content__logo">
                        <img src="./img/logo/web-logo.png"/>
                    </div>
                    <div className="content__menu">
                        <nav>
                            <ul className="nav-links">
                                <li>
                                    <NavLink className="active" to="">
                                        Lịch chiếu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Cụm rạp</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Tin tức</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Ứng dụng</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="content__right">
                        <div className="content__right__login">
                            <a href="#">
                                <img src="./img/logo/avatar.png"/>
                                <p>Đăng nhập</p>
                            </a>
                        </div>
                        <div className="content__right__dropdown">
                            <img src="img/logo/location-header.png"/>
                            <div className="content__right__dropdown__select">
                                <select
                                    name
                                    id="input"
                                    className="form-control dropDown"
                                    required="required"
                                >
                                    <option className="selectDrop" value>
                                        Hồ Chí Minh
                                    </option>
                                    <option className="selectDrop" value>
                                        Hà Nội
                                    </option>
                                    <option className="selectDrop" value>
                                        Hà Nội
                                    </option>
                                    <option className="selectDrop" value>
                                        Hà Nội
                                    </option>
                                    <option className="selectDrop" value>
                                        Hà Nội
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
