# getOAID

## getOAID

```TypeScript
function getOAID(callback: AsyncCallback<string>): void
```

获取开放匿名设备标识符（OAID）。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.APP_TRACKING_CONSENT

**System capability:** SystemCapability.Advertising.OAID

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;string> | Yes | 回调函数，返回开放匿名设备标识符（OAID）。  1.如应用已配置ohos.permission.APP_TRACKING_CONSENT权限，且“跨应用关联访问权限”为“允许”，则返回OAID。  2.如应用已配置ohos.permission.APP_TRACKING_CONSENT权限，且“跨应用关联访问权限”为“禁止”，则返回  00000000-0000-0000-0000-000000000000。  3.如应用未配置ohos.permission.APP_TRACKING_CONSENT权限，则返回00000000-0000-0000-0000-000000000000。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17300001 | System internal error. |

**Example**

```TypeScript
import { identifier } from '@kit.AdsKit';
import { BusinessError } from '@kit.BasicServicesKit';

identifier.getOAID((err: BusinessError, data: string) => {
  if (err.code) {
    return;
  }
  const oaid: string = data;
});

```

## getOAID

```TypeScript
function getOAID(): Promise<string>
```

获取开放匿名设备标识符（OAID）。使用Promise异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.APP_TRACKING_CONSENT

**System capability:** SystemCapability.Advertising.OAID

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回开放匿名设备标识符（OAID）。  1.如应用已配置ohos.permission.APP_TRACKING_CONSENT权限，且跨应用关联访问权限为“允许”，则返回OAID。  2.如应用已配置ohos.permission.APP_TRACKING_CONSENT权限，且跨应用关联访问权限为“禁止”，则返回  00000000-0000-0000-0000-000000000000。  3.如应用未配置ohos.permission.APP_TRACKING_CONSENT权限，则返回00000000-0000-0000-0000-000000000000。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17300001 | System internal error. |

**Example**

```TypeScript
import { identifier } from '@kit.AdsKit';

identifier.getOAID().then((data: string) => {
  const oaid: string = data;
});

```

