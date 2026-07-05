# compressFiles

## compressFiles

```TypeScript
function compressFiles(inFiles: Array<string>, outFile: string, options: Options): Promise<void>
```

压缩指定的多个文件。使用Promise异步回调。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.BundleManager.Zlib

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inFiles | Array&lt;string> | Yes | 指定压缩的文件夹路径或者文件路径，路径必须为沙箱路径，沙箱路径可以通过context获取，可参考[FA模型]./app/context，  [Stage模型]./app/context。待压缩的文件夹不可为空，否则使用  [decompressFile]zlib.decompressFile(inFile: string, outFile: string, options: Options,  callback: AsyncCallback)对压缩后的文件解压时会报错。 |
| outFile | string | Yes | 指定的压缩结果的文件路径。多个线程同时压缩文件时，outFile不能相同。 |
| options | Options | Yes | 压缩的配置参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 900001 | The input source file is invalid. |
| 900002 | The input destination file is invalid. |

**Example**

```TypeScript
// The path used in the code must be an application sandbox path, for example, /data/storage/el2/base/temp. You can obtain the path through the context.
import { zlib, BusinessError } from '@kit.BasicServicesKit';

let inFile = '/data/storage/el2/base/temp/filename.xxx';
let pathDir = 'data/storage/el2/base/temp/xxx';
let outFile = '/data/storage/el2/base/temp/xxx.zip';
let options: zlib.Options = {
  level: zlib.CompressLevel.COMPRESS_LEVEL_DEFAULT_COMPRESSION,
  memLevel: zlib.MemLevel.MEM_LEVEL_DEFAULT,
  strategy: zlib.CompressStrategy.COMPRESS_STRATEGY_DEFAULT_STRATEGY
};

try {
  zlib.compressFiles([inFile, pathDir], outFile, options).then((data: void) => {
    console.info('compressFiles success. data: ' + JSON.stringify(data));
  }).catch((errData: BusinessError) => {
    console.error(`errData is errCode:${errData.code}  message:${errData.message}`);
  })
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`errData is errCode:${code}  message:${message}`);
}

```

