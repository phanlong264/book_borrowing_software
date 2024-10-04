import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome, faUserFriends, faBell, faBookmark,
    faList, faShoppingCart, faEnvelope, faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    return (
        <aside className="bg-white w-1/4 p-4">
            <div className="flex items-center mb-4">
                <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full"/>
                <span className="ml-2">Lana Del Rey</span>
            </div>
            <nav className="space-y-4">
                <a href="#" className="flex items-center text-green-500">
                    <FontAwesomeIcon icon={faHome} className="mr-2"/> Trang chủ
                </a>
                <a href="#" className="flex items-center">
                    <FontAwesomeIcon icon={faUserFriends} className="mr-2"/> Bạn Bè
                </a>
                <a href="#" className="flex items-center">
                    <FontAwesomeIcon icon={faBell} className="mr-2"/> Thông báo Gmail
                </a>
                <a href="#" className="flex items-center">
                    <FontAwesomeIcon icon={faBookmark} className="mr-2"/> Sách đã lưu
                </a>
                <a href="#" className="flex items-center">
                    <FontAwesomeIcon icon={faList} className="mr-2"/> Trạng thái đơn
                </a>
                <a href="#" className="flex items-center">
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2"/> Giỏ hàng
                </a>
                <a href="#" className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2"/> Tin nhắn
                </a>
                <a href="#" className="flex items-center">
                    <FontAwesomeIcon icon={faEllipsisH} className="mr-2"/> Xem thêm
                </a>
            </nav>
        </aside>
    );
}

export default Sidebar;
