# ShaderEffect

着色器。画刷和画笔设置着色器后，会使用着色器效果而不是颜色属性去绘制，但此时画笔和画刷的透明度属性仍然生效。 > **说明：** > > - 本Class首批接口从API version 12开始支持。 > > - 本模块使用屏幕物理像素单位px。 > > - 本模块为单线程模型策略，需要调用方自行管理线程安全和上下文状态的切换。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## createColorShader

```TypeScript
static createColorShader(color: number): ShaderEffect
```

创建具有单一颜色的着色器。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | number | Yes | 表示着色器的ARGB格式颜色，该参数为32位无符号整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | 返回具有单一颜色的着色器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## createColorShader

```TypeScript
static createColorShader(color: int): ShaderEffect | undefined
```

Creates a ShaderEffect object with a single color.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | int | Yes | Color in the ARGB format. The value is a 32-bit unsigned integer. |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | Returns the shader with single color ShaderEffect object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |

## createComposeShader

```TypeScript
static createComposeShader(dstShaderEffect: ShaderEffect, srcShaderEffect: ShaderEffect,
        blendMode: BlendMode): ShaderEffect
```

按照指定的混合模式对两个着色器进行叠加，生成一个新的着色器。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dstShaderEffect | ShaderEffect | Yes | 在混合模式中作为目标色的着色器。 |
| srcShaderEffect | ShaderEffect | Yes | 在混合模式中作为源色的着色器。 |
| blendMode | BlendMode | Yes | 混合模式。 |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | 返回创建的着色器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. Possible causes: Incorrect parameter range. |

## createComposeShader

```TypeScript
static createComposeShader(dstShaderEffect: ShaderEffect, srcShaderEffect: ShaderEffect,
        blendMode: BlendMode): ShaderEffect | undefined
```

Creates an ShaderEffect object that generates a blend ShaderEffect object by two shaders.

**Since:** 24

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dstShaderEffect | ShaderEffect | Yes | Indicates a destination ShaderEffect pointer. |
| srcShaderEffect | ShaderEffect | Yes | Indicates a source ShaderEffect pointer. |
| blendMode | BlendMode | Yes | BlendMode. |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | Returns a blend ShaderEffect object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. Possible causes: Incorrect parameter range. |

## createConicalGradient

```TypeScript
static createConicalGradient(startPt: common2D.Point, startRadius: number, endPt: common2D.Point,
        endRadius: number, colors: Array<number>, mode: TileMode,
        pos?: Array<number> | null, matrix?: Matrix | null): ShaderEffect
```

创建着色器，在给定两个圆之间生成径向渐变。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startPt | common2D.Point | Yes | 表示渐变的起始圆的圆心。 |
| startRadius | number | Yes | 表示渐变的起始圆的半径，小于0时无效。该参数为浮点数。 |
| endPt | common2D.Point | Yes | 表示渐变的结束圆的圆心。 |
| endRadius | number | Yes | 表示渐变的结束圆的半径，小于0时无效。该参数为浮点数。 |
| colors | Array&lt;number> | Yes | 表示在起始圆和结束圆之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。 |
| mode | TileMode | Yes | 着色器效果平铺模式。 |
| pos | Array&lt;number> \| null | No |  |
| matrix | Matrix \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | 返回创建的着色器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createConicalGradient

```TypeScript
static createConicalGradient(startPt: common2D.Point, startRadius: double, endPt: common2D.Point,
        endRadius: double, colors: Array<int>, mode: TileMode,
        pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined
```

Creates a ShaderEffect object that generates a conical gradient between two given circles.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startPt | common2D.Point | Yes | Center of the start circle of the gradient. |
| startRadius | double | Yes | Radius of the start circle of the gradient. A negative number is invalid.  The value is a floating point number. |
| endPt | common2D.Point | Yes | Center of the end circle of the gradient. |
| endRadius | double | Yes | Radius of the end circle of the gradient. A negative value is invalid.  The value is a floating point number. |
| colors | Array&lt;int> | Yes | Array of colors to distribute between the start circle and end circle.  The values in the array are 32-bit (ARGB) unsigned integers. |
| mode | TileMode | Yes | Tile mode of the shader effect. |
| pos | Array&lt;double> \| null | No |  |
| matrix | Matrix \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | Returns a conical gradient ShaderEffect object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createImageShader

```TypeScript
static createImageShader(pixelmap: image.PixelMap, tileX: TileMode, tileY: TileMode,
        samplingOptions: SamplingOptions, matrix?: Matrix | null): ShaderEffect
```

基于图片创建一个着色器。此接口不建议用于录制类型的画布，会影响性能。

**Since:** 20

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelmap | image.PixelMap | Yes | 进行采样的图片对象。 |
| tileX | TileMode | Yes | 水平方向的平铺模式。 |
| tileY | TileMode | Yes | 竖直方向的平铺模式。 |
| samplingOptions | SamplingOptions | Yes | 图片采样参数。 |
| matrix | Matrix \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | 返回创建的着色器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. Possible causes: Incorrect parameter range. |

## createImageShader

```TypeScript
static createImageShader(pixelmap: image.PixelMap, tileX: TileMode, tileY: TileMode,
        samplingOptions: SamplingOptions, matrix?: Matrix | null): ShaderEffect | undefined
```

Creates an ShaderEffect object that generates a shader with single image.

**Since:** 24

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pixelmap | image.PixelMap | Yes | PixelMap. |
| tileX | TileMode | Yes | Indicates the type of tile mode for horizontal shader effect. |
| tileY | TileMode | Yes | Indicates the type of tile mode for vertical shader effect. |
| samplingOptions | SamplingOptions | Yes | SamplingOptions used to describe the sampling mode. |
| matrix | Matrix \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | Returns the shader with single image ShaderEffect object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 25900001 | Parameter error. Possible causes: Incorrect parameter range. |

## createLinearGradient

```TypeScript
static createLinearGradient(startPt: common2D.Point, endPt: common2D.Point, colors: Array<int>,
        mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect
```

创建着色器，在两个指定点之间生成线性渐变。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startPt | common2D.Point | Yes | 表示渐变的起点。 |
| endPt | common2D.Point | Yes | 表示渐变的终点。 |
| colors | Array&lt;int> | Yes | 表示在两个点之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。 |
| mode | TileMode | Yes | 着色器效果平铺模式。 |
| pos | Array&lt;double> \| null | No |  |
| matrix | Matrix \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | 返回创建的着色器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createLinearGradient

```TypeScript
static createLinearGradient(startPt: common2D.Point, endPt: common2D.Point, colors: Array<int>,
        mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined
```

Creates a ShaderEffect object that generates a linear gradient between two points.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| startPt | common2D.Point | Yes | Start point. |
| endPt | common2D.Point | Yes | End point. |
| colors | Array&lt;int> | Yes | Array of colors to distribute between the two points.  The values in the array are 32-bit (ARGB) unsigned integers. |
| mode | TileMode | Yes | Tile mode of the shader effect. |
| pos | Array&lt;double> \| null | No |  |
| matrix | Matrix \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | Returns a linear gradient ShaderEffect object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createRadialGradient

```TypeScript
static createRadialGradient(centerPt: common2D.Point, radius: double, colors: Array<int>,
      mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect
```

创建着色器，使用给定的圆心和半径生成径向渐变。径向渐变是指颜色从圆心逐渐向外扩散形成的渐变。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| centerPt | common2D.Point | Yes | 表示渐变的圆心。 |
| radius | double | Yes | 表示渐变的半径，小于等于0时无效，该参数为浮点数。 |
| colors | Array&lt;int> | Yes | 表示在圆心和圆边界之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。 |
| mode | TileMode | Yes | 着色器效果平铺模式。 |
| pos | Array&lt;double> \| null | No |  |
| matrix | Matrix \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | 返回创建的着色器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createRadialGradient

```TypeScript
static createRadialGradient(centerPt: common2D.Point, radius: double, colors: Array<int>,
      mode: TileMode, pos?: Array<double> | null, matrix?: Matrix | null): ShaderEffect | undefined
```

Creates a ShaderEffect object that generates a radial gradient based on the center and radius of a circle. A radial gradient refers to the color transition that spreads out gradually from the center of a circle.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| centerPt | common2D.Point | Yes | Center of the circle. |
| radius | double | Yes | Radius of the gradient. A negative number is invalid.  The value is a floating point number. |
| colors | Array&lt;int> | Yes | Array of colors to distribute between the center  and ending shape of the circle.  The values in the array are 32-bit (ARGB) unsigned integers. |
| mode | TileMode | Yes | Tile mode of the shader effect. |
| pos | Array&lt;double> \| null | No |  |
| matrix | Matrix \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | Returns a radial gradient ShaderEffect object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createSweepGradient

```TypeScript
static createSweepGradient(centerPt: common2D.Point, colors: Array<number>,
        mode: TileMode, startAngle: number, endAngle: number, pos?: Array<number> | null,
        matrix?: Matrix | null): ShaderEffect
```

创建着色器。该着色器以给定中心点为圆心，在顺时针或逆时针方向上生成颜色扫描渐变。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| centerPt | common2D.Point | Yes | 表示渐变的圆心。 |
| colors | Array&lt;number> | Yes | 表示在起始角度和结束角度之间分布的颜色数组，数组中的值为32位（ARGB）无符号整数。 |
| mode | TileMode | Yes | 着色器效果平铺模式。 |
| startAngle | number | Yes | 表示扇形渐变的起始角度，单位为度。0度时为x轴正方向，正数往顺时针方向偏移，负数往逆时针方向偏移。该参数为浮点数。 |
| endAngle | number | Yes | 表示扇形渐变的结束角度，单位为度。0度时为x轴正方向，正数往顺时针方向偏移，负数往逆时针方向偏移。小于起始角度时无效。该参数为浮点数。 |
| pos | Array&lt;number> \| null | No |  |
| matrix | Matrix \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | 返回创建的着色器对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

## createSweepGradient

```TypeScript
static createSweepGradient(centerPt: common2D.Point, colors: Array<int>,
      mode: TileMode, startAngle: double, endAngle: double, pos?: Array<double> | null,
      matrix?: Matrix | null): ShaderEffect | undefined
```

Creates a ShaderEffect object that generates a color sweep gradient around a given center point, either in a clockwise or counterclockwise direction.

**Since:** 23

**System capability:** SystemCapability.Graphics.Drawing

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| centerPt | common2D.Point | Yes | Center of the circle. |
| colors | Array&lt;int> | Yes | Array of colors to distribute between the start angle and end angle.  The values in the array are 32-bit (ARGB) unsigned integers. |
| mode | TileMode | Yes | Tile mode of the shader effect. |
| startAngle | double | Yes | Start angle of the sweep gradient, in degrees.  The value 0 indicates the positive direction of the X axis.  A positive number indicates an offset towards the positive direction,  and a negative number indicates an offset towards the negative direction.  The value is a floating point number. |
| endAngle | double | Yes | End angle of the sweep gradient, in degrees.  The value 0 indicates the positive direction of the X axis.  A positive number indicates an offset towards the positive direction,  and a negative number indicates an offset towards the negative direction.  A value less than the start angle is invalid.  The value is a floating point number. |
| pos | Array&lt;double> \| null | No |  |
| matrix | Matrix \| null | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| ShaderEffect | Returns a sweep gradient ShaderEffect object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

