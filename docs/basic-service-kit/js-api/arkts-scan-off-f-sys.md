# off

## off('scanDeviceAdd')

```TypeScript
function off(type: 'scanDeviceAdd', callback?: Callback<ScannerDevice>): void
```

取消注册扫描仪设备添加事件回调（系统API）。使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scanDeviceAdd' | Yes | 事件类型。 |
| callback | Callback&lt;ScannerDevice> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

## off('scanDeviceDel')

```TypeScript
function off(type: 'scanDeviceDel', callback?: Callback<ScannerDevice>): void
```

取消注册扫描仪设备删除事件回调（系统API）。使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scanDeviceDel' | Yes | 事件类型。 |
| callback | Callback&lt;ScannerDevice> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

