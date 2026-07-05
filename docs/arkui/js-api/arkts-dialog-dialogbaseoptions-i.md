# DialogBaseOptions

所有Dialog类型共享的基本选项。

**Since:** 26.1.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { DialogButtonOrientation,DialogState,DialogResult,DialogBaseController,DialogBaseAlignment,DialogDismissal } from '@kit.ArkUI';
```

## enableHoverMode

```TypeScript
enableHoverMode?: boolean
```

是否启用悬停模式。

**Type:** boolean

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderColor

```TypeScript
borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors
```

对话框的边框颜色。

**Type:** ResourceColor | EdgeColors | LocalizedEdgeColors

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelMode

```TypeScript
levelMode?: LevelMode
```

对话框的显示级别。

**Type:** LevelMode

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shadow

```TypeScript
shadow?: ShadowOptions | ShadowStyle
```

对话框的阴影。

**Type:** ShadowOptions | ShadowStyle

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## keyboardAvoidDistance

```TypeScript
keyboardAvoidDistance?: LengthMetrics
```

对话框与系统键盘之间的距离。

**Type:** LengthMetrics

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maskColor

```TypeScript
maskColor?: ResourceColor
```

对话框的蒙层颜色。

**Type:** ResourceColor

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillDismiss

```TypeScript
onWillDismiss?: Callback<DialogDismissal>
```

对话框交互关闭的回调。 <br>如果注册了此回调，则用户点击后对话框不会立即关闭 遮罩或返回按钮。 回调中的reason参数用于判断是否可以关闭对话框。

**Type:** Callback<DialogDismissal>

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## distortionMode

```TypeScript
distortionMode?: DistortionMode
```

设置对话框的变形动画模式。

**Type:** DistortionMode

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## displayModeInSubWindow

```TypeScript
displayModeInSubWindow?: DialogDisplayMode
```

定义在子窗口中显示时的对话框显示模式。

**Type:** DialogDisplayMode

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maskRect

```TypeScript
maskRect?: Rectangle
```

对话框的蒙层区域。

**Type:** Rectangle

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderWidth

```TypeScript
borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths
```

对话框边框宽度。

**Type:** Dimension | EdgeWidths | LocalizedEdgeWidths

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyleOptions

```TypeScript
backgroundBlurStyleOptions?: BackgroundBlurStyleOptions
```

带选项的背景模糊样式。

**Type:** BackgroundBlurStyleOptions

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## dialogTransition

```TypeScript
dialogTransition?: TransitionEffect
```

用于打开/关闭对话框内容区域的对话框过渡动效参数。

**Type:** TransitionEffect

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## autoCancel

```TypeScript
autoCancel?: boolean
```

是否允许通过触摸面罩或按返回键退出。

**Type:** boolean

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderStyle

```TypeScript
borderStyle?: BorderStyle | EdgeStyles
```

对话框边框样式。

**Type:** BorderStyle | EdgeStyles

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelUniqueId

```TypeScript
levelUniqueId?: int
```

页面级对话框显示层下节点的唯一标识。 取值限定为整数。 <br>该参数仅在levelMode为LevelMode.EMBEDDED时生效。

**Type:** int

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidDisappear

```TypeScript
onDidDisappear?: VoidCallback
```

对话框消失时的回调函数。

**Type:** VoidCallback

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## levelOrder

```TypeScript
levelOrder?: LevelOrder
```

对话框的显示顺序。

**Type:** LevelOrder

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## height

```TypeScript
height?: Dimension
```

对话框的高度。

**Type:** Dimension

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
backgroundColor?: ResourceColor
```

对话框的背景颜色。 <br>当backgroundColor设置为非透明色时，backgroundBlurStyle必须设置为BlurStyle.NONE。

**Type:** ResourceColor

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## controller

```TypeScript
controller?: DialogBaseController
```

Dialog 控制器。

**Type:** DialogBaseController

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maskTransition

```TypeScript
maskTransition?: TransitionEffect
```

用于打开/关闭遮罩的蒙层过渡动效参数。

**Type:** TransitionEffect

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## offset

```TypeScript
offset?: Offset
```

对话框相对于对齐位置的偏移。

**Type:** Offset

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## immersiveMode

```TypeScript
immersiveMode?: ImmersiveMode
```

页面级对话框蒙层效果。

**Type:** ImmersiveMode

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## focusable

```TypeScript
focusable?: boolean
```

对话框是否可以获得焦点。

**Type:** boolean

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyle

```TypeScript
backgroundBlurStyle?: BlurStyle
```

对话框的背景模糊样式。 <br>设置为BlurStyle.NONE将禁用背景模糊。

**Type:** BlurStyle

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## hoverModeArea

```TypeScript
hoverModeArea?: HoverModeAreaType
```

悬停模式下对话框的显示区域。

**Type:** HoverModeAreaType

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onDidAppear

```TypeScript
onDidAppear?: VoidCallback
```

对话框出现时的回调函数。

**Type:** VoidCallback

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## showInSubWindow

```TypeScript
showInSubWindow?: boolean
```

是否在子窗口中显示。 <br>isModal = true和showInSubWindow = true不能同时使用。

**Type:** boolean

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## keyboardAvoidMode

```TypeScript
keyboardAvoidMode?: KeyboardAvoidMode
```

键盘避让模式。

**Type:** KeyboardAvoidMode

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundEffect

```TypeScript
backgroundEffect?: BackgroundEffectOptions
```

带选项的背景效果。

**Type:** BackgroundEffectOptions

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderRadius

```TypeScript
borderRadius?: Dimension | BorderRadiuses | LocalizedBorderRadiuses
```

背景的边框半径。

**Type:** Dimension | BorderRadiuses | LocalizedBorderRadiuses

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillDisappear

```TypeScript
onWillDisappear?: VoidCallback
```

对话框关闭动画开始前的回调函数。

**Type:** VoidCallback

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## width

```TypeScript
width?: Dimension
```

对话框的宽度。

**Type:** Dimension

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillAppear

```TypeScript
onWillAppear?: VoidCallback
```

对话框打开动画开始前的回调函数。

**Type:** VoidCallback

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alignment

```TypeScript
alignment?: DialogBaseAlignment
```

对话框的对齐模式。

**Type:** DialogBaseAlignment

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## edgeLightMode

```TypeScript
edgeLightMode?: EdgeLightMode
```

设置对话框的edgeLight动画模式。

**Type:** EdgeLightMode

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## systemMaterial

```TypeScript
systemMaterial?: SystemUiMaterial
```

为对话框设置系统样式材质。不同的材料有不同的效果，会影响背景色、边框、阴影和对话框的其他视觉属性。

**Type:** SystemUiMaterial

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isModal

```TypeScript
isModal?: boolean
```

对话框是否为模态。

**Type:** boolean

**Since:** 26.1.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

