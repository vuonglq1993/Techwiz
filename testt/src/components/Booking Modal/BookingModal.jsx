<<<<<<< HEAD
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Input } from "reactstrap";

const BookingModal = ({ isOpen, toggle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic gửi yêu cầu đăng ký tour
    alert(`Booking request submitted for:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Đăng Ký Tour</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              placeholder="Họ Tên"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="tel"
              placeholder="Số Điện Thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </FormGroup>
          <Button color="primary" type="submit">Gửi Yêu Cầu</Button>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Hủy</Button>
      </ModalFooter>
    </Modal>
=======
import React from "react";
import "./BookingModal.css"; // Tạo file CSS cho modal

const BookingModal = ({ isOpen, toggle }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Đăng Ký Tour</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Đăng ký thành công!");
          toggle(); // Đóng modal sau khi submit
        }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <button className="close-btn" onClick={toggle}>Cancel</button>
      </div>
    </div>
>>>>>>> origin/main
  );
};

export default BookingModal;
