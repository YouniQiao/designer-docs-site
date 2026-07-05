# OsAccountSubProfileEventData

表示系统账号子Profile事件数据。

**Since:** 26.0.0

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## osAccountLocalId

```TypeScript
osAccountLocalId: int
```

系统账号本地ID。 取值范围为全体整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## subProfileId

```TypeScript
subProfileId: int
```

系统账号子profile标识。 取值范围为全体整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## previousSubProfileId

```TypeScript
previousSubProfileId?: int
```

上一个系统账号子Profile标识符。 取值范围为全体整数。

**Type:** int

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## event

```TypeScript
event: OsAccountSubProfileEvent
```

发生的事件。

**Type:** OsAccountSubProfileEvent

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

