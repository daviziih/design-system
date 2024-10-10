import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'

import { fonts } from '@ignite-ui/tokens'

import '../../styles/global.css'

export default {
  title: 'Tokens/Font Families'
} as Meta

export function FontFamilies() {
  return (
    <div className="container">
      <h1 className="title">Font Families</h1>

      <TokensGrid tokens={fonts} />
    </div>
  )
}
