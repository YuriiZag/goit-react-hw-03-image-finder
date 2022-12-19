import styled from 'styled-components';

export const GalleryContainer = styled.section`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const IdleText = styled.p`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  margin-top: 100px;
`;

export const ErrorText = styled.p`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  margin-top: 100px;
  color: red;
`;
