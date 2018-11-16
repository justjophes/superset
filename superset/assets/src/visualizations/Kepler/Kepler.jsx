import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import KeplerGl from 'kepler.gl';
import { addDataToMap } from 'kepler.gl/actions';
import Processors from 'kepler.gl/processors';

import './Kepler.css';


const propTypes = {
  height: PropTypes.number,
};

class Kepler extends React.PureComponent {
  componentDidMount() {
    const data = Processors.processRowObject(this.props.features);
    const datasets = [{
      data,
      info: {
        id: 'main',
        label: 'data',
      },
    }];
    this.props.dispatch(addDataToMap({ datasets }));
  }
  render() {
    return (
      <KeplerGl
        id="foo"
        {...this.props}
      />);
  }
}

Kepler.displayName = 'Kepler';
Kepler.propTypes = propTypes;

const mapStateToProps = () => {};
const dispatchToProps = dispatch => ({ dispatch });
export default connect(mapStateToProps, dispatchToProps)(Kepler);
