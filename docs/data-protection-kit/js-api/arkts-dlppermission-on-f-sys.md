# on

## on('uninstallDLPSandbox')

```TypeScript
function on(type: 'uninstallDLPSandbox', listener: Callback<DLPSandboxState>): void
```

注册监听DLP沙箱卸载事件，用于感知沙箱环境的变化。注册成功后，当DLP沙箱被卸载时，系统会通过回调函数通知应用。 调用on注册监听后，建议在不需要监听时调用 [off]dlpPermission.off(type: 'uninstallDLPSandbox', listener?: Callback<DLPSandboxState>)取消监听释放资源。 DLP管理应用需要追踪沙箱的创建和销毁状态，以便维护沙箱列表或执行相关的清理操作。

**Since:** 10

**Required permissions:** 

 ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'uninstallDLPSandbox' | Yes | 监听事件类型。固定值为'uninstallDLPSandbox'：DLP沙箱卸载事件。 |
| listener | Callback&lt;DLPSandboxState> | Yes | 回调函数，用于接收沙箱应用卸载事件。 |

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

dlpPermission.on('uninstallDLPSandbox', (info: dlpPermission.DLPSandboxState) => {
  console.info('uninstallDLPSandbox event', info.appIndex, info.bundleName)
}); // Subscribe to the DLP sandbox application uninstall event.

```

