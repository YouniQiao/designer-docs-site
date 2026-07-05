# ExtensionRunningInfo

ExtensionRunningInfo模块封装了Extension运行的相关信息，可以通过 [getExtensionRunningInfos接口](arkts-abilitymanager-getextensionrunninginfos-f-sys.md#getExtensionRunningInfos-2) 获取。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## uid

```TypeScript
uid: int
```

应用程序的uid。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## extension

```TypeScript
extension: ElementName
```

Extension信息。

**Type:** ElementName

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## processName

```TypeScript
processName: string
```

进程名称。

**Type:** string

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## clientPackage

```TypeScript
clientPackage: Array<String>
```

表示当期进程下的所有包名。

**Type:** Array<String>

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## startTime

```TypeScript
startTime: long
```

Extension被启动时的时间戳。

**Type:** long

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## pid

```TypeScript
pid: int
```

进程ID。

**Type:** int

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## type

```TypeScript
type: bundle.ExtensionAbilityType
```

Extension类型。

**Type:** bundle.ExtensionAbilityType

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

