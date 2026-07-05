# UIStatesChangeHandler

```TypeScript
declare type UIStatesChangeHandler = (node: FrameNode, currentUIStates: number) => void
```

当UI状态发生变化时触发的回调。接收回调触发时的[UIState](arkts-uistate-e.md#UIState)状态，该参数的取值为UIState状态枚举值或其运算结果。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| node | FrameNode | Yes | 触发UI状态变化的节点。 |
| currentUIStates | number | Yes | 回调触发时当前的UI状态。 可以通过位与运算判断当前包含哪些[UIState](arkts-uistate-e.md#UIState)状态。 位与运算方法：if (  currentState & UIState.PRESSED == UIState.PRESSED)。 一般的UIState状态检查可以直接判断：if (currentState == UIState.PRESSED)。 |

