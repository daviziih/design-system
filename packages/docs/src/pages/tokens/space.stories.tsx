import { Meta } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'

import { space } from '@ignite-ui/tokens'

import '../../styles/global.css'

export default {
  title: 'Tokens/Space'
} as Meta

export function Space() {
  return (
    <div className="container">
      <h1 className="title">Space</h1>

      <TokensGrid tokens={space} hasRemValue />
    </div>
  )
}
