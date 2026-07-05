# getTotalBytes

## getTotalBytes

```TypeScript
function getTotalBytes(path: string, callback: AsyncCallback<number>): void
```

异步方法获取指定文件系统总字节数，使用callback形式返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.file.statvfs:statfs.getTotalBytes

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 需要查询的文件系统的文件路径 |
| callback | AsyncCallback&lt;number> | Yes | 异步获取总字节数之后的回调 |

**Example**

```TypeScript
import common from '@ohos.app.ability.common';
import { BusinessError } from '@ohos.base';
let context = getContext(this) as common.UIAbilityContext;
let path = context.filesDir;
statfs.getTotalBytes(path, (err: BusinessError, totalBytes:Number) => {
    if (err) {
        console.error('getTotalBytes callback failed');
    } else {
        console.info('getTotalBytes callback success' + totalBytes);
    }
});

```

## getTotalBytes

```TypeScript
function getTotalBytes(path: string): Promise<number>
```

异步方法获取指定文件系统总字节数，以Promise形式返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.file.statvfs:statfs.getTotalBytes

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 需要查询的文件系统的文件路径 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | 返回总字节数 |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let path = "/dev";
statfs.getTotalBytes(path).then((number: number) => {
  console.info("getTotalBytes promise successfully:" + number);
}).catch((err: BusinessError) => {
  console.error("getTotalBytes failed with error:" + JSON.stringify(err));
});

```

