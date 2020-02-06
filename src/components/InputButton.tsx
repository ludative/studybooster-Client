import React from 'react'
import { Box, Input, Button } from '@material-ui/core'

const InputButton: React.FC = () => (
  <Box>
    <Input type="text" />
    <Button color="primary">확인</Button>
  </Box>
)

export default InputButton;