# rebootDevice

## rebootDevice

```TypeScript
function rebootDevice(reason: string): void
```

重启系统。

**Since:** 7

**Deprecated since:** 9

**Substitute:** power.reboot

**Required permissions:** 

 ohos.permission.REBOOT

**System capability:** SystemCapability.PowerManager.PowerManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reason | string | Yes | 重启原因。例如，“updater”表示重启后进入更新模式。如果未指定该参数，系统将在重启后进入正常模式。 |

**Example**

```TypeScript
power.rebootDevice('reboot_test');

```

