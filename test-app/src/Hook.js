import React, { useMemo, useState } from 'react'

function useExpensiveComputation(initialValue) {
    const [value, setValue] = useState(initialValue)

    const expensiveComputation = useMemo(() => {
        let result = 0
        for (let i = 0; i < 100000; i++) {
            result += 1
        }

        return result
    }, [])

    return [value, setValue, expensiveComputation]
}

function MyComponent() {
    const [value, setValue, expensiveComputation] = useExpensiveComputation(0)

    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); console.log({ value }) }}>
                <input value={value} onChange={e => setValue(e.target.value)} />
                <div>{expensiveComputation}</div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default MyComponent