import styled from "styled-components";

export const JobApplicantsContainer = styled.div`

  width: ${({ isOpen }) => (isOpen ? "81%" : "90%")};
  
  margin-top: 8.6rem;
  margin-bottom: 0;
  transition: all 0.6s ease-in-out;
`;
export const Title = styled.h4`
  color: #cccdcd;
`;