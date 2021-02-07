import React from 'react';
import styled from 'styled-components';

const StyledComponent = (component: React.ComponentProps<any>) => styled(component)`
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px 0;
  height: 100%;
`;

export default StyledComponent;
