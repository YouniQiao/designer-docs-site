# KeepAliveBundleInfo (System API)

Describes the keep-alive application information, which can be obtained by calling
[getKeepAliveBundles](arkts-ability-getkeepalivebundles-f-sys.md#getkeepalivebundles-1) or
[getKeepAliveAppServiceExtensions](arkts-ability-getkeepaliveappserviceextensions-f-sys.md#getkeepaliveappserviceextensions-1).

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

Whether the user can cancel the keep-alive status. **true** if yes, **false** otherwise.

**Type:** boolean

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## bundleName

```TypeScript
bundleName: string
```

Bundle name.

**Type:** string

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## setter

```TypeScript
setter: KeepAliveSetter
```

Type of the party that sets to keep the application alive.

**Type:** KeepAliveSetter

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## setterUserId

```TypeScript
setterUserId?: number
```

ID of the user who keeps the application alive.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## type

```TypeScript
type: KeepAliveAppType
```

Type of the application to be kept alive.

**Type:** KeepAliveAppType

**Since:** 14

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

