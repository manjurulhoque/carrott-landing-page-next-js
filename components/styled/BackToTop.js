import styled from "styled-components";

export default styled.div`
    & {
        right: 15px;
        width: 50px;
        height: 50px;
        z-index: 999;
        bottom: 40px;
        display: none;
        position: fixed;
        border-radius: 100%;
        background-color: #2c2c2c;
        -webkit-box-shadow: 0px 3px 15px 1px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 3px 15px 1px rgba(0, 0, 0, 0.3);
    }
`;
