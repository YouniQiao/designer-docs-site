# ColorMetrics

用于混合颜色。

**起始版本：** 12

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## autoRefresh

```TypeScript
autoRefresh?(value: boolean): ColorMetrics
```

设置ColorMetrics对象的自动刷新。 启用时，当系统配置发生变化时，使用ColorMetrics.resourceColor()创建的对象的颜色值将自动更新

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 当系统配置发生变化时，是否自动刷新颜色值。  如果设置为true，则使用ColorMetrics.resourceColor()创建的对象的颜色值  会在系统配置发生变化时自动更新。如果设置为false，则对象的颜色值  由ColorMetrics.resourceColor()创建的，不会自动更新。  默认值为false。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorMetrics | 返回用于链接的ColorMetrics对象。 |

## blendColor

```TypeScript
blendColor(overlayColor: ColorMetrics): ColorMetrics
```

在当前颜色的上方叠加上一层指定的颜色（overlayColor），并返回混合后的新颜色。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| overlayColor | ColorMetrics | 是 | 要叠加在上方的颜色对象。alpha属性决定叠加强度。1.0表示完全覆盖，0.0表示完全透明，混合结果为原色。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorMetrics | 新的颜色对象，其red、green、blue和alpha通道均为当前颜色与叠加颜色混合后的结果值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. The type of the input parameter is not ColorMetrics. |

## colorWithSpace

```TypeScript
static colorWithSpace(colorSpace: ColorSpace, red: number, green: number, blue: number, alpha?: number): ColorMetrics
```

使用[ColorSpace]ColorSpace和rgba格式颜色实例化ColorMetrics类。仅部分属性支持在display-p3色彩空间中设置颜色。

**起始版本：** 20

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colorSpace | ColorSpace | 是 | 颜色空间，用于指定颜色的色彩空间。使用ColorSpace.DISPLAY_P3，需要对应窗口调用  [setWindowColorSpace](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowcolorspace9-1)接口，将当前窗  口设置为广色域模式。 |
| red | number | 是 | 颜色的R分量（红色），值是0~1的浮动数值。 |
| green | number | 是 | 颜色的G分量（绿色），值是0~1的浮动数值。 |
| blue | number | 是 | 颜色的B分量（蓝色），值是0~1的浮动数值。 |
| alpha | number | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorMetrics | ColorMetrics类的实例。 |

## createHDRColor

```TypeScript
static createHDRColor(colorSpace: ColorSpace, red: double, green: double, blue: double, alpha?: double): ColorMetrics
```

使用默认曝光的HDR颜色创建ColorMetrics类。 使用默认曝光（0.0表示对数，1.0表示线性）创建HDR颜色值。 当没有指定曝光值时，RGB通道值可以超过1.0以实现HDR亮度。 这与iOS UIColor行为匹配，其中RGB值> 1.0启用HDR渲染。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colorSpace | ColorSpace | 是 | 颜色的颜色空间。  支持SRGB、Display_P3、BT2020颜色空间。 |
| red | double | 是 | 红色分量值。有效范围：[0, +∞)。  大于1.0的值启用HDR亮度。 |
| green | double | 是 | 绿色分量值。有效范围：[0, +∞)。  大于1.0的值启用HDR亮度。 |
| blue | double | 是 | 蓝色分量值。有效范围：[0, +∞)。  大于1.0的值启用HDR亮度。 |
| alpha | double | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorMetrics | ColorMetrics class instance with HDR color. |

## createHDRColorWithLinearExposure

```TypeScript
static createHDRColorWithLinearExposure(linearExposure: double, colorSpace: ColorSpace,
    red: double, green: double, blue: double, alpha?: double): ColorMetrics
```

使用具有线性曝光的HDR颜色创建ColorMetrics类。 创建具有指定线性曝光的HDR颜色值。 曝光值控制线性色彩空间中颜色的亮度。 使用线性曝光时，RGB通道值通常在【0,1】范围内。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| linearExposure | double | 是 | 曝光值中的线性曝光值。  值为1.0表示标准曝光。  大于1.0的值会线性增加亮度。 |
| colorSpace | ColorSpace | 是 | 颜色的颜色空间。  支持SRGB、Display_P3、BT2020颜色空间。 |
| red | double | 是 | 红色分量值。有效范围：【0,1】。 |
| green | double | 是 | 绿色分量值。有效范围：【0,1】。 |
| blue | double | 是 | 蓝色分量值。有效范围：【0,1】。 |
| alpha | double | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorMetrics | 带有HDR颜色的ColorMetrics类实例。 |

## createHDRColorWithLogExposure

```TypeScript
static createHDRColorWithLogExposure(exposure: double, colorSpace: ColorSpace,
    red: double, green: double, blue: double, alpha?: double): ColorMetrics
```

使用具有对数曝光的HDR颜色创建ColorMetrics类。 使用指定的对数曝光（色度）创建HDR颜色值。 曝光值控制对数（感知）色彩空间中的亮度。 使用对数曝光时，RGB通道值通常在【0,1】范围内。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| exposure | double | 是 | 对数曝光值，单位为秒。  有效范围：[0, +∞)。  值0.0表示标准曝光。  每增加1.0将使亮度加倍（一次停止）。 |
| colorSpace | ColorSpace | 是 | 颜色的颜色空间。  支持SRGB、Display_P3、BT2020颜色空间。 |
| red | double | 是 | 红色分量值。有效范围：【0,1】。 |
| green | double | 是 | 绿色分量值。有效范围：【0,1】。 |
| blue | double | 是 | 蓝色分量值。有效范围：【0,1】。 |
| alpha | double | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorMetrics | ColorMetrics class instance with HDR color. |

## getBlueValue

```TypeScript
getBlueValue(): double
```

获取蓝色值。 以浮点数形式返回蓝色通道值。 对于SDR颜色，值在【0,1】范围内。 对于HDR颜色，值可以大于1.0以表示扩展亮度。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | 蓝色值。  有效范围：  对于SDR颜色：【0,1】。  HDR颜色：[0,+∞),>1.0表示HDR亮度。 |

## getColorSpace

```TypeScript
getColorSpace(): ColorSpace
```

获取ColorMetrics的颜色空间。 返回创建此颜色时使用的颜色空间。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorSpace | The color space of the ColorMetrics.  Possible value: ColorSpace.SRGB, ColorSpace.DISPLAY_P3, ColorSpace.BT2020. |

## getGreenValue

```TypeScript
getGreenValue(): double
```

获取绿色值。 以浮点数形式返回绿色通道值。 对于SDR颜色，值在【0,1】范围内。 对于HDR颜色，值可以大于1.0以表示扩展亮度。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | 绿色的值。  有效范围：  对于SDR颜色：【0,1】。  HDR颜色：[0,+∞),>1.0表示HDR亮度。 |

## getRedValue

```TypeScript
getRedValue(): double
```

获取红色值。 以浮点数形式返回红色通道值。 对于SDR颜色，值在【0,1】范围内。 对于HDR颜色，值可以大于1.0以表示扩展亮度。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | 红色的值。  有效范围：  对于SDR颜色：【0,1】。  HDR颜色：[0,+∞),>1.0表示HDR亮度。 |

## isHDR

```TypeScript
isHDR(): boolean
```

检查ColorMetrics是否代表HDR颜色。 如果颜色是使用createHDRColorWithXx创建的，或者RGB值> 1.0，则返回true。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | ColorMetrics是否是HDR颜色。  如果满足以下条件，则返回true：  -颜色是使用createHDRColorWithXx()方法创建的。  -任何RGB通道值都大于1.0。 |

## numeric

```TypeScript
static numeric(value: number): ColorMetrics
```

使用HEX格式颜色实例化 ColorMetrics 类。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | number | 是 | HEX格式颜色。 取值范围：支持rgb或者argb |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorMetrics | ColorMetrics 类的实例。 |

## resourceColor

```TypeScript
static resourceColor(color: ResourceColor): ColorMetrics
```

使用资源格式颜色实例化 ColorMetrics 类。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| color | ResourceColor | 是 | 资源格式颜色。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorMetrics | ColorMetrics 类的实例。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 180003 | Failed to obtain the color resource. |
| 401 | Parameter error. Possible cause:  1. The type of the input color parameter is not ResourceColor.  2. The format of the input color string is not RGB or RGBA. |

## rgba

```TypeScript
static rgba(red: number, green: number, blue: number, alpha?: number): ColorMetrics
```

使用rgb或者rgba格式颜色实例化 ColorMetrics 类。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| red | number | 是 | 颜色的R分量（红色），值是0~255的整数。 |
| green | number | 是 | 颜色的G分量（绿色），值是0~255的整数。 |
| blue | number | 是 | 颜色的B分量（蓝色），值是0~255的整数。 |
| alpha | number | 否 | 颜色的A分量（透明度），值是0.0~1.0的浮点数，默认值为1.0，不透明。 说明： alpha小于0为全透明，大于1为不透明。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorMetrics | ColorMetrics 类的实例。 |

## red

```TypeScript
get red(): number
```

获取ColorMetrics颜色的R分量（红色）。

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## green

```TypeScript
get green(): number
```

获取ColorMetrics颜色的G分量（绿色）。

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## blue

```TypeScript
get blue(): number
```

获取ColorMetrics颜色的B分量（蓝色）。

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## color

```TypeScript
get color(): string
```

获取ColorMetrics的颜色，返回的是rgba字符串的格式。

**类型：** string

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## alpha

```TypeScript
get alpha(): number
```

获取ColorMetrics颜色的A分量（透明度）。

**类型：** number

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

