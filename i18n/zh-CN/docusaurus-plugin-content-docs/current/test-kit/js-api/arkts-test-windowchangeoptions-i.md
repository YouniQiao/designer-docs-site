# WindowChangeOptions

描述窗口变更事件监听的扩展配置， 用于指定监听流程配置和事件过滤条件。

**起始版本：** 22

**系统能力：** SystemCapability.Test.UiTest

## bundleName

```TypeScript
bundleName?: string
```

要监听的窗口的包名。默认监听所有窗口。

**类型：** string

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## timeout

```TypeScript
timeout?: number
```

监听超时时间间隔，防止因事件通知延迟导致监听失败。 <br>取值范围：值应 >= 500 <br>默认值：10000 <br>单位：ms

**类型：** number

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

