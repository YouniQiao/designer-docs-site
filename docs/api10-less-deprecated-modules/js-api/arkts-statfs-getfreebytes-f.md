# getFreeBytes

## getFreeBytes

```TypeScript
function getFreeBytes(path: string, callback: AsyncCallback<number>): void
```

异步方法获取指定文件系统空闲字节数，使用callback形式返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.file.statvfs:statfs.getFreeBytes

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 需要查询的文件系统的文件路径 |
| callback | AsyncCallback&lt;number> | Yes | 异步获取空闲字节数之后的回调 |

**Example**

```TypeScript
import common from '@ohos.app.ability.common';
import { BusinessError } from '@ohos.base';
let context = getContext(this) as common.UIAbilityContext;
let path = context.filesDir;
statfs.getFreeBytes(path, (err: BusinessError, freeBytes:Number) => {
    if (err) {
        console.error('getFreeBytes callback failed');
    } else {
        console.info('getFreeBytes callback success' + freeBytes);
    }
});

```

## getFreeBytes

```TypeScript
function getFreeBytes(path: string): Promise<number>
```

异步方法获取指定文件系统空闲字节数，以Promise形式返回结果。

**Since:** 8

**Deprecated since:** 9

**Substitute:** @ohos.file.statvfs:statfs.getFreeBytes

**System capability:** SystemCapability.FileManagement.File.FileIO

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| path | string | Yes | 需要查询的文件系统的文件路径 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number> | 返回空闲字节数 |

**Example**

```TypeScript
import { BusinessError } from '@ohos.base';
let path = "/dev";
statfs.getFreeBytes(path).then((number: number) => {
  console.info("getFreeBytes promise successfully:" + number);
}).catch((err: BusinessError) => {
  console.error("getFreeBytes failed with error:" + JSON.stringify(err));
});

```

