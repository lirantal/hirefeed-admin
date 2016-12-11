import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';

export default class Visitors extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.visitors,
            tableData: this.props.visitors
        };

        this.handleVisitorSearch = this.handleVisitorSearch.bind(this);

    }

    handleVisitorSearch(e) {
        let visitors = this.state.data.filter(function(value) {
            return value.name.indexOf(e.target.value) !== -1;
        });

        this.setState({tableData: visitors});
    }

    render() {

          return (
            <div>
                <h1>
                    Visitors:
                </h1>

                <div>
                    <TextField
                      hintText="visitor name"
                      onChange={this.handleVisitorSearch}
                    />
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                            <TableHeaderColumn>Mobile</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>

                      {this.state.tableData.map(function (obj, index) {
                        return (
                          <TableRow key={index}>
                              <TableRowColumn>{index}</TableRowColumn>
                              <TableRowColumn>{obj.name}</TableRowColumn>
                              <TableRowColumn>{obj.email}</TableRowColumn>
                              <TableRowColumn>{obj.mobile}</TableRowColumn>
                          </TableRow>
                        );
                      })}


                    </TableBody>

                </Table>

            </div>
          );
    }
}