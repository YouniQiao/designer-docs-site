# ContinueMissionInfo

The module defines the parameters required for initiating mission continuation with the bundle name specified. For details about mission continuation, see [continueMission](arkts-distributedmissionmanager-continuemission-f-sys.md#continueMission-3)

**起始版本：** 10

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

## continueType

```TypeScript
continueType?: string
```

Continuation type of the application to which the mission belongs.

**类型：** string

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

## bundleName

```TypeScript
bundleName: string
```

Bundle name of the target application to which the mission belongs.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

## wantParam

```TypeScript
wantParam: Record<string, Object>
```

Extended parameters.

**类型：** Record<string, Object>

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

## dstDeviceId

```TypeScript
dstDeviceId: string
```

ID of the target device.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

## srcDeviceId

```TypeScript
srcDeviceId: string
```

ID of the source device.

**类型：** string

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

## srcBundleName

```TypeScript
srcBundleName?: string
```

Bundle name of the source application to which the mission belongs. The value is the same as that of **bundleName** by default.

**类型：** string

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

