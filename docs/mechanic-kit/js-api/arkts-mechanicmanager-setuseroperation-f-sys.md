# setUserOperation

## setUserOperation

```TypeScript
function setUserOperation(operation: Operation, mac: string, params: string): void
```

Sets a user operation.

**Since:** 20

**Required permissions:** 

 ohos.permission.CONNECT_MECHANIC_HARDWARE

**System capability:** SystemCapability.Mechanic.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| operation | Operation | Yes | Operation type. |
| mac | string | Yes | MAC address. |
| params | string | Yes | Operation parameters. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 33300001 | Service exception. |

**Example**

```TypeScript
console.info('User operate');
mechanicManager.setUserOperation(mechanicManager.Operation.CONNECT, "58:51:9e:e7:79:6d", "operatingParams");
console.info('User operation was successful');

```

