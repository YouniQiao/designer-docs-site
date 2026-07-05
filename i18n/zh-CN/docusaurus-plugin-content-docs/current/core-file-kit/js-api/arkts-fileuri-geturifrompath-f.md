# getUriFromPath

## getUriFromPath

```TypeScript
function getUriFromPath(path: string): string
```

Get the uri from the path of file in app sandbox

**起始版本：** 15

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.FileManagement.AppFileService

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | the path of file in app sandbox |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Return the file uri |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | The input parameter is invalidPossible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

**示例：**

```TypeScript
let filePath = pathDir + "/test";
let uri = fileUri.getUriFromPath(filePath);

```

