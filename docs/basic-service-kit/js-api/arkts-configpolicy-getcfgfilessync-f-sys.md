# getCfgFilesSync

## getCfgFilesSync

```TypeScript
function getCfgFilesSync(relPath: string, followMode?: FollowXMode, extra?: string): Array<string>
```

根据提供的跟随模式获取指定文件名所有的文件列表，按优先级从低到高。

**Since:** 11

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| relPath | string | Yes | 配置文件名。 |
| followMode | FollowXMode | No | 跟随模式，不设置时，默认使用  [DEFAULT]configPolicy.FollowXMode.DEFAULT。 |
| extra | string | No | 用户自定义跟随规则，仅在followMode为  [USER_DEFINED]configPolicy.FollowXMode.USER_DEFINED时有效。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 返回文件列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3.Parameter verification failed. |

