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
import d3 from 'd3';
import '../../vendor/parallel_coordinates/d3.parcoords.css';
import './parallel_coordinates.css';
import { colorScalerFactory } from '../modules/colors';

d3.parcoords = require('../../vendor/parallel_coordinates/d3.parcoords.js');
d3.divgrid = require('../../vendor/parallel_coordinates/divgrid.js');

const $ = require('jquery');

function parallelCoordVis(slice, payload) {
  $('#code').attr('rows', '15');
  const fd = slice.formData;
  const data = payload.data;

  const metrics = fd.metrics.map(m => m.label || m);

  let cols = metrics;
  if (fd.include_series) {
    cols = [fd.series].concat(metrics);
  }

  const ttypes = {};
  ttypes[fd.series] = 'string';
  metrics.forEach(function (v) {
    ttypes[v] = 'number';
  });

  const secondaryMetric = fd.secondary_metric ? fd.secondary_metric.label : fd.secondary_metric;
  const colorScaler = fd.secondary_metric ?
    colorScalerFactory(fd.linear_color_scheme, data, d => d[secondaryMetric]) :
    () => 'grey';
  const color = d => colorScaler(d[secondaryMetric]);
  const container = d3.select(slice.selector);
  container.selectAll('*').remove();
  const effHeight = fd.show_datatable ? (slice.height() / 2) : slice.height();

  container.append('div')
      .attr('id', 'parcoords_' + slice.container_id)
      .style('height', effHeight + 'px')
      .classed('parcoords', true);

  const parcoords = d3.parcoords()('#parcoords_' + slice.container_id)
      .width(slice.width())
      .color(color)
      .alpha(0.5)
      .composite('darken')
      .height(effHeight)
      .data(data)
      .dimensions(cols)
      .types(ttypes)
      .render()
      .createAxes()
      .shadows()
      .reorderable()
      .brushMode('1D-axes');

  if (fd.show_datatable) {
      // create data table, row hover highlighting
    const grid = d3.divgrid();
    container.append('div')
        .style('height', effHeight + 'px')
        .datum(data)
        .call(grid)
        .classed('parcoords grid', true)
        .selectAll('.row')
        .on({
          mouseover(d) {
            parcoords.highlight([d]);
          },
          mouseout: parcoords.unhighlight,
        });
      // update data table on brush event
    parcoords.on('brush', function (d) {
      d3.select('.grid')
        .datum(d)
        .call(grid)
        .selectAll('.row')
        .on({
          mouseover(dd) {
            parcoords.highlight([dd]);
          },
          mouseout: parcoords.unhighlight,
        });
    });
  }
}

module.exports = parallelCoordVis;
