# TabsCacheMode

```TypeScript
declare enum TabsCacheMode
```

子组件的缓存模式。

**Since:** 19

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## CACHE_BOTH_SIDE

```TypeScript
CACHE_BOTH_SIDE = 0
```

缓存当前显示的子组件和其两侧的子组件。即当设置cachedMaxCount属性的count值为n时，最多缓存2n+1个子组件。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## CACHE_LATEST_SWITCHED

```TypeScript
CACHE_LATEST_SWITCHED = 1
```

缓存当前显示的子组件和最近切换过的子组件。即当设置cachedMaxCount属性的count值为n时，最多缓存n+1个子组件。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

