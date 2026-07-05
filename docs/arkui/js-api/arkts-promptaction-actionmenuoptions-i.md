# ActionMenuOptions

操作菜单的选项。

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LevelMode,ImmersiveMode,LevelOrder } from '@kit.ArkUI';
```

## levelMode

```TypeScript
levelMode?: LevelMode
```

设置菜单显示层级。 <br />**说明：** <br />- 默认值：LevelMode.OVERLAY <br />- 当且仅当showInSubWindow属性设置为false时生效。

**Type:** LevelMode

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## buttons

```TypeScript
buttons: [
            Button,
            Button?,
            Button?,
            Button?,
            Button?,
            Button?
        ]
```

菜单中菜单项按钮的数组，结构为：{text:'button',&nbsp;color:&nbsp;'\#666666'}，支持1-6个按钮。按钮数量大于6个时，仅显示前6个按钮，之后的按钮不显示。

**Type:** [
            Button,
            Button?,
            Button?,
            Button?,
            Button?,
            Button?
        ]

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## immersiveMode

```TypeScript
immersiveMode?: ImmersiveMode
```

设置页面内菜单蒙层效果。 <br />**说明：** <br />- 默认值：ImmersiveMode.DEFAULT <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。

**Type:** ImmersiveMode

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidAppear

```TypeScript
onDidAppear?: Callback<void>
```

菜单弹出后的事件回调。 <br />**说明：** <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。 <br />2.快速点击弹出，关闭菜单时，onWillDisappear在onDidAppear前生效。

**Type:** Callback<void>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: string | Resource
```

标题文本。 <br/>默认值：undefined，取值为undefined默认不显示标题。

**Type:** string | Resource

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## showInSubWindow

```TypeScript
showInSubWindow?: boolean
```

某操作菜单需要显示在主窗口之外时，是否在子窗口显示此菜单。值为true表示在子窗口显示菜单。 <br/>默认值：false，在子窗口不显示菜单。 <br/>**说明：** <br/> - showInSubWindow为true的菜单无法触发显示另一个showInSubWindow为true的菜单。 <br/> - 若在UIExtension中设置showInSubWindow为true, 菜单将基于UIExtension的宿主窗口对齐。

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## distortionMode

```TypeScript
distortionMode?: DistortionMode
```

Sets the distortion animation Mode of the dialog.

**Type:** DistortionMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onWillDisappear

```TypeScript
onWillDisappear?: Callback<void>
```

菜单退出动效前的事件回调。 <br />**说明：** <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。

**Type:** Callback<void>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillAppear

```TypeScript
onWillAppear?: Callback<void>
```

菜单显示动效前的事件回调。 <br />**说明：** <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。

**Type:** Callback<void>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## edgeLightMode

```TypeScript
edgeLightMode?: EdgeLightMode
```

Sets the edgeLight animation Mode of the dialog.

**Type:** EdgeLightMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## onDidDisappear

```TypeScript
onDidDisappear?: Callback<void>
```

菜单消失后的事件回调。 <br />**说明：** <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。

**Type:** Callback<void>

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelUniqueId

```TypeScript
levelUniqueId?: number
```

设置页面级菜单需要显示的层级下的[节点UniqueID](js-apis-arkui-frameNode.md#getuniqueid12)。 <br/>取值范围：大于等于0的数字。 <br />**说明：** <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## systemMaterial

```TypeScript
systemMaterial?: SystemUiMaterial
```

设置弹窗的系统材质。 <br/>默认值：[ImmersiveOptions](arkts-apis-uimaterial.md#immersiveoptions)的style为 ImmersiveStyle.ULTRA_THICK的[ImmersiveMaterial](arkts-apis-uimaterial.md#immersivematerial)对象。 设置undefined时与默认值保持一致。不同的材质具有不同的效果，可以影响弹窗的背景色、边框、阴影等视觉属性。

**Type:** SystemUiMaterial

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isModal

```TypeScript
isModal?: boolean
```

菜单是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与菜单周围其他控件进行交互，即蒙层区域无法事件透传。 值为false表示为非模态窗口且无蒙层，可以与菜单周围其他控件进行交互。 <br/>默认值：true

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

