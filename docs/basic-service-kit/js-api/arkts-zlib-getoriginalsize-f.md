# getOriginalSize

## getOriginalSize

```TypeScript
function getOriginalSize(compressedFile: string): Promise<long>
```

获取压缩文件的原始大小。使用Promise异步回调。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| compressedFile | string | Yes | 指定的压缩文件的文件路径，只支持zip格式压缩文件。文件路径必须为沙箱路径，沙箱路径可以通过context获取，可参考  [FA模型]./app/context，[Stage模型]./app/context。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回压缩文件的原始大小，单位字节。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The parameter check failed. Possible causes: 1. Mandatory parameters are left  unspecified; 2. Incorrect parameter types. |
| 900001 | The input source file is invalid. |
| 900003 | The input source file is not in ZIP format or is damaged. |

**Example**

```TypeScript
// The path used in the code must be an application sandbox path, for example, /data/storage/el2/base/temp. You can obtain the path through the context.
import { zlib, BusinessError } from '@kit.BasicServicesKit';

let compressedFile = '/data/storage/el2/base/temp/test.zip';

try {
  zlib.getOriginalSize(compressedFile).then((data: number) => {
    console.info(`getOriginalSize success. getOriginalSize: ${data}`);
  }).catch((errData: BusinessError) => {
    console.error(`errData is errCode:${errData.code}  message:${errData.message}`);
  })
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`errData is errCode:${code}  message:${message}`);
}

```

