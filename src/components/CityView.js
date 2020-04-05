import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {fetchCities} from "../actions/cityAction"
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const mapStateToProps=(state)=>{
  return {
    cities:state.cityArr
  }
}
const CityView= function (props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  useEffect(()=>{
    props.fetchCities()
  },[])
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // console.log("props,: ", props.cities)
  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default connect(mapStateToProps, {fetchCities})(CityView);