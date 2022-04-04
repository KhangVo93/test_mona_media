
import { Pagination } from '@mui/material'
function PaginationFlight({ setPage, nopage, page }) {
    const onChangePage = (event, value) => {
        setPage(value)
    }
    return (
        <>
            <Pagination onChange={onChangePage}
                size='large'
                variant='outlined'
                shape="rounded"
                count={nopage}
                defaultPage={page}></Pagination>

        </>
    )
}
export default PaginationFlight