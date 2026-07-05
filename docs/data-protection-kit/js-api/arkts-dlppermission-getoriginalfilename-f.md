# getOriginalFileName

## getOriginalFileName

```TypeScript
function getOriginalFileName(fileName: string): string
```

获取指定DLP文件名的原始文件名。该接口为同步接口。 根据原始文件名后缀判断文件类型，选择对应的应用打开。

**Since:** 10

**System capability:** SystemCapability.Security.DataLossPrevention

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fileName | string | Yes | 指定要查询的DLP文件名。长度不超过255字节，超出此范围抛出错误码19100001。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回DLP文件的原始文件名。例如：DLP文件名为test.txt.dlp，则返回的原始文件名为test.txt。不超过255字节。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19100001 | Invalid parameter value. |
| 19100011 | The system ability works abnormally. |

**Example**

```TypeScript
import { dlpPermission } from '@kit.DataProtectionKit';

let originalFileName = dlpPermission.getOriginalFileName('test.txt.dlp'); // Obtain the original file name.
console.info('originalFileName:', originalFileName);

```

