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
import $ from 'jquery';

const propTypes = {
  containerId: PropTypes.string.isRequired,
  vizType: PropTypes.string.isRequired,
  height: PropTypes.func.isRequired,
  width: PropTypes.func.isRequired,
  faded: PropTypes.bool,
};

class ChartBody extends React.PureComponent {
  html(data) {
    this.el.innerHTML = data;
  }

  css(property, value) {
    this.el.style[property] = value;
  }

  get(n) {
    return $(this.el).get(n);
  }

  find(classname) {
    return $(this.el).find(classname);
  }

  show() {
    return $(this.el).show();
  }

  height() {
    return this.props.height();
  }

  width() {
    return this.props.width();
  }

  render() {
    return (
      <div
        id={this.props.containerId}
        className={`slice_container ${this.props.vizType}${this.props.faded ? ' faded' : ''}`}
        ref={(el) => { this.el = el; }}
      />
    );
  }
}

ChartBody.propTypes = propTypes;

export default ChartBody;
