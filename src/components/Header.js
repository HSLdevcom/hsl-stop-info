import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import hslLogo from '../images/logo.svg'
import PageContent from './PageContent'

const HeaderSpacing = styled.div`
  position: relative;
  height: 4.5rem;
`

const HeaderBar = styled.header`
  background-image: linear-gradient(
    to bottom,
    rgba(0, 5, 20, 0.75),
    rgba(0, 5, 20, 0)
  );
  margin-bottom: 1.45rem;
  position: fixed;
  width: 100%;
`

const HeaderContent = styled(PageContent)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.75rem 1.5rem 0.7rem;
`

const Heading = styled.h1`
  margin: 0;
  color: white;
  font-size: 1.25rem;
  margin: 0 0.75rem;
  flex: 1 0 auto;
  text-align: right;
`

const Logo = styled.img`
  flex: 1 1 auto;
  display: block;
  width: 4.7rem;
  height: auto;
  margin-bottom: 0;
`

const RightContent = styled.div`
  flex: none;
`

const Header = ({ siteTitle, children }) => (
  <HeaderSpacing>
    <HeaderBar>
      <HeaderContent>
        <Link
          to="/"
          style={ {
            color: 'white',
            textDecoration: 'none',
          } }>
          <Logo src={ hslLogo } />
        </Link>
        <Heading>{ siteTitle }</Heading>
        <RightContent>
          { children }
        </RightContent>
      </HeaderContent>
    </HeaderBar>
  </HeaderSpacing>
)

export default Header
