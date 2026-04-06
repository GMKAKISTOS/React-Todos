function TodoRowItem2()
{
    const rowNumber = 2
    const rowDescription = "Feed cat"
    const rowAssigned = "Panos"
    
    return(
     <tr>
        <th scope = "col">{rowNumber}</th>
        <td>{rowDescription}</td>
        <td>{rowAssigned}</td>
    </tr>
    )
}

export default TodoRowItem2


