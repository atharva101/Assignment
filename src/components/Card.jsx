import './card.style.css'
const Card = ({email,name,userId,phone}) => {

    return(
        <div className='card-container'>
            <h6>Name : {name}</h6>
            <h6>Email : {email}</h6>
            <h6>UserId : {userId}</h6>
            <h6>Phone : {phone}</h6>
        </div>
    )
}

export default Card