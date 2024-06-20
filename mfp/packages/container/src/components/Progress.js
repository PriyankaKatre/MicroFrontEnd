import React from 'react'
import { makeStyles, createStyles, LinearProgress } from '@material-ui/core';
// import { LinearProgress} from '@material-ui/icons'


const useStyle = makeStyles((theme) => {
    return createStyles({
        bar: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2)
            }
        }
    })
})
function Progress() {
    const classes = useStyle()
    return (
        <div className={classes.bar}>
            <LinearProgress />
        </div>
  )
}

export default Progress
