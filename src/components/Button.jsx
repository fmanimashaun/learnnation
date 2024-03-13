import PropTypes from 'prop-types';


const Button = ({ href, children, ...rest }) => {
  const shouldRenderButton = href === undefined;

  const ButtonTag = shouldRenderButton ? "button" : "a";

  return (
    <ButtonTag {...rest} href={href}>
      {children}
    </ButtonTag>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button;


