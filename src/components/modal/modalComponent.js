import React from 'react'
import { Modal } from 'react-bootstrap'

const modalComponent = ({ show, title, closeModal, name }) => (
  <Modal show={show} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-sm">{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {name}
    </Modal.Body>
  </Modal>
)

export default ModalComponent
