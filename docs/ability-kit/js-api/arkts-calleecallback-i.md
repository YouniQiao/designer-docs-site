# CalleeCallback

通用组件服务端注册消息通知的回调函数类型。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

## Modules to Import

```TypeScript
import { Callee,Caller,OnReleaseCallback,OnRemoteStateChangeCallback,CalleeCallback } from '@kit.AbilityKit';
```

## constructor

```TypeScript
(indata: rpc.MessageSequence): rpc.Parcelable
```

定义Callee的回调函数。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| indata | rpc.MessageSequence | Yes | 发送需传递的数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| rpc.Parcelable | 返回的数据对象。 |

