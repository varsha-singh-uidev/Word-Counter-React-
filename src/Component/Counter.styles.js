import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;

  button{
  background-color: #6B5EDB;
  color: white;
  padding: 0.6rem 1.2rem;
  margin: 0.4rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.95rem;
  border: 0.5px solid #6B5EDB;
  &:hover {
    background-color: #5848C2;
    border-color: #fff;
  } 
  }
`;
export const TextArea = styled.textarea`
  background-color: #ffffff;
  color: #282626ff;
  border: 2px solid #BBA6E3;
  padding: 1.2rem;
  font-size: 1rem;
  border-radius: 10px;
  width: 100%;
  min-width: 500px;
  height: 250px;
  min-height: 250px;
  /*  */
  resize: none;
  overflow-y: auto;
  box-sizing: border-box;
  /*  */
  box-shadow: 0 4px 8px rgba(187, 166, 227, 0.2);
  transition: all 0.3s ease;

  &:hover {
    border-color: #a08be2;
    box-shadow: 0 6px 12px rgba(160, 139, 226, 0.25);
  }

  &:focus {
    outline: none;
    border-color: #6B5EDB;
    box-shadow: 0 0 0 3px rgba(107, 94, 219, 0.3);
  }

  &::placeholder {
    color: #717171;
  }
`;
export const StatsBox = styled.div`
  background-color: #f5f1fc;
  border: 2px solid #bba6e3;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin-top: 1.5rem;
  color: #3d2a5d;
`;

export const StatMessage = styled.p`
  font-size: 1.2rem;
  color: #c83a3aff;
  font-weight: 700;
`;

export const StatItem = styled.p`
  font-size: 1.1rem;
  margin: 0.2rem 0;
  font-weight: 500;
  color: #2d2d2d;
`;
