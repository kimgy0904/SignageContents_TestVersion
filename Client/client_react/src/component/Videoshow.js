import React, { useState } from "react";

function VideoModal() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>영상 재생</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={handleCloseModal}>닫기</button>
            <video controls>
              <source src="path/to/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoModal;
