import React from 'react';
import PropTypes from 'prop-types';
import '../assets/Style.css'; // Ensure you have this file to handle any custom styles

const PageNavigate = ({ totalPages, currentPage, onPageChange }) => {
    const renderPageNumbers = () => {
        let pages = [];
        const maxPagesToShow = 5;

        // Ensure we show at least 5 pages
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        // Adjust the startPage to ensure we always show exactly 5 pages
        const adjustedStartPage = Math.max(1, endPage - maxPagesToShow + 1);

        for (let i = adjustedStartPage; i <= Math.min(totalPages, adjustedStartPage + maxPagesToShow - 1); i++) {
            pages.push(i);
        }

        return pages;
    };

    if (totalPages <= 1) {
        return null; // Return null if there is only 1 page
    }

    return (
        <div className="pagination">
            <div className='control-btn first'>
                {currentPage > 1 && (
                    <button onClick={() => onPageChange(1)}>
                        First
                    </button>
                )}
            </div>

            <div className='pages-nav'>
                {renderPageNumbers().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => onPageChange(page)}
                        disabled={currentPage === page}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <div className='control-btn last'>
                {currentPage < totalPages && (
                    <button onClick={() => onPageChange(totalPages)}>
                        Last
                    </button>
                )}
            </div>

        </div>
    );
};

PageNavigate.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default PageNavigate;
