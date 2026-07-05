# hash

## hash

```TypeScript
function hash(path: string, algorithm: string): Promise<string>
```

计算文件的哈希值，使用Promise异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待计算哈希值文件的应用沙箱路径。 |
| algorithm | string | Yes | 哈希计算采用的算法。可选?"md5"、"sha1"?或?"sha256"。建议采用安全强度更高的?"sha256"。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象。返回文件的哈希值。表示为十六进制数字串，所有字母均大写。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let filePath = pathDir + "/test.txt";
hash.hash(filePath, "sha256").then((str: string) => {
  console.info("calculate file hash succeed:" + str);
}).catch((err: BusinessError) => {
  console.error("calculate file hash failed with error message: " + err.message + ", error code: " + err.code);
});

```

## hash

```TypeScript
function hash(path: string, algorithm: string, callback: AsyncCallback<string>): void
```

计算文件的哈希值，使用callback异步回调。

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 待计算哈希值文件的应用沙箱路径。 |
| algorithm | string | Yes | 哈希计算采用的算法。可选?"md5"、"sha1"?或?"sha256"。建议采用安全强度更高的?"sha256"。 |
| callback | AsyncCallback&lt;string> | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900020 | Invalid argument |
| 13900042 | Unknown error |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let filePath = pathDir + "/test.txt";
hash.hash(filePath, "sha256", (err: BusinessError, str: string) => {
  if (err) {
    console.error("calculate file hash failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("calculate file hash succeed:" + str);
  }
});

```

