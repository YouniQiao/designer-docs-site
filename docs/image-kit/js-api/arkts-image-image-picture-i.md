# Picture

An image that contains special information can be decoded into a picture object, which generally contains the main picture, auxiliary picture, and metadata. The main picture contains most information about the image and is mainly used to render the image. The auxiliary picture is used to store data related to but different from the main picture, revealing more comprehensive details. The metadata is generally used to store information about the image file. The picture object class is used to read or write picture objects. Before calling any API in Picture, you must use [image.createPicture](arkts-image-image-createpicture-f.md#createpicture-1) to create a Picture object.

Images occupy a large amount of memory. When you finish using a Picture instance, call [release](arkts-image-image-picture-i.md#release-1) to free the memory promptly. Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.

**Since:** 13

<!--Device-image-interface Picture--><!--Device-image-interface Picture-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## getAuxiliaryPicture

```TypeScript
getAuxiliaryPicture(type: AuxiliaryPictureType): AuxiliaryPicture | null
```

Obtains an auxiliary picture by type.

**Since:** 13

<!--Device-Picture-getAuxiliaryPicture(type: AuxiliaryPictureType): AuxiliaryPicture | null--><!--Device-Picture-getAuxiliaryPicture(type: AuxiliaryPictureType): AuxiliaryPicture | null-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [AuxiliaryPictureType](arkts-image-image-auxiliarypicturetype-e.md) | Yes | Type of the auxiliary picture. |

**Return value:**

| Type | Description |
| --- | --- |
| [AuxiliaryPicture](arkts-image-image-auxiliarypicture-i.md) | AuxiliaryPicture object. If there is no AuxiliaryPicture object, null is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |

## getGainmapPixelmap

```TypeScript
getGainmapPixelmap(): PixelMap | null
```

Obtains the PixelMap object of the gain map.

**Since:** 13

<!--Device-Picture-getGainmapPixelmap(): PixelMap | null--><!--Device-Picture-getGainmapPixelmap(): PixelMap | null-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [PixelMap](arkts-image-image-pixelmap-i.md) | PixelMap object obtained. If there is no PixelMap object, null is returned. |

## getHdrComposedPixelmap

```TypeScript
getHdrComposedPixelmap(): Promise<PixelMap>
```

Generates a High Dynamic Range (HDR) image and obtains its PixelMap object. This API uses a promise to return the result.

**Since:** 13

<!--Device-Picture-getHdrComposedPixelmap(): Promise<PixelMap>--><!--Device-Picture-getHdrComposedPixelmap(): Promise<PixelMap>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PixelMap> | Promise used to return the PixelMap object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600901](../errorcode-image.md#7600901-unknown-error) | Inner unknown error. Please check the logs for detailed information. |
| [7600201](../errorcode-image.md#7600201-unsupported-operation) | Unsupported operation. e.g.,1. The picture does not has a gainmap.2. MainPixelMap's allocator type is not DMA. |

## getHdrComposedPixelmapWithOptions

```TypeScript
getHdrComposedPixelmapWithOptions(options?: HdrComposeOptions): Promise<PixelMap | undefined>
```

Composites an HDR image and returns PixelMap of the image. Composition options (such as PixelMapFormat) can be passed. This API uses a promise to return the result.

The Picture object that calls this API must contain the main picture, gain map, and metadata.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-Picture-getHdrComposedPixelmapWithOptions(options?: HdrComposeOptions): Promise<PixelMap | undefined>--><!--Device-Picture-getHdrComposedPixelmapWithOptions(options?: HdrComposeOptions): Promise<PixelMap | undefined>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [HdrComposeOptions](arkts-image-image-hdrcomposeoptions-i.md) | No | Options for HDR composition. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<PixelMap \| undefined> | Promise, which returns the PixelMap object or **undefined**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600201](../errorcode-image.md#7600201-unsupported-operation) | Unsupported operation. |

## getMainPixelmap

```TypeScript
getMainPixelmap(): PixelMap
```

Obtains the PixelMap object of the main picture. This API returns the result synchronously.

**Since:** 13

<!--Device-Picture-getMainPixelmap(): PixelMap--><!--Device-Picture-getMainPixelmap(): PixelMap-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [PixelMap](arkts-image-image-pixelmap-i.md) | PixelMap object. |

## getMetadata

```TypeScript
getMetadata(metadataType: MetadataType): Promise<Metadata>
```

Obtains the metadata of this Picture object. This API uses a promise to return the result.

**Since:** 13

<!--Device-Picture-getMetadata(metadataType: MetadataType): Promise<Metadata>--><!--Device-Picture-getMetadata(metadataType: MetadataType): Promise<Metadata>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| metadataType | [MetadataType](arkts-image-image-metadatatype-e.md) | Yes | Metadata type. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Metadata> | Promise used to return the metadata. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |
| [7600202](../errorcode-image.md#7600202-unsupported-metadata-readwrite-operation) | Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The metadata type does not match the auxiliary picture type. |

## hdrComposeToMainPixelmap

```TypeScript
hdrComposeToMainPixelmap(): Promise<void>
```

Invokes the VPE algorithm to compose the main pixelmap and gainmap. The composed result will replace the main pixelmap of the current picture object.

The Picture object that calls this API must contain the main pixelmap, gain map.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-Picture-hdrComposeToMainPixelmap(): Promise<void>--><!--Device-Picture-hdrComposeToMainPixelmap(): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [7600201](../errorcode-image.md#7600201-unsupported-operation) | Unsupported operation. e.g.,1. The picture does not have a gainmap.2. pixelMap's allocator type is not DMA. |

## marshalling

```TypeScript
marshalling(sequence: rpc.MessageSequence): void
```

Marshals this Picture object and writes it to a MessageSequence object.

**Since:** 13

<!--Device-Picture-marshalling(sequence: rpc.MessageSequence): void--><!--Device-Picture-marshalling(sequence: rpc.MessageSequence): void-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sequence | rpc.MessageSequence | Yes | MessageSequence object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types; 3.Parameter verification failed. |
| [62980097](../errorcode-image.md#62980097-pixelmap-serialization-failed) | IPC error. Possible cause: 1.IPC communication failed. 2. Image upload exception.3. Decode process exception. 4. Insufficient memory. |

## release

```TypeScript
release(): void
```

Releases this Picture object.

Images occupy a large amount of memory. When you finish using a Picture instance, call this API to free the memory promptly.

Before releasing the instance, ensure that all asynchronous operations associated with the instance have finished and the instance is no longer needed.

**Since:** 13

<!--Device-Picture-release(): void--><!--Device-Picture-release(): void-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## setAuxiliaryPicture

```TypeScript
setAuxiliaryPicture(type: AuxiliaryPictureType, auxiliaryPicture: AuxiliaryPicture): void
```

Sets an auxiliary picture.

**Since:** 13

<!--Device-Picture-setAuxiliaryPicture(type: AuxiliaryPictureType, auxiliaryPicture: AuxiliaryPicture): void--><!--Device-Picture-setAuxiliaryPicture(type: AuxiliaryPictureType, auxiliaryPicture: AuxiliaryPicture): void-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | [AuxiliaryPictureType](arkts-image-image-auxiliarypicturetype-e.md) | Yes | Type of the auxiliary picture. |
| auxiliaryPicture | [AuxiliaryPicture](arkts-image-image-auxiliarypicture-i.md) | Yes | AuxiliaryPicture object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |

## setMetadata

```TypeScript
setMetadata(metadataType: MetadataType, metadata: Metadata): Promise<void>
```

Sets the metadata for this Picture object. This API uses a promise to return the result.

**Since:** 13

<!--Device-Picture-setMetadata(metadataType: MetadataType, metadata: Metadata): Promise<void>--><!--Device-Picture-setMetadata(metadataType: MetadataType, metadata: Metadata): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| metadataType | [MetadataType](arkts-image-image-metadatatype-e.md) | Yes | Metadata type. |
| metadata | [Metadata](../../apis-ability-kit/arkts-apis/arkts-ability-bundlemanager-metadata-t.md) | Yes | Metadata object. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |
| [7600202](../errorcode-image.md#7600202-unsupported-metadata-readwrite-operation) | Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The metadata type does not match the auxiliary picture type. |

