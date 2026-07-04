# compressFile

## Modules to Import

```TypeScript
import { zlib } from '@ohos.zlib';
```

## compressFile

```TypeScript
function compressFile(inFile: string, outFile: string, options: Options, callback: AsyncCallback<void>): void
```

Compresses a file. This API uses an asynchronous callback to return the result. > **NOTE** > > To avoid path traversal, the input parameters of **inFile** and **outFile** cannot contain two consecutive > periods and a slash (../) since API version 13. Otherwise, error codes 900001 and 900002 are returned.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.BundleManager.Zlib

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inFile | string | Yes | Path of the folder or file to compress. The path must be an application sandbox path,which can be obtained from the context. For details about the context, see [FA Model](../../apis-ability-kit/arkts-apis/arkts-ability-context-depr-i.md#context) and[Stage Model](../../apis-ability-kit/arkts-apis/arkts-ability-context-depr-i.md#context). The folder to compress cannot be empty. Otherwise, an error will bereported when[decompressFile](zlib.decompressFile(inFile: string, outFile: string, options: Options,callback: AsyncCallback&lt;void&gt;)) is used to decompress the folder. |
| outFile | string | Yes | Path of the compressed file. When multiple threads compress files at the same time, thevalues of **outFile** must be different. |
| options | Options | Yes | Compression parameters. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**null** is returned; otherwise, a specific error code is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [900001](../../apis-basic-services-kit/errorcode-zlib.md#900001-invalid-source-file) | The input source file is invalid. |
| [900002](../../apis-basic-services-kit/errorcode-zlib.md#900002-invalid-destination-file) | The input destination file is invalid. |

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

try {
  zlib.compressFile(inFile, outFile, options, (errData: BusinessError) => {
    if (errData !== null) {
      console.error(`compressFile errData is errCode:${errData.code}  message:${errData.message}`);
    } else {
      console.info(`compressFile success.`);
    }
  })
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`compressFile errData is errCode:${code}  message:${message}`);
}

```


## compressFile

```TypeScript
function compressFile(inFile: string, outFile: string, options: Options): Promise<void>
```

Compresses a file. This API uses a promise to return the result. > **NOTE** > > To avoid path traversal, the input parameters of **inFile** and **outFile** cannot contain two consecutive > periods and a slash (../) since API version 13. Otherwise, error codes 900001 and 900002 are returned.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.BundleManager.Zlib

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| inFile | string | Yes | Path of the folder or file to compress. The path must be an application sandbox path,which can be obtained from the context. For details about the context, see [FA Model](../../apis-ability-kit/arkts-apis/arkts-ability-context-depr-i.md#context) and[Stage Model](../../apis-ability-kit/arkts-apis/arkts-ability-context-depr-i.md#context). The folder to compress cannot be empty. Otherwise, an error will bereported when[decompressFile](zlib.decompressFile(inFile: string, outFile: string, options: Options,callback: AsyncCallback&lt;void&gt;)) is used to decompress the folder. |
| outFile | string | Yes | Path of the compressed file. When multiple threads compress files at the same time, thevalues of **outFile** must be different. |
| options | Options | Yes | Compression parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [900001](../../apis-basic-services-kit/errorcode-zlib.md#900001-invalid-source-file) | The input source file is invalid. |
| [900002](../../apis-basic-services-kit/errorcode-zlib.md#900002-invalid-destination-file) | The input destination file is invalid. |

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

try {
  zlib.compressFile(inFile, outFile, options).then((data: void) => {
    console.info('compressFile success. data: ' + JSON.stringify(data));
  }).catch((errData: BusinessError) => {
    console.error(`errData is errCode:${errData.code}  message:${errData.message}`);
  })
} catch (errData) {
  let code = (errData as BusinessError).code;
  let message = (errData as BusinessError).message;
  console.error(`errData is errCode:${code}  message:${message}`);
}

```

