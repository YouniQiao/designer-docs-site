# ComponentEventOptions

描述组件操作事件监听的扩展配置， 用于指定监听流程配置和事件过滤条件。

**起始版本：** 22

**系统能力：** SystemCapability.Test.UiTest

## on

```TypeScript
on?: On
```

要监听的目标组件的属性要求。默认监听所有组件。 **注意**：只能监听具有指定属性的组件。具有相对位置的组件如 **On.isBefore**、**On.isAfter**和**On.within**无法被监听。

**类型：** On

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

