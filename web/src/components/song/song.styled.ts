import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #b3b3b3;

  &:hover {
    background-color: var(--light-black);
  }
`;

export const LeftElement = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
    margin-left: 1rem;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const MiddleElement = styled.div`
  flex: 1;

  p {
    text-align: center;
    font-size: 1.2rem;
    margin: 0;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const RightElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  flex: 1;

  p {
    margin: 0 0.5rem 0 1rem;
    font-size: 1.2rem;
  }
`;

export const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  background: #ddd;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  border-radius: 0.5rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary);
    cursor: pointer;
  }
`;
