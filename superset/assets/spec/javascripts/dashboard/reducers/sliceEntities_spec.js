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

import {
  FETCH_ALL_SLICES_FAILED,
  FETCH_ALL_SLICES_STARTED,
  SET_ALL_SLICES,
} from '../../../../src/dashboard/actions/sliceEntities';

import sliceEntitiesReducer from '../../../../src/dashboard/reducers/sliceEntities';

describe('sliceEntities reducer', () => {
  it('should return initial state', () => {
    expect(sliceEntitiesReducer({}, {})).to.deep.equal({});
  });

  it('should set loading when fetching slices', () => {
    expect(
      sliceEntitiesReducer(
        { isLoading: false },
        { type: FETCH_ALL_SLICES_STARTED },
      ).isLoading,
    ).to.equal(true);
  });

  it('should set slices', () => {
    const result = sliceEntitiesReducer(
      { slices: { a: {} } },
      { type: SET_ALL_SLICES, slices: { 1: {}, 2: {} } },
    );

    expect(result.slices).to.deep.equal({
      1: {},
      2: {},
      a: {},
    });
    expect(result.isLoading).to.equal(false);
  });

  it('should set an error on error', () => {
    const result = sliceEntitiesReducer(
      {},
      {
        type: FETCH_ALL_SLICES_FAILED,
        error: { responseJSON: { message: 'errorrr' } },
      },
    );
    expect(result.isLoading).to.equal(false);
    expect(result.errorMessage.indexOf('errorrr')).to.be.above(-1);
  });
});
