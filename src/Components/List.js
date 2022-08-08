import Item from './Item'

function List(){
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item feira="Expofeira" ano_feira={2018}/>
      </ul>
    </>
  );
}

export default List
