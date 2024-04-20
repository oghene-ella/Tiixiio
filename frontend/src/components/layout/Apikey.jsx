import { useState } from "react";

const CopyOnceComponent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleCopy = () => {
    setIsVisible(false);
    setIsButtonDisabled(true);

    const textToCopy = user.apiKey; 
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
        console.log('Text copied to clipboard:', textToCopy);
        })
        .catch((error) => {
        console.error('Failed to copy text:', error);
        });
  };

  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)

  return (
    <>
      <div className="bg-gray-200 p-4 rounded shadow flex items-center gap-5 justify-center">
        <h2>Your Api Key</h2>
        {isVisible ? (
          <p className="font-medium text-xl">{user?.apiKey}</p>
        ) : (
          <p>***********************</p>
        )}
        <button
          onClick={handleCopy}
          disabled={isButtonDisabled}
          className={`mt-2 bg-blue-500 text-white py-1 px-3 rounded ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Copy
        </button>
      </div>
    </>
  );
};

export default CopyOnceComponent;
