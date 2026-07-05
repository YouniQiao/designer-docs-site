# CounterAttribute

除支持[通用属性]common外，还支持以下属性。 除支持[通用事件]common外，还支持以下事件。

**Inheritance:** CounterAttributeextends: CommonMethod<CounterAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## enableDec

```TypeScript
enableDec(value: boolean)
```

设置“减少”按钮的禁用或使能。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | “减少”按钮禁用或使能。 默认值：true，true表示使能“减少”按钮，false表示禁用“减少”按钮。 |

## enableInc

```TypeScript
enableInc(value: boolean)
```

设置“增加”按钮的禁用或使能。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | “增加”按钮禁用或使能。 默认值：true，true表示使能“增加”按钮，false表示禁用“增加”按钮。 |

## onDec

```TypeScript
onDec(event: VoidCallback)
```

监听数值减少事件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | Counter数值减少的回调函数。 [since 18] |

## onInc

```TypeScript
onInc(event: VoidCallback)
```

监听数值增加事件。

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**Widget capability:** From API version 9 this API can be used in ArkTS widgets.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | Counter数值增加的回调函数。 [since 18] |

