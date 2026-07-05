# NavDestinationTransitionDelegate

```TypeScript
declare type NavDestinationTransitionDelegate =
    (operation: NavigationOperation, isEnter: boolean) => Array<NavDestinationTransition> | undefined
```

NavDestination自定义转场动画的代理函数。

**Since:** 15

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

| Type | Description |
| --- | --- |
| (operation: NavigationOperation, isEnter: boolean) => Array&lt;NavDestinationTransition> |  |
| undefined |  |

