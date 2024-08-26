import { ReactNode } from 'react';
import "./../App.css";

type DeleteProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

function Modal({ open, onClose, children }: DeleteProps) {
    return (
        <div
        onClick={onClose}
        className={`modal ${open ? 'modal-visible' : 'modal-hidden'}`}
        style={{ opacity: open ? 1 : 0 }}
    >
            <div
                className="modal-inner"
                onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking inside modal content
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
