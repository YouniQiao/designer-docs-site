# InterceptionModeCallback

```TypeScript
declare type InterceptionModeCallback = (mode: NavigationMode) => void
```

Navigation单双栏显示状态发生变更时的拦截回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | NavigationMode | Yes | 导航页的显示模式。 |

