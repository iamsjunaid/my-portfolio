import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

const SuccessPopup = ({ onClose }) => (
  <div className="bg-white rounded-md fixed top-[50%] p-4 border-2">
    <AiOutlineClose
      onClick={onClose}
      className="float-right text-red-600 hover:cursor-pointer text-lg"
    />
    <p className="text-center text-lg">Form submitted successfully!</p>
  </div>
);

SuccessPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SuccessPopup;
