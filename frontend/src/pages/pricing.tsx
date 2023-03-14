import { EuiButton, EuiIconTip } from '@elastic/eui'
import { useState } from 'react'
import FAQ, { FaqWrapper } from '../components/Faq'
import Footer, { Social } from '../components/Footer'
import Seo from '../components/Seo'
import AuthedLanding from '../layouts/AuthedLanding'
import UnAuthedLanding from '../layouts/UnAuthedLanding'
import { homeFaqItems, pricingFaqItems } from '../utils/data/faq'
import CenterContent from '../components/CenterContent'
import Link from 'next/link'
import Links from '../utils/data/links'
import { useRouter } from 'next/router'

function PricingInfo({ content }) {
  return (<div
    style={{ marginTop: '-1px' }} className='ml-1'
  >
    <EuiIconTip
      // color="subdued"
      type="iInCircle"
      size='m'
      content={content}
      iconProps={{

      }}
    />
  </div>)
}
function WhatsappUs() {
  return <CenterContent className="pt-16 pb-8"><EuiButton href={Social.whatsapp} target="_blank" className='cta-button' fill>
    <div className='flex space-x-4'>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="fill-current text-white dark:text-gray-200 h-6 w-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </span>
      <span>
        Whatsapp Us
      </span>
    </div>
  </EuiButton></CenterContent>
}

const MonthlyPrice = '35'
const MonthlyDiscountedPrice = '28'

export function H1Text({ content }) {
  return <h1 className="font-bold text-4xl md:text-6xl">{content}</h1>
}


function Section1Child() {
  const [isYearly, setIsYearly] = useState(false)
  const router = useRouter()

  return (<>
    <div className="p-responsive container-xl text-center mt-7 mt-md-8 mt-lg-9 mb-5 mb-lg-9">
      <H1Text content="Get the Unlimited Sales Platform." />
      <div className="mt-4 mb-n5">
        <h2 className="h6-mktg mb-3">How often do you want to pay?</h2>
      </div>
    </div>
    <div className="position-relative">
      <div className="d-none d-md-block position-absolute width-full left-0 right-0 z-n1" style={{ top: '40%' }}>
        <img className="width-full height-auto" src="https://github.githubassets.com/images/modules/site/features/launchpad/backgrounds/bg-whats-new.svg" aria-hidden="true" alt="" width={1676} height={1040} />
      </div>
      <div className="p-responsive container-xl text-center max-w-3xl">
        <div className="d-lg-flex flex-items-stretch gutter-lg-condensed text-center" data-hpc>
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="height-full position-relative rounded-3 px-2 pt-5 pb-2 js-pricing-plan" data-min-seats={1} data-max-seats={4}>
              <div className="d-md-flex flex-column flex-justify-between height-full rounded-3 color-shadow-extra-large color-bg-default">
                <div className="px-3 pt-4 pb-3">
                  <h2 className="mb-2 h5-mktg">Basic</h2>
                  <p className="color-fg-muted lh-condensed mb-2">The basic plan</p>
                  <div hidden className="js-monthly-cost tooltipped-n tooltipped-multiline tooltipped-no-delay " aria-label="Prices in local currency will change as the exchange rate fluctuates and are provided as a convenience. The actual charge will be USD $0 per user/month." data-plan="free">
                    <h3 className="mb-0">
                      <span className="d-flex flex-justify-center flex-items-center">
                        <span className="d-flex flex-items-center f0-mktg text-normal text-mono mr-2">
                          <sup className="f3 color-fg-muted v-align-middle mr-1">$</sup>
                          <span className="js-computed-value" data-plan="free">0</span>
                        </span>
                        <span className="text-normal text-mono f4 color-fg-muted js-pricing-cost-suffix js-monthly-suffix">per user/month</span>
                      </span>
                    </h3>
                  </div>
                  <div className="js-yearly-cost tooltipped-n tooltipped-multiline tooltipped-no-delay " aria-label="Prices in local currency will change as the exchange rate fluctuates and are provided as a convenience. The actual charge will be USD $0 per user/month." data-plan="free">
                    <h3 className="mb-0">
                      <div className="d-flex flex-lg-column flex-lg-wrap flex-xl-nowrap flex-justify-center flex-items-center">
                        <div className="d-flex flex-lg-row flex-lg-wrap flex-justify-center flex-items-center">
                          <span className="d-flex flex-items-center f0-mktg text-normal text-mono mr-2 no-wrap">
                            <sup className="f3 color-fg-muted v-align-middle mr-1">$</sup>
                            <span className="js-computed-value" data-plan="free">0</span>
                          </span>
                        </div>
                        {/* <span className="text-normal text-center text-mono f6-mktg color-fg-muted">
                          <span>
                            per month
                          </span>
                        </span> */}
                      </div>
                    </h3>
                  </div>
                  <div className="mt-2">
                    <Link href={Links.signUp} passHref>
                      <a className="btn-mktg d-block btn-muted-mktg" >
                        Get Started
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="d-lg-block flex-auto text-left rounded-bottom-3 color-bg-subtle px-3 py-2 js-compare-features-item" style={{ display: 'none' }}>
                  <ul className="list-style-none">
                    <li className="position-relative">
                      <details className="Box-row pricing-card-accordion details-reset p-0 d-flex color-fg-muted">
                        <summary className="Details-element">
                          <div className="py-2 d-flex user-select-none">
                            <div className="pricing-card-accordion-state col-1 flex-shrink-0 color-fg-muted">
                            </div>
                            <div className="d-flex flex-column flex-items-baseline">
                              <div className="flex-auto d-flex text-bold">
                              5 Email Views
                              </div>

                            </div>

                          </div>
                        </summary>
                      </details>
                    </li>
                    <li className="position-relative">
                      <details className="Box-row pricing-card-accordion details-reset p-0 d-flex color-fg-muted">
                        <summary className="Details-element">
                          <div className="py-2 d-flex user-select-none">
                            <div className="pricing-card-accordion-state col-1 flex-shrink-0 color-fg-muted">
                            </div>
                            <div className="d-flex flex-column flex-items-baseline">
                              <div className="flex-auto text-bold">
                              5 Contact Views
                              </div>
                            </div>
                          </div>
                        </summary>
                      </details>
                    </li>
                    
                    <li className="position-relative">
                      <details className="Box-row pricing-card-accordion details-reset p-0 d-flex color-fg-muted">
                        <summary className="Details-element">
                          <div className="py-2 d-flex user-select-none">
                            <div className="pricing-card-accordion-state col-1 flex-shrink-0 color-fg-muted">
                            </div>
                            <div className="d-flex flex-column flex-items-baseline">
                              <div className="flex-auto text-bold">
                              2 Page Views
                              </div>
                            </div>
                          </div>
                        </summary>
                      </details>
                    </li>
                    
                    <li className="position-relative">
                      <details className="Box-row pricing-card-accordion details-reset p-0 d-flex color-fg-muted">
                        <summary className="Details-element">
                          <div className="py-2 d-flex user-select-none">
                            <div className="pricing-card-accordion-state col-1 flex-shrink-0 color-fg-muted">
                            </div>
                            <div className="d-flex flex-column flex-items-baseline">
                              <div className="flex-auto text-bold">
                              15 Exports    </div>
                            </div>
                          </div>
                        </summary>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3 mb-lg-0">
            <div className="height-full position-relative rounded-3 px-2 pt-5 pb-2 js-pricing-plan pricing-recommended-plan" data-min-seats={5} data-max-seats={10}>
              <p className="position-absolute left-0 right-0 h5 text-center text-uppercase color-text-white js-recommended-plan-caption" style={{ top: '6px' }}>Popular</p>
              <div className="d-md-flex flex-column flex-justify-between height-full rounded-3 color-shadow-extra-large color-bg-default">
                <div className="px-3 pt-4 pb-3">
                  <h2 className="mb-2 h5-mktg">Unlimited</h2>
                  <p className="color-fg-muted lh-condensed">The Unlimited Plan</p>
                  <div className="js-yearly-cost tooltipped-n tooltipped-multiline tooltipped-no-delay " aria-label="Prices in local currency will change as the exchange rate fluctuates and are provided as a convenience. The actual charge will be USD $4 per user/month." data-plan="business">
                    <h3 className="mb-0">
                      <div className="d-flex flex-lg-column flex-lg-wrap flex-xl-nowrap flex-justify-center flex-items-center">
                        <div className="d-flex flex-lg-row flex-lg-wrap flex-justify-center flex-items-center">
                          {isYearly ? <><span className="d-flex js-yearly-cost flex-items-center f1-mktg color-fg-subtle text-mono mr-2 no-wrap">
                            <sup className="f4 color-fg-subtle v-align-middle mr-1">$</sup>
                            <span className="diagonal_line_through" data-plan="business">{MonthlyPrice}</span>
                          </span>
                            <span className="d-flex flex-items-center f0-mktg text-normal text-mono mr-2 no-wrap">
                              <sup className="f3 color-fg-muted v-align-middle mr-1">$</sup>
                              <span className="js-computed-value" data-plan="business">{MonthlyDiscountedPrice}</span>
                            </span></> : <>
                            <span className="d-flex flex-items-center f0-mktg text-normal text-mono mr-2 no-wrap">
                              {/* <sup className="f3 color-fg-muted v-align-middle mr-1">$</sup> */}
                              <span className="js-computed-value" data-plan="business">{'Custom'}</span>
                            </span></>}

                        </div>

                        {/* <span className="text-normal text-center text-mono f6-mktg color-fg-muted">
                          <span>
                            per month
                          </span>
                        </span> */}
                      </div>

                    </h3>
                  </div>
                  <div className="mt-2">
                    <details className="select-menu details-reset details-overlay">
                      <summary onClick={() => router.push(Links.contactUs)
                      } className="d-block btn-mktg bg-cta" role="button">
                        Contact Us
                      </summary>
                    </details>
                  </div>
                </div>
                <div className="d-lg-block flex-auto text-left rounded-bottom-3 color-bg-subtle px-3 py-2 js-compare-features-item" style={{ display: 'none' }}>
                  <ul className="list-style-none">
                    <li className="position-relative">
                      <details className="Box-row pricing-card-accordion details-reset p-0 d-flex color-fg-muted">
                        <summary className="Details-element">
                          <div className="py-2 d-flex user-select-none">
                            <div className="pricing-card-accordion-state col-1 flex-shrink-0 color-fg-muted">
                            </div>
                            <div className="d-flex flex-column flex-items-baseline">
                              <div className="flex-auto d-flex text-bold">
                              Unlimited Email Views

                              </div>

                            </div>

                          </div>
                        </summary>
                      </details>
                    </li>
                    <li className="position-relative">
                      <details className="Box-row pricing-card-accordion details-reset p-0 d-flex color-fg-muted">
                        <summary className="Details-element">
                          <div className="py-2 d-flex user-select-none">
                            <div className="pricing-card-accordion-state col-1 flex-shrink-0 color-fg-muted">
                            </div>
                            <div className="d-flex flex-column flex-items-baseline">
                              <div className="flex-auto text-bold">
                              Unlimited Contact Views

                              </div>
                            </div>
                          </div>
                        </summary>
                      </details>
                    </li>
                    
                    <li className="position-relative">
                      <details className="Box-row pricing-card-accordion details-reset p-0 d-flex color-fg-muted">
                        <summary className="Details-element">
                          <div className="py-2 d-flex user-select-none">
                            <div className="pricing-card-accordion-state col-1 flex-shrink-0 color-fg-muted">
                            </div>
                            <div className="d-flex flex-column flex-items-baseline">
                              <div className="flex-auto text-bold">
                              Unlimited Page Views
                              </div>
                            </div>
                          </div>
                        </summary>
                      </details>
                    </li>
                    
                    <li className="position-relative">
                      <details className="Box-row pricing-card-accordion details-reset p-0 d-flex color-fg-muted">
                        <summary className="Details-element">
                          <div className="py-2 d-flex user-select-none">
                            <div className="pricing-card-accordion-state col-1 flex-shrink-0 color-fg-muted">
                            </div>
                            <div className="d-flex flex-column flex-items-baseline">
                              <div className="flex-auto text-bold">
                              Unlimited Exports    </div>
                            </div>
                          </div>
                        </summary>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></>)

}


function Section1() {


  return (<>
    <main className="font-mktg">
      <div className='pricing-page-css'>
        <Section1Child />
      </div>

      <WhatsappUs />
      <div className='landing1'>
        <FaqWrapper>
          <FAQ items={pricingFaqItems} />
        </FaqWrapper>
      </div>

    </main>


  </>)
}
const Content = () => {
  return (
    <div className="flex page-inner-content flex-col justify-between">
      <div className="mb-auto">
        <Section1 />

      </div>
      <Footer />
    </div>
  )
}

function Page({ is_authenticated }) {
  const Component = is_authenticated ? AuthedLanding : UnAuthedLanding

  return (
    <>
      <Seo title="Pricing" isPricing hasChat />

      <Component>
        <Content />
      </Component>
    </>
  )
}

export default Page
