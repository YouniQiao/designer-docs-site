# getTotalSizeSync

## getTotalSizeSync

```TypeScript
function getTotalSizeSync(): long
```

同步获取内置存储的总空间大小（单位为Byte）。

**起始版本：** 10

**需要权限：** 

- API版本10 - 14： ohos.permission.STORAGE_MANAGER

**系统能力：** SystemCapability.FileManagement.StorageService.SpatialStatistics

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | 返回内置存储的总空间大小（单位为Byte）。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. [since 10 - 14] |
| 202 | The caller is not a system application. [since 10 - 14] |
| 13600001 | IPC error. |
| 13900042 | Unknown error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
try {
  let number = storageStatistics.getTotalSizeSync();
  console.info("getTotalSizeSync successfully:" + JSON.stringify(number));
} catch (err) {
  let error: BusinessError = err as BusinessError;
  console.error("getTotalSizeSync failed with error:" + JSON.stringify(error));
}

```

