---
name: 'component'
root: './'
output: '**/component/**/*'
ignore: []
questions:
  name: 'Please enter component name.(Convert to Pascal case.)'
---

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
import styles from './index.module.css'

export type {{ inputs.name | pascal }}Props = {

}

export function {{ inputs.name | pascal }}({...props}: {{ inputs.name | pascal }}Props) {
  return (
    <div className={styles['wrapper']}>

    </div>
  )
}
```

# `{{ inputs.name | pascal }}/index.module.css`

```css
.wrapper {
}
```

# `{{ inputs.name | pascal }}/index.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { {{ inputs.name | pascal }} } from '.'

const meta: Meta<typeof {{ inputs.name | pascal }}> = { component: {{ inputs.name | pascal }} }
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
```
