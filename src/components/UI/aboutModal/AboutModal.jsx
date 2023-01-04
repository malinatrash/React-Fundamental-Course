import React from 'react';
import cl from './AboutModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]

    if(visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div
            onClick={() => setVisible(false)}
            className={rootClasses.join(' ')}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={cl.myModalContent}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;
