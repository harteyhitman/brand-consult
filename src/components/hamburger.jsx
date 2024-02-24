import HamburgerImg from '../assets/icons/menu.png'
import React, { useState } from 'react';
import { navlist } from '../data/store';
import 'animate.css';

const Hamburger = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMenuClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="app">
            <header>
                <div className="navbar">
                    <div className="hamburger" onClick={handleMenuClick}>
                        <img src={HamburgerImg} alt="" />
                    </div>
                </div>
            </header>

            {isModalOpen && (
                <div className="modal"  onClick={handleCloseModal}>
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <div className='navlist_cont ham-list'>
                            {navlist.map((list) => (
                                <div key={list.id} className="list">
                                    <ul>
                                        <li>
                                            <a href={`#${list.id}`}>{list.home}</a>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hamburger