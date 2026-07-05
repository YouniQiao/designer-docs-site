# DiscoveryService

Defines a DiscoveryService object for discovering mDNS services of the specified type.

**起始版本：** 11

**系统能力：** SystemCapability.Communication.NetManager.MDNS

## 导入模块

```TypeScript
import { mdns } from '@kit.NetworkKit';
```

## off('discoveryStart')

```TypeScript
off(type: 'discoveryStart', callback?: Callback<DiscoveryEventInfo>): void
```

Cancels listening for discoveryStart events of mDNS services.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'discoveryStart' | 是 | Indicates Event name. |
| callback | Callback&lt;DiscoveryEventInfo> | 否 | the callback used to return the result. |

**示例：**

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 参考mdns.createDiscoveryService。
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('discoveryStart', (data: mdns.DiscoveryEventInfo) => {
  console.info(JSON.stringify(data));
});

discoveryService.stopSearchingMDNS();

discoveryService.off('discoveryStart', (data: mdns.DiscoveryEventInfo) => {
  console.info(JSON.stringify(data));
});

```

## off('discoveryStop')

```TypeScript
off(type: 'discoveryStop', callback?: Callback<DiscoveryEventInfo>): void
```

Cancels listening for discoveryStop events of mDNS services.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'discoveryStop' | 是 | Indicates Event name. |
| callback | Callback&lt;DiscoveryEventInfo> | 否 | the callback used to return the result. |

## off('serviceFound')

```TypeScript
off(type: 'serviceFound', callback?: Callback<LocalServiceInfo>): void
```

Cancels listening for serviceFound events of mDNS services.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'serviceFound' | 是 | Indicates Event name. |
| callback | Callback&lt;LocalServiceInfo> | 否 | the callback used to return the result. |

**示例：**

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 参考mdns.createDiscoveryService。
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('serviceFound', (data: mdns.LocalServiceInfo) => {
  console.info('serviceFound', JSON.stringify(data));
  mdns.resolveLocalService(context, data, (error: BusinessError, resolveData: mdns.LocalServiceInfo) =>  {
    console.info('serviceFound', JSON.stringify(resolveData));
  });
});

discoveryService.stopSearchingMDNS();

discoveryService.off('serviceFound', (data: mdns.LocalServiceInfo) => {
  console.info(JSON.stringify(data));
});

```

## off('serviceLost')

```TypeScript
off(type: 'serviceLost', callback?: Callback<LocalServiceInfo>): void
```

Cancels listening for serviceLost events of mDNS services.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'serviceLost' | 是 | Indicates Event name. |
| callback | Callback&lt;LocalServiceInfo> | 否 | the callback used to return the result. |

**示例：**

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 参考mdns.createDiscoveryService。
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('serviceLost', (data: mdns.LocalServiceInfo) => {
  console.info(JSON.stringify(data));
});

discoveryService.stopSearchingMDNS();

discoveryService.off('serviceLost', (data: mdns.LocalServiceInfo) => {
  console.info(JSON.stringify(data));
});

```

## on('discoveryStart')

```TypeScript
on(type: 'discoveryStart', callback: Callback<DiscoveryEventInfo>): void
```

Enables listening for discoveryStart events of mDNS services.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'discoveryStart' | 是 | Indicates Event name. |
| callback | Callback&lt;DiscoveryEventInfo> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 参考mdns.createDiscoveryService。
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('discoveryStart', (data: mdns.DiscoveryEventInfo) => {
  console.info(JSON.stringify(data));
});

discoveryService.stopSearchingMDNS();

```

## on('discoveryStop')

```TypeScript
on(type: 'discoveryStop', callback: Callback<DiscoveryEventInfo>): void
```

Enables listening for discoveryStop events of mDNS services.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'discoveryStop' | 是 | Indicates Event name. |
| callback | Callback&lt;DiscoveryEventInfo> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 参考mdns.createDiscoveryService。
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('discoveryStop', (data: mdns.DiscoveryEventInfo) => {
  console.info(JSON.stringify(data));
});

discoveryService.stopSearchingMDNS();

```

## on('serviceFound')

```TypeScript
on(type: 'serviceFound', callback: Callback<LocalServiceInfo>): void
```

Enables listening for serviceFound events of mDNS services.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'serviceFound' | 是 | Indicates Event name. |
| callback | Callback&lt;LocalServiceInfo> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 参考mdns.createDiscoveryService。
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('serviceFound', (data: mdns.LocalServiceInfo) => {
  console.info('serviceFound', JSON.stringify(data));
  mdns.resolveLocalService(context, data, (error: BusinessError, resolveData: mdns.LocalServiceInfo) =>  {
    console.info('serviceFound', JSON.stringify(resolveData));
  });
});

discoveryService.stopSearchingMDNS();

```

## on('serviceLost')

```TypeScript
on(type: 'serviceLost', callback: Callback<LocalServiceInfo>): void
```

Enables listening for serviceLost events of mDNS services.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'serviceLost' | 是 | Indicates Event name. |
| callback | Callback&lt;LocalServiceInfo> | 是 | the callback used to return the result. |

**示例：**

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 参考mdns.createDiscoveryService。
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

discoveryService.on('serviceLost', (data: mdns.LocalServiceInfo) => {
  console.info(JSON.stringify(data));
});

discoveryService.stopSearchingMDNS();

```

## startSearchingMDNS

```TypeScript
startSearchingMDNS(): void
```

Starts searching for mDNS services on the LAN.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

**示例：**

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 获取context。
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.startSearchingMDNS();

```

## stopSearchingMDNS

```TypeScript
stopSearchingMDNS(): void
```

Stops searching for mDNS services on the LAN.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Communication.NetManager.MDNS

**示例：**

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// 获取context。
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;
let serviceType = "_print._tcp";
let discoveryService = mdns.createDiscoveryService(context, serviceType);
discoveryService.stopSearchingMDNS();

```

