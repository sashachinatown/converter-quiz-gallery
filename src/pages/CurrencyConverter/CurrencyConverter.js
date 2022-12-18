import React from 'react';
import { useState } from 'react';
import Dropdown from 'react-dropdown';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(0);
    const [converted, setConverted] = useState(0);
    const [convertFrom, setConvertFrom] = useState('usd');
    const [convertTo, setConvertTo] = useState('uah');
    const [pasted, setPasted] = useState(false);

    const options = [
        { value: 'usd', label: 'USD', className: ' hover:text-red-600 cursor-default'},
        { value: 'eur', label: 'EUR', className: ' hover:text-red-600 cursor-default'},
        { value: 'uah', label: 'UAH', className: ' hover:text-red-600 cursor-default'},
        { value: 'crw', label: 'CRW', className: ' hover:text-red-600 cursor-default'}
    ];

    const currencies = {
        usd: {
            label: 'US Dollar',
            usd: 1,
            uah: 37,
            eur: 0.95,
            crw: 3.33
        },
        eur: {
            label: 'Euro',
            eur: 1,
            uah: 38.4,
            usd: 1.05,
            crw: 3.5
        },
        uah: {
            label: 'Ukr. Hryvnia',
            uah: 1,
            usd: 0.027025,
            eur: 0.026,
            crw: 0.091
        },
         
        crw: {
            label: 'Crown of Novigrad',
            crw: 1,
            usd: 0.3,
            eur: 0.28,
            uah: 11
        } 
    }

    function checkInput(e){
        setPasted(false);
        let allowed = '1234567890.';
        let input = e.currentTarget.value;
        let afterPoint = [];
        
        if (input.indexOf('.') !== -1) {
            afterPoint = input.slice(input.indexOf('.'), -1);
        }

        if (    input.indexOf('.') !== input.lastIndexOf('.') || 
                allowed.indexOf(input[input.length - 1]) === -1 ||
                (input[0] === '0' &&  input[1] === '0') ||
                input > 10000000 || 
                afterPoint.length > 2
            ) {
            input = input.slice(0, -1);
        }

        e.currentTarget.value = input;
    }

    const handleChangeAmount = (e) => {
        if (pasted) {
            e.currentTarget.value = '';
        }

        if (!e.currentTarget.value) {
            setAmount(0);
        } else if (e.currentTarget.value[0] === '.') {
            setAmount('0' + e.currentTarget.value);
        } else {
            setAmount(e.currentTarget.value);
        }

        let result = e.currentTarget.value * currencies[convertFrom][convertTo];
        if (result) {
            if (Number.isInteger(result)) {
                setConverted(result);
            } else {
                setConverted(result.toFixed(2));
            }
        } else {
            setConverted(0);
        }
    }

    
    const handleChangeConvertFrom = (e) => {
        setConvertFrom(e['value']);
        let result = amount * currencies[e['value']][convertTo];
        if (result) {
            if (Number.isInteger(result)) {
                setConverted(result);
            } else {
                setConverted(result.toFixed(2));
            }
        } else {
            setConverted(0);
        }
    }

    const handleChangeConvertTo = (e) => {
        setConvertTo(e['value']);

        let result = amount * currencies[convertFrom][e['value']];

        if (result) {
            if (Number.isInteger(result)) {
                setConverted(result);
            } else {
                setConverted(result.toFixed(2));
            }
        } else {
            setConverted(0);
        }
    }

    const handlePaste = (e) => {
        setPasted(true);
    };

    return (
        <div className='converter w-full flex flex-col flex-wrap justify-center items-center'>
            <div className='conv-form w-[705px] h-[520px] flex flex-col flex-wrap justify-start items-center'>
                <h1 className='text-xl text-black font-medium mt-36'>Convert USD, EUR, UAH and Crowns:</h1>
                <form action="" className='mt-4 h-[10rem] flex flex-row justify-center items-start'>
                    <div className='flex flex-row justify-center items-start'>
                        <p className='mt-5 text-black font-medium'>Amount:&nbsp;&nbsp;</p>
                        <input
                            onChange={handleChangeAmount}
                            onInput={checkInput}
                            onPaste={handlePaste}
                            placeholder="0"
                            type="text" 
                            min='0' 
                            className='mt-4 px-2 max-w-[8rem] bg-transparent border-[2px] border-black text-black font-semibold outline-none'/>
                        <Dropdown 
                            options={options} 
                            value={convertFrom}
                            onChange={handleChangeConvertFrom}
                            placeholder="Select an option"  
                            className='mt-5 ml-2 w-[2rem] h-[1rem] text-black font-medium cursor-pointer'/>
                    </div>
                    <p className='mt-5 text-black font-medium'>&nbsp;&nbsp;&nbsp; to&nbsp;&nbsp;</p>
                    <div className='flex flex-row justify-center items-start'>
                        
                        <Dropdown 
                            options={options} 
                            value={convertTo}
                            onChange={handleChangeConvertTo}
                            placeholder="Select an option"  
                            className='mt-5 ml-2 w-[2rem] h-[1rem] text-black font-medium cursor-pointer'/>
                    </div>
                </form>
                <p id="result" className='mt-6 mr-[90px] text-lg font-medium text-black self-end'>
                    <span className='text-red-600'>{amount} </span> 
                    {currencies[convertFrom]['label']} =&nbsp; 
                    <span className='text-red-600'>{converted} </span> 
                    {currencies[convertTo]['label']}
                </p>
                <span className='text-black text-xs italic self-end mt-1 mr-[90px]'>*as of December 02, 2022</span>
            </div>
        </div>
    )
}

export default CurrencyConverter