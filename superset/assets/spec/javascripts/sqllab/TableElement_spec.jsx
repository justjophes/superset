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
import { mount, shallow } from 'enzyme';
import { describe, it } from 'mocha';
import { expect } from 'chai';

import Link from '../../../src/SqlLab/components/Link';
import TableElement from '../../../src/SqlLab/components/TableElement';
import ColumnElement from '../../../src/SqlLab/components/ColumnElement';
import { mockedActions, table } from './fixtures';

describe('TableElement', () => {
  const mockedProps = {
    actions: mockedActions,
    table,
    timeout: 0,
  };
  it('renders', () => {
    expect(
      React.isValidElement(<TableElement />),
    ).to.equal(true);
  });
  it('renders with props', () => {
    expect(
      React.isValidElement(<TableElement {...mockedProps} />),
    ).to.equal(true);
  });
  it('has 2 Link elements', () => {
    const wrapper = shallow(<TableElement {...mockedProps} />);
    expect(wrapper.find(Link)).to.have.length(2);
  });
  it('has 14 columns', () => {
    const wrapper = shallow(<TableElement {...mockedProps} />);
    expect(wrapper.find(ColumnElement)).to.have.length(14);
  });
  it('mounts', () => {
    mount(<TableElement {...mockedProps} />);
  });
  it('sorts columns', () => {
    const wrapper = mount(<TableElement {...mockedProps} />);
    expect(wrapper.state().sortColumns).to.equal(false);
    expect(wrapper.find(ColumnElement).first().props().column.name).to.equal('id');
    wrapper.find('.sort-cols').simulate('click');
    expect(wrapper.state().sortColumns).to.equal(true);
    expect(wrapper.find(ColumnElement).first().props().column.name).to.equal('last_login');
  });
  it('calls the collapseTable action', () => {
    const wrapper = mount(<TableElement {...mockedProps} />);
    expect(mockedActions.collapseTable.called).to.equal(false);
    wrapper.find('.table-name').simulate('click');
    expect(mockedActions.collapseTable.called).to.equal(true);
  });
  it('removes the table', () => {
    const wrapper = mount(<TableElement {...mockedProps} />);
    expect(wrapper.state().expanded).to.equal(true);
    wrapper.find('.table-remove').simulate('click');
    expect(wrapper.state().expanded).to.equal(false);
    setTimeout(() => {
      expect(mockedActions.removeTable.called).to.equal(true);
    }, 10);
  });
});
