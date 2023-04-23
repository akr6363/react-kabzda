import React, {useMemo, useState} from "react";

// export const DifficultCountingExample = () => {
//     const [a, setA] = useState<number>(3)
//     const [b, setB] = useState<number>(3)
//
//     let resultA = 1
//     let resultB = 1
//
//     resultA = useMemo(() => {
//         let tempResultA = 1
//         for (let i=1; i<=a; i++) {
//             let fake = 0
//             while (fake < 100000000) {
//                 fake++
//                 const fakeValue = Math.random()
//             }
//             tempResultA *= i
//         }
//         return tempResultA
//     }, [a])
//
//
//     for (let i=1; i<=b; i++) {
//         resultB *= i
//     }
//
//
//     return (
//         <>
//             <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
//             <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
//             <hr/>
//             <div>
//                 Result for a: {resultA}
//             </div>
//             <div>
//                 Result for b: {resultB}
//             </div>
//         </>
//     )
// }

export const HelpsForReactMemo = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i=1; i<=a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i=1; i<=b; i++) {
        resultB *= i
    }


    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}




// const UsersSecret = (props: {users: Array<string>}) => {
//     console.log('users')
//     return <div>
//         {props.users.map((u,i) => <div key={i}>{u}</div> )}
//     </div>
// }
//
// const Users = React.memo(UsersSecret)
//
// export const HelpsToReactMemo = () => {
//     console.log('HelpsToReactMemo')
//     const [counter, setCounter] = useState(0)
//     const [users, setUsers] = useState(['Dima', 'Oleg', 'Anya'])
//
//
//     return (
//         <>
//             <button onClick={()=> {setCounter(counter+1)}}>+</button>
//             {counter}
//             <Users users={users}/>
//         </>
//     )
// }
