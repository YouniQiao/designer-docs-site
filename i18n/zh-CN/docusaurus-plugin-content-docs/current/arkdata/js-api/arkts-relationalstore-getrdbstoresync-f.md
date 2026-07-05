# getRdbStoreSync

## getRdbStoreSync

```TypeScript
function getRdbStoreSync(context: Context, config: StoreConfig): RdbStore
```

Obtains a RDB store. You can set parameters of the RDB store as required. This is a synchronous method that blocks the thread until the RDB store is obtained.

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | Context | 是 | Indicates the context of an application or ability. |
| config | StoreConfig | 是 | Indicates the {@link StoreConfig} configuration of the database related to  this RDB store. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| RdbStore | The RDB store {@link RdbStore}. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 14800001 | Invalid args. |
| 14800010 | Invalid database path. |
| 14800011 | The current operation failed because the database is corrupted. |
| 14801001 | The operation is supported in the stage model only. |
| 14801002 | Invalid data group ID. |
| 14800017 | Config changed. |
| 14800020 | The secret key is corrupted or lost. |
| 14800021 | SQLite: Generic error. |
| 14800027 | SQLite: Attempt to write a readonly database. |
| 14800028 | SQLite: Some kind of disk I/O error occurred. |
| 14800029 | SQLite: The database is full. |
| 14800030 | SQLite: Unable to open the database file. |

**示例：**

```TypeScript
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';

let store: relationalStore.RdbStore | undefined = undefined;

class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    const STORE_CONFIG: relationalStore.StoreConfig = {
      name: "RdbTest.db",
      securityLevel: relationalStore.SecurityLevel.S1
    };

    try {
      store = relationalStore.getRdbStoreSync(this.context, STORE_CONFIG);
      console.info('Get RdbStore successfully.');
    } catch (err) {
      console.error(`Get RdbStore failed, code is ${err.code},message is ${err.message}`);
    };
  }
}

```

