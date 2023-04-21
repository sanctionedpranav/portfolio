import React, { useState } from "react";
import { serviceTitle } from "../../../utils/constant.js";
import "../Services.css"

export const ServicesCard = () => {
    const [toggle, setToggle] = useState(false);
    const [modalTitle, setTitle] = useState("");
    const [modalDesc, setDesc] = useState("");
    const [list, setList] = useState([]);

    const popModal = (e, element) => {
        e.preventDefault()
        setToggle(!toggle);
        setTitle(element?.modalTitle);
        setDesc(element.modalDesc);
        setList(element?.li_list)
    }

    return (
        <div className="services-cards">
            {toggle &&
                <div className="services-modal">
                    <div className="services-modal-content">
                        <i onClick={() => setToggle(false)} className="uil uil-times services-modal-close"></i>

                        <h3 className="services-modal-title">{modalTitle}</h3>
                        <p className="services-modal-desc">{modalDesc}</p>

                        <ul className="services-modal-services grid">
                            {
                                list?.map((li_list, index) => {
                                    return (
                                        <li key={index} className="services-modal-services">
                                            <i className="uil uil-check-circle services-modal-icon"></i>
                                            <p className="services-modal-info">{li_list}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
            {serviceTitle?.map((element) => {
                return (
                    <div key={element.modalTitle} className="services-content">
                        <i className={`uil uil-${element.icon} services-icon`}></i>
                        <h3 className="services-title">{element.modalTitle}</h3>
                        <span onClick={(e) => popModal(e, element)} className="services-btn">{element.btn}<i className="uil uil-arrow-right services-btn-icon"></i></span>
                    </div>
                )
            })}
        </div>
    )
}