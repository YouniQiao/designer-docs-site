# uninstallDLPSandbox (System API)

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## uninstallDLPSandbox

```TypeScript
function uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number): Promise<void>
```

Uninstalls a DLP sandbox application for an application. This API uses a promise to return the result. After this API is called, the system destroys the specified DLP sandbox environment and releases related resources.

Use this API to clear the corresponding sandbox environment.

This API can be called only after a DLP sandbox is installed by calling [installDLPSandbox](arkts-dataprotection-dlppermission-installdlpsandbox-f-sys.md#installdlpsandbox-1).

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_DLP_FILE

<!--Device-dlpPermission-function uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number): Promise<void>--><!--Device-dlpPermission-function uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number): Promise<void>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. The value contains 7 to 128 bytes. If the value is out of range, error code 401 is thrown. |
| userId | number | Yes | Current user ID, which is the system account ID obtained by the account subsystem. The default super user ID is **100**.<br>The value range is [0, 2&lt;sup&gt;31&lt;/sup&gt;-1]. If the value is out of range,the excess part will be truncated. If the value of the passed parameter is less than 0, an error log is generated. |
| appIndex | number | Yes | DLP sandbox index, which is the value returned after **installDLPSandbox** is successfully called. It is used to identify the installed DLP sandbox. The value range is [1000, 1100]. If the value is out of range, an error log is generated. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let uri = 'file://docs/storage/Users/currentUser/Desktop/test.txt.dlp';
dlpPermission.installDLPSandbox('com.ohos.note', dlpPermission.DLPFileAccess.READ_ONLY, 100,
  uri).then(async (dlpSandboxInfo: dlpPermission.DLPSandboxInfo) => {
  console.info('dlpSandboxInfo: ', JSON.stringify(dlpSandboxInfo));
  await dlpPermission.uninstallDLPSandbox('com.ohos.note', 100, dlpSandboxInfo.appIndex); // Uninstall the DLP sandbox.
}).catch((error: BusinessError)=> {
  console.error(error.message);
}); // Uninstall the DLP sandbox that has been installed.

```


## uninstallDLPSandbox

```TypeScript
function uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number, callback: AsyncCallback<void>): void
```

Uninstalls a DLP sandbox application for an application. This API uses an asynchronous callback to return the result. After this API is called, the system destroys the specified DLP sandbox environment and releases related resources.

Use this API to clear the sandbox environment.

This API can be called only after a DLP sandbox is installed by calling [installDLPSandbox](arkts-dataprotection-dlppermission-installdlpsandbox-f-sys.md#installdlpsandbox-1).

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_DLP_FILE

<!--Device-dlpPermission-function uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number, callback: AsyncCallback<void>): void--><!--Device-dlpPermission-function uninstallDLPSandbox(bundleName: string, userId: number, appIndex: number, callback: AsyncCallback<void>): void-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. The value contains 7 to 128 bytes. If the value is out of range, error code 401 is thrown. |
| userId | number | Yes | Current user ID, which is the system account ID obtained by the account subsystem. The default super user ID is **100**. The value range is [0, 2&lt;sup&gt;31&lt;/sup&gt;-1]. If the value is out of range, the excess part will be truncated. |
| appIndex | number | Yes | DLP sandbox index, which is the value returned after **installDLPSandbox** is successfully called. It is used to identify the installed DLP sandbox. The value range is [1000, 1100]. If the value is out of range, an error log is generated. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<void> | Yes | Callback used to return the result. If the DLP sandbox uninstallation is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let uri = 'file://docs/storage/Users/currentUser/Desktop/test.txt.dlp';
dlpPermission.installDLPSandbox('com.ohos.note', dlpPermission.DLPFileAccess.READ_ONLY, 100,
  uri).then((dlpSandboxInfo: dlpPermission.DLPSandboxInfo) => {
  console.info('dlpSandboxInfo: ', JSON.stringify(dlpSandboxInfo));
  dlpPermission.uninstallDLPSandbox('com.ohos.note', 100, dlpSandboxInfo.appIndex, (err, res) => {
    if (err !== undefined) {
      console.error('uninstallDLPSandbox error,', err.code, err.message);
    } else {
      console.info('res', JSON.stringify(res));
    }
  }); // Uninstall a DLP sandbox.
}).catch((error: BusinessError)=> {
  console.error(error.message);
}); // Uninstall the DLP sandbox that has been installed.

```

