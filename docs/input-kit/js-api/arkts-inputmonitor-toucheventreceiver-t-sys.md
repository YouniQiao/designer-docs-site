# TouchEventReceiver

```TypeScript
type TouchEventReceiver = (touchEvent: TouchEvent) => boolean
```

触屏输入事件的回调函数。

**Since:** 7

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| touchEvent | TouchEvent | Yes | 触屏输入事件。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 若返回true，本次触屏后续产生的事件不再分发到窗口；若返回false，本次触屏后续产生的事件还会分发到窗口。 |

