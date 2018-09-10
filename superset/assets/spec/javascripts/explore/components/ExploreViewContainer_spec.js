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
// this test must be commented out because ChartContainer is now importing files
// from visualizations/*.js which are also importing css files which breaks in the testing env.

// import React from 'react';
// import { expect } from 'chai';
// import { describe, it } from 'mocha';
// import { shallow } from 'enzyme';

// import ExploreViewContainer
//   from '../../../../src/explore/components/ExploreViewContainer';
// import QueryAndSaveBtns
//   from '../../../../src/explore/components/QueryAndSaveBtns';
// import ControlPanelsContainer
//   from '../../../../src/explore/components/ControlPanelsContainer';
// import ChartContainer
//   from '../../../../src/explore/components/ChartContainer';

// describe('ExploreViewContainer', () => {
//   it('renders', () => {
//     expect(
//       React.isValidElement(<ExploreViewContainer />)
//     ).to.equal(true);
//   });

//   it('renders QueryAndSaveButtons', () => {
//     const wrapper = shallow(<ExploreViewContainer />);
//     expect(wrapper.find(QueryAndSaveBtns)).to.have.length(1);
//   });

//   it('renders ControlPanelsContainer', () => {
//     const wrapper = shallow(<ExploreViewContainer />);
//     expect(wrapper.find(ControlPanelsContainer)).to.have.length(1);
//   });

//   it('renders ChartContainer', () => {
//     const wrapper = shallow(<ExploreViewContainer />);
//     expect(wrapper.find(ChartContainer)).to.have.length(1);
//   });
// });
