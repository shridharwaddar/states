import React from 'react'

const User1 = (props) => {
    console.log(props);
    let data=props.data
  return (
    <div>
         <table border="2px">
            <tr>
                <th>Movie</th>
                <th>language</th>
                <th>Actor</th>
                <th>Year</th>
                <th>Collection</th>
                <th>Photo</th>
            </tr>
           {data.map((x)=>{
            return <tr>
                <td>{x.movie}</td>
                <td>{x.lang}</td>
                <td>{x.actor.map((x)=>{
                    return <li>{x}</li>
                })}</td>
                <td>{x.year}</td>
                <td>{x.collection}</td>
                <td><img src={x.photo} alt=""  style={{height:"50px", width:"50px"}}/></td>
            </tr>
           })}
         </table>
    </div>
  )
}

export default User1