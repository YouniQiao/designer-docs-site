# setRetentionState

## setRetentionState

```TypeScript
function setRetentionState(docUris: Array<string>): Promise<void>
```

设置DLP沙箱的保留状态。默认情况下，打开DLP文件时系统会自动创建沙箱环境，关闭文件后自动销毁沙箱。设置保留状态后，即使关闭DLP文件，沙箱环境也会保留，便于快速重新打开相同DLP文件。适用于需要频繁操作同一DLP文件的场景 ，可提升文件打开效率。仅支持在DLP沙箱应用中调用。使用Promise异步回调。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| docUris | Array&lt;string> | Yes | 表示需要设置保留状态的文件uri列表。不对Array长度进行限制，每个string不超过4095字节，超出此范围抛出错误码19100001。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100006 | No permission to call this API,  which is available only for DLP sandbox applications. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let uri = "file://docs/storage/Users/currentUser/Desktop/test.txt.dlp";
dlpPermission.isInSandbox().then(async (inSandbox) => {
  if (inSandbox) {
    await dlpPermission.setRetentionState([uri]); // Set the sandbox retention state.
  }
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
}); // Whether the application is running in a sandbox.

```

## setRetentionState

```TypeScript
function setRetentionState(docUris: Array<string>, callback: AsyncCallback<void>): void
```

设置DLP沙箱的保留状态。默认情况下，打开DLP文件时系统会自动创建沙箱环境，关闭文件后自动销毁沙箱。设置保留状态后，即使关闭DLP文件，沙箱环境也会保留，便于快速重新打开相同DLP文件。适用于需要频繁操作同一DLP文件的场景 ，可提升文件打开效率。仅支持在DLP沙箱应用中调用。使用callback异步回调。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| docUris | Array&lt;string> | Yes | 表示需要设置保留状态的文件uri列表。不对Array长度进行限制，每个string长度不超过4095字节，超出此范围抛出错误码19100001。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。err为undefined时表示设置成功；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.  2. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100006 | No permission to call this API,  which is available only for DLP sandbox applications. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let uri = "file://docs/storage/Users/currentUser/Desktop/test.txt.dlp";
dlpPermission.isInSandbox().then((inSandbox) => { // Check whether the application is running in a sandbox.
  if (inSandbox) {
    dlpPermission.setRetentionState([uri], (err, retentionState) => {
      if (err != undefined) {
        console.error('setRetentionState error,', err.code, err.message);
      } else {
        console.info('setRetentionState success');
        console.info('retentionState: ', JSON.stringify(retentionState));
      }
    }); // Set the sandbox retention state.
  }
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
});

```

