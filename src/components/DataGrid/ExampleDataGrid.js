import * as React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import {
    randomCreatedDate,
} from '@material-ui/x-grid-data-generator';


class ExampleDataGrid extends React.Component {
    constructor(props) {
        super(props);
    }


    renderInvoices = () => {
        const rows = [
            { id: 1, col1: 'aHello', col2: 'World' , col13: '123224', col114: randomCreatedDate() },
            { id: 2, col1: 'bXGrid', col2: 'is Awesome' , col13: '123224', col114: randomCreatedDate() },
            { id: 3, col1: 'cMaterial-UI', col2: 'is Amazing' , col13: '123224', col114: randomCreatedDate() },
            { id: 4, col1: 'aHello', col2: 'World' , col13: '123224', col114: randomCreatedDate() },
            { id: 5, col1: 'bXGrid', col2: 'is Awesome' , col13: '123224', col114: randomCreatedDate() },
            { id: 6, col1: 'cMaterial-UI', col2: 'is Amazing' , col13: '123224', col114: randomCreatedDate() },
            { id: 7, col1: 'daHello', col2: 'World' , col13: '123224', col114: randomCreatedDate() },
            { id: 8, col1: 'gbXGrid', col2: 'is Awesome' , col13: '123224', col114: randomCreatedDate() },
            { id: 9, col1: 'zcMaterial-UI', col2: 'is Amazing' , col13: '123224', col114: randomCreatedDate() },
        ];

        const columns= [
            { field: 'col1', headerName: 'Column 1', type:'string', width: 150 },
            { field: 'col2', headerName: 'Column 2', type:'string', width: 150 },
            { field: 'col13', headerName: 'Column 3', type: 'number', width: 130 },
            { field: 'col114', headerName: 'Column 4', type: 'date', width: 130 },

        ];

        return (
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns}
                          pagination
                          pageSize={5}
                          disableColumnSelector={true}
                          components={{
                    Toolbar: GridToolbar,
                }} />
            </div>
        )
    };


    render() {

        return(
            <div>
                {this.renderInvoices()}
            </div>
        );
    }
}

export default ExampleDataGrid;

