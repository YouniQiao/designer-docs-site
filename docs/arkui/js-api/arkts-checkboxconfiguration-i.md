# CheckBoxConfiguration

开发者需要自定义class实现ContentModifier接口。继承自[CommonConfiguration]CommonConfiguration。

**Inheritance:** CheckBoxConfigurationextends: CommonConfiguration<CheckBoxConfiguration>.

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## name

```TypeScript
name: string
```

当前多选框名称。

**Type:** string

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## triggerChange

```TypeScript
triggerChange: Callback<boolean>
```

触发多选框选中状态变化。true表示从未选中变为选中，false表示从选中变为未选中。

**Type:** Callback<boolean>

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## selected

```TypeScript
selected: boolean
```

指示多选框是否被选中，值为true时，多选框被选中。值为false时，多选框未选中。</br>如果select属性没有设置默认值是false。</br>如果设置select属性，此值与设置select属性的值相同。

**Type:** boolean

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

