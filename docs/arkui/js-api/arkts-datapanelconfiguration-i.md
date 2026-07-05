# DataPanelConfiguration

开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]CommonConfiguration。

**Inheritance:** DataPanelConfigurationextends: CommonConfiguration<DataPanelConfiguration>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## maxValue

```TypeScript
maxValue: number
```

DataPanel显示的最大值。 默认值：100。 **说明：** 如果小于或等于0，maxValue将被设为values数组中所有项的总和，并按比例显示。

**Type:** number

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## values

```TypeScript
values: number[]
```

当前DataPanel的数据值。 数组长度范围是[0, 9]。 **说明：** 如果数组长度大于9，则取前9项。

**Type:** number[]

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

