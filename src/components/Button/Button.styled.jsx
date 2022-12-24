import styled from 'styled-components';

export const Btn = styled.button`
  width: 100px;
  aspect-ratio: 1;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: none;
  border: none;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 20px;

  &:before {
    content: '';
    position: absolute;
    inset: -8px;
    padding: 8px;
    border-radius: 28px;
    background: conic-gradient(
      from var(--d, 0deg),
      #ff53bb,
      #0000 30deg 120deg,
      #00d4ff 150deg 180deg,
      #0000 210deg 300deg,
      #ff53bb 330deg
    );
    -webkit-mask: linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: intersect;
  }
  &:after {
    content: '';
    position: absolute;
    inset: -100px;
    background: radial-gradient(
        80px at left 150px top 120px,
        #ff53bb 98%,
        #0000
      ),
      radial-gradient(80px at right 150px bottom 120px, #00f8d3 98%, #0000);
    filter: blur(60px);
    opacity: 0.5;
  }

  &:before,
  &:after {
    transition: 0.5s, 99999s 99999s transform, 99999s 99999s --d;
  }
  &:hover {
    box-shadow: 0 0 0 1px #666;
  }

  &:hover:after {
    transform: rotate(3600deg);
    transition: 0.5s, 60s linear transform;
  }
  &:hover:before {
    --d: 3600deg;
    transition: 0.5s, 60s linear --d;
  }
  &:hover:before {
    background-color: #222;
  }
  @property --d {
    syntax: '<angle>';
    inherits: true;
    initial-value: 0deg;
  }
`;
