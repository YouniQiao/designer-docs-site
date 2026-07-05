# messageToBytes

## messageToBytes

```TypeScript
function messageToBytes(ndefMessage: NdefMessage): int[]
```

Parses an NDEF message into raw bytes.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ndefMessage | NdefMessage | 是 | An NDEF message to parse. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int[] | Returns the raw bytes of an NDEF message. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

