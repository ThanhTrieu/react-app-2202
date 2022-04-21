// su dung function

const Button = (props) => {
    // trong function component ko co method render nhu ben class component
    return (
        <>
            {/* day la cu phap JSX - khong phai HTML */}
            <button
                type={props.type}
                className={props.class}
                onClick={()=>props.click(1,props.name)}
            >
                {props.children}
            </button>
        </>
    )
}

export default Button;