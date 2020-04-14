import React,{Component} from 'react'

function TableHeader()
{
    return (
       <thead>
        <tr>
            <th>SNO</th>
            <th>Title</th>
            <th>Content</th>

        </tr>
       </thead>
    )
}



function TableBody(props)
{
    let rows=props.posts.map((post)=>
    <tr>
    <td> {post.id}</td>
    <td>{post.title}</td>
    <td>{post.content}</td>



</tr>

    )

    return (
      


       <tbody>
       {rows}
              </tbody>
    )
}



class Table extends Component
{


    
   render()
   {  
       const posts=[
          {id:1,title:'this is first title',content:'this is first content'},
          {id:2,title:'this is 2nd title',content:'this is 2nd content'},
          {id:3,title:'this is third title',content:'this is third content'},

       ]

    return(
        <div>

        <TableHeader/>
        <TableBody posts={posts}/>
        </div>

    )
   }

}

export default Table;