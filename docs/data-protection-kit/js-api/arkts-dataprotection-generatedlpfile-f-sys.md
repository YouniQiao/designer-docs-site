# generateDLPFile (System API)

## Modules to Import

```TypeScript
import { dlpPermission } from '@ohos.dlpPermission';
```

## generateDLPFile

```TypeScript
function generateDLPFile(plaintextFd: number, ciphertextFd: number, property: DLPProperty): Promise<DLPFile>
```

Generates a **DLPFile** object, which is an encrypted file that can be accessed only by authorized users. The users can have the full control permission or read-only permission on the DLP file. This API uses a promise to return the result. After calling **generateDLPFile** to return a **DLPFile** object, the system must call **closeDLPFile** to release resources after using the object.

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| plaintextFd | number | Yes | FD of the plaintext file to be encrypted. The value range is[0, 2&lt;sup&gt;31&lt;/sup&gt;-1]. If the value of **fd** is less than 0, an error log is generated, and the functionstops running. If the value of **fd** is greater than 2&lt;sup&gt;31&lt;/sup&gt;-1, the excess part will be truncated. |
| ciphertextFd | number | Yes | FD of the encrypted file. The value range is [0, 2&lt;sup&gt;31&lt;/sup&gt;-1]. If the valueof **fd** is less than 0, an error log is generated, and the function stops running. If the value of **fd**is greater than 2&lt;sup&gt;31&lt;/sup&gt;-1, the excess part will be truncated. |
| property | DLPProperty | Yes | Authorization information, which includes the authorized user list, owneraccount, and contact account information. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DLPFile&gt; | Promise used to return the result. If the value is **resolve**, a **DLPFile**object is returned, indicating that a DLP file is successfully generated. If the value is **reject**, anerror is returned, indicating that the DLP file fails to be generated. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100002](../errorcode-dlp.md#19100002-encryption-and-decryption-error) | Credential service busy due to too many tasks or duplicate tasks. |
| [19100003](../errorcode-dlp.md#19100003-encryptiondecryption-timeout) | Credential task time out. |
| [19100004](../errorcode-dlp.md#19100004-credential-service-error) | Credential service error. |
| [19100005](../errorcode-dlp.md#19100005-credential-authentication-server-error) | Credential authentication server error. |
| [19100009](../errorcode-dlp.md#19100009-failed-to-operate-the-dlp-file) | Failed to operate the DLP file. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { fileIo } from '@kit.CoreFileKit';

async function ExampleFunction() {
  let dlpUri = 'file://docs/storage/Users/currentUser/Desktop/test.txt.dlp';
  let uri = 'file://docs/storage/Users/currentUser/Desktop/test.txt';
  let file: number | undefined = undefined;
  let dlp: number | undefined = undefined;
  let dlpFile: dlpPermission.DLPFile | undefined = undefined;

  file = fileIo.openSync(uri).fd;
  dlp = fileIo.openSync(dlpUri).fd;
  let dlpProperty: dlpPermission.DLPProperty = {
    ownerAccount: 'zhangsan',
    ownerAccountType: dlpPermission.AccountType.DOMAIN_ACCOUNT,
    authUserList: [],
    contactAccount: 'zhangsan',
    offlineAccess: true,
    ownerAccountID: 'xxxxxxx',
    everyoneAccessList: []
  };
  dlpFile = await dlpPermission.generateDLPFile(file, dlp, dlpProperty); // Generate a DLP file.

  dlpFile?.closeDLPFile(); // Close the DLP object.
  if (file) {
    fileIo.closeSync(file);
  }
  if (dlp) {
    fileIo.closeSync(dlp);
  }
}

ExampleFunction();

```


## generateDLPFile

```TypeScript
function generateDLPFile(plaintextFd: number, ciphertextFd: number, property: DLPProperty, callback: AsyncCallback<DLPFile>): void
```

Generates a DLP file, which is an encrypted file that can be accessed only by authorized users. The users can have the full control permission or read-only permission on the DLP file. Obtains a **DLPFile** object. This API uses an asynchronous callback to return the result. After using the **DLPFile** object, call **closeDLPFile** to close the object to prevent resource leakage. After calling **generateDLPFile()** to return a **DLPFile** object, the system must call **closeDLPFile()** to release resources after using the object.

**Since:** 10

**Required permissions:** ohos.permission.ACCESS_DLP_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| plaintextFd | number | Yes | FD of the plaintext file to be encrypted. The value range is[0, 2&lt;sup&gt;31&lt;/sup&gt;-1]. If the value of **fd** is less than 0, an error log is generated, and the functionstops running. If the value of **fd** is greater than 2&lt;sup&gt;31&lt;/sup&gt;-1, the excess part will be truncated. |
| ciphertextFd | number | Yes | FD of the encrypted file. The value range is [0, 2&lt;sup&gt;31&lt;/sup&gt;-1]. If the valueof **fd** is less than 0, an error log is generated, and the function stops running. If the value of **fd**is greater than 2&lt;sup&gt;31&lt;/sup&gt;-1, the excess part will be truncated. |
| property | DLPProperty | Yes | Authorization information, which includes the authorized user list, owneraccount, and contact account information. |
| callback | AsyncCallback&lt;DLPFile&gt; | Yes | Callback used to return the result. If the DLP file generation issuccessful, **err** is **undefined**, and **data** is the DLP file information obtained. Otherwise, **err**is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.2. Incorrect parameter types. |
| [19100001](../errorcode-dlp.md#19100001-invalid-parameter) | Invalid parameter value. |
| [19100002](../errorcode-dlp.md#19100002-encryption-and-decryption-error) | Credential service busy due to too many tasks or duplicate tasks. |
| [19100003](../errorcode-dlp.md#19100003-encryptiondecryption-timeout) | Credential task time out. |
| [19100004](../errorcode-dlp.md#19100004-credential-service-error) | Credential service error. |
| [19100005](../errorcode-dlp.md#19100005-credential-authentication-server-error) | Credential authentication server error. |
| [19100009](../errorcode-dlp.md#19100009-failed-to-operate-the-dlp-file) | Failed to operate the DLP file. |
| [19100011](../errorcode-dlp.md#19100011-system-service-abnormal) | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';
import { fileIo } from '@kit.CoreFileKit';

let dlpUri = 'file://docs/storage/Users/currentUser/Desktop/test.txt.dlp';
let uri = 'file://docs/storage/Users/currentUser/Desktop/test.txt';
let file: number | undefined = undefined;
let dlp: number | undefined = undefined;

file = fileIo.openSync(uri).fd;
dlp = fileIo.openSync(dlpUri).fd;
let dlpProperty: dlpPermission.DLPProperty = {
  ownerAccount: 'zhangsan',
  ownerAccountType: dlpPermission.AccountType.DOMAIN_ACCOUNT,
  authUserList: [],
  contactAccount: 'zhangsan',
  offlineAccess: true,
  ownerAccountID: 'xxxxxxx',
  everyoneAccessList: []
};
dlpPermission.generateDLPFile(file, dlp, dlpProperty, (err, res) => { // Generate a DLP file.
  if (err !== undefined) {
    console.error('generateDLPFile error,', err.code, err.message);
  } else {
    console.info('res', JSON.stringify(res));
  }
  fileIo.closeSync(file);
  fileIo.closeSync(dlp);
});

```

