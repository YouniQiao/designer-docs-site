# Metadata

Metadata类，用于存储图像的元数据。目前支持的元数据类型可参考[MetadataType]image.MetadataType。 > **说明：** > > - 本Interface首批接口从API version 13开始支持。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

## Modules to Import

```TypeScript
import { image } from '@kit.ImageKit';
```

## clone

```TypeScript
clone(): Promise<Metadata>
```

对元数据进行克隆。使用Promise异步回调。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Metadata> | Promise对象，成功返回元数据实例。 |

## clone

```TypeScript
clone(): Promise<Metadata | undefined>
```

Obtains a clone of metadata. This method uses a promise to return the metadata.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Metadata \| undefined> | A Promise instance used to return the metadata. |

## getAllProperties

```TypeScript
getAllProperties(): Promise<Record<string, string | null>>
```

获取图片中所有元数据的属性和值。使用Promise异步回调。 如要查询属性值信息请参考[PropertyKey]image.PropertyKey、[FragmentMapPropertyKey]image.FragmentMapPropertyKey、 [GifPropertyKey]image.GifPropertyKey和[HeifsPropertyKey]image.HeifsPropertyKey。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, string \| null>> | Promise对象，返回元数据拥有的所有属性的值。 |

## getAllProperties

```TypeScript
getAllProperties(): Promise<Record<string, string|null> | undefined>
```

Obtains the value of all properties in an image. This method uses a promise to return the property values in array of records.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Image.Core

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Record&lt;string, string\|null> \| undefined> | Array of Records instance used to  return the property values. |

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

获取图像中属性的值。使用Promise异步回调。 如要查询属性值信息请参考[PropertyKey]image.PropertyKey、[FragmentMapPropertyKey]image.FragmentMapPropertyKey、 [GifPropertyKey]image.GifPropertyKey和[HeifsPropertyKey]image.HeifsPropertyKey。

**Since:** 13

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
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 7600202 | Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The  metadata type does not match the auxiliary picture type. |

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

批量设置图片元数据中的指定属性的值。使用Promise异步回调。 如要查询属性值信息请参考[PropertyKey]image.PropertyKey、[FragmentMapPropertyKey]image.FragmentMapPropertyKey、 [GifPropertyKey]image.GifPropertyKey和[HeifsPropertyKey]image.HeifsPropertyKey。

**Since:** 13

**System capability:** SystemCapability.Multimedia.Image.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| records | Record&lt;string, string \| null> | Yes | 要修改的属性和值的数组。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，如获取失败则返回错误码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 7600202 | Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The  metadata type does not match the auxiliary picture type. |

