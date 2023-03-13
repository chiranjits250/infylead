import Image from 'next/image';
import Link from 'next/link';
import {
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiFlexItem,
  EuiListGroup,
  EuiHeader,
  EuiHeaderSectionItemButton,
  EuiTitle,
  useEuiTheme,
  useGeneratedHtmlId,
  EuiIcon,
  EuiHeaderLink,
  EuiButton,
  EuiListGroupItem,
} from '@elastic/eui';
import { imageLoader } from '../../lib/loader';
import { headerStyles } from './header.styles';
// @ts-ignore
import Logo from '../../../public/images/logo-eui.svg';
import GiveFeedback from '../Feedback';
import { useState } from 'react';
import Links from '../../utils/data/links';
function HeaderLogo({ white = false }) {
  const { euiTheme } = useEuiTheme();

  const styles = headerStyles(euiTheme);

  return (
    <Link className="" key="logo-eui" href="/" passHref>
      <a css={styles.logo}>
        <Image width={24} height={24} src={Logo} alt="" loader={imageLoader} />
        <EuiTitle size="xxs" css={styles.title}>
          <span style={white ? { color: '#ffffff' } : undefined}>InfyLead</span>
        </EuiTitle>
      </a>
    </Link>
  );
}

export const LandingPageHeader = ({ is_authenticated = false }) => {
  const Pricing = (
    <Link href={Links.pricing} passHref>
      <EuiHeaderLink className="hidden sm:block">{'Pricing'}</EuiHeaderLink>
    </Link>
  )

  const Terms = (
    <Link href={Links.terms} passHref>
      <EuiHeaderLink className="hidden sm:block">{'Terms'}</EuiHeaderLink>
    </Link>
  );

  const links = is_authenticated
    ? []
    : [
        <Link href={Links.signIn} passHref>
          <EuiHeaderLink>{'Sign  In'}</EuiHeaderLink>
        </Link>,
        <Link href={Links.signUp} passHref>
          <EuiButton fill style={{ minWidth: 80 }} size="s" color="primary">
            Start Free
          </EuiButton>
        </Link>,
      ];
  return (
    <>
      <EuiHeader
        position="fixed"
        sections={[
          {
            items: [
              <HeaderLogo />,
              <EuiHeaderLink className="hidden sm:block" href={Links.blog}>
                {'Blog'}
              </EuiHeaderLink>,
              Pricing,

            ],
            borders: 'none',
          },
          {
            items: [
              Terms,
              <Link href={Links.contactUs} passHref>
                <EuiHeaderLink className="hidden sm:block">
                  {' Contact Us'}
                </EuiHeaderLink>
              </Link>,
              ...links,
            ],
            borders: 'none',
          },
        ]}
      />
    </>
  );
};

const Header = () => {
  const guideHeaderCollapsibleNavId = useGeneratedHtmlId({
    prefix: 'guideHeaderCollapsibleNav',
  });

  const [navIsOpen, setNavIsOpen] = useState(false);

  const collapsibleNav = (
    <EuiCollapsibleNav
      id={guideHeaderCollapsibleNavId}
      aria-label="Main navigation"
      isOpen={navIsOpen}
      isDocked={false}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}>
          <EuiIcon type={'menu'} size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}>
      <EuiFlexItem className="eui-yScroll">
        <EuiCollapsibleNavGroup className="h-full child-h-full" background="none">
          <EuiListGroup
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s">
            <Link href={Links.home} passHref>
              <EuiListGroupItem label="Home" />
            </Link>

            <EuiListGroupItem href={Links.blog} label="Blog" />
            <Link href={Links.contactUs} passHref>
              <EuiListGroupItem label="Contact Us" />
            </Link>
          </EuiListGroup>
          <EuiListGroup
          className='mb-12'
            maxWidth="none"
            color="subdued"
            gutterSize="none"
            size="s">
                <Link href={Links.pricing} passHref>
              <EuiListGroupItem label="Pricing" />
            </Link>

            <Link href={Links.credits} passHref>
              <EuiListGroupItem label="Show Credit Usage" />
            </Link>
            <EuiListGroupItem href={Links.signOut} label="Sign Out" />
          </EuiListGroup>
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );

  return (
    <EuiHeader
      position="fixed"
      theme="dark"
      sections={[
        {
          items: [
            collapsibleNav,
            <div className="w-6" />,
            <HeaderLogo white />,
          ],
          borders: 'none',
        },
        {
          items: [
          // <GiveFeedback key="feedback" />
        ],
          borders: 'none',
        },
      ]}
    />
  );
};

export default Header;
