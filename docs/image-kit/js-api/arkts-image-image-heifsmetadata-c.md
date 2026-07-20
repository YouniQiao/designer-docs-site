# HeifsMetadata

HeifsMetadata implements Metadata

HEIF image sequence metadata.

**Inheritance/Implementation:** HeifsMetadata implements [Metadata](arkts-image-image-metadata-i.md)

**Since:** 23

<!--Device-image-class HeifsMetadata implements Metadata--><!--Device-image-class HeifsMetadata implements Metadata-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## clone

```TypeScript
clone(): Promise<HeifsMetadata>
```

Clones the HEIFS metadata. This API returns the result asynchronously through a promise.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeifsMetadata-clone(): Promise<HeifsMetadata>--><!--Device-HeifsMetadata-clone(): Promise<HeifsMetadata>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<HeifsMetadata> | Promise used to return the HEIFS metadata instance. |

## createInstance

```TypeScript
static createInstance(): HeifsMetadata
```

Creates an empty [HeifsMetadata](arkts-image-image-heifsmetadata-c.md) instance.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeifsMetadata-static createInstance(): HeifsMetadata--><!--Device-HeifsMetadata-static createInstance(): HeifsMetadata-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [HeifsMetadata](arkts-image-image-heifsmetadata-c.md) | Empty **HeifsMetadata** instance. |

## getAllProperties

```TypeScript
getAllProperties(): Promise<Record<string, string | null>>
```

Obtains all properties and their values from the image metadata. This API returns the result asynchronously through a promise.

For details about the properties, see [HeifsPropertyKey](arkts-image-image-heifspropertykey-e.md).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeifsMetadata-getAllProperties(): Promise<Record<string, string | null>>--><!--Device-HeifsMetadata-getAllProperties(): Promise<Record<string, string | null>>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Record<string, string \| null>> | Promise used to return the values of all properties. |

## getBlob

```TypeScript
getBlob(): Promise<ArrayBuffer>
```

Obtains the metadata in binary format. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeifsMetadata-getBlob(): Promise<ArrayBuffer>--><!--Device-HeifsMetadata-getBlob(): Promise<ArrayBuffer>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ArrayBuffer> | Promise that returns the binary data of the metadata. |

## getProperties

```TypeScript
getProperties(key: Array<string>): Promise<Record<string, string | null>>
```

Obtains the property values of image metadata. This API returns the result asynchronously through a promise.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeifsMetadata-getProperties(key: Array<string>): Promise<Record<string, string | null>>--><!--Device-HeifsMetadata-getProperties(key: Array<string>): Promise<Record<string, string | null>>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Names of the properties to query. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Record<string, string \| null>> | Promise used to return the property values. If the operation fails, an error code is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600202](../errorcode-image.md#7600202-unsupported-metadata-readwrite-operation) | Unsupported metadata. Possible causes: unsupported metadata type |

## setBlob

```TypeScript
setBlob(blob: ArrayBuffer): Promise<void>
```

Replaces the current metadata with binary data. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeifsMetadata-setBlob(blob: ArrayBuffer): Promise<void>--><!--Device-HeifsMetadata-setBlob(blob: ArrayBuffer): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blob | [ArrayBuffer](../../apis-arkts/arkts-apis/arkts-arkts-collections-arraybuffer-c.md) | Yes | Binary data used to replace the metadata. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600206](../errorcode-image.md#7600206-invalid-parameter) | Invalid parameter. Possible causes: The blob is empty or has a length of 0. |

## setProperties

```TypeScript
setProperties(records: Record<string, string | null>): Promise<void>
```

Sets the values of specified properties in image metadata in batches. This API returns the result asynchronously through a promise.

For details about the properties, see [HeifsPropertyKey](arkts-image-image-heifspropertykey-e.md).

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeifsMetadata-setProperties(records: Record<string, string | null>): Promise<void>--><!--Device-HeifsMetadata-setProperties(records: Record<string, string | null>): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| records | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)<string, string \| null> | Yes | Set of key-value pairs representing the **HeifsMetadata** properties and corresponding values. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600202](../errorcode-image.md#7600202-unsupported-metadata-readwrite-operation) | Unsupported metadata. Possible causes: unsupported metadata type. |

## heifsCanvasHeight

```TypeScript
readonly heifsCanvasHeight?: number
```

Canvas height.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeifsMetadata-readonly heifsCanvasHeight?: int--><!--Device-HeifsMetadata-readonly heifsCanvasHeight?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## heifsCanvasWidth

```TypeScript
readonly heifsCanvasWidth?: number
```

Canvas width.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeifsMetadata-readonly heifsCanvasWidth?: int--><!--Device-HeifsMetadata-readonly heifsCanvasWidth?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## heifsDelayTime

```TypeScript
readonly heifsDelayTime?: number
```

Playback duration of each frame in an HEIF image sequence, in ms.

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeifsMetadata-readonly heifsDelayTime?: int--><!--Device-HeifsMetadata-readonly heifsDelayTime?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## heifsUnclampedDelayTime

```TypeScript
readonly heifsUnclampedDelayTime?: number
```

Unclamped delay of each frame in ms.

**Type:** number

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-HeifsMetadata-readonly heifsUnclampedDelayTime?: int--><!--Device-HeifsMetadata-readonly heifsUnclampedDelayTime?: int-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

