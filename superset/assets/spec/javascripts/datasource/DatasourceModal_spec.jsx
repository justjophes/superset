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
import { Modal } from 'react-bootstrap';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import $ from 'jquery';
import sinon from 'sinon';

import DatasourceModal from '../../../src/datasource/DatasourceModal';
import DatasourceEditor from '../../../src/datasource/DatasourceEditor';
import mockDatasource from '../../fixtures/mockDatasource';

const props = {
  datasource: mockDatasource['7__table'],
  addSuccessToast: () => {},
  addDangerToast: () => {},
  onChange: sinon.spy(),
  show: true,
  onHide: () => {},
};

describe('DatasourceModal', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});

  let wrapper;
  let el;
  let ajaxStub;
  let inst;

  beforeEach(() => {
    ajaxStub = sinon.stub($, 'ajax');
    el = <DatasourceModal {...props} />;
    wrapper = shallow(el, { context: { store } }).dive();
    inst = wrapper.instance();
  });

  afterEach(() => {
    ajaxStub.restore();
  });

  it('is valid', () => {
    expect(React.isValidElement(el)).to.equal(true);
  });

  it('renders a Modal', () => {
    expect(wrapper.find(Modal)).to.have.lengthOf(1);
  });

  it('renders a DatasourceEditor', () => {
    expect(wrapper.find(DatasourceEditor)).to.have.lengthOf(1);
  });

  it('saves on confirm', () => {
    inst.onConfirmSave();
    expect(ajaxStub.calledOnce).to.equal(true);
  });
});
