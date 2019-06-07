import React from 'react';
import { withStyles } from '@material-ui/core';
import { withRouter} from 'react-router-dom'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { filterMedia } from '../../../Utils/utils';


const cellFontColor = {
  color: '#000'
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: "2rem",
    // overflowX: 'auto',
  },
  table: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    // overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  tableHead: {

    backgroundColor: '#252934'
  },
  tableId: {
    width: '15%',
    },
  tableTitle: {
    width: '75%'
  },
  tableHeadType: {
    width: '15%'
  },
  '@global': {
    'tbody > tr:nth-of-type(odd)': {
      backgroundColor: '#f0eeee'
    }
  }
})

const ListTable = (props) => {
  const { classes, media } = props;
  let content = null;
  if (media) { 
    content = <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow  >
            <TableCell className={classes.tableId} align="left">Id</TableCell>
            <TableCell className={classes.tableTitle} align="left">Title</TableCell>
            <TableCell className={classes.tableType} align="right">Type</TableCell>

          </TableRow>
        </TableHead>
        <TableBody >
          {
            media.map((mediaItem) => (

              <TableRow key={mediaItem.id} style={{ 'cursor': 'pointer' }}  >
                <TableCell
                  style={cellFontColor}
                  className={classes.tableId}
                  component="th"
                  align="left"
                  scope="row"
                  onClick={() => handleOnClick(mediaItem.id)}
                >
                  {mediaItem.id}
                </TableCell>
                <TableCell
                  style={cellFontColor}
                  className={classes.tableTitle}
                  align="left"
                  onClick={() => handleOnClick(mediaItem.id)}
                >
                  {mediaItem.title}
                </TableCell>
                <TableCell
                  style={cellFontColor}
                  className={classes.tableType}
                  align="right"
                  onClick={() => handleOnClick(mediaItem.id)}
                >
                  {mediaItem.type}
                </TableCell>

              </TableRow>

            ))

          }
        </TableBody>
      </Table>
    </Paper>
    
  }
  const handleOnClick = (id) => {
    console.log('click', id);
    props.history.push({
      pathname: '/contents/edit',
      search: `?id=${id}`
    })
  
  }

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  );
}
// export default compose(
//   withRouter(),
//   withStyles(styles)
// )(List);
const List = withRouter(
  withStyles(styles)(ListTable));
export default List; 
