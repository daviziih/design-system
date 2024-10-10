import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'

import { fontWeights } from '@ignite-ui/tokens'

import '../../styles/global.css'

export default {
  title: 'Tokens/Font Weights'
} as Meta

export function FontWeights() {
  return (
    <div className="container">
      <h1 className="title">Font Weights</h1>

      <TokensGrid tokens={fontWeights} />
    </div>
  )
}
