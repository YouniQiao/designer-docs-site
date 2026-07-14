# installDLPSandbox (System API)

## Modules to Import

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
```

## installDLPSandbox

```TypeScript
function installDLPSandbox(bundleName: string, access: DLPFileAccess, userId: number, uri: string): Promise<DLPSandboxInfo>
```

Installs a DLP sandbox application for an application. The DLP sandbox creates an independent running environment for protected DLP files, which is isolated from the original application process. This ensures that data is securely transferred within the authorized scope. The sandbox application inherits the functions of the original application but can access only authorized DLP files. This API uses a promise to return the result. After calling **installDLPSandbox** to install a sandbox, the system must call [uninstallDLPSandbox](arkts-dataprotection-uninstalldlpsandbox-f-sys.md#uninstalldlpsandbox-1) to uninstall the sandbox after using it. Before a DLP file management application opens a protected file, the system needs to install a DLP sandbox for the target application.

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. The value contains 7 to 128 bytes. If the value isout of range, error code 401 is thrown. |
| access | DLPFileAccess | Yes | Permission on the DLP file. The permissions on a DLP file determine the accessscope of the file. |
| userId | number | Yes | Current user ID, which is the system account ID obtained by the account subsystem. Thedefault super user ID is **100**.<br>The value range is [0, 2&lt;sup&gt;31&lt;/sup&gt;-1]. If the value is out of range,the excess part will be truncated. If the value of the passed parameter is less than 0, an error log isgenerated. |
| uri | string | Yes | URI of the DLP file. The value contains up to 4095 bytes. If the value is out of range,error code 401 is thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DLPSandboxInfo&gt; | Promise used to return the information about the sandbox applicationinstalled. |

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
}).catch((error: BusinessError)=> {
  console.error(error.message);
}); // Install a DLP sandbox application.

```


## installDLPSandbox

```TypeScript
function installDLPSandbox(bundleName: string, access: DLPFileAccess, userId: number, uri: string, callback: AsyncCallback<DLPSandboxInfo>): void
```

Installs a DLP sandbox application for an application. This API uses an asynchronous callback to return the result. After the API is called, the system creates a DLP sandbox for the application and returns the sandbox information. After calling **installDLPSandbox** to install a sandbox, the system must call [uninstallDLPSandbox](arkts-dataprotection-uninstalldlpsandbox-f-sys.md#uninstalldlpsandbox-1) to uninstall the sandbox after using it. Before a DLP file management application opens a protected file, the system needs to install a DLP sandbox for the target application.

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application. The value contains 7 to 128 bytes. If the value isout of range, error code 401 is thrown. |
| access | DLPFileAccess | Yes | Permission on the DLP file. The permissions on a DLP file determine the accessscope of the file. |
| userId | number | Yes | Current user ID, which is the system account ID obtained by the account subsystem. Thedefault super user ID is **100**.<br>The value range is [0, 2&lt;sup&gt;31&lt;/sup&gt;-1]. If the value is out of range,the excess part will be truncated. If the value of the passed parameter is less than 0, an error log isgenerated. |
| uri | string | Yes | URI of the DLP file. The value contains up to 4095 bytes. If the value is out of range,error code 401 is thrown. |
| callback | AsyncCallback&lt;DLPSandboxInfo&gt; | Yes | Callback used to return the result. If the DLP sandboxinstallation is successful, **err** is **undefined**, and **data** is the sandbox information obtained.Otherwise, **err** is an error object. |

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
dlpPermission.installDLPSandbox('com.ohos.note', dlpPermission.DLPFileAccess.READ_ONLY, 100, uri, (err, res) => {
  if (err !== undefined) {
    console.error('installDLPSandbox error,', err.code, err.message);
  } else {
    console.info('res', JSON.stringify(res));
  }
}); // Install a DLP sandbox application.

```

