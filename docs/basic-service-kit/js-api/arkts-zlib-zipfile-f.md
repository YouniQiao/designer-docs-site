# zipFile

## zipFile

```TypeScript
function zipFile(inFile: string, outFile: string, options: Options): Promise<void>
```

压缩接口，压缩完成后返回执行结果。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [zlib.compressFile]zlib.compressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>) > 替代。

**Since:** 7

**Deprecated since:** 9

**Substitute:** zlib.compressFile(inFile:

**System capability:** SystemCapability.BundleManager.Zlib

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inFile | string | Yes | 指定压缩的文件夹路径或者文件路径，路径必须为沙箱路径，沙箱路径可以通过context获取，可参考[FA模型]./app/context，  [Stage模型]./app/context。 |
| outFile | string | Yes | 指定压缩结果的文件路径（文件的扩展名zip）。 |
| options | Options | Yes | 压缩的可选参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回值。 |

**Example**

```TypeScript
// The path used in the code must be an application sandbox path, for example, /data/storage/el2/base/temp. You can obtain the path through the context.
import { zlib, BusinessError } from '@kit.BasicServicesKit';

let inFile = '/data/storage/el2/base/temp/filename.xxx';
let outFile = '/data/storage/el2/base/temp/xxx.zip';
let options: zlib.Options = {
  level: zlib.CompressLevel.COMPRESS_LEVEL_DEFAULT_COMPRESSION,
  memLevel: zlib.MemLevel.MEM_LEVEL_DEFAULT,
  strategy: zlib.CompressStrategy.COMPRESS_STRATEGY_DEFAULT_STRATEGY
};

zlib.zipFile(inFile, outFile, options).then((data: void) => {
  console.info('zipFile result is ' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error('error is ' + JSON.stringify(err));
});

```

