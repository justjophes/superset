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
import { isTruthy, optionFromValue } from '../../../src/utils/common';

describe('utils/common', () => {
  describe('isTruthy', () => {
    it('evals false-looking strings properly', () => {
      expect(isTruthy('f')).to.equal(false);
      expect(isTruthy('false')).to.equal(false);
      expect(isTruthy('no')).to.equal(false);
      expect(isTruthy('n')).to.equal(false);
      expect(isTruthy('F')).to.equal(false);
      expect(isTruthy('False')).to.equal(false);
      expect(isTruthy('NO')).to.equal(false);
      expect(isTruthy('N')).to.equal(false);
    });
    it('evals true-looking strings properly', () => {
      expect(isTruthy('t')).to.equal(true);
      expect(isTruthy('true')).to.equal(true);
      expect(isTruthy('yes')).to.equal(true);
      expect(isTruthy('y')).to.equal(true);
      expect(isTruthy('Y')).to.equal(true);
      expect(isTruthy('True')).to.equal(true);
      expect(isTruthy('Yes')).to.equal(true);
      expect(isTruthy('YES')).to.equal(true);
    });
    it('evals bools properly', () => {
      expect(isTruthy(false)).to.equal(false);
      expect(isTruthy(true)).to.equal(true);
    });
    it('evals ints properly', () => {
      expect(isTruthy(0)).to.equal(false);
      expect(isTruthy(1)).to.equal(true);
    });
    it('evals constants properly', () => {
      expect(isTruthy(null)).to.equal(false);
      expect(isTruthy(undefined)).to.equal(false);
    });
    it('string auto is false', () => {
      expect(isTruthy('false')).to.equal(false);
    });
  });
  describe('optionFromValue', () => {
    it('converts values as expected', () => {
      expect(optionFromValue(false)).to.deep.equal({ value: false, label: '<false>' });
      expect(optionFromValue(true)).to.deep.equal({ value: true, label: '<true>' });
      expect(optionFromValue(null)).to.deep.equal({ value: '<NULL>', label: '<NULL>' });
      expect(optionFromValue('')).to.deep.equal({ value: '', label: '<empty string>' });
      expect(optionFromValue('foo')).to.deep.equal({ value: 'foo', label: 'foo' });
      expect(optionFromValue(5)).to.deep.equal({ value: 5, label: '5' });
    });
  });
});
