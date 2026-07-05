# GatheringPolicyType

```TypeScript
export enum GatheringPolicyType
```

DLP沙箱聚合策略类型的枚举。沙箱聚合表示同一权限类型的DLP文件，在同一个沙箱内打开，例如在同一个沙箱内使用不同tab页打开；沙箱非聚合表示不同DLP文件在不同沙箱打开。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## GATHERING

```TypeScript
GATHERING = 1
```

表示沙箱聚合。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

## NON_GATHERING

```TypeScript
NON_GATHERING = 2
```

表示沙箱非聚合。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

