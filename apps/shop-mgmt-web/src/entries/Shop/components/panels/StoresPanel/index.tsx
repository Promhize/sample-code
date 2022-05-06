import React from 'react'
import { panelIds } from '../../../../../core/shop/modules/panels/utils'
import PanelRender from '../../PanelRenderer'
import PanelBody from './PanelBody'

const panelId = panelIds.STORES

const StoresPanel = () => <PanelRender panelId={panelId}><PanelBody /></PanelRender>

export default StoresPanel
