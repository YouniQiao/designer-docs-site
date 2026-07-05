# getDLPSupportedFileTypes

## getDLPSupportedFileTypes

```TypeScript
function getDLPSupportedFileTypes(): Promise<Array<string>>
```

查询当前可支持权限设置和校验的文件扩展名类型列表。调用成功后返回支持的文件类型列表，用于判断哪些文件类型可进行DLP权限管理。使用Promise异步回调。 该接口用于获取支持DLP权限管理的文件类型列表，以便决定当前文件是否可以进行加密。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise对象。返回当前可支持权限设置和校验的文件扩展名类型列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getDLPSupportedFileTypes().then((fileTypes) => { // Obtain the file types that support DLP.
  console.info('fileTypes', JSON.stringify(fileTypes));
}).catch((error: BusinessError)=> {
  console.error(JSON.stringify(error));
});

```

## getDLPSupportedFileTypes

```TypeScript
function getDLPSupportedFileTypes(callback: AsyncCallback<Array<string>>): void
```

查询当前可支持权限设置和校验的文件扩展名类型列表。调用成功后返回支持的文件类型列表，用于判断哪些文件类型可进行DLP权限管理。使用callback异步回调。 该接口用于获取支持DLP权限管理的文件类型列表，以便决定当前文件是否可以进行加密。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;string>> | Yes | 回调函数。err为undefined时表示查询成功；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Incorrect parameter types. |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

dlpPermission.getDLPSupportedFileTypes((err, fileTypes) => {
  if (err != undefined) {
    console.error('getDLPSupportedFileTypes error', err.code, err.message);
  } else {
    console.info('fileTypes', JSON.stringify(fileTypes));
  }
}); // Obtain the file types that support DLP.

```

