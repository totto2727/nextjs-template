---
name: 'component'
root: '.'
output: '**/src/**/*'
ignore: []
questions:
  name: 'Please enter component name.'
---

# `{{inputs.name}}/index.tsx`

```typescript
import type { FC } from 'react'

type {{ inputs.name | pascal -}}ViewProps = {{ inputs.name | pascal -}}Props

const {{ inputs.name | pascal -}}View: FC<{{ inputs.name | pascal -}}ViewProps> = (props) => {
  return <div>{JSON.stringify(props)}</div>
}

export type {{ inputs.name | pascal -}}Props = never

export const {{ inputs.name | pascal }}: FC<{{ inputs.name | pascal -}}Props> = (props) => {
  return <{{ inputs.name | pascal -}}View {...props} />
}
```
