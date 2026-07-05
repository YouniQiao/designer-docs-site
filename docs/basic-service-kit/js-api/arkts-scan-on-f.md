# on

## on('scanDeviceFound')

```TypeScript
function on(type: 'scanDeviceFound', callback: Callback<ScannerDevice>): void
```

注册扫描仪设备发现事件回调。使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scanDeviceFound' | Yes | 事件类型。 |
| callback | Callback&lt;ScannerDevice> | Yes | 回调函数，返回扫描仪设备发现信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

## on('scanDeviceSync')

```TypeScript
function on(type: 'scanDeviceSync', callback: Callback<ScannerSyncDevice>): void
```

注册扫描仪设备同步事件回调。使用callback异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'scanDeviceSync' | Yes | 事件类型。 |
| callback | Callback&lt;ScannerSyncDevice> | Yes | 回调函数，返回扫描仪设备同步信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

