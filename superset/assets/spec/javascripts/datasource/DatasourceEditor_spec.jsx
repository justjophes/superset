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
import { Tabs } from 'react-bootstrap';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import $ from 'jquery';
import sinon from 'sinon';

import DatasourceEditor from '../../../src/datasource/DatasourceEditor';
import mockDatasource from '../../fixtures/mockDatasource';

const props = {
  datasource: mockDatasource['7__table'],
  addSuccessToast: () => {},
  addDangerToast: () => {},
  onChange: sinon.spy(),
};
const extraColumn = {
  column_name: 'new_column',
  type: 'VARCHAR(10)',
  description: null,
  filterable: true,
  verbose_name: null,
  is_dttm: false,
  expression: '',
  groupby: true,
};

describe('DatasourceEditor', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});

  let wrapper;
  let el;
  let ajaxStub;
  let inst;

  beforeEach(() => {
    ajaxStub = sinon.stub($, 'ajax');
    el = <DatasourceEditor {...props} />;
    wrapper = shallow(el, { context: { store } }).dive();
    inst = wrapper.instance();
  });

  afterEach(() => {
    ajaxStub.restore();
  });

  it('is valid', () => {
    expect(React.isValidElement(el)).to.equal(true);
  });

  it('renders Tabs', () => {
    expect(wrapper.find(Tabs)).to.have.lengthOf(1);
  });

  it('makes an async request', () => {
    wrapper.setState({ activeTabKey: 2 });
    const syncButton = wrapper.find('.sync-from-source');
    expect(syncButton).to.have.lengthOf(1);
    syncButton.simulate('click');
    expect(ajaxStub.calledOnce).to.equal(true);
  });

  it('merges columns', () => {
    const numCols = props.datasource.columns.length;
    expect(inst.state.databaseColumns.length).to.equal(numCols);
    inst.mergeColumns([extraColumn]);
    expect(inst.state.databaseColumns.length).to.equal(numCols + 1);
  });

});
