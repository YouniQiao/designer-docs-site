# ExtensionRunningInfo

ExtensionRunningInfo模块封装了Extension运行的相关信息，可以通过 [getExtensionRunningInfos接口](arkts-abilitymanager-getextensionrunninginfos-f-sys.md#getExtensionRunningInfos-2) 获取。

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## uid

```TypeScript
uid: int
```

应用程序的uid。

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## extension

```TypeScript
extension: ElementName
```

Extension信息。

**类型：** ElementName

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## processName

```TypeScript
processName: string
```

进程名称。

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## clientPackage

```TypeScript
clientPackage: Array<String>
```

表示当期进程下的所有包名。

**类型：** Array<String>

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## startTime

```TypeScript
startTime: long
```

Extension被启动时的时间戳。

**类型：** long

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## pid

```TypeScript
pid: int
```

进程ID。

**类型：** int

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

## type

```TypeScript
type: bundle.ExtensionAbilityType
```

Extension类型。

**类型：** bundle.ExtensionAbilityType

**起始版本：** 9

**系统能力：** SystemCapability.Ability.AbilityRuntime.Core

**系统接口：** 此接口为系统接口。

