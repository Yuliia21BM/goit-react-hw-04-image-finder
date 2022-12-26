import { Overlay, ModalImg } from './Modal.styled';

export const Modal = ({ srcBig, alt }) => {
  return (
    <Overlay>
      <ModalImg>
        <img src={srcBig} alt={alt} />
      </ModalImg>
    </Overlay>
  );
};
