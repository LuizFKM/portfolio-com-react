import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={18}>Luiz Francisco</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>luizfkm</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev Font-End|Web
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>theme</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
