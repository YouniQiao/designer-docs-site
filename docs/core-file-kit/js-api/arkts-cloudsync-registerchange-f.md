# registerChange

## registerChange

```TypeScript
function registerChange(uri: string, recursion: boolean, callback: Callback<ChangeData>): void
```

订阅监听指定文件的变化通知。callback返回更改的数据。

**Since:** 12

**System capability:** SystemCapability.FileManagement.DistributedFileService.CloudSync.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 待下载文件uri。 |
| recursion | boolean | Yes | true为监听该URI以及子文件和子目录，false为仅监听该URI文件。 |
| callback | Callback&lt;ChangeData> | Yes | 回调函数，返回更改的数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left  unspecified;  2.Incorrect parameter types. |
| 13900001 | Operation not permitted |
| 13900002 | No such file or directory. |
| 13900012 | Permission denied |
| 14000002 | Invalid uri. |

**Example**

```TypeScript
import { fileUri } from '@kit.CoreFileKit';

let path = "/data/storage/el2/cloud/1.txt";
let uri = fileUri.getUriFromPath(path);
let onCallback1 = (changeData: cloudSync.ChangeData) => {
  if (changeData.type == cloudSync.NotifyType.NOTIFY_ADDED) {
    // file has been added, do something
  } else if (changeData.type== cloudSync.NotifyType.NOTIFY_DELETED) {
    // file has been removed, do something
  }
}
cloudSync.registerChange(uri, false, onCallback1);
// Unregister the listener.
cloudSync.unregisterChange(uri);

```

