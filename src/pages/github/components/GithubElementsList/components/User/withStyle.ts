import React from 'react';
import styled from 'styled-components';

const StyledComponent = (component: React.ComponentProps<any>) => styled(component)`
  border: solid 1px;
  height: 100%;
`;

export default StyledComponent;
