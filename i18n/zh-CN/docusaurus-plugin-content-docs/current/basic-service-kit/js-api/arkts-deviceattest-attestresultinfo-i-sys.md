# AttestResultInfo

Device attest result information.

**起始版本：** 9

**系统能力：** SystemCapability.XTS.DeviceAttest

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { deviceAttest } from '@kit.BasicServicesKit';
```

## ticket

```TypeScript
ticket: string
```

Credential sent from the cloud.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.XTS.DeviceAttest

**系统接口：** 此接口为系统接口。

## authResult

```TypeScript
authResult: number
```

Result of the device hardware information authentication.

**类型：** number

**起始版本：** 9

**系统能力：** SystemCapability.XTS.DeviceAttest

**系统接口：** 此接口为系统接口。

## softwareResultDetail

```TypeScript
softwareResultDetail: Array<number>
```

Software result detail array that includes versionId, patchLevel, rootHash and a reserved space.

**类型：** Array<number>

**起始版本：** 9

**系统能力：** SystemCapability.XTS.DeviceAttest

**系统接口：** 此接口为系统接口。

## softwareResult

```TypeScript
softwareResult: number
```

Result of the device software information authentication.

**类型：** number

**起始版本：** 9

**系统能力：** SystemCapability.XTS.DeviceAttest

**系统接口：** 此接口为系统接口。

