# ExecuteResult

意图执行的返回结果。

**Since:** 11

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { insightIntent } from '@kit.AbilityKit';
```

## result

```TypeScript
result?: Record<string, Object>
```

意图执行返回的结果，通常会包含需要返回给系统入口的数据。

**Type:** Record<string, Object>

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
result?: Record<string, RecordData>
```

Indicates execute result.

**Type:** Record<string, RecordData>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## uris

```TypeScript
uris?: Array<string>
```

意图执行返回的URI列表。该字段需要与flags字段配合使用，根据URI列表将flags字段的相应权限授权给系统入口。

**Type:** Array<string>

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## code

```TypeScript
code: int
```

意图执行返回的错误码，由开发者定义。

**Type:** int

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## flags

```TypeScript
flags?: int
```

意图执行返回给系统入口的URI列表的授权权限。 **说明：** 该参数仅支持FLAG_AUTH_READ_URI_PERMISSION、FLAG_AUTH_WRITE_URI_PERMISSION、FLAG_AUTH_READ_URI_PERMISSION| FLAG_AUTH_WRITE_URI_PERMISSION。权限介绍见[Flags](arkts-wantconstant-flags-e.md#Flags)。

**Type:** int

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

