export default function ContentWrapper({children}: any) {
  return <div className="page-content overflow-y-auto">{children}</div>
}