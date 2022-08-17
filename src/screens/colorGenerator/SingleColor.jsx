import { useState } from 'react';

function SingleColor({ weight, hex, index }) {
    const [copied, setCopied] = useState(false);

    const showCopied = (hex) => {
        setCopied(true);
        // copy to clipboard
        navigator.clipboard.writeText(hex);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
        console.log(copied);
    };

    return (
        <div
            onClick={() => showCopied(hex)}
            style={{ backgroundColor: `#${hex}` }}
            className={`  mt-6 p-50 sm:30  rounded-md cursor-pointer relative`}
        >
            <div
                className={`${
                    index >= 7 ? 'text-gray-200' : 'text-black'
                } text-sm  `}
            >
                <p className='text-start pl-3 pt-3 '>%{weight}</p>
                <p className='p-20 text-xl md:text-base lg:text-xl '>#{hex}</p>
            </div>
            {copied && (
                <div
                    className={`${
                        index >= 7 ? 'text-gray-200 ' : 'text-black '
                    } text-sm  py-3 font-bold  absolute bottom-0 left-0 right-0 `}
                >
                    <p> Copied to clipboard</p>
                </div>
            )}
        </div>
    );
}

export default SingleColor;
