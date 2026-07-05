# DataMigrationCallback (System API)

Callback type used during data migration.

**Since:** 23

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { fontManager } from '@ohos.fontManager';
```

## onHeartBeat

```TypeScript
onHeartBeat(): void
```

Callback function used to return the heartbeat callback.

**Since:** 23

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

**Example**

```TypeScript
import { fontManager } from '@kit.LocalizationKit';

dataMigration() {
  const callback: fontManager.DataMigrationCallback = {
    onHeartBeat: () => {
      console.info('onHeartBeat callback');
    },
    onProgress(progress : fontManager.DataMigrationProgress) => {
      console.info('onProgress callback');
    },
    onResult(result : int) => {
      console.info('onResult callback');
    }
  }
  try {
    let res = await fontManager.dataMigration(callback);
    console.info('dataMigration suc. res is ' + res);
  } catch (error) {
    console.error('dataMigration err.' + error.code);
  }
  return;
}

```

## onProgress

```TypeScript
onProgress(progress : DataMigrationProgress): void
```

Callback used to return the data migration progress.

**Since:** 23

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| progress | DataMigrationProgress | Yes | Data migration progress. |

**Example**

```TypeScript
import { fontManager } from '@kit.LocalizationKit';

dataMigration() {
  const callback: fontManager.DataMigrationCallback = {
    onHeartBeat: () => {
      console.info('onHeartBeat callback');
    },
    onProgress(progress : fontManager.DataMigrationProgress) => {
      console.info('onProgress callback');
    },
    onResult(result : int) => {
      console.info('onResult callback');
    }
  }
  try {
    let res = await fontManager.dataMigration(callback);
    console.info('dataMigration suc. res is ' + res);
  } catch (error) {
    console.error('dataMigration err.' + error.code);
  }
  return;
}

```

## onResult

```TypeScript
onResult(result : number): void
```

Callback used to return the data migration result.

**Since:** 23

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | number | Yes | Data migration result.<br>**0**: Data migration is successful.<br>**1**: No data migration required.<br>**2**: Failed to obtain the user ID.<br>**3**: Failed to check the directory.<br>**4**: Failed to initialize the cache directory.<br>**5**: Failed to open the source file.<br>**6**: Failed to copy the file.<br>**7**: Failed to rename the file.<br>**8**: Failed to delete the file. |

**Example**

```TypeScript
import { fontManager } from '@kit.LocalizationKit';

dataMigration() {
  const callback: fontManager.DataMigrationCallback = {
    onHeartBeat: () => {
      console.info('onHeartBeat callback');
    },
    onProgress(progress : fontManager.DataMigrationProgress) => {
      console.info('onProgress callback');
    },
    onResult(result : int) => {
      console.info('onResult callback');
    }
  }
  try {
    let res = await fontManager.dataMigration(callback);
    console.info('dataMigration suc. res is ' + res);
  } catch (error) {
    console.error('dataMigration err.' + error.code);
  }
  return;
}

```

