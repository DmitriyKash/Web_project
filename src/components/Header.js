import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';

const Header = () => {
    const handleSearch = (searchTerm) => {
        console.log("Пошук за запитом:", searchTerm);
        // Тут можна додати логіку пошуку
    };

    return (
        <header className="header">
            <h2>Майстерня Бісероплетіння</h2>
            <SearchBar onSearch={handleSearch} />
        </header>
           );
    }

export default Header;
