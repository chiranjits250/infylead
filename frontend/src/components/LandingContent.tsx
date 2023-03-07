import { EuiCard } from '@elastic/eui';

import { EuiTitle, EuiSpacer, EuiButton, EuiIcon } from '@elastic/eui';
import Messages from '../utils/messages';
import Links from '../utils/data/links';
import Link from 'next/link';
import { useState } from 'react';
import classNames from 'classnames';
import { ContactForm } from '../pages/contact-us';
import Footer from './Footer';

function Landing1() {
  return (
    <div className="container text-center ">
      <EuiSpacer />
      <div className="max-w-5xl mx-auto">
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/MKWdvITREVo`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
      <EuiSpacer />
      <div className="">
        <EuiTitle size="l">
          <h1>{Messages.PRODUCT.TAGLINE}</h1>
        </EuiTitle>

        <Link href={Links.signUp} passHref>
          <EuiButton
            fill
            size="m"
            className=" text-center text-7xl py-12 px-16 mt-8 font-bold">
            Start Free
          </EuiButton>
        </Link>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <section className="first-screen">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <div className="logo">
              <div>
                <img src="/images/log-rect.svg" alt="" />
                <div className="text-white text-right">
                  <div className="flex justify-end	items-center">
                    <div className="text-xl	italic  mr-1">{'By   '} </div>
                    <a target={'_blank'} href="https://salezlift.com/">
                      <img
                        src="/lp-img/sl.png"
                        className=""
                        width={'80px'}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h3>Book More Meetings and Sell 20x Faster</h3>
          </div>
          <div className="col-lg-4 col-md-6">
            <EuiCard title="" className="form">
              <EuiSpacer size="l" />
              <ContactForm />
            </EuiCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className="why-infylead">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <h4>
              Book More Meetings and Sell Faster With our Sales Ready Leads
            </h4>
            <ul>
              <li>95% accuracy guaranteed</li>
              <li>310M+ contacts</li>
              <li>10,000+ technologies tracked</li>
              <li>Spam Free Sales Ready Leads</li>
            </ul>
          </div>
          <div className="col-lg-8 col-md-12">
            <p>
              InfyLead is a game-changing B2B data provider and sales engagement
              platform that delivers unparalleled accuracy and efficiency. With
              real-time verification, you can be confident that the database
              you're accessing is always up-to-date and reliable. This means you
              can connect with your ideal buyers faster and more effectively
              than ever before. Whether you have specific leads in mind or are
              searching for potential customers based on key insights,
              InfyLead’s huge database repository makes it easy to find the
              right prospects for your business. Plus, with the ability to
              identify buyers as soon as they begin researching solutions like
              yours, you can stay ahead of the competition and convert more
              leads into loyal customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section className="trusted-by">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="trusted-list">
              <p>Trusted By Professionals at:</p>
              <div className="logos-list">
                <img src="/lp-img/oracle.png" alt="" width="87px" />
                <img src="/lp-img/adobe.png" alt="" width="79px" />
                <img src="/lp-img/paytm.png" alt="" width="90px" />
                <img src="/lp-img/signa.png" alt="" width="72px" />
                <img src="/lp-img/ge.png" alt="" width="87px" />
                <img src="/lp-img/pg.png" alt="" width="70px" />
                <img src="/lp-img/rgc.png" alt="" width="70px" />
                <img src="/lp-img/qb.png" alt="" width="87px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Section4() {
  const [state, setstate] = useState('highest-data');

  return (
    <section className="highest-data">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="left-side">
              <div
                onClick={() => setstate('highest-data')}
                data-content="highest-data"
                className={classNames(
                  'single-item',
                  state === 'highest-data' && 'active'
                )}>
                HIGHEST DATA ACCURACY
              </div>
              <div
                onClick={() => setstate('mobile-phone')}
                data-content="mobile-phone"
                className={classNames(
                  'single-item',
                  state === 'mobile-phone' && 'active'
                )}>
                SALES READY MASSIVE DATA REPOSITORY
              </div>
              <div
                onClick={() => setstate('intent-data')}
                data-content="intent-data"
                className={classNames(
                  'single-item',
                  state === 'intent-data' && 'active'
                )}>
                TECH INSTALL INTELLIGENCE
              </div>
              <div
                onClick={() => setstate('tech-install')}
                data-content="tech-install"
                className={classNames(
                  'single-item',
                  state === 'tech-install' && 'active'
                )}>
                UNMATCHED SUPPORT
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="right-side">
              <div
                className={classNames(
                  'tab-content highest-data',
                  state === 'highest-data' && 'active'
                )}>
                <p>
                  One of the biggest challenges facing B2B data providers is the
                  prevalence of invalid and decayed data. From bad email
                  addresses that bounce to outdated job titles and leads working
                  at companies that no longer exist, it can be extremely
                  frustrating for businesses looking to connect with their
                  target audience. That's why InfyLead stands out from the crowd
                  with our 95% accuracy guarantee. We understand how important
                  it is to have reliable data when it comes to reaching out to
                  potential customers, which is why we use real-time
                  verification and constantly update our database to ensure
                  you're always getting the most accurate information possible.
                  Our advanced algorithms scan millions of data points in real
                  time, ensuring that every record meets our strict accuracy
                  standards before it's delivered to you.
                </p>
              </div>
              <div
                className={classNames(
                  'tab-content mobile-phone',
                  state === 'mobile-phone' && 'active'
                )}>
                <p>
                  With our massive database repository, we have almost every
                  type of prospecting contact available, making it easier than
                  ever to connect with your target audience. Whether you're
                  looking for decision-makers in a specific industry or contacts
                  at companies of a certain size, we've got you covered. Our
                  database boasts over 310 M+ contacts that are ready and
                  waiting to be sold, giving you unparalleled access to
                  potential customers and partners.
                </p>
              </div>
              <div
                className={classNames(
                  'tab-content intent-data',
                  state === 'intent-data' && 'active'
                )}>
                <p>
                  With InfyLead, you can easily get insights into the
                  technologies and software used by your potential buyers,
                  allowing you to identify strong fits and tailor your approach
                  accordingly. By knowing if your buyer uses the software you
                  integrate with, you can displace competitors and gain a
                  competitive edge in the market. Additionally, InfyLead allows
                  you to track over 10,000+ technology products, giving you a
                  comprehensive understanding of the industry landscape and
                  helping you sell more effectively.
                </p>
              </div>
              <div
                className={classNames(
                  'tab-content tech-install',
                  state === 'tech-install' && 'active'
                )}>
                <p>
                  Our team is always available to answer any questions or
                  concerns you may have and help solve any issues that arise. We
                  value our customers above everything else and strive to
                  provide them with the best possible experience. Whether you
                  need technical assistance or simply have a question about our
                  products or services, we are here for you every step of the
                  way.
                </p>
              </div>
              <input
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                defaultValue="Contact Us >"
                className="btn scroll-to"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Section5() {
  return (
    <section className="all-you-sales">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>A ONE-STOP-SOLUTION FOR ALL YOUR B2B DATA NEEDS.</h3>
          </div>
          <div className="col-12">
            <div className="cards-list">
              <div className="sm-card">
                <div className="ico">
                  <EuiIcon color="#000000" size="xxl" type="magnifyWithPlus" />
                </div>
                <h6>Advanced Search</h6>

                <p>
                  Find your ideal prospects <br />
                  using in-depth filters
                </p>
              </div>
              <div className="sm-card">
                <div className="ico">
                  <EuiIcon color="#000000" size="xxl" type="userAvatar" />
                </div>
                <h6>Sales-Ready Leads</h6>
                <p>
                  Only find sales-ready leads
                  <br />
                  No unintended database
                </p>
              </div>
              <div className="sm-card">
                <div className="ico">
                  <EuiIcon color="#000000" size="xxl" type="bolt" />
                </div>
                <h6>Technographics </h6>
                <p>
                  Over 10,000 technologies have been tracked
                  <br />
                  More will be added in the future.
                </p>
              </div>
              <div className="sm-card">
                <div className="ico">
                  <img src="/lp-img/ico-1.svg" alt="" />
                </div>
                <h6>Working AI Bots </h6>
                <p>
                  Even if we are not present, our AI bots are at work. <br />
                  Identifying new contacts and developing the platform
                </p>
              </div>
              <div className="sm-card">
                <div className="ico">
                  <EuiIcon color="#000000" size="xxl" type="globe" />
                </div>
                <h6>Global Data Reach</h6>
                <p>
                  Find contacts from all over the world <br />
                  Whether from Ghana, Nepal, Romania or Chile{' '}
                </p>
              </div>
              <div className="sm-card">
                <div className="ico">
                  <img src="/lp-img/ico-6.svg" alt="" />
                </div>
                <h6>Absolute Precision </h6>
                <p>
                  Guaranteed 95% accuracy
                  <br />
                  To set us apart from the imposters
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Section6() {
  return (
    <section className="top-ranked">
      <div className="container">
        <div className="row justify-center">
          <div className="b2b">
            <p>
              Top Ranked <br />
              B2B Database Provider
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Section7() {
  return (
    <section className="ready-to-grow">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Ready To Book More Meetings And Sell Faster?</h3>
            <p>
              InfyLead is the go-to solution for thousands of B2B companies
              looking to boost lead generation. Our platform provides the most
              accurate B2B database available, allowing you to effectively
              convert contacts into sales revenue. Here are some key benefits of
              using InfyLead:
            </p>
          </div>
          <div className="col-lg-6 col-md-4">
            <div className="image">
              <img src="/lp-img/illustration.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="text">
              <ul>
                <li>Higher conversion rates</li>
                <li>Increased efficiency</li>
                <li>Improved customer targeting</li>
                <li>Enhanced data security</li>
                <li>Comprehensive coverage</li>
              </ul>
              <input
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                defaultValue="Contact Us >"
                className="btn scroll-to"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Landing2() {
  return (
    <section className="">
      <div className="flex page-inner-content flex-col justify-between">
        <main className="mb-auto landing">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
        </main>
        <Footer />
      </div>

      {/* 
      <EuiSpacer />
      <div className="max-w-5xl mx-auto">
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/MKWdvITREVo`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
      <EuiSpacer />
      <div className="">
        <EuiTitle size="l">
          <h1>{Messages.PRODUCT.TAGLINE}</h1>
        </EuiTitle>

        <Link href={Links.signUp} passHref>
          <EuiButton
            fill
            size="m"
            className=" text-center text-7xl py-12 px-16 mt-8 font-bold">
            Start Free
          </EuiButton>
        </Link>
      </div> */}
    </section>
  );
}

function LandingContent() {
  return <Landing2 />;
}

export default LandingContent;
