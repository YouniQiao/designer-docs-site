# MakerNoteHuaweiMetadata

MakerNoteHuaweiMetadata implements Metadata 来自Huawei相机的照片元数据。

**Inheritance:** MakerNoteHuaweiMetadataimplements: Metadata.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## clone

```TypeScript
clone(): Promise<MakerNoteHuaweiMetadata>
```

对[MakerNoteHuaweiMetadata]image.MakerNoteHuaweiMetadata元数据进行克隆。使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;MakerNoteHuaweiMetadata> | Promise对象，当成功获取元数据时返回MakerNoteHuaweiMetadata元数据实例。 |

## createInstance

```TypeScript
static createInstance(): MakerNoteHuaweiMetadata
```

返回[MakerNoteHuaweiMetadata]image.MakerNoteHuaweiMetadata的空实例。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| MakerNoteHuaweiMetadata | 返回MakerNoteHuaweiMetadata的空实例。 |

## getAllProperties

```TypeScript
getAllProperties(): Promise<Record<string, string | null>>
```

获取图片中所有元数据的属性和值。使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, string \| null>> | Promise对象，返回元数据中定义的所有键值对。 |

## getBlob

```TypeScript
getBlob(): Promise<ArrayBuffer>
```

以二进制数据的形式获取元数据。使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回元数据的二进制数据。 |

## getProperties

```TypeScript
getProperties(key: Array<string>): Promise<Record<string, string | null>>
```

获取图像中属性的值。使用Promise异步回调。 要查询的属性的具体信息请参考[PropertyKey]image.PropertyKey。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | Array&lt;string> | Yes | 要获取其值的属性的名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, string \| null>> | Promise对象，返回元数据要获取的属性的值，如获取失败则返回错误码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600202 | Unsupported metadata. Possible causes: unsupported metadata type. |

## setBlob

```TypeScript
setBlob(blob: ArrayBuffer): Promise<void>
```

使用二进制数据替换当前元数据。使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blob | ArrayBuffer | Yes | 要替换的二进制数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600206 | Invalid parameter. Possible causes: The blob is empty or has a length of 0. |

## setProperties

```TypeScript
setProperties(records: Record<string, string | null>): Promise<void>
```

批量设置图片元数据中的指定属性的值。使用Promise异步回调。 要查询的属性的具体信息请参考[PropertyKey]image.PropertyKey。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| records | Record&lt;string, string \| null> | Yes | 包含要修改的MakerNoteHuaweiMetadata对象属性键值对的数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600202 | Unsupported metadata. Possible causes: unsupported metadata type. |

## xmageRight

```TypeScript
xmageRight?: int
```

当照片包含XMAGE水印时，原始图片上，有效内容区域（不含水印覆盖范围）的右边界（相对于图片左上角原点）的水平坐标。单位为像素（px）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## isFrontCamera

```TypeScript
isFrontCamera?: boolean
```

是否使用前置摄像头。true表示使用，false表示不使用。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneSunsetConfidence

```TypeScript
sceneSunsetConfidence?: int
```

拍摄场景：日落置信度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## xmageWatermarkMode

```TypeScript
xmageWatermarkMode?: int
```

XMAGE水印模式。具体取值请参考[Constants]image。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## burstNumber

```TypeScript
burstNumber?: int
```

连拍数量。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneVersion

```TypeScript
sceneVersion?: int
```

场景识别算法版本号。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneNightConfidence

```TypeScript
sceneNightConfidence?: int
```

拍摄场景：夜景置信度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneGreenPlantConfidence

```TypeScript
sceneGreenPlantConfidence?: int
```

拍摄场景：绿色植物置信度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## isXmageSupported

```TypeScript
isXmageSupported?: boolean
```

是否支持XMAGE。true表示支持，false表示不支持。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## faceConfidences

```TypeScript
faceConfidences?: int[]
```

对指定数量的面孔置信度。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## xmageColorMode

```TypeScript
xmageColorMode?: XmageColorMode
```

XMAGE颜色模式。

**Type:** XmageColorMode

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## focusMode

```TypeScript
focusMode?: FocusMode
```

镜头对焦控制策略，决定相机如何调整焦距。

**Type:** FocusMode

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneStageConfidence

```TypeScript
sceneStageConfidence?: int
```

拍摄场景：舞台演出置信度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneTextConfidence

```TypeScript
sceneTextConfidence?: int
```

拍摄场景：文本置信度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneSnowConfidence

```TypeScript
sceneSnowConfidence?: int
```

拍摄场景：雪景置信度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## rollAngle

```TypeScript
rollAngle?: int
```

左右滚动角度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## cloudLabel

```TypeScript
cloudLabel?: string
```

云增强标签。

**Type:** string

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneBeachConfidence

```TypeScript
sceneBeachConfidence?: int
```

拍摄场景：海滩置信度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneBlueSkyConfidence

```TypeScript
sceneBlueSkyConfidence?: int
```

拍摄场景：蓝天置信度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## physicalAperture

```TypeScript
physicalAperture?: int
```

物理光圈值。单位是fNumber。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## isWindSnapshot

```TypeScript
isWindSnapshot?: boolean
```

是否采用风快照模式拍摄。true表示采用，false表示不采用。 该模式是针对拍摄快速移动物体或容易产生模糊场景（如大风中、抓拍运动物体）的专门摄影。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## faceCount

```TypeScript
faceCount?: int
```

人脸数。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneFlowersConfidence

```TypeScript
sceneFlowersConfidence?: int
```

拍摄场景：花卉置信度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## pitchAngle

```TypeScript
pitchAngle?: int
```

俯仰角度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## isCloudEnhanced

```TypeScript
isCloudEnhanced?: boolean
```

图像是否存在云端增强。true表示存在，false表示不存在。

**Type:** boolean

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## xmageBottom

```TypeScript
xmageBottom?: int
```

当照片包含XMAGE水印时，原始图片上，有效内容区域（不含水印覆盖范围）的下边界（相对于图片左上角原点）的垂直坐标。单位为像素（px）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## sceneFoodConfidence

```TypeScript
sceneFoodConfidence?: int
```

拍摄场景：美食置信度。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## xmageLeft

```TypeScript
xmageLeft?: int
```

当照片包含XMAGE水印时，原始图片上，有效内容区域（不含水印覆盖范围）的左边界（相对于图片左上角原点）的水平坐标。单位为像素（px）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## captureMode

```TypeScript
captureMode?: int
```

捕获模式。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## faceSmileScores

```TypeScript
faceSmileScores?: int[]
```

特定数量面孔的微笑得分。

**Type:** int[]

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## xmageTop

```TypeScript
xmageTop?: int
```

当照片包含XMAGE水印时，原始图片上，有效内容区域（不含水印覆盖范围）的上边界（相对于图片左上角原点）的垂直坐标。单位为像素（px）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

