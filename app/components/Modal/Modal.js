import React from "react";
import { Dialog } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

const Modal = ({ open, onClose, title, children }) => {
  return (
    <Dialog open={open} handler={onClose} className="max-w-lg w-full mx-auto">
      <div className="p-4">
        {/* Fixed Header Section */}
        <div className="flex justify-between items-center border-b pb-2 mb-4 sticky top-0 bg-white z-10">
          <Typography variant="h5" color="blue-gray" className="font-semibold">
            {title}
          </Typography>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Content Section */}
        <div className="max-h-[600px] overflow-y-auto">{children}</div>
      </div>
    </Dialog>
  );
};

export default Modal;
