# getSecurityLabelSync

## getSecurityLabelSync

```TypeScript
function getSecurityLabelSync(path: string): string
```

以同步方法获取文件或目录的数据安全等级。若未设置过数据安全等级则默认返回“s3”。

**Since:** 9

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 文件路径。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回数据安全等级。 |

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
let filePath = pathDir + '/test.txt';
let type = securityLabel.getSecurityLabelSync(filePath);
console.info("getSecurityLabel successfully, Label: " + type);

```

