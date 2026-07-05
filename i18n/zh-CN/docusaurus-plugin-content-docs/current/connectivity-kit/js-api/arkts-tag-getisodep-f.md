# getIsoDep

## getIsoDep

```TypeScript
function getIsoDep(tagInfo: TagInfo): IsoDepTag
```

Obtains an {@link IsoDepTag} object based on the tag information. During tag reading, if the tag supports the IsoDep technology, an {@link IsoDepTag} object will be created based on the tag information.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NFC.Tag

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| tagInfo | TagInfo | 是 | Indicates the dispatched tag information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| IsoDepTag | The {@link IsoDepTag} object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The parameter check failed. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 801 | Capability not supported. |
| 3100201 | The tag running state is abnormal in the service. |

