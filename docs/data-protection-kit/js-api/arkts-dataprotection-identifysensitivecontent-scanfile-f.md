# scanFile

## Modules to Import

```TypeScript
import { identifySensitiveContent } from '@kit.DataProtectionKit';
```

## scanFile

```TypeScript
function scanFile(filePath: string, identifyPolicies: Array<Policy>): Promise<Array<MatchResult>>
```

Identifies sensitive content in a specified file based on the configured policy and returns the identified result array,including the matched sensitivity labels, matched content, and number of matched items. This API uses a promise to return the result.

**Since:** 21

**Required permissions:** ohos.permission.ENTERPRISE_DATA_IDENTIFY_FILE

<!--Device-identifySensitiveContent-function scanFile(filePath: string, identifyPolicies: Array<Policy>): Promise<Array<MatchResult>>--><!--Device-identifySensitiveContent-function scanFile(filePath: string, identifyPolicies: Array<Policy>): Promise<Array<MatchResult>>-End-->

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filePath | string | Yes | File path identified. The path must be a physical path. The file to which the path points must exist and can be accessed. |
| identifyPolicies | Array&lt;Policy&gt; | Yes | An array of policies used to identify sensitive content.Each policy defines an identification rule (tags, keywords, and regular expressions).The system scans file content based on these rules and returns the matching result. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;MatchResult&gt;&gt; | Promise used to return the identification result of sensitive content.If the operation is successful, the matching result array is returned. If the operation fails, an error code is returned. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [19110001](../errorcode-dlp.md#19110001-invalid-parameter) | Parameter error. Possible causes:1. Incorrect policy format.2. Invalid parameter range. |
| [19110002](../errorcode-dlp.md#19110002-file-sensitive-content-identification-timed-out) | Sensitive file content identification timed out. |
| [19110003](../errorcode-dlp.md#19110003-file-not-supported) | The file is not supported. Possible causes:1. The file path does not exist.2. The file type is not supported.3. The file permission is not supported. |
| [19110004](../errorcode-dlp.md#19110004-system-function-abnormal) | A system error has occurred. |

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

