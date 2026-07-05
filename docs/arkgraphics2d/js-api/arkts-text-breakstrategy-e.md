# BreakStrategy

```TypeScript
enum BreakStrategy
```

断行策略枚举。

**Since:** 12

**System capability:** SystemCapability.Graphics.Drawing

## GREEDY

```TypeScript
GREEDY = 0
```

尽可能将当前行填满，不会自动添加连词符。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## HIGH_QUALITY

```TypeScript
HIGH_QUALITY = 1
```

布局优化，必要时会自动添加连词符。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

## BALANCED

```TypeScript
BALANCED = 2
```

保证一个段落的每一行的宽度相同，必要时会添加连词符。

**Since:** 12

**Atomic service API:** From API version 22 this API can be used in atomic services.

**System capability:** SystemCapability.Graphics.Drawing

