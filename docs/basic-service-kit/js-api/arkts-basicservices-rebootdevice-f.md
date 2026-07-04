# rebootDevice

## Modules to Import

```TypeScript
import { power } from '@ohos.power';
```

## rebootDevice

```TypeScript
function rebootDevice(reason: string): void
```

Restarts the system.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [reboot](arkts-basicservices-reboot-f-sys.md#reboot-1)

**Required permissions:** ohos.permission.REBOOT

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | string | Yes | Indicates the restart reason. For example, "updater" indicates entering the updater modeafter the restart. If the parameter is not specified, the system enters the normal mode after the restart. |

**Example**

```TypeScript
power.rebootDevice('reboot_test');

```

