import React from 'react';
export type rowType = {
    id: string,
    name: string,
    age: number,
    username: string,
    hire_date: string
}

const TableContext = React.createContext({
    filters: {
        q: '',
        sort: 'ASC',
        sortKey: 'name'
    },
    pagination: {
        page: 0,
        rowsPerPageOptions: [3, 5, 10, 25],
        count: 0,
        rowsPerPage: 3
    },
    request: {
        loading: false,
        data: {
            limit: 3,
            offset: 0,
            count: 0,
            items: [{
                id: '',
                name: '',
                age: 0,
                username: '',
                hire_date: ''
            }]
        },
        error: {}
    },
    actions: {
        inactivateUser: (row: Object) => {},
        changeRequestValues: (requestValues: { pagination: Object, filters: Object }) => {}
    }
});

export default TableContext;