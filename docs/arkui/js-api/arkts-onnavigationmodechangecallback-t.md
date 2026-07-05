# OnNavigationModeChangeCallback

```TypeScript
declare type OnNavigationModeChangeCallback = (mode: NavigationMode) => void
```

当MultiNavigation的mode变化时触发的回调函数。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | NavigationMode | Yes | 当回调触发时的NavigationMode。 |

