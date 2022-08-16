// Create a React Pagination Component
import { Grid } from '@mui/material';
import {PaginationProps} from './types';

export default function Pagination(props:PaginationProps){
    const {pages, next, prev, onChangePage} = props;
    return (
        <Grid container>
            <Grid xs={12} sm={6}>
                <button disabled={prev===null} onClick={()=>prev===null?null:onChangePage(prev)}>Prev</button>
                <button disabled={next===null} onClick={()=>next===null?null:onChangePage(next)}>Next</button>
            </Grid>
            <Grid xs={12} sm={6}>
                <p>Page <strong>{next?next-1:prev?prev+1:1}</strong> of <strong>{pages}</strong></p>
            </Grid>
        </Grid>
    )
}