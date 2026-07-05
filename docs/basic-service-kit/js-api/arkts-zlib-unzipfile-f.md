# unzipFile

## unzipFile

```TypeScript
function unzipFile(inFile: string, outFile: string, options: Options): Promise<void>
```

解压文件，解压完成后返回执行结果。使用Promise异步回调。 > **说明：** > > 从API version 7开始支持，从API version 9开始废弃。建议使用 > [zlib.decompressFile]zlib.decompressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>) > 替代。 > > 传入的压缩包内部文件或者文件夹名称不能包含“../”，否则会返回-1错误码。

**Since:** 7

**Deprecated since:** 9

**Substitute:** zlib.decompressFile(inFile:

**System capability:** SystemCapability.BundleManager.Zlib

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inFile | string | Yes | 指定的待解压缩文件的文件路径，路径必须为沙箱路径，沙箱路径可以通过context获取，可参考[FA模型]./app/context，  [Stage模型]./app/context。如果待解压的.zip文件中包含中文的文件名或目录名，需使用UTF8进行编码，避免解压时文件名或目录名出现中文乱码。 |
| outFile | string | Yes | 指定的解压文件路径。 |
| options | Options | Yes | 解压的可选参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回值。 |

**Example**

```TypeScript
// The path used in the code must be an application sandbox path, for example, /data/storage/el2/base/temp. You can obtain the path through the context.
import { zlib, BusinessError } from '@kit.BasicServicesKit';

let inFile = '/data/storage/el2/base/temp/xxx.zip';
let outFile = '/data/storage/el2/base/temp/xxx';
let options: zlib.Options = {
  level: zlib.CompressLevel.COMPRESS_LEVEL_DEFAULT_COMPRESSION,
  memLevel: zlib.MemLevel.MEM_LEVEL_DEFAULT,
  strategy: zlib.CompressStrategy.COMPRESS_STRATEGY_DEFAULT_STRATEGY
};

zlib.unzipFile(inFile, outFile, options).then((data: void) => {
  console.info('unzipFile result is ' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error('error is ' + JSON.stringify(err));
})

```

