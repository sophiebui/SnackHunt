import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';

function EditModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit-button' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm />
        </Modal>
      )}
    </>
  );
}

export default EditModal;
