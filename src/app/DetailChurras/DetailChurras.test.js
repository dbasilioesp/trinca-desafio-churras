import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from "react-router-dom";

import DetailChurras from './DetailChurras';

xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={['/churras/detail/1']}>
      <DetailChurras />
    </MemoryRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
