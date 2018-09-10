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
import sinon from 'sinon';
import $ from 'jquery';
import * as exploreUtils from '../../../src/explore/exploreUtils';
import * as actions from '../../../src/chart/chartAction';

describe('chart actions', () => {
  let dispatch;
  let urlStub;
  let ajaxStub;
  let request;

  beforeEach(() => {
    dispatch = sinon.spy();
    urlStub = sinon.stub(exploreUtils, 'getExploreUrlAndPayload')
      .callsFake(() => ({ url: 'mockURL', payload: {} }));
    ajaxStub = sinon.stub($, 'ajax');
  });

  afterEach(() => {
    urlStub.restore();
    ajaxStub.restore();
  });

  it('should handle query timeout', () => {
    ajaxStub.rejects({ statusText: 'timeout' });
    request = actions.runQuery({});
    const promise = request(dispatch, sinon.stub().returns({
      explore: {
        controls: [],
      },
    }));
    promise.then(() => {
      expect(dispatch.callCount).to.equal(3);
      expect(dispatch.args[0][0].type).to.equal(actions.CHART_UPDATE_TIMEOUT);
    });
  });
});
