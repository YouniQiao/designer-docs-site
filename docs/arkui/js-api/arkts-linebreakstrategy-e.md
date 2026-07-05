# LineBreakStrategy

```TypeScript
declare enum LineBreakStrategy
```

Enum of line break strategy

**Since:** 12

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## GREEDY

```TypeScript
GREEDY = 0
```

By default. Display as many characters as possible on each line until no more characters can be displayed on that line, and do not automatically add hyphens under this strategy

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## HIGH_QUALITY

```TypeScript
HIGH_QUALITY = 1
```

High quality folding. Optimize the layout of the entire text's line breaks and automatically add hyphens if necessary.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## BALANCED

```TypeScript
BALANCED = 2
```

Balanced folding. We will try our best to ensure that the width of each line in a paragraph is the same, and if necessary, we will add conjunction

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

