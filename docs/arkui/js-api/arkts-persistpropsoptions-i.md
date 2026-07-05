# PersistPropsOptions

用于指定持久化属性及其默认值的键值对对象，作为[persistProps](arkts-persistentstorage-c.md#persistProps)参数传入。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## defaultValue

```TypeScript
defaultValue: number | string | boolean | Object
```

在PersistentStorage和AppStorage未查询到时，则使用默认值初始化它。从API version 12开始，defaultValue允许为null或undefined。

**Type:** number | string | boolean | Object

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## key

```TypeScript
key: string
```

属性名。

**Type:** string

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

