# CheckBoxGroupConfiguration

开发者必须自定义此类以实现ContentModifier接口，使用方法见[contentModifier](arkts-checkboxgroupattribute-c.md#contentModifier)。

**Inheritance:** CheckBoxGroupConfigurationextends: CommonConfiguration<CheckBoxGroupConfiguration>.

**Since:** 21

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## name

```TypeScript
name: string
```

当前多选框群组名称。

**Type:** string

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## triggerChange

```TypeScript
triggerChange: Callback<boolean>
```

触发多选框群组选中状态变化。true表示从部分选中或未选中变为全部选中，false表示从全部选中或部分选中变为全部未选中。

**Type:** Callback<boolean>

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## status

```TypeScript
status: SelectStatus
```

表示多选框群组的选中状态。

**Type:** SelectStatus

**Since:** 21

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

