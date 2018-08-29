/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { shallow } from 'enzyme';
import { OverlayTrigger } from 'react-bootstrap';

import FixedOrMetricControl from
  '../../../../src/explore/components/controls/FixedOrMetricControl';
import MetricsControl from
  '../../../../src/explore/components/controls/MetricsControl';
import TextControl from
  '../../../../src/explore/components/controls/TextControl';
import ControlHeader from '../../../../src/explore/components/ControlHeader';

const defaultProps = {
  value: { },
};

describe('FixedOrMetricControl', () => {
  let wrapper;
  let inst;
  beforeEach(() => {
    wrapper = shallow(<FixedOrMetricControl {...defaultProps} />);
    inst = wrapper.instance();
  });

  it('renders a OverlayTrigger', () => {
    const controlHeader = wrapper.find(ControlHeader);
    expect(controlHeader).to.have.lengthOf(1);
    expect(wrapper.find(OverlayTrigger)).to.have.length(1);
  });

  it('renders a TextControl and a SelectControl', () => {
    const popOver = shallow(inst.renderPopover());
    expect(popOver.find(TextControl)).to.have.lengthOf(1);
    expect(popOver.find(MetricsControl)).to.have.lengthOf(1);
  });
});
