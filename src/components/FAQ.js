import React, { useState } from 'react';
import './FAQ.css'; // Стилі для FAQ

const FAQ = () => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
    const faqData = [
        {
            question: "Як почати плетіння бісером?",
            answer: "Ось кілька кроків, як почати: вибір матеріалів, вивчення основних технік..."
        },
        {
            question: "Які матеріали потрібні для плетіння бісером?",
            answer: "Для плетіння бісером зазвичай потрібні: бісер, нитки або ліска, голки для бісеру, та підставка або каркас для виробу."
        },
        {
        question: "Де я можу навчитися плетінню бісером?",
        answer: "Існує багато онлайн ресурсів, книг та відеоуроків, які допоможуть вам навчитися основам плетіння бісером."
        },
// Додайте більше питань та відповідей
        ];

const toggleFAQ = index => {
    setActiveQuestionIndex(activeQuestionIndex === index ? null : index);
    };

return (
    <div className="faq">
        <h2>Часто Задавані Питання</h2>
        {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    {faq.question}
                </div>
                <div className={`faq-answer ${activeQuestionIndex === index ? 'open' : ''}`}>
                    {faq.answer}
                </div>
            </div>
        ))}
    </div>
);
};

export default FAQ;