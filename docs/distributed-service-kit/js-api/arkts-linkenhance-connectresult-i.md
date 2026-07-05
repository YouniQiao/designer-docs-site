# ConnectResult

客户端调用connect()后，返回的连接结果。

**Since:** 20

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## Modules to Import

```TypeScript
import { linkEnhance } from '@kit.DistributedServiceKit';
```

## reason

```TypeScript
reason: int
```

连接成功返回0，连接失败返回错误码： - 32390200：表示客户端连接超时。 - 32390201：表示服务端服务未启动。 - 32390300：表示内部错误。 更多关于错误码的详细介绍请参考[增强连接错误码](docroot://reference/apis-distributedservice-kit/errorcode-link-enhance.md)。

**Type:** int

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## success

```TypeScript
success: boolean
```

连接结果，true表示连接成功，false表示连接失败。

**Type:** boolean

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## deviceId

```TypeScript
deviceId: string
```

对端设备ID，成功返回对端设备的deviceId，失败返回空字符串。

**Type:** string

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

