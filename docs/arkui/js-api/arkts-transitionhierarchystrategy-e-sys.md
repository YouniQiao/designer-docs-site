# TransitionHierarchyStrategy

```TypeScript
declare enum TransitionHierarchyStrategy
```

共享元素动画过程中in/out组件层级位置移动策略枚举。 | 名称 | 值 | 说明 | | ------ | - | ---- | | NONE | 0 | 无层级提拉，in/out组件保持原来的层级位置，受父组件scale、position影响。 | | ADAPTIVE | 1 | 有层级提拉，in/out组件中相对低层级的组件被提拉至组件树上in/out组件相对高层级的位置上。 此模式还会导致被提拉的组件与父组件解绑，不受父组件scale、position影响。 例如in组件层级高于out组件，开启层级提拉后会在动画过程中将out组件从自己的父组件处解耦，并提拉至in组件的层级位置处，in组件层级位置不变。|

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## NONE

```TypeScript
NONE = 0
```

None mode. Source and target staty in the original level in the hierarchy during geometry transition.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 - 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## ADAPTIVE

```TypeScript
ADAPTIVE = 1
```

ADAPTIVE mode. Lower level one of source and target is elevated to higher level of both, indicating that two elements are in same high level.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 - 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

