import { useState } from 'react';
import { TableRow, IconButton } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

import { StyledTableCell } from '../SharedStyles';

import { headerConfig } from '../config'
import { headerType, contextPropsType } from '../../../types/table.types'
import TableContext from '../../../contexts/TableContext'

const sortList = ( key: string, currentValue: string): { sort: string, sortKey: string} => {
  return {
    sort: currentValue === 'ASC' ? 'DESC': 'ASC',
    sortKey: key
  }
}

const Header = () => {

    const [columnsSort, setColumnsSort] = useState({
      name: 'ASC',
      age: 'DESC',
      username: 'DESC',
      hire_date: 'DESC'
    });


    const buildNewColumnSort = (sortKey: string, sort: string) => {
      let newColumnSort: any = {}

      Object.keys(columnsSort).forEach((nextKey) => {
        const columnKey = `${nextKey}` as keyof typeof columnsSort;

        if(nextKey === sortKey){
          newColumnSort[columnKey] = sort
        }else{
          newColumnSort[columnKey] = sort === 'ASC' ? 'DESC' : 'ASC';
        }
      });

      return newColumnSort;
    };
    
    return (
      <TableContext.Consumer>
        {({ filters, pagination, actions }: contextPropsType)=> {

          const columnKey = `${filters.sortKey}` as keyof typeof columnsSort;

          return (
            <TableHead>
              <TableRow>
                {headerConfig.map((cfg: headerType, index: number)=>(
                  <StyledTableCell  
                    key={index} 
                    align={index === 0 ? 'left' :"right"}>
                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => {

                        const currentColumnKey = `${cfg.propertyKey}` as keyof typeof columnsSort;

                        const  { sort, sortKey } = sortList(cfg.propertyKey, columnsSort[currentColumnKey])
              
                        const newColumnSort = buildNewColumnSort(sortKey, sort)

                        setColumnsSort(() => newColumnSort)

                        actions.changeRequestValues({
                          filters: {
                            q: filters.q,
                            sort, 
                            sortKey
                          },
                          pagination: {
                              ...pagination,
                              page: 0
                          }
                       })
                      }}>
                        { columnsSort[columnKey] === 'ASC' && cfg.propertyKey === filters.sortKey ? <ArrowUpward /> : <ArrowDownward /> }
                      </IconButton>
                      {cfg.header}          
                  </StyledTableCell>
                ))}

                <StyledTableCell key={'table_delete_action'} align="right" />
                      
              </TableRow>
            </TableHead>
          )
        }}
      </TableContext.Consumer>
    )
}

export default Header;