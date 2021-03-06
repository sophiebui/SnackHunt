import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';

function EditModal({id, snack, ownerId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit-button' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm setShowModal={setShowModal} id={id} snack={snack} ownerId ={ownerId}/>
        </Modal>
      )}
    </>
  );
}

export default EditModal;
