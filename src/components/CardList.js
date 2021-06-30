import Card from './card';
import cardForm from './cardForm';

const CardList = ({ selectedBoard }) => {
    return (<section>
        <section>
            <h2>Cards for </h2>
            <div>
            <Card />
            </div>
        </section>
            <cardForm/>   
    </section>
    );
};

export default CardList;