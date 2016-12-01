import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';

export default class Visitors extends Component {

    constructor() {
        super();

        let data = [
            {
                name: 'John Smith',
                status: 'Employed',
            },
            {
                name: 'Randal White',
                status: 'Unemployed',
            },
            {
                name: 'Stephanie Sanders',
                status: 'Employed',
            },
            {
                name: 'Steve Brown',
                status: 'Employed',
            },
            {
                name: 'Joyce Whitten',
                status: 'Employed',
            },
            {
                name: 'Samuel Roberts',
                status: 'Employed',
            },
            {
                name: 'Adam Moore',
                status: 'Employed',
            },
        ];

        this.state = {
            data: data
        };

    }

    render() {
        return (
          <div>
              <h1>
                  Visitors:
              </h1>

              <Table>
                  <TableHeader>
                      <TableRow>
                          <TableHeaderColumn>ID</TableHeaderColumn>
                          <TableHeaderColumn>Name</TableHeaderColumn>
                          <TableHeaderColumn>Status</TableHeaderColumn>
                      </TableRow>
                  </TableHeader>

                  <TableBody>

                      {this.state.data.map(function(obj, index) {
                          return (
                              <TableRow key={index} >
                                  <TableRowColumn>{index}</TableRowColumn>
                                  <TableRowColumn>{obj.name}</TableRowColumn>
                                  <TableRowColumn>{obj.status}</TableRowColumn>
                              </TableRow>
                          );
                      })}


                  </TableBody>

              </Table>

          </div>
        );
    }
}