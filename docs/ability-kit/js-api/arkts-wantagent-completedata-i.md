# CompleteData

表示主动触发WantAgent返回的数据。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { WantAgent } from '@kit.AbilityKit';
```

## finalData

```TypeScript
finalData: string
```

触发wantAgent的返回数据。返回**canceled**时表示触发失败，WantAgent实例已经被取消。

**Type:** string

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## finalCode

```TypeScript
finalCode: int
```

触发wantAgent的返回码。

**Type:** int

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## want

```TypeScript
want: Want
```

触发wantAgent时实际使用的want信息。

**Type:** Want

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## extraInfo

```TypeScript
extraInfo?: Record<string, Object>
```

额外数据。

**Type:** Record<string, Object>

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

```TypeScript
extraInfo?: Record<string, RecordData>
```

额外数据。

**Type:** Record<string, RecordData>

**Since:** 23

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## info

```TypeScript
info: WantAgent
```

触发的wantAgent。

**Type:** WantAgent

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

