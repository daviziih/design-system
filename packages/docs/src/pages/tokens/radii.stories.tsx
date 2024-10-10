import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'

import { radii } from '@ignite-ui/tokens'

import '../../styles/global.css'

export default {
  title: 'Tokens/Radii'
} as Meta

export function Radii() {
  return (
    <div className="container">
      <h1 className="title">Radii</h1>

      <TokensGrid tokens={radii} />
    </div>
  )
}
