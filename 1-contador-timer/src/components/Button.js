import styled from "styled-components";

const StyledButton = styled.button`
    padding: 10px 30px;
    background: #e7e7e7;
    border-radius: 3px;
    border: 1px solid #c0c0c0;
    box-shadow: 1px 1px 1px 0px #c0c0c0;
    font-size: 15px;
    font-family: monospace;
    cursor: pointer;
    transition: .3s all;
    outline: none;
    &:hover {
        box-shadow: 1px 4px 4px 0px #c0c0c0;
    }
`;


const Button = ({ onClick, children, disabled = false }) => (
    <StyledButton onClick={onClick} disabled={disabled}>{children}</StyledButton>
);
    
export default Button;