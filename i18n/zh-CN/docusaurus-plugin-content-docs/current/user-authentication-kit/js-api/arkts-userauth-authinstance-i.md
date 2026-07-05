# AuthInstance

执行用户认证的对象。

**起始版本：** 9

**废弃版本：** 10

**替代接口：** userAuth.UserAuthInstance

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## 导入模块

```TypeScript
import { userAuth } from '@kit.UserAuthenticationKit';
```

## cancel

```TypeScript
cancel: () => void
```

取消认证。 > **说明：** > > 使用获取到的[AuthInstance]userAuth.AuthInstance对象调用该接口进行取消认证，此[AuthInstance]userAuth.AuthInstance需要是正 > 在进行认证的对象。

**类型：** () => void

**起始版本：** 9

**废弃版本：** 10

**替代接口：** userAuth.UserAuthInstance.cancel

**需要权限：** 

 ohos.permission.ACCESS_BIOMETRIC

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## start

```TypeScript
start: () => void
```

开始认证。 > **说明：** > > 使用获取到的[AuthInstance]userAuth.AuthInstance对象调用该接口进行认证。

**类型：** () => void

**起始版本：** 9

**废弃版本：** 10

**替代接口：** userAuth.UserAuthInstance.start

**需要权限：** 

 ohos.permission.ACCESS_BIOMETRIC

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## off

```TypeScript
off: (name: AuthEventKey) => void
```

取消订阅特定类型的认证事件。 - **name**: 表示认证事件类型，取值为"result"时，取消订阅认证结果；取值为"tip"时，取消订阅认证过程中的提示信息，类型为 [AuthEventKey]userAuth.AuthEventKey。 > **说明：** > > 需要使用已经成功订阅事件的[AuthInstance]userAuth.AuthInstance对象调用该接口进行取消订阅。

**类型：** (name: AuthEventKey) => void

**起始版本：** 9

**废弃版本：** 10

**替代接口：** userAuth.UserAuthInstance.off

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

## on

```TypeScript
on: (name: AuthEventKey, callback: AuthEvent) => void
```

订阅指定类型的用户认证事件。 - **name**: 表示认证事件类型，取值为"result"时，回调函数返回认证结果；取值为"tip"时，回调函数返回认证过程中的提示信息，类型为 [AuthEventKey]userAuth.AuthEventKey。 - **callback**: 认证接口的回调函数，用于返回认证结果或认证过程中的提示信息，类型为[AuthEvent]userAuth.AuthEvent。 > **说明：** > > 使用获取到的[AuthInstance]userAuth.AuthInstance对象调用该接口进行订阅。

**类型：** (name: AuthEventKey, callback: AuthEvent) => void

**起始版本：** 9

**废弃版本：** 10

**替代接口：** userAuth.UserAuthInstance.on

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

