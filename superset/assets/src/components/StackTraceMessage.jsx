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
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Collapse } from 'react-bootstrap';

const propTypes = {
  message: PropTypes.string,
  queryResponse: PropTypes.object,
  showStackTrace: PropTypes.bool,
};
const defaultProps = {
  showStackTrace: false,
};

class StackTraceMessage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showStackTrace: props.showStackTrace,
    };
  }

  hasTrace() {
    return this.props.queryResponse && this.props.queryResponse.stacktrace;
  }

  hasLink() {
    return this.props.queryResponse && this.props.queryResponse.link;
  }

  render() {
    return (
      <div className={`stack-trace-container${this.hasTrace() ? ' has-trace' : ''}`}>
        <Alert
          bsStyle="warning"
          onClick={() => this.setState({ showStackTrace: !this.state.showStackTrace })}
        >
          {this.props.message}
          {this.hasLink() &&
          <a href={this.props.queryResponse.link}> (Request Access) </a>
       }
        </Alert>
        {this.hasTrace() &&
          <Collapse in={this.state.showStackTrace}>
            <pre>
              {this.props.queryResponse.stacktrace}
            </pre>
          </Collapse>
        }
      </div>
    );
  }
}

StackTraceMessage.propTypes = propTypes;
StackTraceMessage.defaultProps = defaultProps;

export default StackTraceMessage;
