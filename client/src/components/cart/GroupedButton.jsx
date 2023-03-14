import React from 'react';

//MUI
import { ButtonGroup, Button,styled} from '@mui/material'

//CSS
const Component  = styled(ButtonGroup)`
    margin-top: 30px;
    margin-left: 15px;
`
const StyledButton = styled(Button)`
    border-radius: 20%
`

export default function GroupedButton() {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <StyledButton disabled>1</StyledButton>
        <StyledButton>+</StyledButton>
    </Component>
  )
}
