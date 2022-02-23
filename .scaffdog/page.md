---
name: 'component'
root: '.'
output: '**/src/**/*'
ignore: []
questions:
  name: 'Please enter component name.'
---

# `{{inputs.name}}/Presenter.tsx`

```typescript
import type { FC } from 'react'

export type {{ inputs.name | pascal -}}ViewProps = never

export const {{ inputs.name | pascal -}}View: FC<{{ inputs.name | pascal -}}ViewProps> = (props) => {
  return <div>{JSON.stringify(props)}</div>
}
```

# `{{inputs.name}}/index.tsx`

```typescript
import type { FC } from 'react'

import type { {{ inputs.name | pascal -}}ViewProps } from './Presenter'
import { {{ inputs.name | pascal -}}View } from './Presenter'

export type {{ inputs.name | pascal -}}Props = {{ inputs.name | pascal -}}ViewProps

const {{ inputs.name | pascal -}}: FC<{{ inputs.name | pascal -}}Props> = (props) => {
  return <{{ inputs.name | pascal -}}View {...props} />
}

export default {{ inputs.name | pascal -}}
```
