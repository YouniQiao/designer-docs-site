# GestureGroupInterface

Combined gestures integrate two or more gestures into a compound gesture, supporting sequential recognition, parallel recognition, and exclusive recognition.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
(mode: GestureMode, ...gesture: GestureType[]): GestureGroupInterface
```

Return to Obtain GestureGroup.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | GestureMode | Yes |  |
| gesture | GestureType[] | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| GestureGroupInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

## onCancel

```TypeScript
onCancel(event: () => void): GestureGroupInterface
```

Triggered when a tap cancellation event is received after a gesture is recognized.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback for the gesture event. |

**Return value:**

| Type | Description |
| --- | --- |
| GestureGroupInterface | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

