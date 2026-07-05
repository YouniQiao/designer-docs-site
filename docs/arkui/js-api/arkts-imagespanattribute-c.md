# ImageSpanAttribute

属性继承自[BaseSpan]BaseSpan，通用属性方法支持[尺寸设置]common、[背景设置]common、[边框设置]common。 通用事件仅支持[点击控制事件]common。还支持以下事件：

**Inheritance:** ImageSpanAttributeextends: BaseSpan<ImageSpanAttribute>.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alt

```TypeScript
alt(value: PixelMap)
```

设置图片加载过程中显示的占位图。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | PixelMap | Yes | 设置图片加载过程中显示的占位图，支持[PixelMap](../../apis-image-kit/arkts-apis/arkts-image-pixelmap-i.md#PixelMap)类型。 默认值：  null |

## colorFilter

```TypeScript
colorFilter(filter: ColorFilter | DrawingColorFilter)
```

为图像设置颜色滤镜效果。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | ColorFilter \| DrawingColorFilter | Yes | 1. 给图像设置颜色滤镜效果，入参为一个4x5的RGBA转换矩阵。 矩阵第一行表示R（红色）的向量值，第二行表示G（  绿色）的向量值，第三行表示B（蓝色）的向量值，第四行表示A（透明度）的向量值，4行分别代表不同的RGBA的向量值。 当矩阵对角线值为1，其余值为0时，保持图片原有色彩。 计算规则： 如果输  入的滤镜矩阵为： ![image-matrix-1](docroot://reference/apis-arkui/arkui-ts/figures/image_matrix_1.png) 像素点为  [R, G, B, A]，色值的范围[0, 255] 则过滤后的颜色为 [R’, G’, B’, A’] !  [image-matrix-2](docroot://reference/apis-arkui/arkui-ts/figures/image_matrix_2.png) 2. 支持@  ohos.graphics.drawing的ColorFilter类型作为入参。 说明： 该接口中的DrawingColorFilter类型支持在原子化服务中使用。其中，svg类型的图源只对  stroke属性生效。@ohos.graphics.drawing can be used as the input parameter. NOTE The DrawingColorfilter  type can be used in atomic services. The SVG image source takes effect only for the stroke attribute. |

## objectFit

```TypeScript
objectFit(value: ImageFit)
```

设置图片的缩放类型。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageFit | Yes | 图片的缩放类型。 默认值：ImageFit.Cover |

## onComplete

```TypeScript
onComplete(callback: ImageCompleteCallback)
```

图片数据加载成功和解码成功时均触发该回调，返回成功加载的图片尺寸。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ImageCompleteCallback | Yes | 图片数据加载成功和解码成功时触发的回调。 |

## onError

```TypeScript
onError(callback: ImageErrorCallback)
```

图片加载异常时触发该回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | ImageErrorCallback | Yes | 图片加载异常时触发的回调。 |

## supportSvg2

```TypeScript
supportSvg2(enable: Optional<boolean>)
```

开启或关闭[SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)，开启后相关SVG图片显示效果会有变化。 ImageSpan组件创建后，不支持动态修改该属性的值。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | Optional&lt;boolean> | Yes | 控制是否开启  [SVG标签解析能力增强功能](docroot://reference/apis-arkui/arkui-ts/ts-image-svg2-capabilities.md)。 true：支持SVG解析新能力；  false：保持原有SVG解析能力。 默认值：false |

## verticalAlign

```TypeScript
verticalAlign(value: ImageSpanAlignment)
```

设置图片基于行高的对齐方式。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | ImageSpanAlignment | Yes | 图片基于行高的对齐方式。 默认值：ImageSpanAlignment.BOTTOM |

