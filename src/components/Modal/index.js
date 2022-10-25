import React from 'react';

const Modal = ({ onClose, currentProject }) => {
    const {name, category, description, index} = currentProject;
  
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={require(`../../assets/images/${category}/${index}.png`)} alt="current category" />
          <p>{description}</p>
          <button onClick={onClose} type="button">Close this modal</button>
          {/* <button type="button" onClick={onClose}>
            Close this modal
          </button> */}
        </div>
      </div>
    );
  }
  
  export default Modal;
