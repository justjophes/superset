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
import ReactDOM from 'react-dom';
import $ from 'jquery';

import DeckGLContainer from './DeckGLContainer';
import { getExploreLongUrl } from '../../explore/exploreUtils';
import layerGenerators from './layers';


function deckMulti(slice, payload, setControlValue) {
  const subSlicesLayers = {};
  const fd = slice.formData;
  const render = () => {
    const viewport = {
      ...fd.viewport,
      width: slice.width(),
      height: slice.height(),
    };
    const layers = Object.keys(subSlicesLayers).map(k => subSlicesLayers[k]);
    ReactDOM.render(
      <DeckGLContainer
        mapboxApiAccessToken={payload.data.mapboxApiKey}
        viewport={viewport}
        layers={layers}
        mapStyle={fd.mapbox_style}
        setControlValue={setControlValue}
      />,
      document.getElementById(slice.containerId),
    );
  };
  render();
  payload.data.slices.forEach((subslice) => {
    // Filters applied to multi_deck are passed down to underlying charts
    // note that dashboard contextual information (filter_immune_slices and such) aren't
    // taken into consideration here
    const filters = [
      ...(subslice.form_data.filters || []),
      ...(fd.filters || []),
      ...(fd.extra_filters || []),
    ];
    const subsliceCopy = {
      ...subslice,
      form_data: {
        ...subslice.form_data,
        filters,
      },
    };

    const url = getExploreLongUrl(subsliceCopy.form_data, 'json');
    $.get(url, (data) => {
      const layer = layerGenerators[subsliceCopy.form_data.viz_type](subsliceCopy.form_data, data);
      subSlicesLayers[subsliceCopy.slice_id] = layer;
      render();
    });
  });
}
module.exports = deckMulti;
