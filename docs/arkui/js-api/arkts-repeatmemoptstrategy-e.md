# RepeatMemOptStrategy

```TypeScript
declare enum RepeatMemOptStrategy
```

Repeat内存优化策略枚举。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DEFAULT

```TypeScript
DEFAULT = 0
```

无内存优化策略。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ENABLE_AUTO_CACHE_OPTIMIZATION

```TypeScript
ENABLE_AUTO_CACHE_OPTIMIZATION = 1 << 0
```

自动内存优化策略，当Repeat子节点内存占用较高时，建议使用此策略以降低内存使用量。 当应用退后台时、Repeat所在组件不可见时（[visibility]CommonMethod#visibility属性设置为[Visible]Visibility以外的值，或组件面积为0，不考虑遮 挡）、整机低内存时（[MemoryLevel](../../apis-ability-kit/arkts-apis/arkts-abilityconstant-memorylevel-e.md#MemoryLevel)达到MEMORY_LEVEL_LOW或 MEMORY_LEVEL_CRITICAL），释放[缓存池](docroot://ui/rendering-control/arkts-new-rendering-control-repeat.md#节点更新复用能力说明)内的所有 节点。 当应用恢复前台时、Repeat所在组件恢复显示时，恢复缓存池内的节点。 在释放和恢复节点时，会触发[自定义组件生命周期](docroot://ui/state-management/arkts-page-custom-components-lifecycle.md)。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

