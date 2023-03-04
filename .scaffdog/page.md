---
name: 'page'
root: 'app'
output: '**/app/**/*'
ignore: []
questions:
  dir: 'Please enter directory name.'
---

# `{{ inputs.dir }}/page.tsx`

```tsx
export const metadata = {}

export default function Page() {
  return <div></div>
}
```
