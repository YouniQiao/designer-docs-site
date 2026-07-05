# RadioConfiguration

开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]CommonConfiguration。

**Inheritance:** RadioConfigurationextends: CommonConfiguration<RadioConfiguration>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## checked

```TypeScript
checked: boolean
```

设置单选框的选中状态。 默认值：false 值为true时，单选框被选中。值为false时，单选框不被选中。

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## value

```TypeScript
value: string
```

当前单选框的值。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## triggerChange

```TypeScript
triggerChange: Callback<boolean>
```

触发单选框选中状态变化。 值为true时，表示从未选中变为选中。值为false时，表示从选中变为未选中。

**Type:** Callback<boolean>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

