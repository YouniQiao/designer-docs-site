# isVectorSupported

## isVectorSupported

```TypeScript
function isVectorSupported(): boolean
```

Checks whether the system supports vector stores.

**起始版本：** 18

**系统能力：** SystemCapability.DistributedDataManager.RelationalStore.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the system supports vector stores; returns false otherwise. |

**示例：**

```TypeScript
import { contextConstant, UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';
import { BusinessError } from '@kit.BasicServicesKit';
import { relationalStore } from '@kit.ArkData';

let store: relationalStore.RdbStore | undefined = undefined;
export default class EntryAbility extends UIAbility {
  async onWindowStageCreate(windowStage: window.WindowStage) {
    let supported = relationalStore.isVectorSupported();
    if (supported) {
      // 支持向量数据库
      console.info("Vector database supported on current platform.");
      const STORE_CONFIG: relationalStore.StoreConfig = {
        name: "VectorTest.db",
        securityLevel: relationalStore.SecurityLevel.S3,
        vector: true
      };
      try {
        const context = this.context.getApplicationContext().createAreaModeContext(contextConstant.AreaMode.EL3);
        const rdbStore = await relationalStore.getRdbStore(context, STORE_CONFIG);
        console.info('Get RdbStore successfully.');
        store = rdbStore;
        // 成功获取到 rdbStore 后执行后续操作
      } catch (error) {
        const err = error as BusinessError;
        console.error(`Get RdbStore failed, code is ${err.code},message is ${err.message}`);
      }
    } else {
      console.info("Vector database not supported on current platform.");
    }
  }
}

```

