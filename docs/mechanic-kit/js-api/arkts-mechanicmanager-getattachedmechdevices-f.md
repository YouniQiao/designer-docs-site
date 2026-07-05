# getAttachedMechDevices

## getAttachedMechDevices

```TypeScript
function getAttachedMechDevices(): MechInfo[]
```

Obtain the list of connected mechanical devices.

**Since:** 20

**System capability:** SystemCapability.Mechanic.Core

**Return value:**

| Type | Description |
| --- | --- |
| MechInfo[] | List of connected mechanical devices. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33300001 | Service exception. |

**Example**

```TypeScript
console.info('Query device list');
let mechanicInfos = mechanicManager.getAttachedMechDevices();
console.info(`'device list:' ${mechanicInfos}`);

```

