import Card from './card';
import CardForm from './cardForm';

const CardList = ({ selectedBoard }) => {
    return (<section>
        <section>
            <h2>Cards for {selectedBoard.title} </h2>
            <div>
            <Card />
            </div>
            <CardForm/> 
        </section>
          
    </section>
    );
};

export default CardList;