import { EuiComboBox } from '@elastic/eui'


export default function MultiSelect({ options, value, onChange, ...props }: any) {
  const cleanedOptions = options.map(o => ({
    value: o.id,
    label: o.value,
  }))

  let selected = value
  // cleanedOptions.filter(x => value.includes(x.value))

  return (
    <EuiComboBox
      {...props}
      options={cleanedOptions}
      selectedOptions={selected}
      onChange={option => {
        // const change = option.map(x => x.value)
        // console.log({selected})
        // console.log({change})
        onChange(option)
      }}
      isClearable={true}
       />
  )
}
