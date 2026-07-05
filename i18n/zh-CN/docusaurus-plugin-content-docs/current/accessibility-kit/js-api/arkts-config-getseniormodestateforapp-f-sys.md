# getSeniorModeStateForApp

## getSeniorModeStateForApp

```TypeScript
function getSeniorModeStateForApp(bundleName: string, appIndex?: int): Promise<boolean>
```

Get the senior mode state for app.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.READ_ACCESSIBILITY_CONFIG

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Indicates the bundle name of the application to be queried  The bundle name must follow the reverse domain naming convention (e.g., "com.example.app"). |
| appIndex | int | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if senior mode is enabled; returns {@code false} otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |
| 202 | Permission verification failed.  A non-system application calls a system API. |
| 9300000 | System abnormality. |
| 9300008 | The appIndex is invalid. Possible causes:  1.The appIndex is out of the valid range.  2.The application corresponding to the appIndex does not exist. |

**示例：**

```TypeScript
import { config } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

config.getSeniorModeStateForApp("com.example.myapplication", 0).then((data: boolean) => {
  console.info(`Succeeded in getting seniorModeState for app, data: ${data}`);
}).catch((err: BusinessError) => {
  console.error(`failed to call getSeniorModeStateForApp, Code is ${err.code}, message is ${err.message}`);
});

```

