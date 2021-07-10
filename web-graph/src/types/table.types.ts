export type headerType =  { 
    type: string, 
    propertyName: string, 
    propertyKey: string, 
    header: string 
}

export type rowType = {
    id: string,
    name: string,
    age: number,
    username: string,
    hire_date: string
}

export type actionType = {
    type: string,
    icon: string
}


export type contextPropsType = {
    filters: {
        q: string,
        sort: string,
        sortKey: string
    },
    pagination: {
        page: number,
        rowsPerPageOptions: number[],
        count: number,
        rowsPerPage: number
    },
    request: {
        loading: boolean,
        data: { 
          limit: number,
          offset: number,
          count: number,
          items: rowType[]
        },
        error: Object
    },
    actions: {
        inactivateUser: Function,
        changeRequestValues: Function
    }
}