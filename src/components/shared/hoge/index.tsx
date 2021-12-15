import type { FC } from 'react'

type HogeViewProps = HogeProps

const HogeView: FC<HogeViewProps> = (props) => {
  return <div>{JSON.stringify(props)}</div>
}

type HogeProps = never

export const Hoge: FC<HogeProps> = (props) => {
  return <HogeView {...props} />
}
