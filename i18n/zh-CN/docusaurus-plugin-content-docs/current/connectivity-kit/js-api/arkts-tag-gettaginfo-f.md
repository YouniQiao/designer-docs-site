# getTagInfo

## getTagInfo

```TypeScript
function getTagInfo(want: Want): TagInfo
```

Parse a {@link TagInfo} object from Want.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | The want object that contains the values of TagInfo. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| TagInfo | The {@link TagInfo} object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |

