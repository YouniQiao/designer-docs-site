# OnRemoteStateChangeCallback

```TypeScript
export type OnRemoteStateChangeCallback = (msg: string) => void
```

注册协同场景下跨设备组件状态变化监听通知的回调函数类型。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msg | string | Yes | 用于传递释放消息。 |

