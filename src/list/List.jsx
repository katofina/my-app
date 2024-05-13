import './List.css';

const users = ['Rom', 'Harry', 'Andrew', 'Sasha', 'Katya'];

function List() {
    return (
    <>
        <div className='divList'>
            <h2>Список пользователей:</h2>
            <div>
                {
                    users.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))
                }
            </div>
        </div>
    </>
    ); //Сокращённая запись Fragment, если не сокращённая, то используется <React.Fragment> </React.Fragment>
}

export default List;