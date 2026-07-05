# HeifsMetadata

HeifsMetadata implements Metadata HEIF序列图像元数据类，用于存储图像的元数据。

**Inheritance:** HeifsMetadataimplements: Metadata.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## clone

```TypeScript
clone(): Promise<HeifsMetadata>
```

对Heifs元数据进行克隆。使用Promise异步回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HeifsMetadata> | Promise对象，成功返回Heifs元数据实例。 |

## createInstance

```TypeScript
static createInstance(): HeifsMetadata
```

创建一个空的[HeifsMetadata]image.HeifsMetadata实例。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| HeifsMetadata | 返回HeifsMetadata的空实例。 |

## getAllProperties

```TypeScript
getAllProperties(): Promise<Record<string, string | null>>
```

获取图片中所有元数据的属性的值。使用Promise异步回调。 要查询的属性的具体信息请参考[HeifsPropertyKey]image.HeifsPropertyKey。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, string \| null>> | Promise对象，返回元数据拥有的所有属性的值。 |

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

获取图像元数据的属性值。使用Promise异步回调。 要查询的属性的具体信息请参考[HeifsPropertyKey]image.HeifsPropertyKey。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | Array&lt;string> | Yes | 要获取的值的属性名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, string \| null>> | Promise对象，返回元数据要获取的属性的值，如果获取失败则返回错误码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600202 | Unsupported metadata. Possible causes: unsupported metadata type |

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

批量设置图片元数据中的指定属性的值。使用Promise异步回调。 要查询的属性的具体信息请参考[HeifsPropertyKey]image.HeifsPropertyKey。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| records | Record&lt;string, string \| null> | Yes | 用户要修改HeifsMetadata对象的属性和值的键值对集合。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 7600202 | Unsupported metadata. Possible causes: unsupported metadata type. |

## heifsDelayTime

```TypeScript
readonly heifsDelayTime?: int
```

HEIF序列图片的每帧播放时长。单位为毫秒（ms）。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## heifsCanvasWidth

```TypeScript
readonly heifsCanvasWidth?: int
```

HEIF序列图片的画布宽度。 单位为像素（px）。 该值为正整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## heifsCanvasHeight

```TypeScript
readonly heifsCanvasHeight?: int
```

HEIF序列图片的画布高度。 单位为像素（px）。 该值为正整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

## heifsUnclampedDelayTime

```TypeScript
readonly heifsUnclampedDelayTime?: int
```

HEIF序列图片每帧未钳制的延迟时长。 单位为毫秒（ms）。 该值为正整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Multimedia.Image.Core

