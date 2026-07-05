# Metadata

Metadata类，用于存储图像的元数据。目前支持的元数据类型可参考[MetadataType]image.MetadataType。 > **说明：** > > - 本Interface首批接口从API version 13开始支持。

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Image.Core

## 导入模块

```TypeScript
import { image } from '@kit.ImageKit';
```

## clone

```TypeScript
clone(): Promise<Metadata>
```

对元数据进行克隆。使用Promise异步回调。

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Metadata> | Promise对象，成功返回元数据实例。 |

## clone

```TypeScript
clone(): Promise<Metadata | undefined>
```

Obtains a clone of metadata. This method uses a promise to return the metadata.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Metadata \| undefined> | A Promise instance used to return the metadata. |

## getAllProperties

```TypeScript
getAllProperties(): Promise<Record<string, string | null>>
```

获取图片中所有元数据的属性和值。使用Promise异步回调。 如要查询属性值信息请参考[PropertyKey]image.PropertyKey、[FragmentMapPropertyKey]image.FragmentMapPropertyKey、 [GifPropertyKey]image.GifPropertyKey和[HeifsPropertyKey]image.HeifsPropertyKey。

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Record&lt;string, string \| null>> | Promise对象，返回元数据拥有的所有属性的值。 |

## getAllProperties

```TypeScript
getAllProperties(): Promise<Record<string, string|null> | undefined>
```

Obtains the value of all properties in an image. This method uses a promise to return the property values in array of records.

**起始版本：** 23

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Record&lt;string, string\|null> \| undefined> | Array of Records instance used to  return the property values. |

## getBlob

```TypeScript
getBlob(): Promise<ArrayBuffer>
```

以二进制数据的形式获取元数据。使用Promise异步回调。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ArrayBuffer> | Promise对象，返回元数据的二进制数据。 |

## getProperties

```TypeScript
getProperties(key: Array<string>): Promise<Record<string, string | null>>
```

获取图像中属性的值。使用Promise异步回调。 如要查询属性值信息请参考[PropertyKey]image.PropertyKey、[FragmentMapPropertyKey]image.FragmentMapPropertyKey、 [GifPropertyKey]image.GifPropertyKey和[HeifsPropertyKey]image.HeifsPropertyKey。

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| key | Array&lt;string> | 是 | 要获取其值的属性的名称。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Record&lt;string, string \| null>> | Promise对象，返回元数据要获取的属性的值，如获取失败则返回错误码。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 7600202 | Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The  metadata type does not match the auxiliary picture type. |

## setBlob

```TypeScript
setBlob(blob: ArrayBuffer): Promise<void>
```

使用二进制数据替换当前元数据。使用Promise异步回调。

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| blob | ArrayBuffer | 是 | 要替换的二进制数据。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 7600206 | Invalid parameter. Possible causes: The blob is empty or has a length of 0. |

## setProperties

```TypeScript
setProperties(records: Record<string, string | null>): Promise<void>
```

批量设置图片元数据中的指定属性的值。使用Promise异步回调。 如要查询属性值信息请参考[PropertyKey]image.PropertyKey、[FragmentMapPropertyKey]image.FragmentMapPropertyKey、 [GifPropertyKey]image.GifPropertyKey和[HeifsPropertyKey]image.HeifsPropertyKey。

**起始版本：** 13

**系统能力：** SystemCapability.Multimedia.Image.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| records | Record&lt;string, string \| null> | 是 | 要修改的属性和值的数组。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，如获取失败则返回错误码。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. 3.Parameter verification failed. |
| 7600202 | Unsupported metadata. Possible causes: 1. Unsupported metadata type. 2. The  metadata type does not match the auxiliary picture type. |

