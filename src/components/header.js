import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import hslLogo from '../images/logo.svg'

const HeaderBar = styled.header`
  background: #007ac9;
  margin-bottom: 1.45rem;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  align-items: center;
`

const Heading = styled.h1`
  margin: 0;
`

const Logo = styled.img`
  display: block;
  height: 3rem;
  width: auto;
  margin-bottom: 0;
  margin-right: 3rem;
  margin-left: -5px; // Visual alignment
`

const Header = ({ siteTitle }) => (
  <HeaderBar>
    <HeaderContent>
      <Logo src={hslLogo} />
      <Heading>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
    </HeaderContent>
  </HeaderBar>
)

export default Header
