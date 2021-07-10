import TablePagination from '@material-ui/core/TablePagination';
import { contextPropsType } from '../../../types/table.types'
import TableContext from '../../../contexts/TableContext'

const Pagination = () => {
    return (
        <TableContext.Consumer>
            {({ filters, pagination, actions }: contextPropsType)=>{
                return (
                    <TablePagination
                        rowsPerPageOptions={pagination.rowsPerPageOptions}
                        component="div"
                        count={pagination.count}
                        rowsPerPage={pagination.rowsPerPage}
                        page={pagination.page}
                        onPageChange={(event, page) => actions.changeRequestValues({
                            pagination: {
                                page: page,
                                count: pagination.count,
                                rowsPerPage: pagination.rowsPerPage,
                                rowsPerPageOptions: pagination.rowsPerPageOptions
                            },
                            filters
                        })}
                        onRowsPerPageChange={(event) => actions.changeRequestValues({
                            pagination: {
                                page: 0,
                                count: pagination.count,
                                rowsPerPage: event.target.value,
                                rowsPerPageOptions: pagination.rowsPerPageOptions
                            },
                            filters 
                        })}
                    />
                )
            }}
      </TableContext.Consumer>

    )
}

export default Pagination;