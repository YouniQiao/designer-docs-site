# ChildrenCountMode

Enum for children count mode.Specifies how to count children when querying number of child nodes.

**Since:** 26.0.0

<!--Device-unnamed-export enum ChildrenCountMode--><!--Device-unnamed-export enum ChildrenCountMode-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ALL_EXPAND

```TypeScript
ALL_EXPAND = 0
```

Expand mode. When encountering lazy-loaded nodes (e.g., LazyForEach),the nodes are expanded and the count includes all child nodes.This is the default behavior.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChildrenCountMode-ALL_EXPAND = 0--><!--Device-ChildrenCountMode-ALL_EXPAND = 0-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ONLY_EXPANDED

```TypeScript
ONLY_EXPANDED = 1
```

Count expanded mode. Does not expand lazy-loaded nodes.Returns the count of only currently expanded child nodes. Unexpanded lazy-loaded nodes are not included in the count.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChildrenCountMode-ONLY_EXPANDED = 1--><!--Device-ChildrenCountMode-ONLY_EXPANDED = 1-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## ALL_NOT_EXPAND

```TypeScript
ALL_NOT_EXPAND = 2
```

Count all mode. Does not expand lazy-loaded nodes,but returns the count including all potential children (both expanded and unexpanded lazy-loaded nodes).This provides the total potential child count without triggering expansion.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ChildrenCountMode-ALL_NOT_EXPAND = 2--><!--Device-ChildrenCountMode-ALL_NOT_EXPAND = 2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

