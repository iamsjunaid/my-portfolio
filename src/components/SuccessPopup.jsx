import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

const SuccessPopup = ({ onClose }) => (
  <div className="bg-white rounded-md fixed top-[50%] p-4 border-2 border-secondary flex justify-center items-center gap-2">
    <AiOutlineClose
      onClick={onClose}
      className="float-right text-red-600 hover:text-red-900 hover:cursor-pointer text-xl transition duration-500 ease-in-out"
    />
    <p className="text-center text-lg text-secondary">Form submitted successfully🎉!</p>
  </div>
);

SuccessPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SuccessPopup;
