# OsAccountSwitchEventData

表示系统账号前后台开始切换和结束切换事件的数据结构。

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { osAccount } from '@kit.BasicServicesKit';
```

## fromAccountId

```TypeScript
fromAccountId: int
```

切换来源系统账号ID。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## toAccountId

```TypeScript
toAccountId: int
```

切换目标系统账号ID。

**Type:** int

**Since:** 12

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

## displayId

```TypeScript
displayId?: long
```

切换事件发生的逻辑屏ID，默认值为0。

**Type:** long

**Since:** 23

**System capability:** SystemCapability.Account.OsAccount

**System API:** This is a system API.

