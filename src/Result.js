import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Result extends Component {

  render(){
  let { data } = this.props;
  return (
    <div style={{textAlign: 'center'}}>
          <h1>All Users</h1>
          <Table>
            <TableHead>
                <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>User Id</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Skills</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(i => (
                    <TableRow key={i.name}>
                        <TableCell>{i.name}</TableCell>
                        <TableCell>{i.uid}</TableCell>
                        <TableCell>{i.add}</TableCell>
                        <TableCell>{i.des}</TableCell>
                        <TableCell>{i.skill}</TableCell>
                    </TableRow>
                ))}
          </TableBody>
        </Table>
    </div>
  );
}
}

export default Result;
