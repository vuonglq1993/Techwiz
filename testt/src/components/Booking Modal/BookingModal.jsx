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
  );
};

export default BookingModal;
