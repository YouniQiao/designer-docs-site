# animateToImmediately

## animateToImmediately

```TypeScript
declare function animateToImmediately(value: AnimateParam, event: () => void): void
```

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | AnimateParam | Yes | Animation settings. |
| event | () => void | Yes | Closure function that displays the animation. The system automatically inserts a  transition animation for state changes caused by the closure function. |

