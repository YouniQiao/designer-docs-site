# RowSplitAttribute

除支持[通用属性]common外，还支持以下属性： 支持[通用事件]common。

**Inheritance:** RowSplitAttributeextends: CommonMethod<RowSplitAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## resizeable

```TypeScript
resizeable(value: boolean)
```

设置分割线是否可拖拽。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 分割线是否可拖拽。设置为true时表示分割线可拖拽，设置为false时表示分割线不可拖拽。 默认值：false 非法值：按默认值处理。 |

