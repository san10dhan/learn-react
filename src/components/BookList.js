import Books from './Books';
const BookList = () => {
    const list = { link: '../../public/flamingo.png', description: 'This is a bird', title: 'Bird',id: 0 };
    return (
                <Books {...list}/>
    )

}
export default BookList;