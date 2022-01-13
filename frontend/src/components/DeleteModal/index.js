import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteForm from './DeleteForm';

function DeleteModal({id, ownerId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='delete-button' onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteForm id={id} setShowModal={setShowModal} ownerId={ownerId} />
        </Modal>
      )}
    </>
  );
}

export default DeleteModal;
