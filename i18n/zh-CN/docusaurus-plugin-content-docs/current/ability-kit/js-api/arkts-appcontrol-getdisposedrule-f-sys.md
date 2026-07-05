# getDisposedRule

## getDisposedRule

```TypeScript
function getDisposedRule(appId: string, appIndex?: int): DisposedRule
```

获取指定应用或分身应用已设置的拦截规则。

**起始版本：** 11

**需要权限：** 

 ohos.permission.MANAGE_DISPOSED_APP_STATUS or ohos.permission.GET_DISPOSED_APP_STATUS

**系统能力：** SystemCapability.BundleManager.BundleFramework.AppControl

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appId | string | 是 | 要获取拦截规则的应用的appId或appIdentifier。使用appId设置的拦截规则只能通过appId获取，使用appIdentifier设置的同理。  说明： appId是应用的唯一标识，由应用Bundle名称和签名信息决定，获取方法参见  [获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。  [appIdentifier]./bundleManager/BundleInfo:SignatureInfo也是应用的唯一标识，详情信息可参考  [什么是appIdentifier](docroot://quick-start/common-problem-of-application.md#什么是appidentifier)，获取方法参见  [获取应用的appIdentifier](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appidentifier)。 |
| appIndex | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DisposedRule | 对应用的拦截规则。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700005 | The specified app ID is invalid. |
| 17700061 | AppIndex is not in the valid range. [since 12] |

**示例：**

```TypeScript
import { appControl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let appId = "com.example.myapplication_xxxxx";

try {
  let data = appControl.getDisposedRule(appId, 1);
  console.info('getDisposedRule successfully. Data: ' + JSON.stringify(data));
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('getDisposedRule failed ' + message);
}

```

