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
import Select from 'react-select';
import { t } from '../locales';

const $ = window.$ = require('jquery');

const propTypes = {
  dataEndpoint: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  mutator: PropTypes.func.isRequired,
  onAsyncError: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  valueRenderer: PropTypes.func,
  placeholder: PropTypes.string,
  autoSelect: PropTypes.bool,
};

const defaultProps = {
  placeholder: t('Select ...'),
  valueRenderer: o => (<div>{o.label}</div>),
  onAsyncError: () => {},
};

class AsyncSelect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      options: [],
    };
  }
  componentDidMount() {
    this.fetchOptions();
  }
  onChange(opt) {
    this.props.onChange(opt);
  }
  fetchOptions() {
    this.setState({ isLoading: true });
    const mutator = this.props.mutator;
    $.get(this.props.dataEndpoint)
      .done((data) => {
        this.setState({ options: mutator ? mutator(data) : data, isLoading: false });

        if (!this.props.value && this.props.autoSelect && this.state.options.length) {
          this.onChange(this.state.options[0]);
        }
      })
      .fail((xhr) => {
        this.props.onAsyncError(xhr.responseText);
      })
      .always(() => {
        this.setState({ isLoading: false });
      });
  }
  render() {
    return (
      <div>
        <Select
          placeholder={this.props.placeholder}
          options={this.state.options}
          value={this.props.value}
          isLoading={this.state.isLoading}
          onChange={this.onChange.bind(this)}
          valueRenderer={this.props.valueRenderer}
          {...this.props}
        />
      </div>
    );
  }
}

AsyncSelect.propTypes = propTypes;
AsyncSelect.defaultProps = defaultProps;

export default AsyncSelect;
