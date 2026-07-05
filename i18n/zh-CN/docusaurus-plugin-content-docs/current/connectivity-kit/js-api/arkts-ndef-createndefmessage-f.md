# createNdefMessage

## createNdefMessage

```TypeScript
function createNdefMessage(data: int[]): NdefMessage
```

Creates an NDEF message with raw bytes.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | int[] | 是 | The raw bytes to parse NDEF message. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NdefMessage | The instance of NdefMessage. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

## createNdefMessage

```TypeScript
function createNdefMessage(ndefRecords: NdefRecord[]): NdefMessage
```

Creates an NDEF message with record list.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ndefRecords | NdefRecord[] | 是 | The NDEF records to parse NDEF message. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NdefMessage | The instance of NdefMessage. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

