# IsoDepTag

Provides methods for accessing IsoDep tag.

**继承实现关系：** IsoDepTag继承自：TagSession。

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## getHiLayerResponse

```TypeScript
getHiLayerResponse(): int[]
```

Gets IsoDep HiLayer Response bytes of the tag, which is based on NfcB RF technology. It could be null if not based on NfcB.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int[] | Returns HiLayer Response bytes, the length could be 0. |

## getHistoricalBytes

```TypeScript
getHistoricalBytes(): int[]
```

Gets IsoDep Historical bytes of the tag, which is based on NfcA RF technology. It could be null if not based on NfcA.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int[] | Returns the Historical bytes, the length could be 0. |

## isExtendedApduSupported

```TypeScript
isExtendedApduSupported(): Promise<boolean>
```

Checks if extended apdu length supported or not.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns true if extended apdu length supported, otherwise false. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## isExtendedApduSupported

```TypeScript
isExtendedApduSupported(callback: AsyncCallback<boolean>): void
```

Checks if extended apdu length supported or not.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

