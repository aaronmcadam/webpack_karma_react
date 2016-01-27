import expect from 'expect';
import expectJSX from 'expect-jsx';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Component from './Component';

expect.extend(expectJSX);

describe('Component', () => {
  it('returns a greeting', () => {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Component name='Jimmy' />);
    const result = shallowRenderer.getRenderOutput();

    expect(result).toEqualJSX(<span>Hey, Jimmy!</span>);
  });
});
