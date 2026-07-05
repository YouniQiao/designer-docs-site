# DialogOptions

自定义弹窗的内容，继承自[BaseDialogOptions](#basedialogoptions11)。

**Inheritance:** DialogOptionsextends: BaseDialogOptions.

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { LevelMode,ImmersiveMode,LevelOrder } from '@kit.ArkUI';
```

## borderColor

```TypeScript
borderColor?: DialogOptionsBorderColor
```

设置弹窗背板的边框颜色。 <br/>默认值：Color.Black <br/> 如果使用borderColor属性，需要和borderWidth属性一起使用。

**Type:** DialogOptionsBorderColor

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundColor

```TypeScript
backgroundColor?: ResourceColor
```

设置弹窗背板颜色。 <br/>默认值：Color.Transparent <br/>**说明：** <br/>backgroundColor会与模糊属性backgroundBlurStyle叠加产生效果，如果不符合预期，可将backgroundBlurStyle设置为BlurStyle.NONE，即可取消模糊。

**Type:** ResourceColor

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## shadow

```TypeScript
shadow?: DialogOptionsShadow
```

设置弹窗背板的阴影。 <br />当设备为2in1时，默认场景下获焦阴影值为ShadowStyle.OUTER_FLOATING_MD，失焦为ShadowStyle.OUTER_FLOATING_SM。其他设备默认无阴影。

**Type:** DialogOptionsShadow

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderWidth

```TypeScript
borderWidth?: DialogOptionsBorderWidth
```

设置弹窗背板的边框宽度。 <br />可分别设置4个边框宽度。 <br />默认值：0 <br />单位：vp <br /> 百分比参数方式：以父元素弹窗宽的百分比来设置弹窗的边框宽度。 <br />当弹窗左边框和右边框大于弹窗宽度，弹窗上边框和下边框大于弹窗高度，显示可能不符合预期。

**Type:** DialogOptionsBorderWidth

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## width

```TypeScript
width?: Dimension
```

设置弹窗背板的宽度。 <br />**说明：** <br>- 默认最大值：400vp <br />- 百分比参数方式：弹窗参考宽度基于所在窗口宽度调整。

**Type:** Dimension

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## backgroundBlurStyle

```TypeScript
backgroundBlurStyle?: BlurStyle
```

弹窗背板模糊材质。 <br/>默认值：从API版本26.0.0开始，为BlurStyle.NONE，API版本26.0.0之前，为BlurStyle.COMPONENT_ULTRA_THICK。 <br/>**说明：** <br/>设置为BlurStyle.NONE即可关闭背景虚化。当设置了backgroundBlurStyle为非NONE值时，则不要设置backgroundColor，否则颜色显示将不符合预期效果。

**Type:** BlurStyle

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## borderStyle

```TypeScript
borderStyle?: DialogOptionsBorderStyle
```

设置弹窗背板的边框样式。 <br/>默认值：BorderStyle.Solid。 <br/> 如果使用borderStyle属性，需要和borderWidth属性一起使用。

**Type:** DialogOptionsBorderStyle

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## height

```TypeScript
height?: Dimension
```

设置弹窗背板的高度。 <br />**说明：** <br />- 默认最大值：0.9 *（窗口高度 - 安全区域）。 <br />- 百分比参数方式：弹窗参考高度为（窗口高度 - 安全区域），在此基础上调小或调大。

**Type:** Dimension

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## cornerRadius

```TypeScript
cornerRadius?: DialogOptionsCornerRadius
```

设置弹窗背板的圆角半径。 <br />可分别设置4个圆角的半径。 <br />默认值：{ topLeft: '32vp', topRight: '32vp', bottomLeft: '32vp', bottomRight: '32vp' } <br /> 圆角大小受组件尺寸限制，最大值为组件宽或高的一半，若值为负，则按照默认值处理。 <br /> 百分比参数方式：以父元素弹窗宽和高的百分比来设置弹窗的圆角。

**Type:** DialogOptionsCornerRadius

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

