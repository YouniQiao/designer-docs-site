# NdefFormatableTag

Provides methods for accessing NdefFormatable tag.

**继承实现关系：** NdefFormatableTag继承自：TagSession。

**起始版本：** 12

**系统能力：** SystemCapability.Communication.NFC.Tag

## format

```TypeScript
format(message: NdefMessage): Promise<void>
```

Formats a tag as NDEF tag, writes NDEF message into the NDEF Tag.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| message | NdefMessage | 是 | NDEF message to write while format. It can be null, then only format the tag. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## format

```TypeScript
format(message: NdefMessage, callback: AsyncCallback<void>): void
```

Formats a tag as NDEF tag, writes NDEF message into the NDEF Tag.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| message | NdefMessage | 是 | NDEF message to write while format. It can be null, then only format the tag. |
| callback | AsyncCallback&lt;void> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

## formatReadOnly

```TypeScript
formatReadOnly(message: NdefMessage): Promise<void>
```

Formats a tag as NDEF tag, writes NDEF message into the NDEF Tag, then sets the tag readonly.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| message | NdefMessage | 是 | NDEF message to write while format. It can be null, then only format the tag. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The void |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The tag I/O operation failed. |

## formatReadOnly

```TypeScript
formatReadOnly(message: NdefMessage, callback: AsyncCallback<void>): void
```

Formats a tag as NDEF tag, writes NDEF message into the NDEF Tag, then sets the tag readonly.

**起始版本：** 12

**需要权限：** 

 ohos.permission.NFC_TAG

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| message | NdefMessage | 是 | NDEF message to write while format. It can be null, then only format the tag. |
| callback | AsyncCallback&lt;void> | 是 | The callback. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 3100201 | The tag running state is abnormal in the service. |
| 3100204 | The Tag I/O operation failed. |

