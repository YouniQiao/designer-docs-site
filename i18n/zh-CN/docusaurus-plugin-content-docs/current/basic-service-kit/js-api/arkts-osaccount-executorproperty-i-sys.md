# ExecutorProperty

提供执行器的属性。

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## remainTimes

```TypeScript
remainTimes?: int
```

指示剩余次数，默认为-1。

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## result

```TypeScript
result: int
```

指示结果。

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## sensorInfo

```TypeScript
sensorInfo?: string
```

指示传感器信息，默认为空。

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## enrollmentProgress

```TypeScript
enrollmentProgress?: string
```

指示录入进度，默认为空。

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## credentialLength

```TypeScript
credentialLength?: int
```

指示凭据长度，默认为undefined。查询生物信息等无定长属性的凭据时返回undefined。

**类型：** int

**起始版本：** 20

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## nextPhaseFreezingTime

```TypeScript
nextPhaseFreezingTime?: int
```

指示下次冻结时间，单位为ms，默认为undefined。

**类型：** int

**起始版本：** 12

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## authSubType

```TypeScript
authSubType: AuthSubType
```

指示认证凭据子类型。

**类型：** AuthSubType

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

## freezingTime

```TypeScript
freezingTime?: int
```

指示冻结时间，单位为ms，默认为-1。

**类型：** int

**起始版本：** 8

**系统能力：** SystemCapability.Account.OsAccount

**系统接口：** 此接口为系统接口。

