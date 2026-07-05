# ConnectOptions

Connection options for the application.

**Since:** 18

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## Modules to Import

```TypeScript
import { abilityConnectionManager } from '@kit.DistributedServiceKit';
```

## needSendStream

```TypeScript
needSendStream?: boolean
```

Send Stream Data Configuration Options. WiFi needs to be turned on.

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

## needSendData

```TypeScript
needSendData?: boolean
```

Whether to send data. The value **true** indicates that data needs to be sent, and the value **false** indicates the opposite.

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## parameters

```TypeScript
parameters?: Record<string, string>
```

Additional configuration for the connection.

**Type:** Record<string, string>

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## startOptions

```TypeScript
startOptions?: StartOptionParams
```

Application startup options.

**Type:** StartOptionParams

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

## needReceiveStream

```TypeScript
needReceiveStream?: boolean
```

Receive Stream Data Configuration Options. WiFi needs to be turned on.

**Type:** boolean

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.DistributedSched.AppCollaboration

**System API:** This is a system API.

