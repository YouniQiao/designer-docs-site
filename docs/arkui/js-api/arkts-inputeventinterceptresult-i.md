# InputEventInterceptResult

输入事件拦截结果接口，用于监听器回调[InputEventListener](arkts-inputeventlistener-t.md#InputEventListener)返回是否拦截的决策。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## action

```TypeScript
action: InputEventInterceptAction
```

输入事件拦截动作。 CONTINUE：允许事件继续传递到UI框架。 BLOCK：阻止事件传递到UI框架。

**Type:** InputEventInterceptAction

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

