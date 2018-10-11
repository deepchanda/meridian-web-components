
export default const Button = () => {
  static propTypes = {
    /** Sets an id attribute on the html element to enable QA automation testing */
    id: PropTypes.string,
    /** Preset styles */
    kind: PropTypes.oneOf([
      "primary",
      "secondary",
      "tertiary",
      "danger",
      "success",
      "toggle",
      "white",
      "link",
    ]),
    /** Preset grouping */
    group: PropTypes.oneOf([
      "left",
      "center",
      "right",
      "top",
      "middle",
      "bottom",
    ]),
    /** Preset sizes */
    size: PropTypes.oneOf(["small", "large"]).isRequired,
    /** Set icon */
    icon: PropTypes.string,
    /** icon alignment */
    iconAlign: PropTypes.oneOf(["left", "right"]).isRequired,
    /** Make this be a submit button */
    submit: PropTypes.bool,
    /** Set active state */
    active: PropTypes.bool,
    /** Set disabled state */
    disabled: PropTypes.bool,
    /** onClick handler */
    onClick: PropTypes.func,
    /** onMouseDown handler */
    onMouseDown: PropTypes.func,
    /** onMouseUp handler */
    onMouseUp: PropTypes.func,
    /** Add custom className */
    className: PropTypes.string,
    /** Add custom inline styles */
    style: PropTypes.object,
    /** horizontal align of button columns */
    horizontalAlign: Columns.propTypes.horizontalAlign,
    /** children */
    children: PropTypes.any,
  };
  static defaultProps = {
    kind: "primary",
    size: "large",
    submit: false,
    active: false,
    disabled: false,
    focus: false,
    hover: false,
    horizontalAlign: "center",
    iconAlign: "left",
  };
  getId() {
    const props = this.props;
    let id = null;
    let name = null;
    if (this.hasName()) {
      name = props.children
        .toString()
        .toLowerCase()
        .replace(/ /g, "-");
    }
    if (props.id) {
      id = props.id;
    } else if (this.hasIcon() && this.hasName()) {
      id = `${props.icon}-${name}`;
    } else if (this.hasIcon()) {
      id = props.icon;
    } else if (this.hasName()) {
      id = name;
    }
    return id;
  }
  hasIcon() {
    const props = this.props;
    if (props.icon) {
      return true;
    }
    return false;
  }
  renderIcon() {
    const { icon, iconAlign, size } = this.props;
    let className;
    if (this.hasIcon() && this.hasName()) {
      className =
        iconAlign === "left"
          ? styles.iconWithNameOnRight
          : styles.iconWithNameOnLeft;
    } else {
      className = styles.icon;
    }
    if (this.hasIcon()) {
      return (
        <Column className={className}>
          <Icon icon={icon} size={size} />
        </Column>
      );
    }
    return null;
  }
  hasName() {
    const props = this.props;
    if (props.children) {
      return true;
    }
    return false;
  }
  renderName() {
    const { children, iconAlign } = this.props;
    let className;
    if (this.hasName() && this.hasIcon()) {
      className =
        iconAlign === "left"
          ? styles.nameWithIconOnLeft
          : styles.nameWithIconOnRight;
    } else {
      className = styles.name;
    }
    if (this.hasName()) {
      return <Column className={className}>{children}</Column>;
    }
    return null;
  }
  render() {
    const props = this.props;
    const className = classnames(
      styles.default,
      styles[props.kind],
      styles[props.size],
      props.group && styles[props.group],
      props.active && styles.active,
      props.submit && styles.submit,
      props.disabled && styles.disabled,
      props.className,
    );
    if (props.submit) {
      return (
        <button
          type="submit"
          id={this.getId()}
          className={className}
          style={props.style}
          onMouseDown={(!props.disabled && props.onMouseDown) || null}
          onMouseUp={(!props.disabled && props.onMouseUp) || null}
        >
          <Columns grow>
            {props.iconAlign === "left" && this.renderIcon()}
            {this.renderName()}
            {props.iconAlign === "right" && this.renderIcon()}
          </Columns>
        </button>
      );
    }
    return (
      <Columns
        id={this.getId()}
        className={className}
        horizontalAlign={props.horizontalAlign}
        style={props.style}
        onClick={(!props.disabled && props.onClick) || null}
        onMouseDown={(!props.disabled && props.onMouseDown) || null}
        onMouseUp={(!props.disabled && props.onMouseUp) || null}
      >
        {props.iconAlign === "left" && this.renderIcon()}
        {this.renderName()}
        {props.iconAlign === "right" && this.renderIcon()}
      </Columns>
    );
  }
}
