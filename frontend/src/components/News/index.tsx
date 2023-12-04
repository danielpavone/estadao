import { NavLink } from 'react-router-dom'
import parse from 'html-react-parser'
import { ArrowArcLeft } from 'phosphor-react'
import { Content, Title, Nav } from './styles'

export default function News ({ news }: any) {
  return (
    <>
      <Title>{news?.title}</Title>
      <Content>{parse(`${news?.content}`)}</Content>
      <Nav>
        <NavLink to="/" title="Home">
          <ArrowArcLeft size={24} />
        </NavLink>
      </Nav>
    </>
  )
}