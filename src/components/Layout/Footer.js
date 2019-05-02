import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import palette from "../../utils/palette"
import RiotIcon from "../../assets/riot.svg"
import GitlabIcon from "../../assets/gitlab.svg"
import TwitterIcon from "../../assets/twitter.svg"
import FacebookIcon from "../../assets/facebook.svg"

// NOTE: Footer component is presentational and does not change (it's a static presentational component)
const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <SocialContent>
        <p
          css={css`
            font-size: 18px;
            margin: 0 40px 0 0;
            font-weight: 100;
            white-space: nowrap;
          `}
        >
          Follow Us
        </p>
        <SocialList
          css={css`
            margin: 0;
          `}
        >
          <li>
            <RiotIcon />
          </li>
          <li>
            <StyledGitlabIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
        </SocialList>
      </SocialContent>
      <div>
        <p
          css={css`
            margin: 0;
            font-weight: 100;
          `}
        >
          Copyright © {new Date().getFullYear()} Tezos. All rights reserved.
        </p>
      </div>
    </FooterContent>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  width: 100%;
  position: fixed;
  height: 452px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: start;
  background-color: ${palette.black};
  color: ${palette.white};
  padding: 64px 0;
  @media (max-width: 900px) {
    position: unset;
    padding: 24px;
    height: auto;
  }
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    justify-content: center;
  }
`

const StyledGitlabIcon = styled(GitlabIcon)`
  background-color: ${palette.white};
  border-radius: 50%;
`

const SocialContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const SocialList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  li {
    margin: 0 18px 0 0;
  }
`

export default Footer
