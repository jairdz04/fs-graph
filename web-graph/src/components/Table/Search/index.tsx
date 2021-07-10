import TextField from '@material-ui/core/TextField';
import TableContext from '../../../contexts/TableContext'
import { contextPropsType } from '../../../types/table.types'

const SearchField = () => {
    return (
         <TableContext.Consumer>
            {({ filters,pagination, actions }: contextPropsType)=>{

                return (
                    <TextField
                        id="outlined-search" 
                        label="Search by name" 
                        type="search" 
                        variant="outlined" 
                        size="medium"
                        value={filters.q}
                        onChange={(event)=> actions.changeRequestValues({
                            filters: {
                                q: event.target.value,
                                sort: filters.sort,
                                sortKey: filters.sortKey
                            },
                            pagination: {
                                ...pagination,
                                page: 0
                            }
                        })}
                    />
                )
            }}

        </TableContext.Consumer>
    )
}

export default SearchField;