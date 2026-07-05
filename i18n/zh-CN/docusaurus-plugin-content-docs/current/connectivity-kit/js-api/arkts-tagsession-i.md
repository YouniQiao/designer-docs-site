# TagSession

Controls tag read and write. <p>Classes for different types of tags inherit from this abstract class to control connections to tags, read data from tags, and write data to tags.

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## connect

```TypeScript
connect(): void
```

Connects to a tag. Must be called before data is read from or written to the tag.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

## connectTag

```TypeScript
connectTag(): boolean
```

Connects to a tag. <p>This method must be called before data is read from or written to the tag.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** tagSession.TagSession#connect

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the connection is set up; returns {@code false} otherwise. |

## getMaxSendLength

```TypeScript
getMaxSendLength(): number
```

Queries the maximum length of data that can be sent to a tag.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** tagSession.TagSession#getMaxTransmitSize

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Returns the maximum length of the data to be sent to the tag. |

## getMaxTransmitSize

```TypeScript
getMaxTransmitSize(): int
```

Obtains the maximum length of data that can be sent to a tag.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the maximum length of the data to be sent to the tag. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

## getSendDataTimeout

```TypeScript
getSendDataTimeout(): number
```

Queries the timeout duration (ms) for sending data to a tag.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** tagSession.TagSession#getTimeout

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| number | Returns the timeout duration. |

## getTagInfo

```TypeScript
getTagInfo(): tag.TagInfo
```

Obtains the tag information.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** ohos.nfc.tag/tag#getTagInfo

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| tag.TagInfo | Returns the tag information, which is a {@link TagInfo} object. |

## getTimeout

```TypeScript
getTimeout(): int
```

Obtains the timeout duration (ms) for sending data to a tag.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | Returns the timeout duration. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

## isConnected

```TypeScript
isConnected(): boolean
```

Checks whether a connection has been set up with a tag.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if tag connected, otherwise false. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported. |

## isTagConnected

```TypeScript
isTagConnected(): boolean
```

Checks whether a connection has been set up with a tag.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** tagSession.TagSession#isConnected

**系统能力：** SystemCapability.Communication.NFC.Tag

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if a connection has been set up with the tag;  returns {@code false} otherwise. |

## reset

```TypeScript
reset(): void
```

Resets a connection with a tag and restores the default timeout duration for writing data to the tag.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** tagSession.TagSession#resetConnection

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

## resetConnection

```TypeScript
resetConnection(): void
```

Resets a connection with a tag and restores the default timeout duration for writing data to the tag.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

## sendData

```TypeScript
sendData(data: number[]): Promise<number[]>
```

Writes data to a tag.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** tagSession.TagSession#transmit

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | number[] | 是 | Indicates the data to be written to the tag. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;number[]> | Returns bytes received in response. Or bytes with a length of 0 if the  data fails to be written to the tag. |

## sendData

```TypeScript
sendData(data: number[], callback: AsyncCallback<number[]>): void
```

Writes data to a tag.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** tagSession.TagSession#transmit

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | number[] | 是 | Indicates the data to be written to the tag. |
| callback | AsyncCallback&lt;number[]> | 是 | The callback.  data fails to be written to the tag. |

## setSendDataTimeout

```TypeScript
setSendDataTimeout(timeout: number): boolean
```

Sets the timeout duration (ms) for sending data to a tag. <p>If data is not sent to the tag within the duration, data sending fails.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** tagSession.TagSession#setTimeout

**需要权限：** 

 ohos.permission.NFC_TAG

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeout | number | 是 | Indicates the timeout duration to be set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns {@code true} if the setting is successful; returns {@code false} otherwise. |

## setTimeout

```TypeScript
setTimeout(timeout: int): void
```

Sets the timeout duration (ms) for sending data to a tag.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| timeout | int | 是 | Indicates the timeout duration to be set. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

## transmit

```TypeScript
transmit(data: int[]): Promise<int[]>
```

Writes data to a tag.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | int[] | 是 | Indicates the data to be written to the tag. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int[]> | Returns bytes received in response. Or bytes with a length of 0 if the  data fails to be written to the tag. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## transmit

```TypeScript
transmit(data: int[], callback: AsyncCallback<int[]>): void
```

Writes data to a tag.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | int[] | 是 | Indicates the data to be written to the tag. |
| callback | AsyncCallback&lt;int[]> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

