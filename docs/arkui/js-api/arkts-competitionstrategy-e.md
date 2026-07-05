# CompetitionStrategy

```TypeScript
declare enum CompetitionStrategy
```

定义分发的事件是否为竞争手势，竞争场景手势原始节点和目标节点只有一个节点会响应手势，非竞争场景可以同时响应。

**Since:** 24

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## DEFAULT

```TypeScript
DEFAULT = 0
```

表示分发的事件为非竞争手势。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## COMPETITION

```TypeScript
COMPETITION = 1
```

表示分发的事件为竞争手势。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

