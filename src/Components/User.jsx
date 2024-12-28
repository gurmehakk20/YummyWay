const User = ({name, location, contact}) => {
    return (
        <div className="user-card">
            <h3>Name : {name}</h3>
            <h4>Location: {location} </h4>
            <h4>Contact: {contact} </h4>
        </div>
    )
}

export default User