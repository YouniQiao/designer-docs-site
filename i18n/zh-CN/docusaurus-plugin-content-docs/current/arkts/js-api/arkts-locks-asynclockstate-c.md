# AsyncLockState

AsyncLock实例上所有锁操作的信息。

**起始版本：** 12

**系统能力：** SystemCapability.Utils.Lang

## 导入模块

```TypeScript
import { ArkTSUtils } from '@kit.ArkTS';
```

## held

```TypeScript
held: AsyncLockInfo[]
```

持有的锁信息。

**类型：** AsyncLockInfo[]

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

## pending

```TypeScript
pending: AsyncLockInfo[]
```

等待中的锁信息。

**类型：** AsyncLockInfo[]

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Utils.Lang

