import { getEmployees, inactivateEmployee } from '../../api/employees'

import { headerType, actionType , contextPropsType} from '../../types/table.types'

export const headerConfig: Array<headerType> = [
    { type: 'column', propertyName: 'name', propertyKey: 'name', header: 'Name' },
    { type: 'column', propertyName: 'age', propertyKey: 'age', header: 'Age'  },
    { type: 'column', propertyName: 'username', propertyKey: 'username', header: 'Username' },
    { type: 'column', propertyName: 'hire_date', propertyKey: 'hire_date', header: 'Hire Date'  },
];

export const tableActions: Array<actionType> = [
    { type: 'action', icon: 'delete'  }
];


export const buildPropertiesToRequest = (filters: { q: String , sort: String, sortKey: String }, pagination: { rowsPerPage: number, page: number }) => ({
    q: filters.q.length > 2 ? filters.q : '',
    sort: filters.sort,
    sortKey: filters.sortKey,
    limit: pagination.rowsPerPage,
    offset: pagination.page * pagination.rowsPerPage
})

export const shouldMakeRequest = (propertiesToRequest: Object, currentRequestParams: Object) => {
    const fields = ['q', 'sort', 'sortKey', 'limit', 'offset'];
    
    const shouldMakeRequest = fields.some((key: string)=>{
        const prKey = `${key}` as keyof typeof propertiesToRequest;
        const rqKey = `${key}` as keyof typeof currentRequestParams;
  
        return propertiesToRequest[prKey] !== currentRequestParams[rqKey];
    })

    return shouldMakeRequest;

};

export const setLoading = (setState: Function) => {
    setState((prevState: contextPropsType) => {
        return {
            ...prevState,
            request: {
              ...prevState.request,
              loading: true
            }
        }
    })
}

export const getAndSetEmployees = (setState: Function, propertiesToRequest: { q: String; sort: String; sortKey: String; limit: Number; offset: Number; }) => {
    getEmployees(propertiesToRequest).then(({
        data
      }) => {
        console.log(data)
        if(Object.keys(data)){
          setState((prevState: contextPropsType) => {
            return {
                ...prevState,
                pagination: { 
                  ...prevState.pagination, 
                  count: data.getEmployees.count 
                },
                request: {
                    loading: false,
                    data: { 
                    limit: data.getEmployees.limit,
                    offset: data.getEmployees.offset,
                    count: data.getEmployees.count,
                    items: data.getEmployees.items
                    },
                    error: {} 
                }
            }
          })
        }
    })
};

export const execInactivateEmployee = (id: String, setState: Function, propertiesToRequest: { q: String; sort: String; sortKey: String; limit: Number; offset: Number; }) => {
    inactivateEmployee(id).then(({ data })=>{
        if(data.inactivateEmployee === 'Employee was inactivated successfully'){
            getAndSetEmployees(setState, propertiesToRequest)
        }
    });
}