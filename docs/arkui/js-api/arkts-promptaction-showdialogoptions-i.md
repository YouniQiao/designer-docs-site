# ShowDialogOptions

对话框的选项。

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LevelMode,ImmersiveMode,LevelOrder } from '@kit.ArkUI';
```

## enableHoverMode

```TypeScript
enableHoverMode?: boolean
```

是否响应悬停态，值为true时，响应悬停态。 <br />默认值：false，默认不响应。 <br />**说明：** <br />PC/2in1设备弹窗默认显示在上半屏，在enableHoverMode设置为true时，可以通过设置hoverModeArea参数显示在下半屏。 其他设备弹窗在enableHoverMode设置为true时默认显示在下半屏，可以通过设置hoverModeArea参数显示在上半屏。

**Type:** boolean

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelMode

```TypeScript
levelMode?: LevelMode
```

设置对话框显示层级。 <br />**说明：** <br />- 默认值：LevelMode.OVERLAY <br />- 当且仅当showInSubWindow属性设置为false时生效。

**Type:** LevelMode

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shadow

```TypeScript
shadow?: ShadowOptions | ShadowStyle
```

设置对话框背板的阴影。 <br /> 当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。

**Type:** ShadowOptions | ShadowStyle

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## title

```TypeScript
title?: string | Resource
```

标题文本。<br/>默认值：undefined，取值为undefined默认不显示标题。

**Type:** string | Resource

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

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

## maskRect

```TypeScript
maskRect?: Rectangle
```

对话框遮蔽层区域，在遮蔽层区域内的事件不透传，在遮蔽层区域外的事件透传。 <br/>默认值：{ x: 0, y: 0, width: '100%', height: '100%' } <br/>**说明：** <br/>showInSubWindow为true时，maskRect不生效。 <br/>maskRect在设置[Rectangle](arkui-ts/ts-methods-alert-dialog-box.md#rectangle8类型说明)中的部分属性后，若未设置其余的属性， 则其余属性的默认值为0。

**Type:** Rectangle

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyleOptions

```TypeScript
backgroundBlurStyleOptions?: BackgroundBlurStyleOptions
```

背景模糊效果。默认值请参考BackgroundBlurStyleOptions类型说明。

**Type:** BackgroundBlurStyleOptions

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelUniqueId

```TypeScript
levelUniqueId?: number
```

置页面级对话框需要显示的层级下的[节点UniqueID](js-apis-arkui-frameNode.md#getuniqueid12)。 <br/>取值范围：大于等于0的数字。 <br />**说明：** <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidDisappear

```TypeScript
onDidDisappear?: Callback<void>
```

对话框消失后的事件回调。 <br />**说明：** <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。

**Type:** Callback<void>

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelOrder

```TypeScript
levelOrder?: LevelOrder
```

设置对话框显示的顺序。 <br />**说明：** <br />- 默认值：LevelOrder.clamp(0) <br />- 不支持动态刷新顺序。

**Type:** LevelOrder

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
backgroundColor?: ResourceColor
```

对话框背板颜色。 <br/>默认值：Color.Transparent <br/>**说明：** <br/>backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.NONE，即可取消模糊。

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## buttons

```TypeScript
buttons?: Array<Button>
```

对话框中按钮的数组，结构为：{text:'button',&nbsp;color:&nbsp;'\#666666'}，支持大于1个按钮。

**Type:** Array<Button>

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: Offset
```

对话框相对alignment所在位置的偏移量。 <br/>默认值：{&nbsp;dx:&nbsp;0&nbsp;,&nbsp;dy:&nbsp;0&nbsp;}

**Type:** Offset

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## immersiveMode

```TypeScript
immersiveMode?: ImmersiveMode
```

设置页面内对话框蒙层效果。 <br />**说明：** <br />- 默认值：ImmersiveMode.DEFAULT <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。

**Type:** ImmersiveMode

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyle

```TypeScript
backgroundBlurStyle?: BlurStyle
```

对话框背板模糊材质。 <br/>默认值：从API版本26.0.0开始，为BlurStyle.NONE，API版本26.0.0之前，为BlurStyle.COMPONENT_ULTRA_THICK。 <br/>**说明：** <br/>设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。

**Type:** BlurStyle

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidAppear

```TypeScript
onDidAppear?: Callback<void>
```

对话框弹出后的事件回调。 <br />**说明：** <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。 <br />2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。 <br />3.快速点击弹出，关闭对话框时，onWillDisappear在onDidAppear前生效。 <br/>4.对话框入场动效未完成时彻底关闭对话框，动效打断，onDidAppear不会触发。

**Type:** Callback<void>

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## hoverModeArea

```TypeScript
hoverModeArea?: HoverModeAreaType
```

设置悬停态下对话框的默认展示区域。 <br />默认值：HoverModeAreaType.BOTTOM_SCREEN

**Type:** HoverModeAreaType

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## message

```TypeScript
message?: string | Resource
```

内容文本。<br/>默认值：undefined，取值为undefined默认不显示内容。

**Type:** string | Resource

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## showInSubWindow

```TypeScript
showInSubWindow?: boolean
```

某对话框需要显示在主窗口之外时，是否在子窗口显示此对话框。值为true表示在子窗口显示对话框。 <br/>默认值：false，对话框显示在应用内，而非独立子窗口。 <br/>**说明：** showInSubWindow为true的对话框无法触发显示另一个showInSubWindow为true的对话框。

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundEffect

```TypeScript
backgroundEffect?: BackgroundEffectOptions
```

背景效果参数。默认值请参考BackgroundEffectOptions类型说明。

**Type:** BackgroundEffectOptions

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillDisappear

```TypeScript
onWillDisappear?: Callback<void>
```

对话框退出动效前的事件回调。 <br />**说明：** <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。

**Type:** Callback<void>

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillAppear

```TypeScript
onWillAppear?: Callback<void>
```

对话框显示动效前的事件回调。 <br />**说明：** <br />1.正常时序依次为：onWillAppear>>onDidAppear>>onWillDisappear>>onDidDisappear。 <br />2.在onWillAppear内设置改变对话框显示效果的回调事件，二次弹出生效。

**Type:** Callback<void>

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alignment

```TypeScript
alignment?: DialogAlignment
```

对话框在竖直方向上的对齐方式。 <br/>默认值：DialogAlignment.Default <br/>**说明：** <br/>若在UIExtension中设置showInSubWindow为true, 弹窗将基于UIExtension的宿主窗口对齐。

**Type:** DialogAlignment

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

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

## systemMaterial

```TypeScript
systemMaterial?: SystemUiMaterial
```

设置弹窗的系统材质。 <br />**说明：** <br/>- 默认值：[ImmersiveOptions](arkts-apis-uimaterial.md#immersiveoptions)的style为ImmersiveStyle.ULTRA_THICK的 [ImmersiveMaterial](arkts-apis-uimaterial.md#immersivematerial)对象。设置undefined时与默认值保持一致。 <br/>- 不同的材质具有不同的效果，该接口影响 背景色[backgroundColor](arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、 背景模糊[backgroundBlurStyle](arkui-ts/ts-universal-attributes-background.md#backgroundblurstyle9)、 背景效果[backgroundEffect](arkui-ts/ts-universal-attributes-background.md#backgroundeffect11)、 阴影[shadow](arkui-ts/ts-universal-attributes-image-effect.md#shadow)，不建议与上述接口一起使用。

**Type:** SystemUiMaterial

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isModal

```TypeScript
isModal?: boolean
```

对话框是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与对话框周围其他控件进行交互，即蒙层区域无法事件透传。 值为false表示为非模态窗口且无蒙层，可以与对话框周围其他控件进行交互。 <br/>默认值：true

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

