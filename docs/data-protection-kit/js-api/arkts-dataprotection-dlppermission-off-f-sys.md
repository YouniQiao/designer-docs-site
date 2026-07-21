# off (System API)

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

<a id="off"></a>
## off('uninstallDLPSandbox')

```TypeScript
function off(type: 'uninstallDLPSandbox', listener?: Callback<DLPSandboxState>): void
```

Unsubscribes from the DLP sandbox uninstall event. After the API is successfully called, the application will no longer receive callback notifications for the DLP sandbox uninstall event.

This API can be called only after a listener is registered using [on](dlpPermission.on(type: 'uninstallDLPSandbox', listener: Callback<DLPSandboxState>)).

When the DLP management application exits or no longer needs to track sandbox status changes, unregister the listener to release resources.

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_DLP_FILE

<!--Device-dlpPermission-function off(type: 'uninstallDLPSandbox', listener?: Callback<DLPSandboxState>): void--><!--Device-dlpPermission-function off(type: 'uninstallDLPSandbox', listener?: Callback<DLPSandboxState>): void-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'uninstallDLPSandbox' | Yes | Event type. It has a fixed value of **uninstallDLPSandbox**, which indicates the DLP sandbox application uninstall event. |
| listener | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;DLPSandboxState&gt; | No | Callback used when a sandbox application is uninstalled. By default, this parameter is left blank, which unregisters all callbacks for the sandbox uninstall event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. 3. Parameter verification failed. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.off('uninstallDLPSandbox', (info: dlpPermission.DLPSandboxState) => {
  console.info('uninstallDLPSandbox event', info.appIndex, info.bundleName)
}); // Unsubscribe from the DLP sandbox application uninstall event.

```

