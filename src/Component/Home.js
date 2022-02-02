const Home = ({datas,DeleteFn}) => {
    return ( <table class="table">
    <thead>
      <tr>
        <th scope="col">Sl</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Emails</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
        {/* {JSON.stringify(datas)} */}

        {datas.map((el,ind)=>{
            return(
          <tr key={ind}>
        <th scope="row">{ind+1}</th>
        <td>{el.firstName}</td>
        <td>{el.lastName}</td>
        <td>{el.email}</td>
        <td><button className="btn btn-primary">Edit</button>/<button className="btn btn-danger" onClick={()=>DeleteFn(ind)}>delete</button></td>
      </tr>
            )

        })}
      
      
    </tbody>
  </table> );
}
 
export default Home;