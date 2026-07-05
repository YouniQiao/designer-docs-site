# ProgressConfiguration

进度条配置。继承自[CommonConfiguration]CommonConfiguration。

**Inheritance:** ProgressConfigurationextends: CommonConfiguration<ProgressConfiguration>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## total

```TypeScript
total: number
```

进度总长。 默认值：100 **说明：** total是负数时，按照100处理。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value: number
```

当前进度值。当设置的数值小于0时，将其置为0。当设置的数值大于total时，将其置为total。 默认值：0 取值范围：[0, total]

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

