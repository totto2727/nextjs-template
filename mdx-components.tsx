import type { Component } from 'react'

export function useMDXComponents(
  components?: Record<string, string | Component | Component[]>,
) {
  return { ...components }
}
