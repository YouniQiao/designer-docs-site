# getRetentionSandboxList

## Modules to Import

```TypeScript
import { dlpPermission } from '@ohos.dlpPermission';
```

## getRetentionSandboxList

```TypeScript
function getRetentionSandboxList(bundleName?: string): Promise<Array<RetentionSandboxInfo>>
```

Obtains the sandbox applications in the retention state of an application. This API can be called only in non-DLP sandbox applications. This API uses a promise to return the result. This API is used to query the sandbox retention information of a specified application, so that the sandbox environment in the retention state can be checked or managed.

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | No | Bundle name of the application, which is used to query the sandbox retentioninformation of the application. This parameter is required when you need to query the sandbox retentioninformation of another application. It is optional when you need to query the sandbox retention informationof the current application. The value contains 7 to 128 bytes. If the value is out of range, error code19100001 is thrown. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;RetentionSandboxInfo&gt;&gt; | Promise used to return the sandbox retention informationobtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100007](../errorcode-dlp.md#19100007-access-denied-for-a-dlp-sandbox-application) | No permission to call this API,which is available only for non-DLP sandbox applications. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getRetentionSandboxList().then((sandboxList) => { // Obtain the sandbox retention information.
  console.info('sandboxList', JSON.stringify(sandboxList));
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
});

```


## getRetentionSandboxList

```TypeScript
function getRetentionSandboxList(bundleName: string, callback: AsyncCallback<Array<RetentionSandboxInfo>>): void
```

Obtains the sandbox applications in the retention state of an application. This API uses an asynchronous callback to return the result. This API is used to query the sandbox retention information of a specified application, so that the sandbox environment in the retention state can be checked or managed.

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name of the application, which is used to query the sandbox retentioninformation of the application. This parameter is required when you need to query the sandbox retentioninformation of another application. It is optional when you need to query the sandbox retention informationof the current application. The value contains 7 to 128 bytes. If the value is out of range, error code19100001 is thrown. |
| callback | AsyncCallback&lt;Array&lt;RetentionSandboxInfo&gt;&gt; | Yes | Callback used to return the result. If theoperation is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100007](../errorcode-dlp.md#19100007-access-denied-for-a-dlp-sandbox-application) | No permission to call this API,which is available only for non-DLP sandbox applications. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getRetentionSandboxList("bundleName", (err, sandboxList) => {
  if (err != undefined) {
    console.error('getRetentionSandboxList error,', err.code, err.message);
  } else {
    console.info('sandboxList', JSON.stringify(sandboxList));
  }
}); // Obtain the sandbox retention information.

```


## getRetentionSandboxList

```TypeScript
function getRetentionSandboxList(callback: AsyncCallback<Array<RetentionSandboxInfo>>): void
```

Obtains the sandbox applications in the retention state of an application. This API uses an asynchronous callback to return the result. This API is used to query the sandbox retention information of a specified application, so that the sandbox environment in the retention state can be checked or managed.

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;RetentionSandboxInfo&gt;&gt; | Yes | Callback used to return the result. If theoperation is successful, **err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100007](../errorcode-dlp.md#19100007-access-denied-for-a-dlp-sandbox-application) | No permission to call this API,which is available only for non-DLP sandbox applications. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getRetentionSandboxList((err, retentionSandboxList) => {
  if (err != undefined) {
    console.error('getRetentionSandboxList error,', err.code, err.message);
  } else {
    console.info('res', JSON.stringify(retentionSandboxList));
  }
}); // Obtain the sandbox retention information.

```

