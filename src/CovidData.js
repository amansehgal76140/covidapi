import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: '95%',
    minWidth:"10%",
    marginLeft:"2.5%",
    marginTop:"20px",
    borderRadius:"6px",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
  },
  container: {
    maxHeight: "550px",
  },
  top:{
    marginLeft:"2.5%",
    color:"#828282",
    marginTop:"30px"
  }
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const rows = props.data;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box >
      <Typography className={classes.top} variant='h5'>Covid Records</Typography>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell align="center">
                   StateName
                </TableCell>
              <TableCell align="center">
                Hospitalized Currently
              </TableCell>
              <TableCell align="center">
                Deaths
              </TableCell>
              <TableCell align="center">
                Total-Cases
              </TableCell>
              <TableCell align="center">
                On Ventilator Currently
              </TableCell>
              <TableCell align="center">
                Positive Cases
              </TableCell>
              <TableCell align='center'>
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(8*(page+1)-7,8*(page+1)).map((row,index) => {

              return (
                <TableRow hover role="checkbox" >

                      <TableCell align="center">
                        {row.stateName}
                      </TableCell>
                      <TableCell align="center">
                        {row.hospitalizedCurrently}
                      </TableCell>
                  <TableCell align="center">
                    {row.death}
                  </TableCell>
                  <TableCell align="center">
                    {row.total}
                  </TableCell>
                  <TableCell align="center">
                    {row.onVentilatorCurrently}
                  </TableCell>
                  <TableCell align="center">
                    {row.positive}
                  </TableCell>
                  <TableCell align='center'>{row.dateModified}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={10}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </Box>
  );
}
