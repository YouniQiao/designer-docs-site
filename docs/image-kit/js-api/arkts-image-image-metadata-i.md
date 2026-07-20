# Metadata

The **Metadata** class provides APIs for storing image metadata. For details about the supported metadata types,see [MetadataType](arkts-image-image-metadatatype-e.md).

**Since:** 13

<!--Device-image-interface Metadata--><!--Device-image-interface Metadata-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## clone

```TypeScript
clone(): Promise<Metadata>
```

Clones the metadata. This API uses a promise to return the result.

**Since:** 13

<!--Device-Metadata-clone(): Promise<Metadata>--><!--Device-Metadata-clone(): Promise<Metadata>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Metadata> | Promise used to return the metadata instance. |

## getAllProperties

```TypeScript
getAllProperties(): Promise<Record<string, string | null>>
```

Obtains all properties and values from the image's metadata. This API uses a promise to return the result.

For details about how to query the property values, see [PropertyKey](arkts-image-image-propertykey-e.md),[FragmentMapPropertyKey](arkts-image-image-fragmentmappropertykey-e.md),[GifPropertyKey](arkts-image-image-gifpropertykey-e.md), and [HeifsPropertyKey](arkts-image-image-heifspropertykey-e.md).

**Since:** 13

<!--Device-Metadata-getAllProperties(): Promise<Record<string, string | null>>--><!--Device-Metadata-getAllProperties(): Promise<Record<string, string | null>>-End-->

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

<!--Device-Metadata-getBlob(): Promise<ArrayBuffer>--><!--Device-Metadata-getBlob(): Promise<ArrayBuffer>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<ArrayBuffer> | Promise that returns the binary data of the metadata. |

## getProperties

```TypeScript
getProperties(key: Array<string>): Promise<Record<string, string | null>>
```

Obtains the values of properties from the image's metadata. This API uses a promise to return the result.For details about how to query the property values, see [PropertyKey](arkts-image-image-propertykey-e.md),[FragmentMapPropertyKey](arkts-image-image-fragmentmappropertykey-e.md),[GifPropertyKey](arkts-image-image-gifpropertykey-e.md), and [HeifsPropertyKey](arkts-image-image-heifspropertykey-e.md).

**Since:** 13

<!--Device-Metadata-getProperties(key: Array<string>): Promise<Record<string, string | null>>--><!--Device-Metadata-getProperties(key: Array<string>): Promise<Record<string, string | null>>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | Names of the properties. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Record<string, string \| null>> | Promise used to return the property values. If the operation fails, an error code is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |
| [7600202](../errorcode-image.md#7600202-unsupported-metadata-readwrite-operation) | Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The metadata type does not match the auxiliary picture type. |

## setBlob

```TypeScript
setBlob(blob: ArrayBuffer): Promise<void>
```

Replaces the current metadata with binary data. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-Metadata-setBlob(blob: ArrayBuffer): Promise<void>--><!--Device-Metadata-setBlob(blob: ArrayBuffer): Promise<void>-End-->

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

Sets the values of properties for the image's metadata. This API uses a promise to return the result.

For details about how to query the property values, see [PropertyKey](arkts-image-image-propertykey-e.md),[FragmentMapPropertyKey](arkts-image-image-fragmentmappropertykey-e.md),[GifPropertyKey](arkts-image-image-gifpropertykey-e.md), and [HeifsPropertyKey](arkts-image-image-heifspropertykey-e.md).

**Since:** 13

<!--Device-Metadata-setProperties(records: Record<string, string | null>): Promise<void>--><!--Device-Metadata-setProperties(records: Record<string, string | null>): Promise<void>-End-->

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| records | [Record](../../apis-na/arkts-apis/arkts-na-record-t.md)<string, string \| null> | Yes | Array of properties and their values. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. If the operation fails, an error code is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.2.Incorrect parameter types. 3.Parameter verification failed. |
| [7600202](../errorcode-image.md#7600202-unsupported-metadata-readwrite-operation) | Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The metadata type does not match the auxiliary picture type. |

