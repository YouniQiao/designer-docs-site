# getAllUserTrustedCertificates

## getAllUserTrustedCertificates

```TypeScript
function getAllUserTrustedCertificates(): Promise<CMResult>
```

表示获取当前用户和设备公共位置的所有用户根CA证书列表。使用Promise异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取用户根CA证书列表的结果，返回值为[CMResult]certificateManager.CMResult对象中的  certList属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  certificateManager.getAllUserTrustedCertificates().then((cmResult) => {
    if (cmResult === undefined) { // If the number of root CA certificates is 0, the returned cmResult is undefined.
      console.info('The count of the user trusted certificates is 0.');
    } else if (cmResult.certList == undefined) {
      console.info('The result of getting all user trusted certificates is undefined.');
    } else {
      let list = cmResult.certList;
      console.info('Succeeded in getting all user trusted certificates.');
    }
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get all user trusted certificates. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get all user trusted certificates. Code: ${error.code}, message: ${error.message}`);
}

```

## getAllUserTrustedCertificates

```TypeScript
function getAllUserTrustedCertificates(scope: CertScope): Promise<CMResult>
```

表示根据证书的位置获取用户根CA证书列表。使用Promise异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.ACCESS_CERT_MANAGER

**System capability:** SystemCapability.Security.CertificateManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scope | CertScope | Yes | 表示证书的位置。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CMResult> | Promise对象，返回获取用户根CA证书列表的结果，返回值为[CMResult]certificateManager.CMResult对象中的  certList属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 17500001 | Internal error. Possible causes: 1. IPC communication failed;  2. Memory operation error; 3. File operation error. Please try again. |

**Example**

```TypeScript
import { certificateManager } from '@kit.DeviceCertificateKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  /* Obtain the user root CA certificates of the current user. To obtain the user root CA certificates accessible to all users, pass in GLOBAL_USER. */
  let scope: certificateManager.CertScope = certificateManager.CertScope.CURRENT_USER;
  certificateManager.getAllUserTrustedCertificates(scope).then((cmResult) => {
    if (cmResult === undefined) { // If the number of root CA certificates is 0, the returned cmResult is undefined.
      console.info('The count of the user trusted certificates is 0.');
    } else if (cmResult.certList == undefined) {
      console.info('The result of getting current user trusted certificates is undefined.');
    } else {
      let list = cmResult.certList;
      console.info('Succeeded in getting current user trusted certificates.');
    }
  }).catch((error: Error) => {
    let err = error as BusinessError;
    console.error(`Failed to get current user trusted certificates. Code: ${err.code}, message: ${err.message}`);
  })
} catch (error) {
  console.error(`Failed to get current user trusted certificates. Code: ${error.code}, message: ${error.message}`);
}

```

