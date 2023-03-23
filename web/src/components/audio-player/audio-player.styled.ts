import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 8rem);
  height: 10rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--light-black);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
`;

export const LeftElement = styled.div`
  display: flex;
  flex: 1;
  img {
    width: 6rem;
    height: 6rem;
    object-fit: contain;
  }
`;

export const SongInfo = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  p {
    margin: 0;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SongName = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--white);
`;

export const Artist = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--light-white);
`;

export const ControlElements = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AudioControl = styled.div`
  margin-top: 1rem;
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 1.5rem 0;

  p {
    color: var(--light-white);
    font-size: 1.2rem;
    margin: 0 1rem;
  }
`;

export const Input = styled.input`
  width: 50rem;
  height: 0.5rem;
`;

export const RightElement = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
