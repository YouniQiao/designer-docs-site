# ImageAttachment

图片对象说明。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(value: ImageAttachmentInterface)
```

图片对象的构造函数。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageAttachmentInterface | Yes | 图片设置项。 |

## constructor

```TypeScript
constructor(attachment: Optional<AttachmentType>)
```

图片对象的构造函数。与value类型入参构造函数相比，attachment参数增加了对undefined类型和[ResourceStr]ResourceStr类型图片的支持。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| attachment | Optional&lt;AttachmentType> | Yes | PixelMap类型或[ResourceStr]ResourceStr类型图片设置项。 |

## verticalAlign

```TypeScript
readonly verticalAlign?: ImageSpanAlignment
```

获取属性字符串的图片对齐方式。

**Type:** ImageSpanAlignment

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## objectFit

```TypeScript
readonly objectFit?: ImageFit
```

获取属性字符串的图片缩放类型。

**Type:** ImageFit

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## size

```TypeScript
readonly size?: SizeOptions
```

获取属性字符串的图片尺寸。 返回number类型值的单位为`px`。

**Type:** SizeOptions

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## colorFilter

```TypeScript
readonly colorFilter?: ColorFilterType
```

获取属性字符串的图片颜色滤镜效果。

**Type:** ColorFilterType

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## sizeInVp

```TypeScript
readonly sizeInVp?: SizeOptions
```

获取属性字符串的图片尺寸。 返回number类型值的单位为`vp`。 当ImageAttachment尺寸设置为负数值或undefined时，返回为undefined。

**Type:** SizeOptions

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## supportSvg2

```TypeScript
readonly supportSvg2?: boolean
```

获取属性字符串是否开启[SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)。 true：支持SVG解析新能力；false：保持原有SVG解析能力。 默认值：false

**Type:** boolean

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## layoutStyle

```TypeScript
readonly layoutStyle?: ImageAttachmentLayoutStyle
```

获取属性字符串的图片布局。

**Type:** ImageAttachmentLayoutStyle

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
readonly value: PixelMap
```

获取属性字符串的图片数据源。

**Type:** PixelMap

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

