# makeUriRecord

## makeUriRecord

```TypeScript
function makeUriRecord(uri: string): NdefRecord
```

Creates an NDEF record with uri data.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Uri data for new NDEF record. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NdefRecord | The instance of NdefRecord. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |

