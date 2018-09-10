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
import { describe, it } from 'mocha';
import { expect } from 'chai';

import newComponentFactory from '../../../../src/dashboard/util/newComponentFactory';

import {
  CHART_TYPE,
  COLUMN_TYPE,
  DASHBOARD_GRID_TYPE,
  DASHBOARD_ROOT_TYPE,
  DIVIDER_TYPE,
  HEADER_TYPE,
  MARKDOWN_TYPE,
  NEW_COMPONENT_SOURCE_TYPE,
  ROW_TYPE,
  TABS_TYPE,
  TAB_TYPE,
} from '../../../../src/dashboard/util/componentTypes';

const types = [
  CHART_TYPE,
  COLUMN_TYPE,
  DASHBOARD_GRID_TYPE,
  DASHBOARD_ROOT_TYPE,
  DIVIDER_TYPE,
  HEADER_TYPE,
  MARKDOWN_TYPE,
  NEW_COMPONENT_SOURCE_TYPE,
  ROW_TYPE,
  TABS_TYPE,
  TAB_TYPE,
];

describe('newEntityFactory', () => {
  types.forEach(type => {
    it(`returns a new ${type}`, () => {
      const result = newComponentFactory(type);

      expect(result.type).to.equal(type);
      expect(typeof result.id).to.equal('string');
      expect(typeof result.meta).to.equal('object');
      expect(Array.isArray(result.children)).to.equal(true);
    });
  });

  it('adds passed meta data to the entity', () => {
    const banana = 'banana';
    const result = newComponentFactory(CHART_TYPE, { banana });
    expect(result.meta.banana).to.equal(banana);
  });
});
