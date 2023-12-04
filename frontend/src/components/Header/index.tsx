import { HeaderContainer } from './styles'
import logoEstadao from '../../assets/estadao.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logoEstadao} alt="Logo estadão" width={200}/>
    </HeaderContainer>
  )
}
