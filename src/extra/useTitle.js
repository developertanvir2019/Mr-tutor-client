import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}- Mr-Tutor`;
    }, [title])
}
export default useTitle;