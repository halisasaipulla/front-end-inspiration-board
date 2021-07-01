const Card = ({card}) => {
    return (
    <div className='note'>
        <p className='card-item__message'>{card.message}</p>
        <ul className='card-item__controls'>
            <li><p>{card.likes_count} 💕</p></li>
            <li><p onClick={() => card.plusOneCardItem()}>＋</p></li>
            <li><p className='card-item__delete' onClick={() => card.deleteCardItem()}>🗑</p></li>
        </ul>
        
    </div>);
};

export default Card;