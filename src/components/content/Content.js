function Content(props) {
    return (
        <div className="cats">
            {props.catImg.map((item)=>{
                return (
                    <div className="catBox">
                        <img src={item.url}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Content;