import xw from 'xwind'
import { Button } from '@mantine/core';

const Index = () => (
  <div css={xw`grid justify-center items-center h-screen space-y-20`}>
    <div css={xw`space-y-20`}>
      <Button>
        Hello World
      </Button>
    </div>
  </div>
)

export default Index
