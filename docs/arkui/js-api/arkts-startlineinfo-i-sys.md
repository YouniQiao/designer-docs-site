# StartLineInfo

用于记录Grid页面内起始行的位置信息。

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## startIndex

```TypeScript
startIndex: int
```

目标索引或目标偏移量所在行的起始索引。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## startOffset

```TypeScript
startOffset: double
```

startIndex对应的GridItem的顶部与Grid顶部之间的偏移量。<br/>单位：vp

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## startLine

```TypeScript
startLine: int
```

startIndex对应的GridItem所在的起始行，一般为Grid视窗内的起始行，对于跨多行的GridItem需要找到该节点的起始行，可能在视窗外。

**Type:** int

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## totalOffset

```TypeScript
totalOffset: double
```

总滚动偏移量，即Grid中第一个GridItem的顶部与Grid顶部之间的偏移量。<br/>单位：vp

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

