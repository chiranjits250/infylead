import { EuiButton, EuiCode, EuiFlexGroup, EuiFlexItem, EuiIconTip, EuiLink, EuiProgress, EuiText } from '@elastic/eui'
import Link from 'next/link'
import Seo from '../components/Seo'
import AuthedDashboard from '../layouts/AuthedDashboard'
import Links from '../utils/data/links'

function ProgressBar({ showBar, title, value, max, description, infoText }) {
    return (
        <EuiFlexItem>
            <EuiText>
                <h4 className='m-0'>
                    {title}
                    <span className='ml-2'>
                        <EuiIconTip
                            className='mr-4'
                            color="subdued"
                            size='l'
                            content={infoText}
                            iconProps={{

                            }}
                        />
                    </span>
                </h4>
                <p className=''>
                    {description}
                </p>
            </EuiText>
            {showBar && <EuiProgress className='mt-2' value={value} max={max} color="primary" size="m" />}
        </EuiFlexItem>
    )
}

const ONE_MILLION = -1000000
function CreditProgressBars({ email_views, email_views_limit, phone_views, phone_views_limit, record_exports, record_exports_limit }) {
    const is_unlimited = email_views_limit === ONE_MILLION


    return (
        <EuiFlexGroup className='flex-col' gutterSize="l">
            {is_unlimited ?
                <>
                    <ProgressBar showBar={false} title="Email Credits" infoText={"An Email Credit is used when you get Email of a Contact"} description={`You have unlimited email credits.`} value={email_views} max={email_views_limit} />
                    <ProgressBar showBar={false} title="Company Phone Credits" infoText={"A Company Phone Credit is used when you get Company Phone of a Contact"} description={`You have unlimited company phone credits.`} value={phone_views} max={phone_views_limit} />
                    <ProgressBar showBar={false} title="Export Credits" infoText={"An Export Credit is used when you export a Contact as CSV"} description={`You have unlimited phone credits.`} value={record_exports} max={record_exports_limit} />
                </> : <>
                    <ProgressBar showBar title="Email Credits" infoText={"An Email Credit is used when you get Email of a Contact"} description={`${email_views} of ${email_views_limit} email credits have been used this month.`} value={email_views} max={email_views_limit} />
                    <ProgressBar showBar title="Company Phone Credits" infoText={"A Company Phone Credit is used when you get Company Phone of a Contact"} description={`${phone_views} of ${phone_views_limit} company phone credits have been used this month.`} value={phone_views} max={phone_views_limit} />
                    <ProgressBar showBar title="Export Credits" infoText={"An Export Credit is used when you export a Contact as CSV"} description={`${record_exports} of ${record_exports_limit} export credits have been used this month.`} value={record_exports} max={record_exports_limit} />
                    <div className='flex justify-center mt-4 flex-col items-center space-y-2'>
                        <div className='font-bold'>NEED MORE CREDITS?</div>
                        <div><Link href={Links.pricing} passHref ><EuiButton fill>Upgrade Plan</EuiButton></Link></div>
                    </div>
                </>}
        </EuiFlexGroup>
    )
}

function Content(props) {
    return (
        <div className="page-card-wrapper">
            <CreditProgressBars {...props} />
        </div>
    )
}


function Page(props) {
    return (
        <>
            <Seo title="Credits Usage" />
            <AuthedDashboard>
                <Content {...props} />
            </AuthedDashboard>
        </>
    )
}

export default Page
