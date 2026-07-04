# KeyOptions

表示按键操作的选项。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Test.UiTest

## key1

```TypeScript
key1?: number
```

操作期间按下的第一个keyCode。 如果未设置，将不会注入按键事件。 仅设置key2而不设置key1将导致BusinessError 17000007。

**类型：** number

**起始版本：** 26.0.0

**元服务API：** 从API版本26.0.0开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

## key2

```TypeScript
key2?: number
```

操作期间按下的第二个KeyCode。 如果未设置，将不会注入按键事件。 仅设置key2而不设置key1将导致BusinessError 17000007。

**类型：** number

**起始版本：** 26.0.0

**元服务API：** 从API版本26.0.0开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

