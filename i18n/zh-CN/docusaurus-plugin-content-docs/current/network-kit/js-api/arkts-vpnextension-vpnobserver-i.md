# VpnObserver

Defines a VPN observer.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Communication.NetManager.Vpn

## 导入模块

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';
```

## offAuthorizationResult

```TypeScript
offAuthorizationResult(callback?: Callback<boolean>): void
```

Unregisters the listener for user authorization results.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 否 |  |

**示例：**

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';

let vpnObserver: vpnExtension.VpnObserver = vpnExtension.createVpnObserver();

let callback = (result: boolean) => {
  console.info('Authorization result: ' + result);
};
// 注册监听器
vpnObserver.onAuthorizationResult(callback);

// 取消注册指定监听器
vpnObserver.offAuthorizationResult(callback);

// 取消注册已注册的监听器
vpnObserver.offAuthorizationResult();

```

## onAuthorizationResult

```TypeScript
onAuthorizationResult(callback: Callback<boolean>): void
```

Registers a listener for user authorization results. The authorization results are notified after startVpnExtensionAbility is invoked. Only the results of the current VPN are received.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Vpn

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { vpnExtension } from '@kit.NetworkKit';

let vpnObserver: vpnExtension.VpnObserver = vpnExtension.createVpnObserver();
vpnObserver.onAuthorizationResult((result: boolean) => {
  if (result) {
    console.info('VPN authorization succeeded');
  } else {
    console.error('VPN authorization failed');
  }
});

```

