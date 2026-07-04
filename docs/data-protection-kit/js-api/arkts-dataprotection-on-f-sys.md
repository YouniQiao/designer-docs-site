# on (System API)

## Modules to Import

```TypeScript
import { dlpPermission } from '@ohos.dlpPermission';
```

## on('uninstallDLPSandbox')

```TypeScript
function on(type: 'uninstallDLPSandbox', listener: Callback<DLPSandboxState>): void
```

Registers a listener for the DLP sandbox uninstall event, which is used to detect changes in the sandbox environment. After the registration, the system notifies the application using a callback when the DLP sandbox is uninstalled. After a listener is registered by calling **on**, you are advised to call **[off](arkts-dataprotection-off-f-sys.md#off-2)** to unregister the listener and release resources when the listener is no longer needed. The DLP management application needs to track the creation and destruction status of the sandbox to maintain the sandbox list or release resources.

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'uninstallDLPSandbox' | Yes | Event type. It has a fixed value of **uninstallDLPSandbox**, whichindicates the DLP sandbox application uninstall event. |
| listener | Callback&lt;DLPSandboxState&gt; | Yes | Callback used when a sandbox application is uninstalled. |

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

dlpPermission.on('uninstallDLPSandbox', (info: dlpPermission.DLPSandboxState) => {
  console.info('uninstallDLPSandbox event', info.appIndex, info.bundleName)
}); // Subscribe to the DLP sandbox application uninstall event.

```

