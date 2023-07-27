import styled from "styled-components";

export const Container = styled.div`
  height: 6rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #b3b3b3;
  margin-bottom: 1rem;

  &:hover {
    background-color: var(--light-black);
  }
`;

export const LeftElement = styled.div`
  display: flex;
  flex: 1;
  align-items: center;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 45rem;
  height: 4.5rem;
  margin: 0 0 1.5rem 0;

  button {
    width: 15rem;
    height: 4.5rem;
    margin-right: 3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const SongNumber = styled.p`
  color: var(--primary);
  font-size: 1.2rem;
`;

export const AlbumTitle = styled.p`
  font-size: 1.5rem;
`;

export const ArtistName = styled.p`
  text-align: center;
  font-size: 1.6rem;

  &:hover {
    color: var(--primary);
  }
`;
