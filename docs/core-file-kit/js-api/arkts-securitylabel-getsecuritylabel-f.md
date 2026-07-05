# getSecurityLabel

## getSecurityLabel

```TypeScript
function getSecurityLabel(path: string): Promise<string>
```

获取文件或目录的数据安全等级。若未设置过数据安全等级则默认返回“s3”。使用Promise异步回调。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | 返回数据安全等级。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900007 | Arg list too long |
| 13900015 | File exists |
| 13900020 | Invalid argument |
| 13900025 | No space left on device |
| 13900037 | No data available |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let filePath = pathDir + '/test.txt';
securityLabel.getSecurityLabel(filePath).then((type: string) => {
  console.info("getSecurityLabel successfully, Label: " + type);
}).catch((err: BusinessError) => {
  console.error("getSecurityLabel failed with error message: " + err.message + ", error code: " + err.code);
});

```

## getSecurityLabel

```TypeScript
function getSecurityLabel(path: string, callback: AsyncCallback<string>): void
```

获取文件或目录的数据安全等级。若未设置过数据安全等级则默认返回“s3”。使用callback异步回调。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件路径。 |
| callback | AsyncCallback&lt;string> | Yes |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 13900001 | Operation not permitted |
| 13900007 | Arg list too long |
| 13900015 | File exists |
| 13900020 | Invalid argument |
| 13900025 | No space left on device |
| 13900037 | No data available |
| 13900041 | Quota exceeded |
| 13900042 | Unknown error |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
let filePath = pathDir + '/test.txt';
securityLabel.getSecurityLabel(filePath, (err: BusinessError, type: string) => {
  if (err) {
    console.error("getSecurityLabel failed with error message: " + err.message + ", error code: " + err.code);
  } else {
    console.info("getSecurityLabel successfully, Label: " + type);
  }
});

```

