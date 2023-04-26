import type {Meta} from '@storybook/react';

import React, {useCallback, useMemo, useState} from "react";
import {Select} from "./components/Select/Select";
import {number} from "prop-types";
import styled from "styled-components";

const meta: Meta = {
    title: 'useMemo',
};


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
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

//----------------------------------------------------------------------------------------------------------------

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Oleg', 'Anya'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUser = 'Sveta' + new Date().getTime()
        setUsers([...users, newUser])
    }
    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={addUser}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}

//----------------------------------------------------------------------------------------------------------------

type BookSecretPropsType = {
    books: Array<string>
    addBooks(): void
}

const BookSecret = (props: BookSecretPropsType) => {
    console.log('books secret')
    return <div>
        <button onClick={props.addBooks}>add user</button>
        {props.books.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Book = React.memo(BookSecret)

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Node', 'Css'])

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books])


    const memoAddBooks = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoAddBooks2 = useCallback(() => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])


    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {counter}
            <Book books={newArray} addBooks={memoAddBooks2}/>
        </>
    )
}

export type citiesType = {
    title: string
    country: string
    population: number
}

export type citiesTypeWithValue = citiesType & {
    value: number
}

const SelectMemo = React.memo(Select)

export const HelpsToSelect = () => {
    console.log('HelpsToSelect')

    const [counter, setCounter] = useState(0)


    const [cities, setUsers] = useState<citiesType[]>([
        {title: 'Moscow', country: 'Russia', population: 100010},
        {title: 'Perm', country: 'Russia', population: 776},
        {title: 'Lipetsk', country: 'Russia', population: 100456540},
        {title: 'Shanghai', country: 'China', population: 5465},
        {title: 'Beijing', country: 'China', population: 100544370},
        {title: 'Chongqing', country: 'China', population: 10660},
        {title: 'Minsk', country: 'Belarus', population: 546},
        {title: 'Vitebsk', country: 'Belarus', population: 2131},
        {title: 'Brest', country: 'Belarus', population: 343433333},
    ])


    const [selectValue1, setSelectValue1] = useState<number>(1)
    const setSelectValueHandler1 = useCallback((value: number) => {
        setSelectValue1(value)
    }, [selectValue1])
    const [selectValue2, setSelectValue2] = useState<number>(1)
    const setSelectValueHandler2 = useCallback((value: number) => {
        setSelectValue2(value)
    }, [selectValue2])
    const [selectValue3, setSelectValue3] = useState<number>(1)
    const setSelectValueHandler3 = useCallback((value: number) => {
        setSelectValue3(value)
    }, [selectValue3])

    const filterByName = useMemo(() => {
        return cities.filter(c => c.title.toLowerCase().startsWith('m'))
            .map((c, ind) => ({value: ind + 1, ...c}))
    }, [cities])


    const filterByCountry = useMemo(() => {
        return cities.filter(c => c.country === ('Belarus'))
            .map((c, ind) => ({value: ind + 1, ...c}))
    }, [cities])

    const filterByPopulation = useMemo(() => {
        return cities.filter(c => c.population >= (10000))
            .map((c, ind) => ({value: ind + 1, ...c}))
    }, [cities])


    return (
        <>
            <div>
                <button onClick={() => {
                    setCounter(counter + 1)
                }}>+
                </button>
                {counter}
            </div>
            <SelectContainer>
                <SelectMemo items={filterByName} value={selectValue1} onChange={setSelectValueHandler1}/>
                <SelectMemo items={filterByCountry} value={selectValue2} onChange={setSelectValueHandler2}/>
                <SelectMemo items={filterByPopulation} value={selectValue3} onChange={setSelectValueHandler3}/>
            </SelectContainer>
        </>
    )
}


export default meta;


const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`