# ExecutorProperty

提供执行器的属性。

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

## result

```TypeScript
result: int
```

指示结果。

**Type:** int

**Since:** 8

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## sensorInfo

```TypeScript
sensorInfo?: string
```

指示传感器信息，默认为空。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## enrollmentProgress

```TypeScript
enrollmentProgress?: string
```

指示录入进度，默认为空。

**Type:** string

**Since:** 10

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## credentialLength

```TypeScript
credentialLength?: int
```

指示凭据长度，默认为undefined。查询生物信息等无定长属性的凭据时返回undefined。

**Type:** int

**Since:** 20

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

## authSubType

```TypeScript
authSubType: AuthSubType
```

指示认证凭据子类型。

**Type:** AuthSubType

**Since:** 8

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

