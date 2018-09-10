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
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { shallow } from 'enzyme';
import { OverlayTrigger } from 'react-bootstrap';

import FixedOrMetricControl from
  '../../../../src/explore/components/controls/FixedOrMetricControl';
import SelectControl from
  '../../../../src/explore/components/controls/SelectControl';
import TextControl from
  '../../../../src/explore/components/controls/TextControl';
import ControlHeader from '../../../../src/explore/components/ControlHeader';

const defaultProps = {
  value: { },
};

describe('FixedOrMetricControl', () => {
  let wrapper;
  let inst;
  beforeEach(() => {
    wrapper = shallow(<FixedOrMetricControl {...defaultProps} />);
    inst = wrapper.instance();
  });

  it('renders a OverlayTrigger', () => {
    const controlHeader = wrapper.find(ControlHeader);
    expect(controlHeader).to.have.lengthOf(1);
    expect(wrapper.find(OverlayTrigger)).to.have.length(1);
  });

  it('renders a TextControl and a SelectControl', () => {
    const popOver = shallow(inst.renderPopover());
    expect(popOver.find(TextControl)).to.have.lengthOf(1);
    expect(popOver.find(SelectControl)).to.have.lengthOf(1);
  });
});
