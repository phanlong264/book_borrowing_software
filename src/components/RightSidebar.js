import React from 'react';

function RightSidebar() {
    const contacts = [
        "Ronald Richards", "Robert Fox", "Bessie Cooper", "Devon Lane", "Jane Cooper",
        "Courtney Henry", "Albert Flores", "Brooklyn Simmons", "Esther Howard", "Savannah Nguyen",
        "Eleanor Pena"
    ];

    return (
        <aside className="bg-white w-1/4 p-4">
            <h2 className="text-xl font-bold mb-4">Người liên hệ</h2>
            <ul>
                {contacts.map((name, index) => (
                    <li key={index} className="flex items-center mb-4">
                        <img src="https://placehold.co/40x40" alt={`${name} avatar`} className="rounded-full mr-4"/>
                        <div>{name}</div>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default RightSidebar;
