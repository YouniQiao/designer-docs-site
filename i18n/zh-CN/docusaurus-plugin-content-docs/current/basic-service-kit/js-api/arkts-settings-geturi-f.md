# getURI

## getURI

```TypeScript
function getURI(name: string, callback: AsyncCallback<object>): void
```

Constructs a URI for a specific name-value pair for monitoring data of the ability that uses the Data template.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Indicates the name of the setting to set. |
| callback | AsyncCallback&lt;object> | 是 |  |

**示例：**

```TypeScript
settings.getURI(settings.display.SCREEN_BRIGHTNESS_STATUS, (uri:string) => {
    console.info(`callback:uri -> ${JSON.stringify(uri)}`)
})

```

## getURI

```TypeScript
function getURI(name: string): Promise<object>
```

Constructs a URI for a specific name-value pair for monitoring data of the ability that uses the Data template.

**起始版本：** 7

**废弃版本：** 9

**系统能力：** SystemCapability.Applications.Settings.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| name | string | 是 | Indicates the name of the setting to set. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;object> | Returns the corresponding URI; returns {@code null} if the URI does not exist. |

**示例：**

```TypeScript
settings.getURI(settings.display.SCREEN_BRIGHTNESS_STATUS).then((uri:string) => {
    console.info(`promise:uri -> ${JSON.stringify(uri)}`)
})

```

