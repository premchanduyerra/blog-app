//create a hook to set the document title


import React from 'react'

export const useDocTitle = (count) => {
    React.useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}
