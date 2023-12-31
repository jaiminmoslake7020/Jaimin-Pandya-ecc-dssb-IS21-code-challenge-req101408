import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';
import {Alert} from '@mui/material';
import {DeveloperName, Product, ProductLabel} from '../../types/app';
import {uuid4} from '../../utils/helpers/string';
import DeveloperLabel from './DeveloperLabel';

export type ProductViewBoxProps = {
  product:Product
};

export default function ProductViewBox(props:ProductViewBoxProps) {
  const {
    product
  } = props;

  const {
    productId, productName, productOwnerName, scrumMasterName, Developers, startDate, location, methodology
  } = product;

  // @ts-ignore
  return (
    product
      ? (
        <TableContainer className="product-view-table" component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="product list table">
            <TableBody>
              <TableRow
                key={uuid4()}
              >
                <TableCell component="th">{ProductLabel.productId}</TableCell>
                <TableCell scope="row">
                  <Link className="btn btn-link" to={`/view/${productId}`} >
                    {productId}
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow
                key={uuid4()}
              >
                <TableCell component="th">{ProductLabel.productName}</TableCell>
                <TableCell scope="row">
                  <Link className="btn btn-link" to={`/view/${productId}`} >
                    {
                      productName
                    }
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow
                key={uuid4()}
              >
                <TableCell component="th">{ProductLabel.startDate}</TableCell>
                <TableCell scope="row">
                  {(new Date(startDate)).toLocaleDateString()}
                </TableCell>
              </TableRow>
              <TableRow
                key={uuid4()}
              >
                <TableCell component="th">{ProductLabel.methodology}</TableCell>
                <TableCell scope="row">
                  {methodology}
                </TableCell>
              </TableRow>
              <TableRow
                key={uuid4()}
              >
                <TableCell component="th">{ProductLabel.scrumMasterName}</TableCell>
                <TableCell scope="row">
                  {scrumMasterName}
                </TableCell>
              </TableRow>
              <TableRow
                key={uuid4()}
              >
                <TableCell component="th">{ProductLabel.productOwnerName}</TableCell>
                <TableCell scope="row">
                  {productOwnerName}
                </TableCell>
              </TableRow>

              <TableRow
                key={uuid4()}
              >
                <TableCell component="th">{ProductLabel.location}</TableCell>
                <TableCell scope="row">
                  {location}
                </TableCell>
              </TableRow>

              <TableRow
                key={uuid4()}
              >
                <TableCell component="th">{ProductLabel.Developers}</TableCell>
                <TableCell scope="row">
                  {Developers.map((d:DeveloperName) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <DeveloperLabel key={d} id={d} />
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : <Alert className="mt-4" severity="info" >There is no product with this ID.</Alert>
  )
}
