# KeepAliveBundleInfo

定义应用保活信息，可以通过[getKeepAliveBundles]appManager.getKeepAliveBundles或 [getKeepAliveAppServiceExtensions]appManager.getKeepAliveAppServiceExtensions获取。

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { appManager } from '@kit.AbilityKit';
```

## allowUserToCancel

```TypeScript
allowUserToCancel?: boolean
```

表示是否允许用户取消保活。true表示允许，false表示不允许。

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

Bundle名称。

**Type:** string

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## setterUserId

```TypeScript
setterUserId?: int
```

应用保活设置者的用户ID。

**Type:** int

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## setter

```TypeScript
setter: KeepAliveSetter
```

表示应用保活设置者类型。

**Type:** KeepAliveSetter

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## type

```TypeScript
type: KeepAliveAppType
```

表示被保活应用的应用类型。

**Type:** KeepAliveAppType

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

