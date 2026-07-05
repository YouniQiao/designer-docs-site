# getUriSync

## getUriSync

```TypeScript
function getUriSync(name: string): string
```

Get settingsdata uri (synchronous method)

**起始版本：** 8

**废弃版本：** 26.0.0

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Indicates the name of the setting to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Returns settingsdata uri. |

**示例：**

```TypeScript
// 获取数据项的URI。
let uriVar:string = settings.getUriSync(settings.display.SCREEN_BRIGHTNESS_STATUS);

```

