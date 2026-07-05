# AuthResult

表示认证结果的信息。

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## remainTimes

```TypeScript
remainTimes?: int
```

指示剩余次数，默认为-1。

**Type:** int

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## accountId

```TypeScript
accountId?: int
```

指示系统账号标识，默认为undefined。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## credentialId

```TypeScript
credentialId?: Uint8Array
```

指示凭据ID，默认为空。

**Type:** Uint8Array

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## nextPhaseFreezingTime

```TypeScript
nextPhaseFreezingTime?: int
```

指示下次冻结时间，单位为ms，默认为undefined。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## pinValidityPeriod

```TypeScript
pinValidityPeriod?: long
```

指示认证有效期，单位为ms，默认为undefined。

**Type:** long

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## freezingTime

```TypeScript
freezingTime?: int
```

指示冻结时间，单位为ms，默认为-1。

**Type:** int

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## token

```TypeScript
token?: Uint8Array
```

指示认证令牌，默认为空。

**Type:** Uint8Array

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

