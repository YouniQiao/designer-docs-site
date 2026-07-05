# getUninstallDisposedRule

## getUninstallDisposedRule

```TypeScript
function getUninstallDisposedRule(appIdentifier: string, appIndex?: int): UninstallDisposedRule
```

获取指定应用或分身应用已设置的优先级最高的卸载处置规则。

**起始版本：** 15

**需要权限：** 

 ohos.permission.GET_DISPOSED_APP_STATUS or ohos.permission.MANAGE_DISPOSED_APP_STATUS

**系统能力：** SystemCapability.BundleManager.BundleFramework.AppControl

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| appIdentifier | string | 是 | 要获取卸载处置规则的应用的appIdentifier。 如果应用没有appIdentifier可使用appId代替。appId是应用的唯一标识，由应用  Bundle名称和签名信息决定，获取方法参见[获取应用的appId](docroot://quick-start/common-problem-of-application.md#如何获取应用信息中的appid)。 |
| appIndex | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| UninstallDisposedRule | 表示应用的卸载处置规则。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied. A non-system application is not allowed to call a system API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700061 | AppIndex is not in the valid range. |
| 17700074 | The specified appIdentifier is invalid. |

**示例：**

```TypeScript
import { appControl } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

let appIdentifier = "com.example.myapplication_xxxxx";

try {
  let data = appControl.getUninstallDisposedRule(appIdentifier, 1);
  console.info('getUninstallDisposedRule successfully. Data: ' + JSON.stringify(data));
} catch (error) {
  let message = (error as BusinessError).message;
  console.error('getUninstallDisposedRule failed ' + message);
}

```

