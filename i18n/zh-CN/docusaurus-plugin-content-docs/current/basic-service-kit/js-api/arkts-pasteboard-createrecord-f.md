# createRecord

## createRecord

```TypeScript
function createRecord(mimeType: string, value: ValueType): PasteDataRecord
```

Creates a **PasteDataRecord** object of the specified type.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mimeType | string | 是 | The type of custom data. The value can be a predefined MIME type listed in  [Constants](docroot://reference/apis-basic-services-kit/js-apis-pasteboard.md#constants), including HTML, WANT,  plain text, URI, and pixel map, or a custom type. The value of mimeType cannot exceed 1024 bytes. |
| value | ValueType | 是 | Data content of the specified type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteDataRecord | A new paste data record of a specified type. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types;  3. Parameter verification failed. |

