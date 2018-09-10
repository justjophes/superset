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

import { formatLabel } from '../../../src/visualizations/nvd3_vis';

describe('nvd3 viz', () => {
  const verboseMap = {
    foo: 'Foo',
    bar: 'Bar',
  };
  describe('formatLabel', () => {
    it('formats simple labels', () => {
      expect(formatLabel('foo')).to.equal('foo');
      expect(formatLabel(['foo'])).to.equal('foo');
      expect(formatLabel(['foo', 'bar'])).to.equal('foo, bar');
    });
    it('formats simple labels with lookups', () => {
      expect(formatLabel('foo', verboseMap)).to.equal('Foo');
      expect(formatLabel('baz', verboseMap)).to.equal('baz');
      expect(formatLabel(['foo'], verboseMap)).to.equal('Foo');
      expect(formatLabel(['foo', 'bar', 'baz'], verboseMap)).to.equal('Foo, Bar, baz');
    });
    it('deals with time shift properly', () => {
      expect(formatLabel(['foo', '1 hour offset'], verboseMap)).to.equal('Foo, 1 hour offset');
      expect(formatLabel(['foo', 'bar', 'baz', '2 hours offset'], verboseMap)).to.equal('Foo, Bar, baz, 2 hours offset');
    });
  });
});
