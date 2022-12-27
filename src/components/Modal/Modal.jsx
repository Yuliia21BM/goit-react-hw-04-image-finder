import { Overlay, ModalImg } from './Modal.styled';

export const Modal = ({ srcBig, alt, onClick }) => {
  const hadleClick = e => {
    e.stopPropagation();
  };
  return (
    <Overlay onClick={onClick}>
      <ModalImg onClick={hadleClick}>
        <img src={srcBig} alt={alt} />
      </ModalImg>
    </Overlay>
  );
};
