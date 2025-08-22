import styled from "styled-components";

export const ItemContainer = styled.div`

    width: 80%;
    
    h3 {
        font-size: 32px;
        color: #FAFAFAFA;
    }

    P {
        font-size: 16PX;
        color: #FAFAFA60;
        padding-bottom: 20px;
    }

    .repositorio {
        font-size: 25px;
        color: #FAFAFA;
        &:hover {
            color: #FF0000;
        }
    }

    a.remover {
        color: #FF0000;        
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`