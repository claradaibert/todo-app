import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: "Lato", sans-serif;

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${({ theme }) => theme.light_purple} inset !important;
    color: ${({ theme }) => theme.darm_purple} !important;
  }

  .MuiTextField-root {
    label,
    p {
      &.Mui-focused {
        color: ${({ theme }) => theme.darkPurple} !important;
        font-family: "Lato", sans-serif;
      }

      &.Mui-error {
        color: red !important;
      }

      color: ${({ theme }) => theme.darkPurple};
      font-family: "Lato", sans-serif;
    }

    > .MuiInputBase-root {
      &.Mui-focused {
        input {
          color: ${({ theme }) => theme.font_primary} !important;
        }

        fieldset {
          border-color: ${({ theme }) => theme.darkPurple} !important;
          
        }
      }

      &.Mui-error {
        label,
        p {
          color: red !important;
        }

        input {
          color: red !important;
        }

        fieldset {
          border-color: red !important;
        }
      }

      input {
        color: ${({ theme }) => theme.font_primary};
        
        font-family: "Lato", sans-serif;
      }

      fieldset {
        border-color: ${({ theme }) => theme.darkPurple};
        
        font-family: "Lato", sans-serif;
      }
    }
  }
`;
