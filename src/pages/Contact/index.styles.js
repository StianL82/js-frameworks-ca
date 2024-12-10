import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #f8f1e4;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #ccc;
  max-width: 500px;
  margin: 0 auto 40px auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 12px;
      font-weight: bold;
    }

    input,
    textarea {
      padding: 8px;
      margin-top: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }

    textarea {
      resize: none;
      height: 100px;
    }

    .text-danger {
      color: red;
      font-size: 0.875rem;
      margin-top: 4px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;