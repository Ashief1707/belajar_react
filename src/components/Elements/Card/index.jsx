import React from 'react'

const Card = (props) => {
  const { title = false, desc, variant } = props;
  return (
    <div className={`flex flex-col flex-1 mb-6 ${variant} `}>
      {title && (
        <div className="text-lg text-gray-02 mb-4">
          {title}
        </div>
      )}
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex-grow">
        {desc || <div className="h-full"></div>}
      </div>
    </div>
  );
}

export default Card;
