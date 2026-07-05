# scanFile

## scanFile

```TypeScript
function scanFile(filePath: string, identifyPolicies: Array<Policy>): Promise<Array<MatchResult>>
```

根据设置的策略，识别指定文件中的敏感内容，返回识别的结果数组，包含匹配的敏感标签、匹配内容及匹配数量。使用Promise异步回调。

**Since:** 21

**Required permissions:** 

 ohos.permission.ENTERPRISE_DATA_IDENTIFY_FILE

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | 识别的文件路径，需使用物理路径，路径指向的文件必须存在且支持访问。 |
| identifyPolicies | Array&lt;Policy> | Yes | 用于识别敏感内容的策略数组。每个Policy定义识别规则（标签、关键字、正则表达式），系统将根据这些规则扫描文件内容并返回匹配结果。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;MatchResult>> | Promise对象，返回敏感内容识别的结果。成功时返回匹配结果数组，异常返回错误码。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | permission denied. |
| 801 | Capability not supported. |
| 19110001 | Parameter error. Possible causes:  1. Incorrect policy format.  2. Invalid parameter range. |
| 19110002 | Sensitive file content identification timed out. |
| 19110003 | The file is not supported. Possible causes:  1. The file path does not exist.  2. The file type is not supported.  3. The file permission is not supported. |
| 19110004 | A system error has occurred. |

**Example**

```TypeScript
// Import the sensitive content identification module.
import { identifySensitiveContent } from '@kit.DataProtectionKit';

// Define the physical file path to be scanned.
let filepath = "/data/app/el1/bundle/public/bundleName/test.txt";

// Configures the policy for sensitive content identification.
let policies: Array<identifySensitiveContent.Policy> = [
  {"sensitiveLabel":"1", "keywords":[], "regex":""}
];
try {
  // Call the scanFile API to identify sensitive content in the file.
  identifySensitiveContent.scanFile(filepath, policies).then(records => {
    // Identification result
    console.info('scanFile finish');
  }).catch((err:Error) => {
    // Failed to identify.
    console.error('error message', err.message);
  })
} catch (err) {
  // Capture exceptions.
  console.error('error message', err.message);
}

```

