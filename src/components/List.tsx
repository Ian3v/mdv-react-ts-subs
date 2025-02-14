
import {Sub} from "../types/types"

// interface Sub{
//     nick: string
//     subMonths:number
//     avatar:string
//     description?:string
//   }
interface Props{
    subscriptores: Array<Sub>
}


// interface Props {
//     subscriptores: Array<{
//         nick:string
//         avatar:string
//         subMonths:number
//         description?:string
//     }>
// }
const List = ({subscriptores}:Props) => {

  const renderList = ():JSX.Element[] => {
    return(
       subscriptores.map((sub)=>[
        <li key={sub.nick}>
            <img src={sub.avatar}/>
            <h4>{sub.nick}</h4>
            <p>{sub.description?.substring(0,100)}</p>
        </li>
       ])
    )
  };

  return (
    <div className="container_list">
      <ul>{renderList()}</ul>
    </div>
  );
};

export default List;
