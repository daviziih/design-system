import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'

import { fontSizes } from '@ignite-ui/tokens'

import '../../styles/global.css'

export default {
  title: 'Tokens/Font Sizes'
} as Meta

export function FontSizes() {
  return (
    <div className="container">
      <h1 className="title">Font Sizes</h1>

      <TokensGrid tokens={fontSizes} hasRemValue />
    </div>
  )
}
