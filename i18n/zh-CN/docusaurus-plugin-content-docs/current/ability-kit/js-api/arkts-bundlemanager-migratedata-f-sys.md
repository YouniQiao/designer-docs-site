# migrateData

## migrateData

```TypeScript
function migrateData(sourcePaths: Array<string>, destinationPath: string): Promise<void>
```

拷贝文件，将文件从源路径拷贝到目标路径。使用Promise异步回调。

**起始版本：** 18

**需要权限：** 

 ohos.permission.MIGRATE_DATA

**系统能力：** SystemCapability.BundleManager.BundleFramework.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sourcePaths | Array&lt;string> | 是 | 需要迁移的源路径数组，支持传入如/example1/test.txt的单文件路径，或/example2/test的目录路径。 |
| destinationPath | string | 是 | 目标路径，仅支持传入一个目录路径，例如：/example2/test。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 17700080 | The source paths are invalid. |
| 17700081 | The destination path is invalid. |
| 17700082 | User authentication failed. |
| 17700083 | Waiting for user authentication timeout. |
| 17700084 | There are inaccessible path in the source paths. |
| 17700085 | The destination path cannot be accessed. |
| 17700086 | System error occurred during copy execution. |

**示例：**

```TypeScript
import { bundleManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  // 开发者需将source1、source2、dest内容更新为实际文件路径或目录路径。
  let source1: string = "/data/app/el2/100/base/com.example.myapplication/";
  let source2: string = "/data/app/el2/101/base/com.example.myapplication/log.txt";
  let dest: string = "/data/local/tmp";
  let sourcePaths: Array<string> = [source1, source2];

  bundleManager.migrateData(sourcePaths, dest)
    .then(() => {
      hilog.info(0x0000, 'testTag', 'migrateData succeed');
    })
    .catch((err: BusinessError) => {
      hilog.error(0x0000, 'testTag', 'migrateData err: %{public}s', JSON.stringify(err));
    })
} catch (err) {
  hilog.error(0x0000, 'testTag', 'migrateData call err: %{public}s', JSON.stringify(err));
}

```

