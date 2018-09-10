/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { Table } from 'reactable';

import Mousetrap from 'mousetrap';

const propTypes = {
  hotkeys: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
  })).isRequired,
  header: PropTypes.string,
};

const defaultProps = {
  hotkeys: [],
};

export default class Hotkeys extends React.PureComponent {
  componentDidMount() {
    this.props.hotkeys.forEach((keyConfig) => {
      Mousetrap.bind([keyConfig.key], keyConfig.func);
    });
  }
  renderPopover() {
    return (
      <Popover id="popover-hotkeys" title={this.props.header} style={{ width: '300px' }}>
        <Table
          className="table table-condensed"
          data={this.props.hotkeys.map(keyConfig => ({
            Key: keyConfig.key,
            Action: keyConfig.descr,
          }))}
        />
      </Popover>);
  }
  render() {
    return (
      <OverlayTrigger
        overlay={this.renderPopover()}
        trigger={['hover', 'focus']}
        placement="top"
      >
        <i className="fa fa-keyboard-o fa-lg" />
      </OverlayTrigger>
    );
  }
}

Hotkeys.propTypes = propTypes;
Hotkeys.defaultProps = defaultProps;
