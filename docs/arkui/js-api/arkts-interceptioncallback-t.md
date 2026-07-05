# InterceptionCallback

```TypeScript
declare type InterceptionCallback = (from: NavPathInfo|NavBar, to: NavPathInfo|NavBar, pathStack: NavPathStack, operation: NavigationOperation, isAnimated: boolean) => void
```

Navigation页面跳转前的拦截回调。

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| (from: NavPathInfo |  |
| NavBar, to: NavPathInfo |  |
| NavBar, pathStack: NavPathStack, operation: NavigationOperation, isAnimated: boolean) => void |  |

