# DialogSessionInfo

提供会话信息，包括请求方信息、目标组件信息列表、其他参数。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { dialogSession } from '@kit.AbilityKit';
```

## targetAbilityInfos

```TypeScript
targetAbilityInfos: Array<DialogAbilityInfo>
```

表示目标组件信息列表。

**Type:** Array<DialogAbilityInfo>

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## parameters

```TypeScript
parameters?: Record<string, Object>
```

表示其他参数。

**Type:** Record<string, Object>

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

```TypeScript
parameters?: Record<string, RecordData>
```

表示其他参数。

**Type:** Record<string, RecordData>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## callerAbilityInfo

```TypeScript
callerAbilityInfo: DialogAbilityInfo
```

表示请求方组件信息。

**Type:** DialogAbilityInfo

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

