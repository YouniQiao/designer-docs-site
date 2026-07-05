# Brush

画刷对象，描述所绘制图形的填充信息。 > **说明：** > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

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

构造一个新的画刷对象。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## constructor

```TypeScript
constructor(brush: Brush)
```

复制构造一个新的画刷对象。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| brush | Brush | Yes | 待复制的画刷对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## getAlpha

```TypeScript
getAlpha(): int
```

获取画刷的透明度。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回画刷的透明度，该返回值为0到255之间的整数。 |

## getColor

```TypeScript
getColor(): common2D.Color
```

获取画刷的颜色。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Color | Color of the brush. |

## getColor

```TypeScript
getColor(): common2D.Color | undefined
```

Obtains the color of this brush.

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

获取画刷的颜色，与[getColor]drawing.Brush#getColor()的区别是返回值类型为浮点数，适用于需要浮点数类型的场景。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| common2D.Color4f | Color of the brush. |

## getColor4f

```TypeScript
getColor4f(): common2D.Color4f | undefined
```

Obtains the color of a brush. The color is used by the brush to outline a shape.

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

获取画刷的颜色滤波器。

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

Obtains the color filter of this brush.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| ColorFilter | ColorFilter. |

## getHexColor

```TypeScript
getHexColor(): int
```

获取画刷的颜色。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回画刷的颜色，以16进制ARGB格式的32位无符号整数表示。 |

## isAntiAlias

```TypeScript
isAntiAlias(): boolean
```

获取画刷是否开启抗锯齿属性。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回画刷是否开启抗锯齿属性，true表示开启，false表示关闭。 |

## reset

```TypeScript
reset(): void
```

重置当前画刷为初始状态。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## setAlpha

```TypeScript
setAlpha(alpha: int): void
```

设置画刷的透明度。

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

设置画刷是否开启抗锯齿。开启后，可以使得图形的边缘在显示时更平滑。未调用此接口设置时，系统默认关闭抗锯齿。

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| aa | boolean | Yes | 表示是否开启抗锯齿，true表示开启，false表示关闭。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setBlendMode

```TypeScript
setBlendMode(mode: BlendMode): void
```

设置画刷的混合模式。未调用此接口设置时，系统默认的混合模式为SRC_OVER。

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

## setColor

```TypeScript
setColor(color: common2D.Color): void
```

设置画刷的颜色。

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

设置画刷的颜色。性能优于[setColor]drawing.Brush#setColor(color: common2D.Color)接口，推荐使用本接口。

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
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setColor

```TypeScript
setColor(color: int): void
```

设置画刷的颜色。

**Since:** 18

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | int | Yes | 16进制ARGB格式的颜色。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## setColor4f

```TypeScript
setColor4f(color4f: common2D.Color4f, colorSpace: colorSpaceManager.ColorSpaceManager | null): void
```

设置画刷的颜色以及标准色域，与[setColor]drawing.Brush#setColor(color: common2D.Color)区别在于可以单独设置色域，适用于需要单独设置色域的场景。

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

给画刷添加额外的颜色滤波器。

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

## setImageFilter

```TypeScript
setImageFilter(filter: ImageFilter | null): void
```

为画刷设置图像滤波器。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | ImageFilter \| null | Yes | 图像滤波器，null表示清空图像滤波器效果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## setMaskFilter

```TypeScript
setMaskFilter(filter: MaskFilter | null): void
```

给画刷添加额外的蒙版滤镜。

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

## setShaderEffect

```TypeScript
setShaderEffect(shaderEffect: ShaderEffect | null): void
```

设置画刷着色器效果。

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

设置画刷阴影层效果。当前仅在绘制文字时生效。

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

