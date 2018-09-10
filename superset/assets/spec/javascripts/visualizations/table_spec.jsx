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
import $ from 'jquery';
import '../../helpers/browser';
import tableVis from '../../../src/visualizations/table';

describe('table viz', () => {
  const div = '<div id="slice-container"><div class="dataTables_wrapper"></div></div>';
  const baseSlice = {
    selector: '#slice-container',
    formData: {
      metrics: ['count'],
      timeseries_limit_metric: null,
    },
    datasource: {
      verbose_map: {},
    },
    getFilters: () => ({}),
    removeFilter() {},
    addFilter() {},
    height: () => 0,
  };
  const basePayload = {
    data: {
      records: [
        { gender: 'boy', count: 39245 },
        { gender: 'girl', count: 36446 },
      ],
      columns: ['gender', 'count'],
    },
  };

  it('renders into a container', () => {
    $('body').html(div);
    const container = $(baseSlice.selector);
    expect(container.length).to.equal(1);
  });

  it('renders header and body datatables in container', () => {
    $('body').html(div);
    const container = $(baseSlice.selector);

    expect(container.find('.dataTable').length).to.equal(0);
    tableVis(baseSlice, basePayload);
    expect(container.find('.dataTable').length).to.equal(2);

    const tableHeader = container.find('.dataTable')[0];
    expect($(tableHeader).find('thead tr').length).to.equal(1);
    expect($(tableHeader).find('th').length).to.equal(2);

    const tableBody = container.find('.dataTable')[1];
    expect($(tableBody).find('tbody tr').length).to.equal(2);
    expect($(tableBody).find('th').length).to.equal(2);
  });

  it('hides the sort by column', () => {
    $('body').html(div);
    const slice = { ...baseSlice };
    slice.formData = { ...baseSlice.formData,
      timeseries_limit_metric: {
        label: 'SUM(sum_boys)',
      },
    };
    const payload = {
      data: {
        records: [
          { gender: 'boy', count: 39245, 'SUM(sum_boys)': 48133355 },
          { gender: 'girl', count: 36446, 'SUM(sum_boys)': 0 },
        ],
        columns: ['gender', 'count', 'SUM(sum_boys)'],
      },
    };
    tableVis(slice, payload);

    const container = $(slice.selector);
    const tableHeader = container.find('.dataTable')[0];
    expect($(tableHeader).find('th').length).to.equal(2);
  });

  it('works with empty list for sort by', () => {
    $('body').html(div);
    const slice = { ...baseSlice };
    slice.formData = { ...baseSlice.formData,
      timeseries_limit_metric: [],
    };
    const payload = {
      data: {
        records: [
          { gender: 'boy', count: 39245, 'SUM(sum_boys)': 48133355 },
          { gender: 'girl', count: 36446, 'SUM(sum_boys)': 0 },
        ],
        columns: ['gender', 'count', 'SUM(sum_boys)'],
      },
    };
    tableVis(slice, payload);

    const container = $(slice.selector);
    const tableBody = container.find('.dataTable')[1];
    expect($(tableBody).find('th').length).to.equal(3);
  });
});
