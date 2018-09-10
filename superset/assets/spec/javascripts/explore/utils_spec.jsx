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
import URI from 'urijs';
import { getExploreUrlAndPayload, getExploreLongUrl } from '../../../src/explore/exploreUtils';

describe('exploreUtils', () => {
  const location = window.location;
  const formData = {
    datasource: '1__table',
  };
  const sFormData = JSON.stringify(formData);
  function compareURI(uri1, uri2) {
    expect(uri1.toString()).to.equal(uri2.toString());
  }

  describe('getExploreUrlAndPayload', () => {
    it('generates proper base url', () => {
      // This assertion is to show clearly the value of location.href
      // in the context of unit tests.
      expect(location.href).to.equal('about:blank');

      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'base',
        force: false,
        curUrl: 'http://superset.com',
      });
      compareURI(
        URI(url),
        URI('/superset/explore/'),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generates proper json url', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'json',
        force: false,
        curUrl: 'http://superset.com',
      });
      compareURI(
        URI(url),
        URI('/superset/explore_json/'),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generates proper json forced url', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'json',
        force: true,
        curUrl: 'superset.com',
      });
      compareURI(
        URI(url),
        URI('/superset/explore_json/')
          .search({ force: 'true' }),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generates proper csv URL', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'csv',
        force: false,
        curUrl: 'superset.com',
      });
      compareURI(
        URI(url),
        URI('/superset/explore_json/')
          .search({ csv: 'true' }),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generates proper standalone URL', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'standalone',
        force: false,
        curUrl: 'superset.com',
      });
      compareURI(
        URI(url),
        URI('/superset/explore/')
          .search({ standalone: 'true' }),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('preserves main URLs params', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'json',
        force: false,
        curUrl: 'superset.com?foo=bar',
      });
      compareURI(
        URI(url),
        URI('/superset/explore_json/')
          .search({ foo: 'bar' }),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generate proper save slice url', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'json',
        force: false,
        curUrl: 'superset.com?foo=bar',
      });
      compareURI(
        URI(url),
        URI('/superset/explore_json/')
          .search({ foo: 'bar' }),
      );
      expect(payload).to.deep.equals(formData);
    });
    it('generate proper saveas slice url', () => {
      const { url, payload } = getExploreUrlAndPayload({
        formData,
        endpointType: 'json',
        force: false,
        curUrl: 'superset.com?foo=bar',
      });
      compareURI(
        URI(url),
        URI('/superset/explore_json/')
          .search({ foo: 'bar' }),
      );
      expect(payload).to.deep.equals(formData);
    });
  });

  describe('getExploreLongUrl', () => {
    it('generates proper base url with form_data', () => {
      compareURI(
        URI(getExploreLongUrl(formData, 'base')),
        URI('/superset/explore/').search({ form_data: sFormData }),
      );
    });
  });
});
