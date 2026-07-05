# OnReleaseCallback

注册通用组件服务端Stub（桩）断开监听通知的回调函数类型。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## Modules to Import

```TypeScript
import { Callee,Caller,OnReleaseCallback,OnRemoteStateChangeCallback,CalleeCallback } from '@kit.AbilityKit';
```

## constructor

```TypeScript
(msg: string): void
```

定义OnRelease的回调函数。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| msg | string | Yes | 用于传递释放消息。 |

