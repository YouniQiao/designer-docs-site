# getDLPSuffix

## getDLPSuffix

```TypeScript
function getDLPSuffix(): string
```

获取DLP文件扩展名。调用成功后返回DLP文件扩展名（如'.dlp'）。接口为同步接口。 用于获取DLP文件的标准扩展名，便于构建DLP文件名或进行文件类型判断。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回DLP文件扩展名。例如：原文件"test.txt"，加密后的DLP文件名为"test.txt.dlp"，返回扩展名为".dlp"。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let dlpSuffix = dlpPermission.getDLPSuffix(); // Obtain the DLP file name extension.
console.info('dlpSuffix:', dlpSuffix);

```

