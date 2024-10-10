import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'

import { lineHeights } from '@ignite-ui/tokens'

import '../../styles/global.css'

export default {
  title: 'Tokens/Line Heights'
} as Meta

export function LineHeights() {
  return (
    <div className="container">
      <h1 className="title">Line Heights</h1>

      <TokensGrid tokens={lineHeights} />
    </div>
  )
}
