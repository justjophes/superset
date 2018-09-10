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
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { shallow } from 'enzyme';
import { getFormDataFromControls, defaultControls }
  from '../../../../src/explore/store';
import {
  ControlPanelsContainer,
} from '../../../../src/explore/components/ControlPanelsContainer';
import ControlPanelSection from '../../../../src/explore/components/ControlPanelSection';

const defaultProps = {
  datasource_type: 'table',
  actions: {},
  controls: defaultControls,
  form_data: getFormDataFromControls(defaultControls),
  isDatasourceMetaLoading: false,
  exploreState: {},
};

describe('ControlPanelsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ControlPanelsContainer {...defaultProps} />);
  });

  it('renders ControlPanelSections', () => {
    expect(wrapper.find(ControlPanelSection)).to.have.lengthOf(6);
  });
});
