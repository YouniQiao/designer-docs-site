# CrownEvent

组件接收表冠事件的数据结构。内容包括时间戳、旋转角速度、旋转角度、表冠动作和阻止事件冒泡。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## degree

```TypeScript
degree: number
```

相对旋转角度。 单位：deg 取值范围:[-360, 360]。

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action: CrownAction
```

表冠动作。

**Type:** CrownAction

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## stopPropagation

```TypeScript
stopPropagation: Callback<void>
```

阻止[事件冒泡](docroot://ui/arkts-interaction-basic-principles.md#事件冒泡)。

**Type:** Callback<void>

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## angularVelocity

```TypeScript
angularVelocity: number
```

旋转角速度。 单位：deg/s

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## timestamp

```TypeScript
timestamp: number
```

时间戳。触发事件时距离系统启动的时间间隔。 单位：ns

**Type:** number

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

