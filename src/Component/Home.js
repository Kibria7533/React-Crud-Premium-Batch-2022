import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import url from "../Url"
const Home = (props) => {
  // http://localhost:4000/api/show
  const [data, setData] = useState([]);

  useEffect(async () => {
    let data = await axios.get(`${url}/api/show`);

    console.log(data.data, "my data from database");
    setData(data.data);
  }, []);

  const deleteMe = async (id) => {
    try {
      let mydata = await axios.delete(`http://localhost:4000/api/delete/${id}`);
      console.log(mydata);


      const filterd=data.filter(a=>a._id!=id);
      setData(filterd)


    } catch (er) {
      console.log(er);
    }
  };

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Sl</th>
          <th scope="col">title</th>
          <th scope="col">author</th>
          <th scope="col">body</th>
          <th scope="col">edit/delete</th>
        </tr>
      </thead>
      <tbody>
        {/* {JSON.stringify(props.data)} */}
        {data.map((el, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{el.title}</td>
              <td>{el.author}</td>
              <td>{el.body}</td>
              <td>
                <button>
                  {" "}
                  <Link to={`/edit/${el._id}`}>Edit</Link>
                </button>
                /<button onClick={() => deleteMe(el._id)}>delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Home;
