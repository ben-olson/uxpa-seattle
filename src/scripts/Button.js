function Button(props) {

  return (
    <a {... {href: props.href}} {... props.newtab ? {rel: "noopener noreferrer", target: "_blank"} : {}}>
      <button className="[ button ] [ font-size:s-1 font:bold ]">
        {props.display}
      </button>
    </a>
  )  
}

export default Button