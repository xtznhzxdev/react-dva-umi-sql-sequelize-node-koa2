import { Tag } from 'antd';
const { CheckableTag } = Tag;

const TagSelectOption = ({
  children,
  checked,
  onChange,
  value
}) => (
  <CheckableTag
    checked={checked}
    key={value}
    onChange={state => onChange(value, state)}
    >
    {children}
  </CheckableTag>
)

TagSelectOption.defaultProps = {
  displayName: 'TagSelectOption'
}

export default TagSelectOption;
