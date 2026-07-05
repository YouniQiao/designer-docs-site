# BaseDialogOptions

弹窗的选项。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LevelMode,ImmersiveMode,LevelOrder } from '@kit.ArkUI';
```

## enableHoverMode

```TypeScript
enableHoverMode?: boolean
```

是否响应悬停态，值为true时，响应悬停态。 <br />默认值：false，默认不响应。 <br />**说明：** <br />PC/2in1设备弹窗默认显示在上半屏，在enableHoverMode设置为true。 可以通过设置hoverModeArea参数显示在下半屏。其他设备弹窗在enableHoverMode设置为true时默认显示在下半屏，可以通过设置hoverModeArea参数显示在上半屏。

**Type:** boolean

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelMode

```TypeScript
levelMode?: LevelMode
```

设置弹窗显示层级。 <br />**说明：** <br />- 默认值：LevelMode.OVERLAY <br />- 当且仅当showInSubWindow属性设置为false时生效。

**Type:** LevelMode

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## keyboardAvoidDistance

```TypeScript
keyboardAvoidDistance?: LengthMetrics
```

弹窗避让键盘后，和键盘之间距离。 <br />**说明：** <br/>- 默认值：16vp <br />- 默认单位：vp <br />- 当且仅当keyboardAvoidMode属性设置为DEFAULT时生效。

**Type:** LengthMetrics

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maskColor

```TypeScript
maskColor?: ResourceColor
```

自定义蒙层颜色。<br>默认值: 0x33000000

**Type:** ResourceColor

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillDismiss

```TypeScript
onWillDismiss?: Callback<DismissDialogAction>
```

交互式关闭回调函数。 <br/>**说明：** <br/>1.当用户执行点击遮障层关闭、侧滑（左滑/右滑）、三键back、键盘ESC关闭交互操作时，如果注册该回调函数，则不会立刻关闭弹窗。 在回调函数中可以通过reason得到阻拦关闭弹窗的操作类型，从而根据原因选择是否能关闭弹窗。当前组件返回的reason中，暂不支持CLOSE_BUTTON的枚举值。 <br/>2.在onWillDismiss回调中，不能再做onWillDismiss拦截。

**Type:** Callback<DismissDialogAction>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

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

## displayModeInSubWindow

```TypeScript
displayModeInSubWindow?: DialogDisplayMode
```

弹窗在子窗口中的显示模式。 <br/>默认值：DialogDisplayMode.SCREEN_BASED <br/>**说明：** <br/>仅当showInSubWindow设置为true时生效。

**Type:** DialogDisplayMode

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maskRect

```TypeScript
maskRect?: Rectangle
```

弹窗遮蔽层区域。 <br/>默认值：{ x: 0, y: 0, width: '100%', height: '100%' } <br/>**说明：** <br/>showInSubWindow为true时，maskRect不生效。 <br/>maskRect在设置[Rectangle](arkui-ts/ts-methods-alert-dialog-box.md#rectangle8类型说明)中的部分属性后，若未设置其余的属性，则其余属性的默认值为0。

**Type:** Rectangle

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

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

## dialogTransition

```TypeScript
dialogTransition?: TransitionEffect
```

设置弹窗内容显示的过渡效果。默认无动效。

**Type:** TransitionEffect

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## autoCancel

```TypeScript
autoCancel?: boolean
```

点击遮障层时，是否关闭弹窗，true表示关闭弹窗。false表示不关闭弹窗。<br/>默认值：true

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelUniqueId

```TypeScript
levelUniqueId?: number
```

设置页面级弹窗需要显示的层级下的[节点UniqueID](js-apis-arkui-frameNode.md#getuniqueid12)。 <br/>取值范围：大于等于0的数字。 <br />**说明：** <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。

**Type:** number

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidDisappear

```TypeScript
onDidDisappear?: () => void
```

弹窗消失后的事件回调。 <br />**说明：** <br />正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 <br/>当弹窗退场动画未完成时（例如：同时触发弹窗关闭和页面切换），该回调不会触发。

**Type:** () => void

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelOrder

```TypeScript
levelOrder?: LevelOrder
```

设置弹窗显示的顺序。<br />**说明：**<br />- 默认值：LevelOrder.clamp(0) <br />- 不支持动态刷新顺序。

**Type:** LevelOrder

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maskTransition

```TypeScript
maskTransition?: TransitionEffect
```

设置蒙层显示的过渡效果。默认无动效。

**Type:** TransitionEffect

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: Offset
```

弹窗相对alignment所在位置的偏移量。 <br/>默认值：{&nbsp;dx:&nbsp;0&nbsp;,&nbsp;dy:&nbsp;0&nbsp;}

**Type:** Offset

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## immersiveMode

```TypeScript
immersiveMode?: ImmersiveMode
```

设置页面内弹窗蒙层效果。 <br />**说明：** <br />- 默认值：ImmersiveMode.DEFAULT <br />- 当且仅当levelMode属性设置为LevelMode.EMBEDDED时生效。

**Type:** ImmersiveMode

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## focusable

```TypeScript
focusable?: boolean
```

设置弹窗是否获取焦点。值为true表示获取焦点，值为false表示不获取焦点。 <br />默认值：true <br />**说明：** <br />只有弹出覆盖在当前窗口之上的弹窗才可以获取焦点。

**Type:** boolean

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## hoverModeArea

```TypeScript
hoverModeArea?: HoverModeAreaType
```

悬停态下弹窗默认展示区域。<br />默认值：HoverModeAreaType.BOTTOM_SCREEN

**Type:** HoverModeAreaType

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidAppear

```TypeScript
onDidAppear?: () => void
```

弹窗弹出后的事件回调。 <br />**说明：** <br />1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 <br />2.在onDidAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。 <br />3.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。 <br />4. 当弹窗入场动效未完成时关闭弹窗，该回调不会触发。

**Type:** () => void

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## transition

```TypeScript
transition?: TransitionEffect
```

设置弹窗显示和退出的过渡效果。 <br/>**说明：** <br/> 1.如果不设置，则使用默认的显示/退出动效。 <br/> 2.显示动效中按back键，打断显示动效，执行退出动效，动画效果为显示动效与退出动效的曲线叠加后的效果。 <br/> 3.退出动效中按back键，不会打断退出动效，退出动效继续执行，继续按back键退出应用。

**Type:** TransitionEffect

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## showInSubWindow

```TypeScript
showInSubWindow?: boolean
```

某弹窗需要显示在主窗口之外时，是否在子窗口显示此弹窗。值为true表示在子窗口显示弹窗。 <br/>默认值：false，弹窗显示在应用内，而非独立子窗口。

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## keyboardAvoidMode

```TypeScript
keyboardAvoidMode?: KeyboardAvoidMode
```

用于设置弹窗是否在拉起软键盘时进行自动避让。<br/>默认值：KeyboardAvoidMode.DEFAULT

**Type:** KeyboardAvoidMode

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

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
onWillDisappear?: () => void
```

弹窗退出动效前的事件回调。 <br />**说明：** <br />1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 <br />2.快速点击弹出，消失弹窗时，存在onWillDisappear在onDidAppear前生效。

**Type:** () => void

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillAppear

```TypeScript
onWillAppear?: () => void
```

弹窗显示动效前的事件回调。 <br />**说明：** <br />1.正常时序依次为：onWillAppear>>onDidAppear>>(onDateAccept/onCancel/onDateChange)>>onWillDisappear>>onDidDisappear。 <br />2.在onWillAppear内设置改变弹窗显示效果的回调事件，二次弹出生效。

**Type:** () => void

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alignment

```TypeScript
alignment?: DialogAlignment
```

弹窗在竖直方向上的对齐方式。 <br>默认值：DialogAlignment.Default <br/>**说明：** <br/>若在UIExtension中设置showInSubWindow为true, 弹窗将基于UIExtension的宿主窗口对齐。

**Type:** DialogAlignment

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

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

设置弹窗的系统材质。 <br/>**说明：** <br/>- 默认值：[ImmersiveOptions](arkts-apis-uimaterial.md#immersiveoptions)的style为 ImmersiveStyle.ULTRA_THICK的[ImmersiveMaterial](arkts-apis-uimaterial.md#immersivematerial)对象。 设置undefined时与默认值保持一致。 <br/>- 不同的材质具有不同的效果，该接口影响 背景色[backgroundColor](arkui-ts/ts-universal-attributes-background.md#backgroundcolor)、 背景模糊[backgroundBlurStyle](arkui-ts/ts-universal-attributes-background.md#backgroundblurstyle9)、 背景效果[backgroundEffect](arkui-ts/ts-universal-attributes-background.md#backgroundeffect11)、 边框颜色[borderColor](arkui-ts/ts-universal-attributes-border.md#bordercolor)、 边框宽度[borderWidth](arkui-ts/ts-universal-attributes-border.md#borderwidth)、 阴影[shadow](arkui-ts/ts-universal-attributes-image-effect.md#shadow)，不建议与上述接口一起使用。

**Type:** SystemUiMaterial

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isModal

```TypeScript
isModal?: boolean
```

弹窗是否为模态窗口。值为true表示为模态窗口且有蒙层，不可与弹窗周围其他控件进行交互，即蒙层区域无法事件透传。 值为false表示为非模态窗口且无蒙层，可以与弹窗周围其他控件进行交互。 <br/>默认值：true

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

