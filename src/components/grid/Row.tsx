import { AlignItemsProperty, JustifyContentProperty } from 'csstype';
import { get } from 'lodash';
import { math } from 'polished';
import styled from 'styled-components';

interface RowProps {
  align?: JustifyContentProperty;
  valign?: AlignItemsProperty;
  reverse?: boolean;
  wrap?: boolean;
  gutter?: number | string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${props => (props.wrap === false ? 'nowrap' : 'wrap')};
  flex-direction: ${props => (props.reverse === true ? 'row-reverse' : 'row')};

  align-items: ${props => props.valign || 'stretch'};
  justify-content: ${props => props.align || 'flex-start'};

  margin-left: ${props =>
    math(`${props.gutter || get(props, 'theme.gutter', 30)}/-2px`)};
  margin-right: ${props =>
    math(`${props.gutter || get(props, 'theme.gutter', 30)}/-2px`)};
`;
