# Constants (System API)

## audioBalance

```TypeScript
const audioBalance: Config<number>
```

Audio balance for the left and right audio channels. The value ranges from -1.0 to 1.0. Default value: **0.0**

**Since:** 10

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## audioMono

```TypeScript
const audioMono: Config<boolean>
```

Whether to enable mono audio. The value **true** indicates that mono audio is enabled, and **false** indicates the opposite. Default value: **false**

**Since:** 10

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## clickResponseTime

```TypeScript
const clickResponseTime: Config<ClickResponseTime>
```

Length of time required for a click.

**Since:** 11

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## daltonizationState

```TypeScript
const daltonizationState: Config<boolean>
```

Whether to enable daltonization. It must be used with **daltonizationColorFilter**. The value **true** indicates that daltonization is enabled, and **false** indicates the opposite. Default value: **false**

**Since:** 11

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## ignoreRepeatClick

```TypeScript
const ignoreRepeatClick: Config<boolean>
```

Whether to ignore repeated clicks. This parameter must be used together with **repeatClickInterval**. The value **true** indicates that the feature of ignoring repeated clicks is enabled, and **false** indicates the opposite. Default value: **false**

**Since:** 11

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## repeatClickInterval

```TypeScript
const repeatClickInterval: Config<RepeatClickInterval>
```

Interval between repeated clicks.

**Since:** 11

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## screenMagnification

```TypeScript
const screenMagnification: Config<boolean>
```

Indicates the configuration of screen magnification.

**Since:** 12

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

## shortkeyMultiTargets

```TypeScript
const shortkeyMultiTargets: Config<Array<string>>
```

List of target applications for the accessibility shortcut keys. The value format is ['bundleName/abilityName'].

**Since:** 11

**System capability:** SystemCapability.BarrierFree.Accessibility.Core

**System API:** This is a system API.

