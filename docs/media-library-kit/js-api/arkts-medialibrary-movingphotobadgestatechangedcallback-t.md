# MovingPhotoBadgeStateChangedCallback

```TypeScript
export type MovingPhotoBadgeStateChangedCallback = 
  (uri: string, state: photoAccessHelper.MovingPhotoBadgeStateType) => void
```

The callback of onMovingPhotoBadgeStateChanged event

**Since:** 22

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-unnamed-export type MovingPhotoBadgeStateChangedCallback =   (uri: string, state: photoAccessHelper.MovingPhotoBadgeStateType) => void--><!--Device-unnamed-export type MovingPhotoBadgeStateChangedCallback =   (uri: string, state: photoAccessHelper.MovingPhotoBadgeStateType) => void-End-->

**System capability:** SystemCapability.FileManagement.PhotoAccessHelper.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes |  |
| state | photoAccessHelper.MovingPhotoBadgeStateType | Yes |  |

