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
/* eslint no-underscore-dangle: ["error", { "allow": ["", "__timestamp"] }] */

import React from 'react';
import ReactDOM from 'react-dom';

import { ArcLayer } from 'deck.gl';

import CategoricalDeckGLContainer from '../CategoricalDeckGLContainer';

import * as common from './common';

function getPoints(data) {
  const points = [];
  data.forEach((d) => {
    points.push(d.sourcePosition);
    points.push(d.targetPosition);
  });
  return points;
}

function getLayer(fd, payload, slice) {
  const data = payload.data.features;
  const sc = fd.color_picker;
  const tc = fd.target_color_picker;
  return new ArcLayer({
    id: `path-layer-${fd.slice_id}`,
    data,
    getSourceColor: d => d.sourceColor || d.color || [sc.r, sc.g, sc.b, 255 * sc.a],
    getTargetColor: d => d.targetColor || d.color || [tc.r, tc.g, tc.b, 255 * tc.a],
    strokeWidth: (fd.stroke_width) ? fd.stroke_width : 3,
    ...common.commonLayerProps(fd, slice),
  });
}

function deckArc(slice, payload, setControlValue) {
  const fd = slice.formData;
  let viewport = {
    ...fd.viewport,
    width: slice.width(),
    height: slice.height(),
  };

  if (fd.autozoom) {
    viewport = common.fitViewport(viewport, getPoints(payload.data.features));
  }

  ReactDOM.render(
    <CategoricalDeckGLContainer
      slice={slice}
      mapboxApiKey={payload.data.mapboxApiKey}
      setControlValue={setControlValue}
      viewport={viewport}
      getLayer={getLayer}
      payload={payload}
    />,
    document.getElementById(slice.containerId),
  );
}

module.exports = {
  default: deckArc,
  getLayer,
};
