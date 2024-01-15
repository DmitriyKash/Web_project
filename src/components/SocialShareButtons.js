import React from 'react';
import './SocialShareButtons.css';

const SocialShareButtons = ({ url }) => {
const shareText = "Перегляньте це на сайті Майстерні Бісероплетіння!";


return (
    <div className="socialShareButtons">
        <h3>Поділіться з друзями:</h3>
        <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank')}>Facebook</button>
        <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(shareText)}`, '_blank')}>Twitter</button>
        {/* Тут можна додати кнопки для інших соціальних мереж */}
    </div>
);
}

export default SocialShareButtons;