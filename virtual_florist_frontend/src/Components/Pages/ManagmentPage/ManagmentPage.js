import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { connect } from "react-redux";
import * as actions from "../../../redux/actions/index";

import TitleLabel from "../../UI/Label/TitleLabel";

import styleClass from "./ManagmentPage.module.css";

class ManagmentPage extends Component {
  componentWillMount() {
    this.props.onDataFetch();
  }

  render() {
    // const rows = [
    //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    //   createData("Eclair", 262, 16.0, 24, 6.0),
    //   createData("Cupcake", 305, 3.7, 67, 4.3),
    //   createData("Gingerbread", 356, 16.0, 49, 3.9)
    // ];

    let rows = this.props.monthlyStatus.monthlyStatuses.map(monthlyStatus => {
      return {
        id: monthlyStatus.monthlyStatusId,
        date: monthlyStatus.date.slice(0, 10),
        income: monthlyStatus.income.toFixed(2),
        productsSold: monthlyStatus.productsSold
      };
    });

    console.log(this.props.monthlyStatus);

    return (
      <div className={styleClass.All}>
        <TitleLabel name="Montly status"></TitleLabel>
        <Paper>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Income ($)</TableCell>
                <TableCell align="center">Products sold</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.income}</TableCell>
                  <TableCell align="center">{row.productsSold}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    monthlyStatus: state.monthlyStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDataFetch: () => dispatch(actions.fetchMonthlyStatus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManagmentPage);
