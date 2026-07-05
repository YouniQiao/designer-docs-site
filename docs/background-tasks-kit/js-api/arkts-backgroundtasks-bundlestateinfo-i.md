# BundleStateInfo

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## Modules to Import

```TypeScript
import { bundleState } from '@ohos.bundleState';
```

## merge

```TypeScript
merge(toMerge: BundleStateInfo): void
```

Merges a specified {@link BundleActiveInfo} object with this {@link BundleActiveInfo} object. The bundle name of both objects must be the same.

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| toMerge | BundleStateInfo | Yes | Indicates the { |

## abilityInFgTotalTime

```TypeScript
abilityInFgTotalTime?: number
```

The total duration, in milliseconds. <br> Unit:ms

**Type:** number

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## abilityPrevAccessTime

```TypeScript
abilityPrevAccessTime?: number
```

The last time when the application was accessed, in milliseconds. <br> Unit:ms

**Type:** number

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## abilityPrevSeenTime

```TypeScript
abilityPrevSeenTime?: number
```

The last time when the application was visible in the foreground, in milliseconds. <br> Unit:ms

**Type:** number

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## abilitySeenTotalTime

```TypeScript
abilitySeenTotalTime?: number
```

The total duration when the application was visible in the foreground, in milliseconds. <br> Unit:ms

**Type:** number

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## bundleName

```TypeScript
bundleName?: string
```

The bundle name of the application.

**Type:** string

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## fgAbilityAccessTotalTime

```TypeScript
fgAbilityAccessTotalTime?: number
```

The total duration when the foreground application was accessed, in milliseconds. <br> Unit:ms

**Type:** number

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## fgAbilityPrevAccessTime

```TypeScript
fgAbilityPrevAccessTime?: number
```

The last time when the foreground application was accessed, in milliseconds. <br> Unit:ms

**Type:** number

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## id

```TypeScript
id: number
```

The identifier of BundleStateInfo.

**Type:** number

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## infosBeginTime

```TypeScript
infosBeginTime?: number
```

The time of the first bundle usage record in this {@code BundleActiveInfo} object, in milliseconds. <br> Unit:ms

**Type:** number

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

## infosEndTime

```TypeScript
infosEndTime?: number
```

The time of the last bundle usage record in this {@code BundleActiveInfo} object, in milliseconds. <br> Unit:ms

**Type:** number

**Since:** 7

**Deprecated since:** 9

**System capability:** SystemCapability.ResourceSchedule.UsageStatistics.App

