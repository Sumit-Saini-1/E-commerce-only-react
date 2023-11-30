import PropTypes from 'prop-types';
import Style from "./style.module.css";

export default function Input(props){
    const {children,onClick,classname}=props

    return (
        <button className={classname=="blue"?Style.blue:Style.red} onClick={onClick}>{children}</button>
    )
}

Input.defaultProps={
    children:"Click me",
    classname:"blue"
}

Input.propTypes={
   children:PropTypes.string,
   onClick:PropTypes.func,
   classname:PropTypes.string
}