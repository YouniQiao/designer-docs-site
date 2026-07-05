# grantUriPermission

## grantUriPermission

```TypeScript
function grantUriPermission(
    uri: string,
    bundleName: string,
    flag: wantConstant.Flags,
    callback: AsyncCallback<void>
  ): void
```

Provides grant uri permission for app

**Since:** 9

**Required permissions:** 

 ohos.permission.WRITE_MEDIA

**System capability:** SystemCapability.FileManagement.AppFileService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | uri |
| bundleName | string | Yes | bundleName |
| flag | wantConstant.Flags | Yes | wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION or wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION |
| callback | AsyncCallback&lt;void> | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed |
| 202 | The caller is not a system application |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 14300001 | IPC error |

**Example**

```TypeScript
import { wantConstant } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let uri: string =
  'file://docs/storage/Users/currentUser/Document/1.txt'; // You are advised to use the system API fileUri.getUriFromPath("Sandbox path") to generate a URI.
let bundleName: string = 'com.demo.test';
try {
  fileShare.grantUriPermission(uri, bundleName, wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION |
    wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION, (err: BusinessError) => {
    if (err) {
      console.error("grantUriPermission failed with error: " + JSON.stringify(err));
      return;
    }
    console.info("grantUriPermission success!");
  });
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("grantUriPermission failed with error:" + JSON.stringify(error));
}

```

## grantUriPermission

```TypeScript
function grantUriPermission(uri: string, bundleName: string, flag: wantConstant.Flags): Promise<void>
```

Provides grant uri permission for app

**Since:** 9

**Required permissions:** 

 ohos.permission.WRITE_MEDIA

**System capability:** SystemCapability.FileManagement.AppFileService

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | uri |
| bundleName | string | Yes | bundleName |
| flag | wantConstant.Flags | Yes | wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION or wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | no callback return Promise otherwise return void |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed |
| 202 | The caller is not a system application |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 14300001 | IPC error |

**Example**

```TypeScript
import { wantConstant } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let uri: string =
  'file://docs/storage/Users/currentUser/Document/1.txt'; // You are advised to use the system API fileUri.getUriFromPath("Sandbox path") to generate a URI.
let bundleName: string = 'com.demo.test';
try {
  fileShare.grantUriPermission(uri, bundleName, wantConstant.Flags.FLAG_AUTH_READ_URI_PERMISSION |
    wantConstant.Flags.FLAG_AUTH_WRITE_URI_PERMISSION).then(() => {
    console.info("grantUriPermission success!");
  }).catch((error: BusinessError) => {
    console.error("grantUriPermission failed with error:" + JSON.stringify(error));
  });
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("grantUriPermission failed with error:" + JSON.stringify(error));
}

```

## grantUriPermission

```TypeScript
function grantUriPermission(policies: Array<PolicyInfo>, targetBundleName: string, appCloneIndex: int): Promise<void>
```

Grant URI permissions for an application.

**Since:** 20

**Required permissions:** 

 ohos.permission.FILE_ACCESS_MANAGER

**System capability:** SystemCapability.FileManagement.AppFileService.FolderAuthorization

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| policies | Array&lt;PolicyInfo> | Yes | Policy information for the user to grant permissions on URIs. |
| targetBundleName | string | Yes | Name of the target bundle to authorize. |
| appCloneIndex | int | Yes | Clone index of the target application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Returns void. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 801 | Capability not supported. |
| 13900001 | Operation not permitted. |
| 13900011 | Out of memory. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { fileShare } from '@kit.CoreFileKit';

async function grantUriPermissionExample() {
  try {
    let uri = "file://docs/storage/Users/currentUser/Documents/1.txt";
    let policyInfo: fileShare.PolicyInfo = {
      uri: uri,
      operationMode: fileShare.OperationMode.CREATE_MODE | fileShare.OperationMode.READ_MODE,
    };
    let policies: Array<fileShare.PolicyInfo> = [policyInfo];

    fileShare.grantUriPermission(policies, "com.example.myapplicationtest", 0).then(() => {
    }).catch((err: BusinessError<Array<fileShare.PolicyErrorResult>>) => {
      console.error("grantUriPermission failed. Code: " +
      err.code + ", message: " + err.message);
    });
  }
  catch (error) {
    console.info('grantUriPermission error, Code: ' + error.code + ', message: ' + error.message);
  }
}

```

