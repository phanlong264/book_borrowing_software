import React from 'react';

function Header() {
    return (
        <header className="bg-green-500 flex items-center justify-between p-4">
            <div className="flex items-center">
                <div className="text-4xl font-bold text-black">LBook</div>
                <nav className="ml-8 flex space-x-4">
                    <button className="bg-white text-black px-4 py-2 rounded-full">Mới Nhất</button>
                    <button className="bg-white text-black px-4 py-2 rounded-full">Giá thấp - cao</button>
                    <button className="bg-white text-black px-4 py-2 rounded-full">Thể loại</button>
                    <input type="text" placeholder="Tìm kiếm" className="px-4 py-2 rounded-full"/>
                </nav>
            </div>
            <div className="flex items-center">
                <img src="https://placehold.co/40x40" alt="User avatar" className="rounded-full"/>
                <span className="ml-2 text-white">Lana Del Rey</span>
            </div>
        </header>
    );
}

export default Header;
