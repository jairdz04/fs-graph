import { CircularProgress, TableBody, IconButton } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

import { StyledTableCell, StyledTableRow } from '../SharedStyles';
import { rowType, contextPropsType } from '../../../types/table.types'
import TableContext from '../../../contexts/TableContext'

const Row = () => {
    return (
      <TableContext.Consumer>
        {({ request, actions }: contextPropsType)=>{

          const {
            loading,
            data: { items = []},
            error
          } = request

          if(loading || Object.keys(error).length){
            return (
              <TableBody>
                  <StyledTableCell align="center" colSpan={5}>
                    {loading ? <CircularProgress /> : 'Error fetching data'}
                  </StyledTableCell>
              </TableBody>
            )
          }

          if(!items.length){
            return (
              <TableBody>
                  <StyledTableCell align="center" colSpan={5}>
                    Data not found
                  </StyledTableCell>
              </TableBody>
            )
          }

          return (
            <TableBody>
              {items.map((row: rowType, index: number)=> (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.age}</StyledTableCell>
                    <StyledTableCell align="right">{row.username}</StyledTableCell>
                    <StyledTableCell align="right">{new Date(row.hire_date).toLocaleDateString()}</StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton color="primary" aria-label="upload picture" component="span"  onClick={()=> actions.inactivateUser(row)}>
                         <DeleteIcon />
                      </IconButton>
                      </StyledTableCell>
                  </StyledTableRow>
                )
              )}
          </TableBody>
        )}}

      </TableContext.Consumer>

    )
}


export default Row;