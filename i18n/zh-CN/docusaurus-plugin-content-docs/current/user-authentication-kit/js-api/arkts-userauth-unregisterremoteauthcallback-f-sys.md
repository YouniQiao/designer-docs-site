# unregisterRemoteAuthCallback

## unregisterRemoteAuthCallback

```TypeScript
function unregisterRemoteAuthCallback(): void
```

取消注册远程身份验证的回调。

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_USER_AUTH_INTERNAL

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.UserIAM.UserAuth.Core

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. Called by non-system application. |
| 12500002 | General operation error. |

**示例：**

```TypeScript
import userAuth from '@ohos.userIAM.userAuth';

try {
  userAuth.unregisterRemoteAuthCallback();
  console.info('Remote auth callback unregistered successfully');
} catch (error) {
  console.error('Failed to unregister remote auth callback: ' + error.code + ', ' + error.message);
}

```

