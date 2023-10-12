import styled from '@emotion/styled';

// export const SectionWrapper = styled.section`
//   margin-top: 30px;
//   border: 1px solid lightgrey;
//   border-radius: 8px;
//   padding: 20px;
// `;

// export const SectionTitle = styled.h2`
//   font-size: 30px;
//   font-weight: 700;
// `;

export const SectionWrapper = styled.section`
  margin-top: 30px;
  border: 1px solid #ecf0f1;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  :hover,
  :focus {
    border-color: #d5dbdb;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #2c3e50;
`;
