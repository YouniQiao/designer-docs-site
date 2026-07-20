# OnLoadInterceptCallback

```TypeScript
export type OnLoadInterceptCallback = (event: OnLoadInterceptEvent) => boolean
```

Callback for OnLoadIntercept

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-unnamed-export type OnLoadInterceptCallback = (event: OnLoadInterceptEvent) => boolean--><!--Device-unnamed-export type OnLoadInterceptCallback = (event: OnLoadInterceptEvent) => boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | OnLoadInterceptEvent | Yes | the load intercept event when the resources loading is intercepted. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | True if the load is intercepted else false. |

