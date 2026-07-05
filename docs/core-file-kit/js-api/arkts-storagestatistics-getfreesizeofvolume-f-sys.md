# getFreeSizeOfVolume

## getFreeSizeOfVolume

```TypeScript
function getFreeSizeOfVolume(volumeUuid: string, callback: AsyncCallback<long>): void
```

异步获取外置存储设备中指定卷设备的可用空间大小（单位为Byte），以callback方式返回。

**Since:** 8

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeUuid | string | Yes | 卷设备uuid。 |
| callback | AsyncCallback&lt;long> | Yes | 获取指定卷可用空间之后的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600008 | No such object. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { volumeManager } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

volumeManager.getAllVolumes().then((volumes: Array<volumeManager.Volume>) => {
  if (volumes == null || volumes.length <= 0) {
    console.error("volumes is null or length is invalid");
    return;
  }
  let uuid: string = volumes[0].uuid;
  storageStatistics.getFreeSizeOfVolume(uuid, (error: BusinessError, number: number) => {
    if (error) {
      console.error("getFreeSizeOfVolume failed with error:" + JSON.stringify(error));
    } else {
      // Do something.
      console.info("getFreeSizeOfVolume successfully: " + number);
    }
  });
}).catch((err: BusinessError) => {
  console.error("getAllVolumes failed with error:" + JSON.stringify(err));
});

```

## getFreeSizeOfVolume

```TypeScript
function getFreeSizeOfVolume(volumeUuid: string): Promise<long>
```

异步获取外置存储设备中指定卷设备的可用空间大小（单位为Byte），以Promise方式返回。

**Since:** 8

**Required permissions:** 

 ohos.permission.STORAGE_MANAGER

**System capability:** SystemCapability.FileManagement.StorageService.SpatialStatistics

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| volumeUuid | string | Yes | 卷设备uuid。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;long> | Promise对象，返回指定卷的可用空间大小（单位为Byte）。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed. |
| 202 | The caller is not a system application. |
| 401 | The input parameter is invalid.Possible causes:1.Mandatory  parameters are left unspecified;  2.Incorrect parameter types. |
| 13600001 | IPC error. |
| 13600008 | No such object. |
| 13900042 | Unknown error. |

**Example**

```TypeScript
import { volumeManager } from '@kit.CoreFileKit';
import { BusinessError } from '@kit.BasicServicesKit';

volumeManager.getAllVolumes().then((volumes: Array<volumeManager.Volume>) => {
  if (volumes == null || volumes.length <= 0) {
    console.error("volumes is null or length is invalid");
    return;
  }
  let uuid: string = volumes[0].uuid;
  storageStatistics.getFreeSizeOfVolume(uuid).then((number: number) => {
    console.info("getFreeSizeOfVolume successfully:" + number);
  }).catch((err: BusinessError) => {
    console.error("getFreeSizeOfVolume failed with error:" + JSON.stringify(err));
  });
}).catch((err: BusinessError) => {
  console.error("getAllVolumes failed with error:" + JSON.stringify(err));
});

```

