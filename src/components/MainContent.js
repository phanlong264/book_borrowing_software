import React from 'react';

function MainContent() {
    const people = [
        "Ronald Richards", "Annette Black", "Kristin Watson", "Brooklyn Simmons", "Ralph Edwards",
        "Guy Hawkins", "Cody Fisher", "Courtney Henry", "Esther Howard", "Arlene McCoy",
        "Darrell Steward", "Floyd Miles", "Ronald Richards", "Ronald Richards"
    ];

    return (
        <main className="flex-1 bg-gray-200 p-4 rounded-lg overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">People</h2>
            <ul>
                {people.map((name, index) => (
                    <li key={index} className="flex items-center mb-4">
                        <img src="https://placehold.co/40x40" alt={`${name} avatar`} className="rounded-full mr-4"/>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-gray-500">Good book</div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default MainContent;
