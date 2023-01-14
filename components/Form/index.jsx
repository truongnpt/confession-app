import styled from 'styled-components';
import { compose, typography, space, color } from 'styled-system';
import { default as BootstrapForm } from 'react-bootstrap/Form';
import { default as BootstrapFormLabel } from 'react-bootstrap/FormLabel';
import { default as BootstrapFormControl } from 'react-bootstrap/FormControl';
import { default as BootstrapFormGroup } from 'react-bootstrap/FormGroup';
import { default as BootstrapFormFloating } from 'react-bootstrap/Floating';

export const Form = styled(BootstrapForm)`
  ${compose(typography, space, color)}
`;

export const FormLabel = styled(BootstrapFormLabel)`
  ${compose(typography, space, color)}
`;

export const FormControl = styled(BootstrapFormControl)`
  ${compose(typography, space, color)}
`;

export const FormGroup = styled(BootstrapFormGroup)`
  ${compose(typography, space, color)}
`;

export const FormFloating = styled(BootstrapFormFloating)`
  ${compose(typography, space, color)}
`;
