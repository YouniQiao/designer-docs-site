# MinSpeed

Defines the minimum speed of a task. If the task speed is lower than the preset value for a specified period of time, the task fails. The failure cause is [LOW_SPEED](arkts-basicservices-faults-e.md#faults).

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## Modules to Import

```TypeScript
import { request } from '@ohos.request';
```

## duration

```TypeScript
duration: number
```

Duration during which the task speed can be lower than the minimum speed, in seconds. If the task speed is lower than the preset value for a specified period of time, the task fails. If the value is set to **0**, there is no minimum speed limit.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

## speed

```TypeScript
speed: number
```

Minimum speed of a task, in byte/s. If the task speed is lower than this value for a specified period of time, the task fails. If the value is set to **0**, there is no minimum speed limit.

**Type:** number

**Since:** 20

**System capability:** SystemCapability.Request.FileTransferAgent

