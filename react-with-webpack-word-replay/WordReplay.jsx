import React from 'react';

const {useState, useRef} = React;

const WordReplay = () => {

    const [word, setWord] = useState(`감자`);
    const [value, setValue] = useState(``);
    const [result, setResult] = useState(``);
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult(`딩동댕`);
            setWord(value);
            setValue(``);
            inputRef.current.focus();
        } else {
            setResult(`땡`);
            setValue(``);
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>{word}</div>
            <form action="" onSubmit={onSubmitForm}>
                <input type="text" ref={inputRef} value={value} onChange={onChangeInput}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    );

};

module.exports = WordReplay;