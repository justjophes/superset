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
import { it, describe } from 'mocha';
import { expect } from 'chai';
import { getPlaySliderParams } from '../../../src/modules/time';

describe('getPlaySliderParams', () => {
  it('is a function', () => {
    assert.isFunction(getPlaySliderParams);
  });

  it('handles durations', () => {
    const timestamps = [
      new Date('2018-01-01'),
      new Date('2018-01-02'),
      new Date('2018-01-03'),
      new Date('2018-01-04'),
      new Date('2018-01-05'),
      new Date('2018-01-06'),
      new Date('2018-01-07'),
      new Date('2018-01-08'),
      new Date('2018-01-09'),
      new Date('2018-01-10'),
    ].map(d => d.getTime());
    const { start, end, step, values, disabled } = getPlaySliderParams(timestamps, 'P2D');
    expect(new Date(start)).to.eql(new Date('2018-01-01'));
    expect(new Date(end)).to.eql(new Date('2018-01-11'));
    expect(step).to.equal(2 * 24 * 60 * 60 * 1000);
    expect(values.map(v => new Date(v))).to.eql([
      new Date('2018-01-01'),
      new Date('2018-01-03'),
    ]);
    expect(disabled).to.equal(false);
  });

  it('handles intervals', () => {
    const timestamps = [
      new Date('2018-01-01'),
      new Date('2018-01-02'),
      new Date('2018-01-03'),
      new Date('2018-01-04'),
      new Date('2018-01-05'),
      new Date('2018-01-06'),
      new Date('2018-01-07'),
      new Date('2018-01-08'),
      new Date('2018-01-09'),
      new Date('2018-01-10'),
    ].map(d => d.getTime());
    // 1970-01-03 was a Saturday
    const { start, end, step, values, disabled } = getPlaySliderParams(timestamps, 'P1W/1970-01-03T00:00:00Z');
    expect(new Date(start)).to.eql(new Date('2017-12-30'));  // Saturday
    expect(new Date(end)).to.eql(new Date('2018-01-13'));  // Saturday
    expect(step).to.equal(7 * 24 * 60 * 60 * 1000);
    expect(values.map(v => new Date(v))).to.eql([
      new Date('2017-12-30'),
      new Date('2018-01-06'),
    ]);
    expect(disabled).to.equal(false);
  });
});
