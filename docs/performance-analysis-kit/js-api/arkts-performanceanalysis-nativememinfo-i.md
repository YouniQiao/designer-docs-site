# NativeMemInfo

Describes memory information of the application process.

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## Modules to Import

```TypeScript
import { hidebug } from '@ohos.hidebug';
```

## privateClean

```TypeScript
privateClean: bigint
```

Size of the private clean memory, in KB. The value of this parameter is obtained by reading the value of Private_Clean in the /proc/{pid}/smaps_rollup node.

**Type:** bigint

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## privateDirty

```TypeScript
privateDirty: bigint
```

Size of the private dirty memory, in KB. The value of this parameter is obtained by reading the value of Private_Dirty in the /proc/{pid}/smaps_rollup node.

**Type:** bigint

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## pss

```TypeScript
pss: bigint
```

Size of the occupied physical memory (including the proportionally allocated memory occupied by the shared library), in KB. The value of this parameter is obtained by summing up the values of Pss and SwapPss in the /proc/{pid}/smaps_rollup node.

**Type:** bigint

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## rss

```TypeScript
rss: bigint
```

Size of the occupied physical memory (including the memory occupied by the shared library), in KB. The value of this parameter is obtained by reading the value of Rss in the /proc/{pid}/smaps_rollup node.

**Type:** bigint

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## sharedClean

```TypeScript
sharedClean: bigint
```

Size of the shared clean memory, in KB. The value of this parameter is obtained by reading the value of Shared_Clean in the /proc/{pid}/smaps_rollup node.

**Type:** bigint

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## sharedDirty

```TypeScript
sharedDirty: bigint
```

Size of the shared dirty memory, in KB. The value of this parameter is obtained by reading the value of Shared_Dirty in the /proc/{pid}/smaps_rollup node.

**Type:** bigint

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## vss

```TypeScript
vss: bigint
```

Size of the occupied virtual memory (including the memory occupied by the shared library), in KB. The value of this parameter is obtained by multiplying the value of size (number of memory pages) in the /proc/{pid}/statm node by the page size (4 KB per page).

**Type:** bigint

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

