const { useEffect } = require("react")

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Doctors portal`
    }, [title])
}

export default useTitle
