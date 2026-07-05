# getRetentionSandboxList

## getRetentionSandboxList

```TypeScript
function getRetentionSandboxList(bundleName?: string): Promise<Array<RetentionSandboxInfo>>
```

查询指定应用的保留沙箱信息列表。仅支持在非DLP沙箱应用中调用。使用Promise异步回调。 该接口用于查询指定应用的保留沙箱列表，以便查看或管理当前处于保留状态的沙箱环境。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;RetentionSandboxInfo>> | Promise对象。返回查询的沙箱信息列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100007 | No permission to call this API,  which is available only for non-DLP sandbox applications. |
| 19100011 | The system ability works abnormally. |

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

查询指定应用的保留沙箱信息列表。仅支持在非DLP沙箱应用中调用。使用callback异步回调。 该接口用于查询指定应用的保留沙箱列表，以便查看或管理当前处于保留状态的沙箱环境。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 指定应用包名，用于查询该应用的保留沙箱信息列表。长度范围[7, 128]字节，超出此范围抛出错误码19100001。 |
| callback | AsyncCallback&lt;Array&lt;RetentionSandboxInfo>> | Yes | 回调函数。err为undefined时表示查询成功；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100007 | No permission to call this API,  which is available only for non-DLP sandbox applications. |
| 19100011 | The system ability works abnormally. |

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

查询当前应用的保留沙箱信息列表。使用callback异步回调。 该接口用于查询指定应用的保留沙箱列表，以便查看或管理当前处于保留状态的沙箱环境。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;RetentionSandboxInfo>> | Yes | 回调函数。err为undefined时表示查询成功；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100007 | No permission to call this API,  which is available only for non-DLP sandbox applications. |
| 19100011 | The system ability works abnormally. |

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

