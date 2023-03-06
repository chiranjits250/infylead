import { EuiLoadingSpinner } from '@elastic/eui'

export default function CenteredSpinner() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <EuiLoadingSpinner size="xxl" />
    </div>
  )
}
