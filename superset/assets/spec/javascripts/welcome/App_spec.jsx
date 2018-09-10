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
import { Panel, Row, Tab } from 'react-bootstrap';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { expect } from 'chai';

import App from '../../../src/welcome/App';

describe('App', () => {
  const mockedProps = {};
  it('is valid', () => {
    expect(
      React.isValidElement(<App {...mockedProps} />),
    ).to.equal(true);
  });
  it('renders 4 Tab, Panel, and Row components', () => {
    const wrapper = shallow(<App {...mockedProps} />);
    expect(wrapper.find(Tab)).to.have.length(3);
    expect(wrapper.find(Panel)).to.have.length(3);
    expect(wrapper.find(Row)).to.have.length(3);
  });
});
