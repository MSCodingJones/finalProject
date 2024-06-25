
const AddUser =(props)=> {
    
    const month = props.dateCreated.slice(5, 7)

    const year = props.dateCreated.slice(0, 4)

    return (
        <div className="col-md-3">
            <div className="user-div">
                <h3 className="text-capitalize">{props.lastName}, {props.firstName}</h3>
                <p className="user-text">{props.username}</p>
                <p className="user-email">{props.email}</p>
                <p className="user-password">{props.password}</p>
            </div>
        </div>
    )
}

export default AddUser