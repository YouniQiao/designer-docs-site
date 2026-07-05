# ContentModifier

开发者需要自定义class实现ContentModifier接口。

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## applyContent

```TypeScript
applyContent(): WrappedBuilder<[T]>
```

定制内容区的Builder。 **T参数支持范围:** ButtonConfiguration、CheckBoxConfiguration、DataPanelConfiguration、TextClockConfiguration、ToggleConfiguration、GaugeConfiguration、LoadingProgressConfiguration、RadioConfiguration、ProgressConfiguration、RatingConfiguration、SliderConfiguration **属性支持范围:** 支持通用属性enabled，contentModifier。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| WrappedBuilder&lt;[T]> | 组件的属性类，用来区别不同组件自定义内容区后所需要的不同信息，比如Button组件的ButtonConfiguration，Checkbox组件的  CheckBoxConfiguration等。 |

