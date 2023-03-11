import Seo from '../../components/Seo'
import { EuiText } from '@elastic/eui'
import AuthedLanding from '../../layouts/AuthedLanding'
import UnAuthedLanding from '../../layouts/UnAuthedLanding'
import Footer from '../../components/Footer'

function Terms({ is_authenticated }) {
  const Component = is_authenticated ? AuthedLanding : UnAuthedLanding

  return (
    <>
      <Seo title="Terms and Conditions" />

      <Component>
        <div className="p-8">
          <EuiText>
            <>
              <h1 ><span >Terms and Privacy Policy for InfyLead (Updated 9th March
                2023)</span></h1>
              <p ><span  >All use of the website, including
                information, services, and content distributed through, in conjunction with, or
                made available on the website, is subject to your acceptance of these Terms
                &amp; Conditions, our Privacy Policy, and our Permitted and Prohibited Uses
                Policy. You agree to be bound by the Service Agreement if you purchase any
                goods or services from this website. The terms and conditions establish the
                terms and conditions under which InfyLead will provide services in order to
                electronically provide use and access to our Company Data &amp; Services.</span></p>
              <p ><span  >InfyLead &nbsp;manages the website https://www.infylead.com/.</span></p>
              <p ><span  >This page will explain and inform you about
                InfyLead's policies for collecting, using, migrating, and disclosing personal
                information when you use its services.</span></p>
              <p ><span  >As explained further below in the Privacy
                Policy, we will not share your information or any other information collected
                and described in this Privacy Policy.</span></p>
              <p ><span  >We will improve our services by using the
                personal information you provide while registering and using the product. By
                using our services, you consent to the collection and use of your information
                in accordance with this policy.</span></p>
              <p ><span  >This Privacy Policy
                is also linked to our Terms of Service, which can be found on the Company's
                website at </span><span ><a href="https://www.infylead.com/"><span >https://www.infylead.com/</span></a></span><span  >.</span></p>

              <h2 ><><span >What kind of data do we collect? </span></></h2>

              <p ><span  >For statistics: When you use InfyLead's
                services, we may use Google Analytics to track your usage, including which
                pages you visit and which links you click.</span></p>
              <p ><span  >Once you have created an account, we will ask
                for information such as your email, a password generated for login, or your
                name and the company you work for in order to improve your experience. This
                information may be used to send messages to you in order to provide you with
                the best onboarding and customer support possible. These particulars will also
                appear on your invoices.</span></p>
              <p ><span  >When you convert from a free trial to a
                paying customer, we will collect your payment information and send it to our
                payment partners such as Stripe, Paypal, ICICI Bank, and others. Your payment
                information will never be saved or stored in a database or on our servers. That
                information will only be saved and collected by our payment processor.</span></p>
              <p ><span  >We collect your email address when you
                subscribe to a newsletter from one of our public websites or any other website
                related to InfyLead's services (e.g blog, product or updates).</span></p>
              <p ><span  >Your contact information is as follows: When
                you use our services, we (or 'InfyLead') may collect your email address in
                order to send you emails, newsletters, or notifications about our services.</span></p>
              <p ><span  >Logging and event
                history: Once you've signed up for InfyLead, we'll track your usage and log any
                requests you make to our service. IP addresses, geolocation information,
                browser type, computer type, country, and other information may be found in all
                logs captured by ('InfyLead'). The logs are saved and accessible for one month
                before being backed up to Google.com, our service provider.&nbsp;</span></p>

              < ><h2><span >What happens to your personal data? </span></h2></>

              <p ><><span  >As a data controller, InfyLead collects your
                personal data fairly and lawfully in accordance with any applicable law
                (including the General Data Protection Regulation (EU) 2016/679 of the European
                Parliament and of the Council of April 27, 2016), our Terms of Service, and any
                Data Processing Agreement. The primary goal of collecting personal information
                is to provide you with a safe, optimal, efficient, and tailored experience.</span></></p>

              <p ><><span  >We may use your personal information for the following
                purposes: Allow users to use our services: You agree to our Terms of Service
                when you create an account, which allow us to process your data in order to
                provide you with access to 'InfyLead.' Accepting this method enables you to
                create an account on our website and and process contact information, send
                emails, or invite new teammates.</span></></p>
              <p ><h2><>Prevent and combat fraud:</></h2></p>
              <p ><span  >We actively combat credit card fraud with the
                assistance of our financial providers. We may use additional in-house features
                to prevent fraud.</span></p>
              <p ><span  >Introduce and market new services: 'InfyLead'
                is constantly adding new services and features. Your account will be notified
                as soon as possible via email or live support.</span></p>
              <p ><span  >'InfyLead' or
                https://www.InfyLead.com/ may use the collected data for other purposes in
                order to provide the best service. While using the product, you will be
                informed of this, and we will ask for your permission to use any of the data we
                collect relating to your account or personal information.</span></p>

              <p ><h2><span >‘InfyLead’ keeps your personal information for how long?</span></h2></p>


              <p ><span  >'InfyLead' or
                https://InfyLead.com/ will retain personal information processed on behalf of
                our customers for as long as necessary to provide the service in accordance
                with our terms of service. Within 30 days of the account's deletion, we will
                delete all information associated with it. To the extent not deleted by our
                customers, 'InfyLead' or https://InfyLead.com/ may also retain and use certain
                personal information for a reasonable period of time thereafter as necessary to
                pursue our legitimate business interests, resolve disputes, conduct audits,
                comply with our legal obligations, and enforce our terms of service.</span></p>

              <p ><h2><span >‘What are your privacy and data protection rights? ‘</span></h2></p>
              <p ><><span  >Our Services collect personal information from
                our customers. 'InfyLead' or https://InfyLead.com/ has limited access to the
                personal information our customers submit to our Services as a data processor
                on their behalf. If you are a data subject for whom a customer has provided
                personal information to the Services and would prefer that your information not
                be disclosed to a third party or used for a purpose materially different from
                the original purpose(s), please contact customer service directly.</span></></p>

              <p ><h2><span >Right of access/portability:</span></h2><span  ></span></p>
              <p className="MsoNormal" ><span ><span  >You&nbsp;may&nbsp;request&nbsp;access&nbsp;to&nbsp;your&nbsp;Personal&nbsp;Information&nbsp;and&nbsp;a&nbsp;copy&nbsp;of&nbsp;Personal&nbsp;Information&nbsp;that&nbsp;Your&nbsp;Company&nbsp;is&nbsp;processing.&nbsp;</span></span></p>
              <p className="MsoNormal" ><span ><span  >If&nbsp;you&nbsp;ask&nbsp;us&nbsp;what&nbsp;Personal&nbsp;Information&nbsp;we&nbsp;are&nbsp;processing,&nbsp;we&nbsp;will&nbsp;provide&nbsp;you&nbsp;with&nbsp;the&nbsp;following&nbsp;information&nbsp;free&nbsp;of&nbsp;charge:&nbsp;the&nbsp;purposes&nbsp;of&nbsp;processing,&nbsp;the&nbsp;categories&nbsp;of&nbsp;Personal&nbsp;Information&nbsp;processed,&nbsp;the&nbsp;recipient(s)&nbsp;of&nbsp;Personal&nbsp;Information,&nbsp;the&nbsp;length&nbsp;of&nbsp;time&nbsp;the&nbsp;Personal&nbsp;Information&nbsp;will&nbsp;be&nbsp;stored,&nbsp;your&nbsp;privacy&nbsp;rights,&nbsp;and&nbsp;information&nbsp;on&nbsp;data&nbsp;transfers.&nbsp;</span></span></p>
              <p className="MsoNormal" ><span ><span  >The&nbsp;data&nbsp;subject&nbsp;has&nbsp;the&nbsp;right&nbsp;to&nbsp;obtain&nbsp;confirmation&nbsp;from&nbsp;the&nbsp;controller&nbsp;as&nbsp;to&nbsp;whether&nbsp;or&nbsp;not&nbsp;personal&nbsp;data&nbsp;relating&nbsp;to&nbsp;him&nbsp;or&nbsp;her&nbsp;are&nbsp;being&nbsp;processed,&nbsp;and,&nbsp;if&nbsp;so,&nbsp;access&nbsp;to&nbsp;the&nbsp;personal&nbsp;data&nbsp;[…]</span></span></p>
              <p ><span  >The controller shall provide a copy of the
                personal data undergoing processing. As a customer, you have access to your
                personal information through our website (once logged-in). We also offer a
                feature that allow to export all your personal data in a structured way
                whenever you like. The controller must provide a copy of the personal data that
                is being processed. You can access your personal information as a customer via
                our website (once logged-in). We also provide a feature that allows you to
                export all of your personal data in a structured format at any time.</span></p>
              <p ><h2><span >Right to rectification:</span></h2></p>
              <p ><span  >Please keep in mind that we reserve the right
                to correct, replenish, or remove incomplete or inaccurate information at any
                time and at our sole discretion. The data subject has the right to have
                inaccurate personal data about him or her corrected by the controller without
                undue delay. Taking into account the processing purposes, the data subject has
                the right to have incomplete personal data completed, including through the
                provision of a supplementary statement.</span></p>
              <p ><h2><span >Right to be forgotten &amp; Right to object:</span></h2><b><span  >
              </span></b></p>

              <p ><span  >You may withdraw your consent to our
                processing of your Personal Information at any time. If there is no overriding
                legitimate interest in continuing to process your Personal Information (e.g.,
                to comply with our legal obligations, resolve disputes, enforce our agreements,
                etc.) and the Personal Information is no longer required for the purpose for
                which it was originally collected, we will erase your data. The data subject
                has the right to obtain from the controller, without undue delay, the erasure
                of personal data concerning him or her, and the controller has the obligation
                to erase personal data without undue delay. The data subject has the right to
                request that the controller restrict processing. As a customer, all your users
                data is erased within 30 days after you cancel your account.</span></p>
              <p ><h2><span >Right of Restriction of Processing:</span></h2></p>
              <p ><span  >You may request that we restrict processing
                of your Personal Information if any of the following conditions apply: I you
                contest the accuracy of the Personal Information; (ii) the processing is
                unlawful; or (iii) we no longer require the Personal Information.</span></p>
              <p ><h2><span >Right to Data Portability:</span></h2></p>
              <p ><span  >You have the right to have your Personal
                Information delivered to you in a structured, commonly used, and
                machine-readable format.</span></p>
              <p ><h2><span  >Liability Restriction:</span></h2></p>
              <p ><span  >Regardless
                of any damages You may incur, the Company's and any of its suppliers' entire
                liability under any provision of these Terms, and Your sole remedy for all of
                the foregoing, shall be limited to the amount actually paid by You through the
                Service, or an amount up to $10,000 USD if You haven't purchased anything
                through the Service.</span></p>

              <p ><span  >To the
                greatest extent permitted by applicable law, neither the Company nor its
                suppliers shall be liable for any special, incidental, indirect, or
                consequential damages of any kind (including, but not limited to, damages for
                loss of profits, loss of data or other information, business interruption,
                personal injury, or loss of privacy) arising out of or in any way connected
                with the use or inability to use the Service, third-party software, and/or
                third-party hardware.</span></p>
              <p ><span  >Because
                some states prohibit the exclusion of implied warranties or the limitation of
                liability for incidental or consequential damages, some of the above
                limitations may not apply. Each party's liability will be limited to the
                greatest extent permitted by law in these states.</span></p>

              <p ><h2><span  >Termination:</span></h2></p>

              <p ><span  >We reserve the right to terminate
                or suspend Your access at any time, without prior notice or liability, for any
                reason, including, without limitation, if You violate these Terms and
                Conditions.</span></p>
              <p ><span  >Your
                right to use the Service will be terminated immediately upon termination.</span></p>

              <h2 ><span  >Disclaimer:</span><span  > </span></h2>
              <span  >Payments are nonrefundable and there are no refunds or
                credits for partially used periods. This software is intended for use only by
                the person who purchased the licence, and it is not intended for selling one's
                login&nbsp;credentials to multiple clients, as this will be considered an abuse
                of the platform by us, and your account may be banned at any time without prior
                notice.The Service is provided to You "AS IS" and "AS
                AVAILABLE," with all faults and defects, and without any warranty of any
                kind other than the guaranteed 95% accuracy that we incur when we put the
                database in our platform, which may go down as days spent as data decays
                overtime due to job changes and other happenings. Without limiting the
                foregoing, the Company makes no representation or warranty that the Service
                will meet Your requirements, achieve any intended results, be compatible or
                work with any other software, applications, systems, or services, operate
                without interruption, meet any performance or reliability standards, or be
                error free, or that any errors or defects can or will be corrected.This
                software is intended for use only by the person who purchased the licence, and
                it is not intended for selling one's login&nbsp;credentials to multiple
                clients, as this will be considered an abuse of the platform by us, and your
                account may be banned at any time without prior notice.</span>

              <p><span  >Neither party to these terms will be held responsible or
                liable for its failure to perform or delay in performing under these Terms (or
                any Order Form) where such failure or delay is beyond its control, such as when
                caused by strikes or labour disputes, internet or telecommunications failures,
                shortages of or inability to obtain labour, energy, or supplies, war,
                terrorism, riot, acts of God or governmental action, natural disasters
                including floods, earthquakes, and hurricanes.</span></p>

              <h2 ><span  >The Rule of Law:</span><span  > </span></h2>
              <p ><span  >This Terms
                and Your use of the Service shall be governed by the laws of the Country,
                excluding its conflict of law rules. Other local, state, national, or
                international laws may apply to your use of the Application.</span></p>
              <h2 ><span  >Resolution
                of Disputes:</span></h2>
              <p ><span  >If You have a concern or a dispute about the Service, You
                agree to first attempt an informal resolution by contacting the Company.</span></p>

              <h2 ><span  >Users in the European Union
                (EU)</span></h2>

              <p ><span  >You will benefit from any mandatory provisions of the law
                of the country in which you reside if you are a European Union consumer.</span></p>

              <h2 ><span  >United
                States Legal Compliance:</span></h2>

              <p ><span  >You represent and warrant that I you are not located in a
                country subject to a United States government embargo or that has been
                designated as a "terrorist supporting" country by the United States
                government, and (ii) you are not listed on any United States government list of
                prohibited or restricted parties.</span></p>

              <h2 ><b><span  >Suspension and Waiver</span></b></h2>
              <p ><b><span  >Severability</span></b></p>
              <p ><span  >If any provision of these Terms
                is found to be unenforceable or invalid, that provision will be changed and
                interpreted to achieve the goals of that provision to the greatest extent
                possible under applicable law, while the remaining provisions will remain in
                full force and effect.</span></p>
              <p ><b><span  >Waiver</span></b></p>
              <p ><span  >Except as expressly stated
                herein, a party's failure to exercise a right or require performance of an
                obligation under these Terms shall not affect that party's ability to exercise
                such right or require such performance at any time thereafter, nor shall a
                waiver of a breach constitute a waiver of any subsequent breach.</span></p>
              <p ><h2><span  >Interpretation of Translation</span></h2></p>
              <p ><span  >If We
                have made these Terms and Conditions available to You through our Service, they
                may have been translated. You agree that the original English text shall
                prevail in the case of a dispute.</span></p>

              <p ><h2><span >Children’s Privacy:</span></h2><span  ></span></p>

              <p ><span  >Our Service does not address anyone under the
                age of 13 (referred to as “Children”).</span></p>
              <p ><span  >We do not collect personally identifiable
                information from children under the age of 13. Please contact us if you are a
                parent or guardian and are aware that your Children have provided us with
                Personal Information. If we discover that we have collected Personal
                Information from children under the age of 13 without parental consent, we take
                immediate steps to remove that information from our servers.</span></p>
              <p ><h2><span >Changes to this terms and privacy policy:</span></h2><span  ><span > </span></span></p>

              <p ><span  >We reserve the right
                to modify our Privacy Statement at any time. Any modifications will be
                communicated to you by posting the updated Privacy Policy on this page. It is
                strongly advised that you review this Privacy Policy on a regular basis to keep
                up with any changes. Changes to this Privacy Policy become effective when they
                are posted on this page. The Data Controller may use the User's Personal Data
                in Court or in the stages leading up to potential legal action arising from
                improper use of this Application or related services.</span></p>
              <p ><span  >The User acknowledges
                that the Data Controller may be required by public authorities to disclose
                personal information. Additional information about the User's Personal Data
                This Application may, in addition to the information contained in this privacy
                statement, provide the User with additional and contextual information
                regarding specific services or the collection and processing of Personal Data
                upon request.</span></p>
              <p ><h2><span  >Contact us:</span></h2><span  ></span></p>
              <p ><span  >If you have any questions about these Terms and Conditions, please contact us at the following address: info@infylead.com</span></p>
              <p ><span  >Final<br/>Written by<br/>InfyLead</span></p>

            </>

          </EuiText>
        </div>
        <Footer />
      </Component>
    </>
  )
}

export default Terms
