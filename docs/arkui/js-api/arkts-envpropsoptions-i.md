# EnvPropsOptions

用于指定环境变量名称及其默认值的键值对对象，作为[envProps](arkts-environment-c.md#envProps)参数传入。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## defaultValue

```TypeScript
defaultValue: number | string | boolean
```

查询不到环境变量key，则使用defaultValue作为默认值存入AppStorage中。

**Type:** number | string | boolean

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## key

```TypeScript
key: string
```

环境变量名称，支持的范围详见[内置环境变量说明](@link Environment)。

**Type:** string

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

