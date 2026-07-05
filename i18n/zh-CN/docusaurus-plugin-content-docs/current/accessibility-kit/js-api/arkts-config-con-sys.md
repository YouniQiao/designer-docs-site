# Constants

## daltonizationState

```TypeScript
const daltonizationState: Config<boolean>
```

Whether to enable daltonization. It must be used with **daltonizationColorFilter**. The value **true** indicates that daltonization is enabled, and **false** indicates the opposite. Default value: **false

**起始版本：** 11

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## audioMono

```TypeScript
const audioMono: Config<boolean>
```

Whether to enable mono audio. The value **true** indicates that mono audio is enabled, and **false** indicates the opposite. Default value: **false

**起始版本：** 10

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## audioBalance

```TypeScript
const audioBalance: Config<double>
```

Audio balance for the left and right audio channels. The value ranges from -1.0 to 1.0. Default value: **0.0

**起始版本：** 10

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## shortkeyMultiTargets

```TypeScript
const shortkeyMultiTargets: Config<Array<string>>
```

List of target applications for the accessibility shortcut keys. The value format is ['bundleName/abilityName'].

**起始版本：** 11

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## clickResponseTime

```TypeScript
const clickResponseTime: Config<ClickResponseTime>
```

Length of time required for a click.

**起始版本：** 11

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## ignoreRepeatClick

```TypeScript
const ignoreRepeatClick: Config<boolean>
```

Whether to ignore repeated clicks. This parameter must be used together with **repeatClickInterval**. The value **true** indicates that the feature of ignoring repeated clicks is enabled, and **false** indicates the opposite. Default value: **false

**起始版本：** 11

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## repeatClickInterval

```TypeScript
const repeatClickInterval: Config<RepeatClickInterval>
```

Interval between repeated clicks.

**起始版本：** 11

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

## screenMagnification

```TypeScript
const screenMagnification: Config<boolean>
```

Indicates the configuration of screen magnification.

**起始版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

