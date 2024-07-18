import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

export const Descricao = styled(P)`
  margin-top:24px;
  margin-bottom:20px
`
export const BotaoTema = styled.button`
  font-size: 12px;
  font-weight: boldo;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background-color: ${props => props.theme.corPrincipal};
  color: ${props => props.theme.corDeFundo};
  cursor: pointer;
`
export const SidebarContainer = styled.div`
position: sticky;
top: 80px;
left: 0;

@media (max-width: 768px){
margin-bottom: 40px;
text-align: center
}
`
