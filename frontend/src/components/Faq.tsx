import { useState } from 'react'

export function FaqWrapper({ children }: any) {
  return (
    <div className="section-homepage-faq wf-section">
      <div className="homepage-faq-backgroundcolor" />
      <div className="mycontainer">
        <div className="textstyles-taglines">FAQ</div>
        <h2>Frequently Asked Questions</h2>
        {children}
      </div>
    </div>
  )
}


export default function FAQ({ items }) {
  const [state, setstate] = useState('')


  const content = items.map(({ Component, heading, id }) => {
    const isOpen = state === id
    const toggle = () => {
      if (isOpen) {
        return setstate('')
      }
      else {
        return setstate(id)
      }
    }

    return (<li
      key={id}

      data-hover="false"
      data-delay={0}
      data-w-id="cf9a6def-eabe-249a-4b43-cb875e030fc8"
      style={isOpen ? {} : { height: "70px" ,}}
      className="landing-dropdown-item w-dropdown w-100 w-full"
    >
      <div
        data-w-id="cf9a6def-eabe-249a-4b43-cb875e030fc9"
        style={{
          color: "rgb(0, 0, 0)",
          backgroundColor: "rgb(255, 255, 255)",
        }}
        onClick={toggle}
        className="dropdown-toggle w-dropdown-toggle"
        id="w-dropdown-toggle-3"
        aria-controls="w-dropdown-list-3"
        aria-haspopup="menu"
        aria-expanded="false"
        role="button"
        tabIndex={0}
      >
        <div
          style={{
            transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${isOpen ? '180' : '0'}deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
          }}
          className="dropdown-toggle__icon w-icon-dropdown-toggle"
          aria-hidden="true" />
        <h3 className="dropdown-text--breaking">
          {heading}
        </h3>
      </div>
      {<nav
        className="dropdown-list w-dropdown-list"
        id="w-dropdown-list-3"
        aria-labelledby="w-dropdown-toggle-3"
      >
         {isOpen ?  <Component />: <p></p>}
      </nav>}
    </li>
    )
  })

  return (<>          <div className="homepage-faqdiv">
    {content}  </div>
  </>)

}
