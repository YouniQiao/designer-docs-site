# TextClockConfiguration

开发者需要自定义class实现ContentModifier接口。

**Inheritance:** TextClockConfigurationextends: CommonConfiguration<TextClockConfiguration>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## timeZoneOffset

```TypeScript
timeZoneOffset: number
```

当前文本时钟时区偏移量。 取值范围为[-14, 12]，表示东十二区到西十二区，其中负值表示东时区，正值表示西时区，比如东八区为-8。设置值为该取值范围内的浮点数时会进行取整，舍弃小数部分。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## started

```TypeScript
started: boolean
```

指示文本时钟是否启动。 true：表示启动文本时钟。 false：表示关闭文本时钟。 默认值：true

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## timeValue

```TypeScript
timeValue: number
```

当前文本时钟时区的UTC秒数。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

