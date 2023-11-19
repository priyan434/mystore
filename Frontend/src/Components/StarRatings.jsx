import React from 'react';

function StarRatings({ rating }) {
    const maxStars = 5; // The maximum number of stars

    return (
        <div className="star-rating">
            {[...Array(maxStars)].map((_, index) => (
                <span
                    key={index}
                    className={`star ${index < rating ? 'filled' : 'empty'}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
}

export default StarRatings;
