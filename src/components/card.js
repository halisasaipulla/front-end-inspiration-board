const Card = ({card}) => {
    return (
    <div className='note'>
        <p className='card-item__message'>{card.message}</p>
        
    </div>);
};

export default Card;