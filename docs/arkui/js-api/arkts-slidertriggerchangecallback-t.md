# SliderTriggerChangeCallback

```TypeScript
declare type SliderTriggerChangeCallback = (value: number, mode: SliderChangeMode) => void
```

定义SliderConfiguration中使用的回调类型。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | 设置当前的进度值。 取值范围：[[min](arkts-slideroptions-i.md#SliderOptions)-[max](arkts-slideroptions-i.md#SliderOptions)] |
| mode | SliderChangeMode | Yes | 设置事件触发的相关状态值。 |

