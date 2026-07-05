# off

## off('uninstallDLPSandbox')

```TypeScript
function off(type: 'uninstallDLPSandbox', listener?: Callback<DLPSandboxState>): void
```

取消监听DLP沙箱卸载事件。调用成功后，应用不再接收DLP沙箱卸载事件的回调通知。 必须在调用[on]dlpPermission.on(type: 'uninstallDLPSandbox', listener: Callback<DLPSandboxState>)注册监听后才能调用此方法取消 监听。 DLP管理应用退出或不再需要追踪沙箱状态变化时，取消事件订阅以释放监听资源。

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'uninstallDLPSandbox' | Yes | 监听事件类型。固定值为'uninstallDLPSandbox'：DLP沙箱卸载事件。 |
| listener | Callback&lt;DLPSandboxState> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. 3. Parameter verification failed. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.off('uninstallDLPSandbox', (info: dlpPermission.DLPSandboxState) => {
  console.info('uninstallDLPSandbox event', info.appIndex, info.bundleName)
}); // Unsubscribe from the DLP sandbox application uninstall event.

```

