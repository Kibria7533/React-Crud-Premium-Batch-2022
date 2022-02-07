import {Link} from 'react-router-dom'
const Home = (props) => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Sl</th>
          <th scope="col">Text</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* {JSON.stringify(props.data)} */}
        {props.data.map((el, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{el}</td>
              <td>
                <button> <Link to={`/edit/${index}`}>Edit</Link></button>/<button onClick={()=>props.deleteFn(index)}>delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Home;
