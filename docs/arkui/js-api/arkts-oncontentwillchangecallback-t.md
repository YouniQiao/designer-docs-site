# OnContentWillChangeCallback

```TypeScript
export type OnContentWillChangeCallback = (currentIndex: number, comingIndex: number) => boolean
```

Callback for OnContentWillChange

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| currentIndex | number | Yes | the index value of the current tab. |
| comingIndex | number | Yes | the index value of the tab that will change. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - |

