import {useEffect, useState } from 'react';

import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

import { default as Row } from './TableRow'
import { default as TableHeader } from './TableHeader'
import { default as Pagination } from './Pagination'
import { default as SearchField } from './Search'

import TableContext from '../../contexts/TableContext'

import { getModalStyle, useModalStyles, useStyles } from './Table.styles'

import {buildPropertiesToRequest , shouldMakeRequest, setLoading , getAndSetEmployees, execInactivateEmployee } from './config'

const TableTemplate = () => {
  const classes = useStyles();

  const changeState = (value: Object) =>{
    setState(prevState => { 
      return { 
        ...prevState, ...value 
      }
    });
  }
  
  const inactivateUser = (raw: Object) => {
    setModalProps({ open: true, data: raw })
  }

  const changeRequestValues = (requestValues: { pagination: Object, filters: Object }) =>{
    changeState({ 
      pagination: requestValues.pagination, 
      filters: requestValues.filters
    });
  };

  const [state, setState] = useState({
    filters: {
        q: '',
        sort: 'ASC',
        sortKey: 'name'
    },
    pagination: {
        page: 0,
        rowsPerPageOptions: [3, 5, 10, 25],
        count: 10,
        rowsPerPage: 3
    },
    request: {
        loading: false,
        data: { 
          limit: 3,
          offset: 0,
          count: 0,
          items: []
        },
        error: {}
    },
    actions: {
        inactivateUser: inactivateUser,
        changeRequestValues: changeRequestValues
    }
  });

  const [currentRequestParams, setRequestParams] = useState({});

  const [modalProps, setModalProps] = useState({
    open: false,
    data: {}
  });

  const handleClose = () => {
    setModalProps({
      open: false,
      data: {}
    })
  }

  useEffect(() => {

    const propertiesToRequest: any = buildPropertiesToRequest(state.filters, state.pagination)

    const shouldMakeRequestResult = shouldMakeRequest(propertiesToRequest, currentRequestParams)

    if(!shouldMakeRequestResult) return;

    setLoading(setState);

    getAndSetEmployees(setState, propertiesToRequest)

    setRequestParams(propertiesToRequest)

  }, [state.filters, state.pagination, currentRequestParams])

  return (
    <TableContext.Provider value={state}>
      <SearchField />
      <TableContainer component={Paper} style={{ marginTop: '2%'}}>
          <Table className={classes.table} aria-label="customized table">
              <TableHeader />
              <Row></Row>
          </Table>
          <Pagination />
      </TableContainer>
      {BuildModal(modalProps.open, handleClose, modalProps.data, setState, currentRequestParams)}
    </TableContext.Provider>
  );
}


const BuildModal = (open: boolean, handleClose: Function, raw: any, setState: Function, currentRequestParams: any) => {
  const modalClases = useModalStyles();
  const [modalStyle] = useState(getModalStyle);
 
  return (
    <Modal
      open={open}
      onClose={()=> handleClose()}>
        <div style={modalStyle} className={modalClases.paper}>
          <h2 id="simple-modal-title">Delete Zone</h2>
          <p id="simple-modal-description">
            ¿Do you want to delete this employee?
          </p>

          <Button color='default' onClick={()=> handleClose()}>Cancel</Button>
          <Button color='primary' onClick={()=> {
              execInactivateEmployee(raw.id, setState, currentRequestParams);
              handleClose();
            }}>Delete</Button>
        </div>
    </Modal>
  )
}

export default TableTemplate;