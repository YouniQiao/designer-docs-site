# GestureInfo

手势信息类型。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## isSystemGesture

```TypeScript
isSystemGesture: boolean
```

当前手势是否为组件自带手势。true表示是，false表示否。 默认值：false

**Type:** boolean

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## tag

```TypeScript
tag?: string
```

手势标志。 **说明：** 未设置事件标志tag属性时，tag不返回或返回undefined。

**Type:** string

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## type

```TypeScript
type: GestureControl.GestureType
```

手势类型。 **说明：** 当手势为未暴露类型的系统内置手势事件时，type的值为-1。

**Type:** GestureControl.GestureType

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

