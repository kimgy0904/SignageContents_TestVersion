import React from 'react';
import '../style/modal.css';

const Modal = (props) => {
  const { open, close, videourl, header } = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
	  <video controls>
	      <source src="/ftp/Contents/CID-1/Video/sample_video.mp4" type="video/mp4" />
	  </video>
          <footer>
            <button className="close" onClick={close}>
              닫기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
