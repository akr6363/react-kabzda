import React, {useState} from "react";

const NewMessagesCounterSecret = (props: {count: number }) => {
    console.log('count')
    return <div>{props.count}</div>
}

const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('users')
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div> )}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Oleg', 'Anya'])

    const addUser = () => {
        const newUser = 'sveta' + new Date().getTime()
        setUsers([...users, newUser])
    }
return (
    <>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
)
}