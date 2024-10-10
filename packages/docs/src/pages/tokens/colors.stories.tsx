import { Meta } from '@storybook/react'
import { ColorGrid } from '../../components/ColorsGrid'

import '../../styles/global.css'

export default {
  title: 'Tokens/Colors'
} as Meta

export function Colors() {
  return (
    <div className="container">
      <h1 className="title">Colors</h1>
      <p>Essas são as cores utilizadas no Ignite UI</p>

      <ColorGrid />
    </div>
  )
}
