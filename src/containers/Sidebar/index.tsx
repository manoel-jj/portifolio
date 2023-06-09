import { types } from 'util'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Manoel jailton</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Manoel jailton
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        full stack
      </Descricao>
      <BotaTema onClick={props.trocaTema}>Trocar Tema</BotaTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
