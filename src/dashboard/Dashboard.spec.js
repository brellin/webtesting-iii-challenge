import React from 'react'
import { render } from 'react-testing-library'
import Dashboard from './Dashboard';

// Test away

describe('<Dashboard />', () => {

    it('should run without crashing', () => {

        render(<Dashboard />)

    });

});
