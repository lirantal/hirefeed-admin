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
            data: data,
            tableData: data
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
                    List of visitors...
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
                            <TableHeaderColumn>Status</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>

                    <TableBody>

                        {this.state.tableData.map(function(obj, index) {
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