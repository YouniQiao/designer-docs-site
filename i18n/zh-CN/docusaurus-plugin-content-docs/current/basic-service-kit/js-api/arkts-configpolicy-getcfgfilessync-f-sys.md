# getCfgFilesSync

## getCfgFilesSync

```TypeScript
function getCfgFilesSync(relPath: string, followMode?: FollowXMode, extra?: string): Array<string>
```

根据提供的跟随模式获取指定文件名所有的文件列表，按优先级从低到高。

**起始版本：** 11

**系统能力：** SystemCapability.Customization.ConfigPolicy

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| relPath | string | 是 | 配置文件名。 |
| followMode | FollowXMode | 否 | 跟随模式，不设置时，默认使用  [DEFAULT]configPolicy.FollowXMode.DEFAULT。 |
| extra | string | 否 | 用户自定义跟随规则，仅在followMode为  [USER_DEFINED]configPolicy.FollowXMode.USER_DEFINED时有效。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | 返回文件列表。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3.Parameter verification failed. |

