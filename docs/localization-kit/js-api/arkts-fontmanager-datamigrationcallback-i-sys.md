# DataMigrationCallback

数据迁移时使用的回调类型。

**Since:** 23

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { fontManager } from '@kit.LocalizationKit';
```

## onHeartBeat

```TypeScript
onHeartBeat(): void
```

回调函数，用于返回心跳回调。

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

回调函数，用于返回数据迁移进度。

**Since:** 23

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| progress | DataMigrationProgress | Yes | 数据迁移进度信息。 |

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
onResult(result : int): void
```

回调函数，用于返回数据迁移的结果。

**Since:** 23

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | int | Yes | 数据迁移结果。  0: 数据迁移成功。  1: 无需进行数据迁移。  2: 获取用户ID失败。  3: 检查目录失败。  4: 初始化缓存目录失败。  5: 打开源文件失败。  6: 拷贝失败。  7: 文件重命名失败。  8: 文件删除失败。 |

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

