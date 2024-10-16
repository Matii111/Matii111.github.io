import React, { useEffect, useState } from 'react';

export function DelayedText({
    text,
    delay = 30,
}) {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (text !== displayedText) {
            setIndex(0);
        }
    }, [text]);

    useEffect(() => {
        if (index < text.length || displayedText.length > text.length) {
            const timeout = setTimeout(() => {
                const updatedText =
                    text.substring(0, index + 1) +
                    displayedText.substring(index + 1);
                setDisplayedText(updatedText);
                setIndex(prev => prev + 1);
            }, delay);
            return () => {
                clearTimeout(timeout);
            }
        }  
    }, [index, text, displayedText]);

    return <span>{displayedText}</span>;
}
