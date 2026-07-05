# Pen

画笔对象，描述所绘制图形形状的轮廓信息。 > **说明：** > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## constructor

```TypeScript
constructor()
```

构造一个新的画笔对象。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## constructor

```TypeScript
constructor(pen: Pen)
```

复制构造一个新的画笔对象。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pen | Pen | Yes | 待复制的画笔对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## getAlpha

```TypeScript
getAlpha(): int
```

获取画笔的透明度。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回画笔的透明度，该返回值为0到255之间的整数。 |

## getCapStyle

```TypeScript
getCapStyle(): CapStyle
```

获取画笔的线帽样式。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| CapStyle | 返回画笔的线帽样式。 |

## getColor

```TypeScript
getColor(): common2D.Color
```

获取画笔的颜色。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Color | Color of the pen. |

## getColor

```TypeScript
getColor(): common2D.Color | undefined
```

Obtains the color of this pen.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Color | Returns a 32-bit (ARGB) variable that describes the color. |

## getColor4f

```TypeScript
getColor4f(): common2D.Color4f
```

获取画笔的颜色，与[getColor]drawing.Pen#getColor()的区别在于返回值类型为浮点数，适用于需要浮点数类型的场景。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Color4f | Color of the pen. |

## getColor4f

```TypeScript
getColor4f(): common2D.Color4f | undefined
```

Obtains the color of a pen. The color is used by the pen to outline a shape.

**Since:** 24

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Color4f | Returns four floating point values that describes the color. |

## getColorFilter

```TypeScript
getColorFilter(): ColorFilter
```

获取画笔的颜色滤波器。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| ColorFilter | 返回颜色滤波器。 |

## getColorFilter

```TypeScript
getColorFilter(): ColorFilter | undefined
```

Obtains the color filter of this pen.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| ColorFilter | ColorFilter. |

## getFillPath

```TypeScript
getFillPath(src: Path, dst: Path): boolean
```

获取使用画笔绘制的源路径轮廓，并用目标路径表示。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | Path | Yes | 源路径对象。 |
| dst | Path | Yes | 目标路径对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回获取源路径轮廓是否成功，true表示成功，false表示失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## getHexColor

```TypeScript
getHexColor(): int
```

获取画笔的颜色。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回画笔的颜色，以16进制ARGB格式的32位无符号整数表示。 |

## getJoinStyle

```TypeScript
getJoinStyle(): JoinStyle
```

获取画笔绘制转角的样式。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| JoinStyle | 返回折线转角的样式。 |

## getMiterLimit

```TypeScript
getMiterLimit(): double
```

获取折线尖角的限制值。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| double | 返回折线尖角长度与线宽的最大比值。 |

## getWidth

```TypeScript
getWidth(): double
```

获取画笔的线宽属性，线宽描述了画笔绘制图形轮廓的宽度。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| double | 返回画笔的线宽，单位为物理像素px。 |

## isAntiAlias

```TypeScript
isAntiAlias(): boolean
```

获取画笔是否开启抗锯齿属性。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回画笔是否开启抗锯齿属性，true表示开启，false表示关闭。 |

## reset

```TypeScript
reset(): void
```

重置当前画笔为初始状态。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## setAlpha

```TypeScript
setAlpha(alpha: int): void
```

设置画笔的透明度。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alpha | int | Yes | 用于表示透明度的[0, 255]区间内的整数值，传入浮点类型时向下取整。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setAntiAlias

```TypeScript
setAntiAlias(aa: boolean): void
```

设置画笔是否开启抗锯齿。开启后，可以使得图形的边缘在显示时更平滑。未调用此接口设置时，系统默认关闭抗锯齿。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aa | boolean | Yes | 表示是否开启抗锯齿。true表示开启，false表示关闭。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setBlendMode

```TypeScript
setBlendMode(mode: BlendMode): void
```

设置画笔的混合模式。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | BlendMode | Yes | 颜色的混合模式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setCapStyle

```TypeScript
setCapStyle(style: CapStyle): void
```

设置画笔的线帽样式。未调用此接口设置时，系统默认的线帽样式为FLAT_CAP。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | CapStyle | Yes | 描述画笔的线帽样式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setColor

```TypeScript
setColor(color: common2D.Color): void
```

设置画笔的颜色。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | common2D.Color | Yes | ARGB格式的颜色，每个颜色通道的值是0到255之间的整数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setColor

```TypeScript
setColor(alpha: int, red: int, green: int, blue: int): void
```

设置画笔的颜色。性能优于[setColor]drawing.Pen#setColor(color: common2D.Color)接口，推荐使用本接口。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alpha | int | Yes | ARGB格式颜色的透明度通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。 |
| red | int | Yes | ARGB格式颜色的红色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。 |
| green | int | Yes | ARGB格式颜色的绿色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。 |
| blue | int | Yes | ARGB格式颜色的蓝色通道值，该参数是0到255之间的整数，传入范围内的浮点数会向下取整。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setColor

```TypeScript
setColor(color: int): void
```

设置画笔的颜色。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | int | Yes | 16进制ARGB格式的颜色。 |

## setColor4f

```TypeScript
setColor4f(color4f: common2D.Color4f, colorSpace: colorSpaceManager.ColorSpaceManager | null): void
```

设置画笔的颜色以及标准色域，与[setColor]drawing.Pen#setColor(color: common2D.Color)区别在于可以单独设置色域，适用于需要单独设置色域的场景。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color4f | common2D.Color4f | Yes | ARGB格式的颜色，每个颜色通道的值是0.0-1.0之间的浮点数，大于1.0时，取1.0，小于0.0时，取0.0。 |
| colorSpace | colorSpaceManager.ColorSpaceManager \| null | Yes | 标准色域对象，null表示使用SRGB色域。 |

## setColorFilter

```TypeScript
setColorFilter(filter: ColorFilter | null): void
```

给画笔添加额外的颜色滤波器。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | ColorFilter \| null | Yes | 颜色滤波器。null表示清空颜色滤波器。 [since 20] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setDither

```TypeScript
setDither(dither: boolean): void
```

开启画笔的抖动绘制效果。抖动绘制可以使得绘制出的颜色更加真实。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dither | boolean | Yes | 是否开启画笔的抖动绘制效果。true表示开启，false表示关闭。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setImageFilter

```TypeScript
setImageFilter(filter: ImageFilter | null): void
```

设置画笔的图像滤波器。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | ImageFilter \| null | Yes | 图像滤波器，null表示清空画笔的图像滤波器效果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setJoinStyle

```TypeScript
setJoinStyle(style: JoinStyle): void
```

设置画笔绘制转角的样式。未调用此接口设置时，系统默认的转角样式为MITER_JOIN。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | JoinStyle | Yes | 折线转角样式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setMaskFilter

```TypeScript
setMaskFilter(filter: MaskFilter | null): void
```

给画笔添加额外的蒙版滤镜。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | MaskFilter \| null | Yes | 蒙版滤镜。null表示清空蒙版滤镜。 [since 20] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setMiterLimit

```TypeScript
setMiterLimit(miter: double): void
```

设置折线尖角长度与线宽的最大比值，当画笔绘制一条折线，并且[JoinStyle](arkts-drawing-joinstyle-e.md#JoinStyle)为MITER_JOIN时，若尖角长度与线宽的比值大 于限制值，则该折角使用BEVEL_JOIN绘制。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| miter | double | Yes | 折线尖角长度与线宽的最大比值，负数在绘制时会被视作4.0处理，非负数正常生效，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setPathEffect

```TypeScript
setPathEffect(effect: PathEffect | null): void
```

设置画笔路径效果。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | PathEffect \| null | Yes | 路径效果对象。null表示清空路径效果。 [since 20] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setShaderEffect

```TypeScript
setShaderEffect(shaderEffect: ShaderEffect | null): void
```

设置画笔着色器效果。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shaderEffect | ShaderEffect \| null | Yes | 着色器对象。null表示清空着色器效果。 [since 20] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setShadowLayer

```TypeScript
setShadowLayer(shadowLayer: ShadowLayer | null): void
```

设置画笔阴影层效果。当前仅在绘制文字时生效。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shadowLayer | ShadowLayer \| null | Yes | 阴影层对象。null表示清空阴影层效果。 [since 20] |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setStrokeWidth

```TypeScript
setStrokeWidth(width: double): void
```

设置画笔的线宽。0线宽被视作特殊的极细线宽，在绘制时始终会被绘制为1像素，不随画布的缩放而改变；负数线宽在实际绘制时会被视作0线宽。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | double | Yes | 表示线宽，该参数为浮点数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

