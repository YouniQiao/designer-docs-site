# getApplicationQuickFixInfo

## getApplicationQuickFixInfo

```TypeScript
function getApplicationQuickFixInfo(bundleName: string, callback: AsyncCallback<ApplicationQuickFixInfo>): void
```

获取应用的快速修复信息。使用callback异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.Ability.AbilityRuntime.QuickFix

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |
| callback | AsyncCallback&lt;ApplicationQuickFixInfo> | 是 | 回调函数。返回应用的快速修复信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 18500001 | The bundle does not exist or no patch has been applied. |
| 18500008 | Internal error. |

**示例：**

```TypeScript
import { quickFixManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let bundleName = 'bundleName';
  quickFixManager.getApplicationQuickFixInfo(bundleName, (error, data) => {
    if (error) {
      console.error(`getApplicationQuickFixInfo error: ${error}`);
    } else {
      console.info(`getApplicationQuickFixInfo success: ${data}`);
    }
  });
} catch (paramError) {
  console.error(`error: ${(paramError as BusinessError).code}, ${(paramError as BusinessError).message}`);
}

```

## getApplicationQuickFixInfo

```TypeScript
function getApplicationQuickFixInfo(bundleName: string): Promise<ApplicationQuickFixInfo>
```

获取应用的快速修复信息。使用Promise异步回调。

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_BUNDLE_INFO_PRIVILEGED

**系统能力：** SystemCapability.Ability.AbilityRuntime.QuickFix

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | 应用Bundle名称。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;ApplicationQuickFixInfo> | Promise对象。返回应用的快速修复信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 18500001 | The bundle does not exist or no patch has been applied. |
| 18500008 | Internal error. |

**示例：**

```TypeScript
import { quickFixManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let bundleName = 'bundleName';
  quickFixManager.getApplicationQuickFixInfo(bundleName).then((data) => {
    console.info(`getApplicationQuickFixInfo success: ${data}`);
  }).catch((error: BusinessError) => {
    console.error(`getApplicationQuickFixInfo err: ${error}`);
  });
} catch (paramError) {
  console.error(`error: ${(paramError as BusinessError).code}, ${(paramError as BusinessError).message}`);
}

```

