import React, { useState, useEffect, useCallback } from 'react';
import { stripHtml } from '../services/textCleaner';

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const ClearIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);


const HtmlStripperTool: React.FC = () => {
    const [inputText, setInputText] = useState<string>('<h1>Hello World!</h1>\n<p>This is a <strong>sample</strong> text with <a href="#">HTML tags</a>.</p>');
    const [outputText, setOutputText] = useState<string>('');
    const [isCopied, setIsCopied] = useState<boolean>(false);

    useEffect(() => {
        const cleanedText = stripHtml(inputText);
        setOutputText(cleanedText);
    }, [inputText]);

    const handleCopy = useCallback(() => {
        if (outputText) {
            navigator.clipboard.writeText(outputText).then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            });
        }
    }, [outputText]);

    const handleClear = () => {
        setInputText('');
        setOutputText('');
    };

    return (
        <div className="relative bg-slate-900/60 backdrop-blur-lg rounded-xl shadow-2xl p-4 md:p-8 border border-slate-700/50">
            <div aria-live="assertive" className="sr-only">
              {isCopied ? 'Content copied to clipboard.' : ''}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                {/* Input Area */}
                <div className="flex flex-col">
                    <label htmlFor="input-html" className="text-lg font-semibold text-gray-200 mb-3">HTML / Rich Text Source</label>
                    <textarea
                        id="input-html"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Paste your HTML here..."
                        className="flex-grow w-full bg-gray-900/80 border border-slate-600 rounded-md p-4 text-gray-200 font-mono text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 resize-none shadow-inner"
                        rows={15}
                        aria-label="HTML Input"
                    />
                </div>

                {/* Output Area */}
                <div className="flex flex-col">
                    <label htmlFor="output-text" className="text-lg font-semibold text-gray-200 mb-3">Clean, Plain Text Output</label>
                    <textarea
                        id="output-text"
                        value={outputText}
                        readOnly
                        placeholder="Plain text will appear here..."
                        className="flex-grow w-full bg-gray-800/70 border border-slate-600 rounded-md p-4 text-gray-200 font-mono text-sm focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 resize-none shadow-inner"
                        rows={15}
                        aria-label="Plain Text Output"
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                    onClick={handleCopy}
                    disabled={!outputText}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-400 disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
                >
                    <CopyIcon className="w-5 h-5" />
                    {isCopied ? 'Copied!' : 'Copy Output'}
                </button>
                <button
                    onClick={handleClear}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-rose-400"
                >
                    <ClearIcon className="w-5 h-5" />
                    Clear All
                </button>
            </div>
        </div>
    );
};

export default HtmlStripperTool;
