# createMediaSourceWithDirectory

## createMediaSourceWithDirectory

```TypeScript
function createMediaSourceWithDirectory(path: string): Promise< MediaSource | undefined>
```

Create a MediaSource object from the given directory.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Multimedia.Media.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| path | string | 是 | Buffer path information for creating a media source |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt; MediaSource \| undefined> | If success, an MediaSource is returned. Otherwise returns null. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 5411007 | The directory specified by the path parameter does not exist or unaccessed. |

