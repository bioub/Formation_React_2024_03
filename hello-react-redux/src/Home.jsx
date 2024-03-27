
import { useDispatch, useSelector } from "react-redux";
import Select from "./Select";
import { likesSelector, nameSelector } from "./store/selectors";
import { incrementLikes, updateName } from "./store/actions";

function Home() {
  const likes = useSelector(likesSelector);
  const name = useSelector(nameSelector);
  const dispatch = useDispatch();


  return (
    <div className="Home">
      <h2>Home</h2>


      <Select items={['Romain', 'Titi', 'Tata']} value={name} onValueChange={(value) => dispatch(updateName(value))} />
      <p>Nom : {name}</p>

      <button onClick={() => dispatch(incrementLikes())}>likes is {likes}</button>
    </div>
  );
}

export default Home;
