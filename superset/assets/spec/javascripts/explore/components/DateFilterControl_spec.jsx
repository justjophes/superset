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
/* eslint-disable no-unused-expressions */
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { shallow } from 'enzyme';
import { Button } from 'react-bootstrap';

import DateFilterControl from '../../../../src/explore/components/controls/DateFilterControl';
import ControlHeader from '../../../../src/explore/components/ControlHeader';

const defaultProps = {
  animation: false,
  name: 'date',
  onChange: sinon.spy(),
  value: '90 days ago',
  label: 'date',
};

describe('DateFilterControl', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DateFilterControl {...defaultProps} />);
  });

  it('renders a ControlHeader', () => {
    const controlHeader = wrapper.find(ControlHeader);
    expect(controlHeader).to.have.lengthOf(1);
  });
  it('renders 3 Buttons', () => {
    const label = wrapper.find('.label').first();
    label.simulate('click');
    setTimeout(() => {
      expect(wrapper.find(Button)).to.have.length(3);
    }, 10);
  });
  it('loads the right state', () => {
    const label = wrapper.find('.label').first();
    label.simulate('click');
    setTimeout(() => {
      expect(wrapper.state().num).to.equal('90');
    }, 10);
  });
  it('sets now and closes', () => {
    const label = wrapper.find('.now').first();
    label.simulate('click');
    setTimeout(() => {
      expect(wrapper.state().free).to.equal('now');
      expect(wrapper.find('.popover')).to.have.length(0);
    }, 10);
  });
  it('renders 2 dimmed sections', () => {
    const label = wrapper.find('.label').first();
    label.simulate('click');
    setTimeout(() => {
      expect(wrapper.find(Button)).to.have.length(3);
    }, 10);
  });
  it('opens and closes', () => {
    const label = wrapper.find('.label').first();
    label.simulate('click');
    setTimeout(() => {
      expect(wrapper.find('.popover')).to.have.length(1);
      expect(wrapper.find('.ok')).first().simulate('click');
      setTimeout(() => {
        expect(wrapper.find('.popover')).to.have.length(0);
      }, 10);
    }, 10);
  });
});
