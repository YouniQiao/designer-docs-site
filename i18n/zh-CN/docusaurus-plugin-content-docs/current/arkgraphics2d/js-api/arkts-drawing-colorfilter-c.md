# ColorFilter

颜色滤波器。 > **说明：** > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**起始版本：** 11

**系统能力：** SystemCapability.Graphics.Drawing

## 导入模块

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## createBlendModeColorFilter

```TypeScript
static createBlendModeColorFilter(color: common2D.Color, mode: BlendMode): ColorFilter
```

创建指定的颜色和混合模式的颜色滤波器。

**起始版本：** 11

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | common2D.Color | 是 | ARGB格式的颜色，每个颜色通道的值是0到255之间的整数。 |
| mode | BlendMode | 是 | 颜色的混合模式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | 返回颜色滤波器。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createBlendModeColorFilter

```TypeScript
static createBlendModeColorFilter(color: common2D.Color, mode: BlendMode): ColorFilter | undefined
```

Creates a ColorFilter object with a given color and blend mode.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | common2D.Color | 是 | Color in ARGB format.  The value of each color channel is an integer ranging from 0 to 255. |
| mode | BlendMode | 是 | Blend mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | Colorfilter object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createBlendModeColorFilter

```TypeScript
static createBlendModeColorFilter(color: common2D.Color | number, mode: BlendMode): ColorFilter
```

使用指定的颜色和混合模式创建颜色滤波器。

**起始版本：** 18

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | common2D.Color \| number | 是 | 颜色，可以用16进制ARGB格式的无符号整数表示。 |
| mode | BlendMode | 是 | 颜色的混合模式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | 返回颜色滤波器。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createBlendModeColorFilter

```TypeScript
static createBlendModeColorFilter(color: common2D.Color | int, mode: BlendMode): ColorFilter | undefined
```

Creates a ColorFilter object with a given color and blend mode.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | common2D.Color \| int | 是 | Color, represented by an unsigned integer in hexadecimal ARGB format. |
| mode | BlendMode | 是 | Blend mode. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | Colorfilter object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createComposeColorFilter

```TypeScript
static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter
```

创建一个先应用inner进行滤波，再应用outer进行滤波的组合颜色滤波器。

**起始版本：** 11

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| outer | ColorFilter | 是 | 组合滤波器中后生效的颜色滤波器。 |
| inner | ColorFilter | 是 | 组合滤波器中先生效的颜色滤波器。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | 返回颜色滤波器。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## createComposeColorFilter

```TypeScript
static createComposeColorFilter(outer: ColorFilter, inner: ColorFilter): ColorFilter | undefined
```

Creates a ColorFilter object by combining another two color filters.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| outer | ColorFilter | 是 | Color filter that takes effect later in the new filter. |
| inner | ColorFilter | 是 | Color filter that takes effect first in the new filter. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | Colorfilter object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## createLightingColorFilter

```TypeScript
static createLightingColorFilter(mutColor: common2D.Color | number, addColor: common2D.Color | number): ColorFilter
```

创建一个光照颜色滤波器，此滤波器会将RGB通道的颜色值乘以一种颜色值并加上另一种颜色值，计算结果会被限制在0到255范围内。

**起始版本：** 20

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mutColor | common2D.Color \| number | 是 | 用来进行乘法运算的颜色，ARGB格式的颜色，每个颜色通道是0到255之间的整数。为number类型时必须是16进制ARGB格式的无符号  整数。 |
| addColor | common2D.Color \| number | 是 | 用来进行加法运算的颜色，ARGB格式的颜色，每个颜色通道是0到255之间的整数。为number类型时必须是16进制ARGB格式的无符号  整数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | 返回一个颜色滤波器。 |

## createLightingColorFilter

```TypeScript
static createLightingColorFilter(mutColor: common2D.Color | int, addColor: common2D.Color | int): ColorFilter | undefined
```

Makes a color filter with the given mutColor and addColor.

**起始版本：** 24

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mutColor | common2D.Color \| int | 是 | The range of color channels must be [0, 255],  used to multiply source color. |
| addColor | common2D.Color \| int | 是 | The range of color channels must be [0, 255],  used to add to source color. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | Colorfilter object. |

## createLinearToSRGBGamma

```TypeScript
static createLinearToSRGBGamma(): ColorFilter
```

创建一个从线性颜色空间转换到SRGB颜色空间的颜色滤波器。

**起始版本：** 11

**系统能力：** SystemCapability.Graphics.Drawing

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | 返回颜色滤波器。 |

## createLinearToSRGBGamma

```TypeScript
static createLinearToSRGBGamma(): ColorFilter | undefined
```

Creates a ColorFilter object that applies the sRGB gamma curve to the RGB channels.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | Colorfilter object. |

## createLumaColorFilter

```TypeScript
static createLumaColorFilter(): ColorFilter
```

创建一个颜色滤波器将其输入的亮度值乘以透明度通道，并将红色、绿色和蓝色通道设置为零。

**起始版本：** 11

**系统能力：** SystemCapability.Graphics.Drawing

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | 返回颜色滤波器。 |

## createLumaColorFilter

```TypeScript
static createLumaColorFilter(): ColorFilter | undefined
```

Creates a ColorFilter object that multiplies the luma into the alpha channel and sets the RGB channels to zero.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | Colorfilter. |

## createMatrixColorFilter

```TypeScript
static createMatrixColorFilter(matrix: Array<double>): ColorFilter
```

创建颜色滤波器，通过4x5颜色矩阵变换颜色。

**起始版本：** 12

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| matrix | Array&lt;double> | 是 | 长度为20的数组，表示用于颜色变换的45矩阵。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | 返回颜色滤波器。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createMatrixColorFilter

```TypeScript
static createMatrixColorFilter(matrix: Array<double>): ColorFilter | undefined
```

Creates a color filter object with a 4*5 color matrix.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| matrix | Array&lt;double> | 是 | An array of 20 numbers, indicating the 45 matrix. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | Colorfilter object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createSRGBGammaToLinear

```TypeScript
static createSRGBGammaToLinear(): ColorFilter
```

创建一个从SRGB颜色空间转换到线性颜色空间的颜色滤波器。

**起始版本：** 11

**系统能力：** SystemCapability.Graphics.Drawing

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | 返回颜色滤波器。 |

## createSRGBGammaToLinear

```TypeScript
static createSRGBGammaToLinear(): ColorFilter | undefined
```

Creates a ColorFilter object that applies the RGB channels to the sRGB gamma curve.

**起始版本：** 23

**系统能力：** SystemCapability.Graphics.Drawing

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorFilter | Colorfilter object. |

