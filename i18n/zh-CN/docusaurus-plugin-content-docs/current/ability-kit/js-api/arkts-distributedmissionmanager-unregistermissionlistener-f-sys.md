# unRegisterMissionListener

## unRegisterMissionListener

```TypeScript
function unRegisterMissionListener(parameter: MissionDeviceInfo, callback: AsyncCallback<void>): void
```

Unregisters a mission status listener. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_MISSIONS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| parameter | MissionDeviceInfo | 是 | Information about the device to listen for. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the listener is unregistered, err  is undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

```TypeScript
import { distributedMissionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  distributedMissionManager.unRegisterMissionListener(
    { deviceId: "" },
    (error: BusinessError) => {
      if (error) {
          console.error('unRegisterMissionListener failed, cause: ' + JSON.stringify(error));
          return;
      }
      console.info('unRegisterMissionListener finished');
  })
} catch (error) {
    console.error('unRegisterMissionListener failed, cause: ' + JSON.stringify(error));
}

```

## unRegisterMissionListener

```TypeScript
function unRegisterMissionListener(parameter: MissionDeviceInfo): Promise<void>
```

Unregisters a mission status listener. This API uses a promise to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_MISSIONS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| parameter | MissionDeviceInfo | 是 | Information about the device to listen for. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**示例：**

```TypeScript
import { distributedMissionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  distributedMissionManager.unRegisterMissionListener({deviceId: ""}).then(() => {
    console.info('unRegisterMissionListener finished successfully');
  }).catch((error: BusinessError) => {
      console.error('unRegisterMissionListener failed, cause: ' + JSON.stringify(error));
  })
} catch (error) {
    console.error('unRegisterMissionListener failed, cause: ' + JSON.stringify(error));
}

```

