import React, { Component } from 'react';
import classNames from 'classnames';
import { Tag, Icon } from 'antd';
import styles from './index.less';

const { CheckableTag } = Tag;

class TagSelect extends Component {
  static defaultProps = {
    initialValue: [],
  }

  state = {
    checkedAll: false,
    expand: false,
    checkedTags: this.props.initialValue || [],
  }

  getAllTags = () => {
    return this.props.children
      .filter(child => child.props.displayName === 'TagSelectOption')
      .map(child => child.props.value);
  }

  handleSelectAll = checked => {
    const { onChange } = this.props;

    let checkedTags = [];
    if (checked) {
      checkedTags = this.getAllTags();
    }

    this.setState({
      checkedAll: checked,
      checkedTags,
    });

    if (onChange) {
      onChange(checkedTags);
    }
  }

  handleSelectOne = (value, checked) => {
    const { onChange } = this.props;
    const { checkedTags } = this.state;

    const index = checkedTags.indexOf(value);
    if (checked && index === -1) {
      checkedTags.push(value);
    } else if (!checked && index > -1) {
      checkedTags.splice(index, 1);
    }

    // 获取所有标签，判断当前标签选中后，是否所有标签都选中了
    const tags = this.getAllTags();
    this.setState({
      checkedAll: tags.length === checkedTags.length,
      checkedTags,
    });

    if (onChange) {
      onChange(checkedTags);
    }
  }

  // 收起/展开
  handleExpand = () => {
    this.setState({
      expand: !this.state.expand,
    });
  }

  render() {
    const { checkedTags, checkedAll, expand } = this.state;
    const { children, className, style, expandable, showAll } = this.props;

    const cls = classNames(styles.tagSelect, className, {
      [styles.hasExpandTag]: expandable,
      [styles.expanded]: expand
    });

    return (
      <div className={cls} style={style}>
        {showAll ? <CheckableTag
          checked={checkedAll}
          key="tag-select-all"
          onChange={this.handleSelectAll}
        >
          全部
        </CheckableTag> : null}
        {
          checkedTags && children.filter(child => child.props.displayName === 'TagSelectOption').map(child => React.cloneElement(child, {
            key: `tag-select-${child.props.value}`,
            checked: checkedTags.indexOf(child.props.value) > -1,
            onChange: this.handleSelectOne,
          }))
        }
        {
          expandable && (
            <a className={styles.trigger} onClick={this.handleExpand}>
              { expand ? '收起' : '展开'} <Icon type={expand ? 'up' : 'down'} />
            </a>
          )
        }
      </div>
    );
  }
}

export default TagSelect;
