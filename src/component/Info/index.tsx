import Image from 'next/image'
import InfoSVG from './info.svg'

export function InfoIcon() {
  return <Image src={InfoSVG} alt={''} />
}
