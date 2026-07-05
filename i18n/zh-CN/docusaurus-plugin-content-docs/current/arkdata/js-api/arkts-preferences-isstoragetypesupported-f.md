# isStorageTypeSupported

## isStorageTypeSupported

```TypeScript
function isStorageTypeSupported(type: StorageType): boolean
```

Checks whether the specified storage type is supported. This API returns the result synchronously. If the storage type is supported, **true** is returned. Otherwise, **false** is returned.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.DistributedDataManager.Preferences.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | StorageType | 是 | Storage type to check. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the storage type is supported; returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: Incorrect parameter types |

**示例：**

```TypeScript
let xmlType = preferences.StorageType.XML;
let gskvType = preferences.StorageType.GSKV;
let isXmlSupported = preferences.isStorageTypeSupported(xmlType);
let isGskvSupported = preferences.isStorageTypeSupported(gskvType);
console.info("Is xml supported in current platform: " + isXmlSupported);
console.info("Is gskv supported in current platform: " + isGskvSupported);

```

