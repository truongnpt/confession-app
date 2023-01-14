import React from 'react';
import PropTypes from 'prop-types';
import ImageWraper from 'components/ImageWraper';
import styled from 'styled-components';
import { OverlayTrigger } from 'react-bootstrap';
import { Div } from 'components/Div';
import { Span } from '../Paragraph';

export function IconTechnology(props) {
  const { url, name } = props;
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 0, hide: 0 }}
      overlay={(props) => (
        <ToolTipContent
          variant="small"
          bg="primary"
          color="white"
          p="xs"
          {...props}
        >
          {name}
        </ToolTipContent>
      )}
    >
      <Div>
        <ImageWraper src={url} alt={name} width={40} height={40} />
      </Div>
    </OverlayTrigger>
  );
}

const ToolTipContent = styled(Span)`
  top: ${(props) => props.theme.space.xs} !important;
  border-radius: ${(props) => props.theme.borderRadius.box};
  padding: 3px 8px;

  ::after {
    content: ' ';
    position: absolute;
    bottom: 95%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent
      ${(props) => props.theme.colors.primary} transparent;
  }
`;

IconTechnology.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
};
