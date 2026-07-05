# continueMission

## continueMission

```TypeScript
function continueMission(parameter: ContinueDeviceInfo, options: ContinueCallback, callback: AsyncCallback<void>): void
```

Continues a mission on a remote device, with the mission ID specified. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| parameter | ContinueDeviceInfo | 是 | Parameters required for mission continuation. |
| options | ContinueCallback | 是 | Callback invoked when the mission continuation is complete. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the mission is continued, err is  undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16300501 | The system ability work abnormally. |
| 16300502 | Failed to get the missionInfo of the specified missionId. |
| 16300503 | The application is not installed on the remote end and installation-free isnot  supported. |
| 16300504 | The application is not installed on the remote end but installation-free is  supported, try again with freeInstall flag. |
| 16300505 | The operation device must be the device where the application to be continuedis  located or the target device to be continued. |
| 16300506 | The local continuation task is already in progress. |

**示例：**

```TypeScript
import { distributedMissionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 实现回调函数
function onContinueDone(resultCode: number): void {
  console.info('onContinueDone resultCode: ' + JSON.stringify(resultCode));
};
try {
  // 调用continueMission接口
  distributedMissionManager.continueMission(
    {
      srcDeviceId: "",
      dstDeviceId: "",
      missionId: 1,
      wantParam: {"key": "value"}
    },
    { onContinueDone: onContinueDone },
    (error: BusinessError) => {
      if (error) {
        console.error('continueMission failed, cause: ' + JSON.stringify(error));
        return;
      }
      console.info('continueMission finished');
  })
} catch (error) {
  console.error('continueMission failed, cause: ' + JSON.stringify(error));
}

```

## continueMission

```TypeScript
function continueMission(parameter: ContinueDeviceInfo, options: ContinueCallback): Promise<void>
```

Continues a mission on a remote device, with the mission ID specified. This API uses a promise to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| parameter | ContinueDeviceInfo | 是 | Parameters required for mission continuation. |
| options | ContinueCallback | 是 | Callback invoked when the mission continuation is complete. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16300501 | The system ability work abnormally. |
| 16300502 | Failed to get the missionInfo of the specified missionId. |
| 16300503 | The application is not installed on the remote end and installation-free isnot  supported. |
| 16300504 | The application is not installed on the remote end but installation-free is  supported, try again with freeInstall flag. |
| 16300505 | The operation device must be the device where the application to be continuedis  located or the target device to be continued. |
| 16300506 | The local continuation task is already in progress. |

**示例：**

```TypeScript
import { distributedMissionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 实现回调函数
function onContinueDone(resultCode: number): void {
  console.info('onContinueDone resultCode: ' + JSON.stringify(resultCode));
};
try {
  // 调用continueMission接口
  distributedMissionManager.continueMission(
    {
      srcDeviceId: "",
      dstDeviceId: "",
      missionId: 1,
      wantParam: {"key": "value"}
    },
    { onContinueDone: onContinueDone }).then(() => {
      console.info('continueMission finished successfully');
    }).catch((error: BusinessError) => {
    console.error('continueMission failed, cause: ' + JSON.stringify(error));
  })
} catch (error) {
  console.error('continueMission failed, cause: ' + JSON.stringify(error));
}

```

## continueMission

```TypeScript
function continueMission(parameter: ContinueMissionInfo, callback: AsyncCallback<void>): void
```

Continues a mission on a remote device, with the bundle name specified. This API uses an asynchronous callback to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| parameter | ContinueMissionInfo | 是 | Parameters required for mission continuation. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. If the mission is continued, err is  undefined; otherwise, err is an error object. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16300501 | The system ability work abnormally. |
| 16300503 | The application is not installed on the remote end and installation-free isnot  supported. |
| 16300504 | The application is not installed on the remote end but installation-free is  supported, try again with freeInstall flag. |
| 16300505 | The operation device must be the device where the application to be continuedis  located or the target device to be continued. |
| 16300506 | The local continuation task is already in progress. |
| 16300507 | Failed to get the missionInfo of the specified bundle name. |

**示例：**

```TypeScript
import { distributedMissionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  distributedMissionManager.continueMission(
    {
      srcDeviceId: "",
      dstDeviceId: "",
      bundleName: "ohos.test.continueapp",
      wantParam: {"key": "value"}
    },
    (error: BusinessError) => {
      if (error) {
        console.error('continueMission failed, cause: ' + JSON.stringify(error));
        return;
      }
      console.info('continueMission finished');
  })
} catch (error) {
  console.error('continueMission failed, cause: ' + JSON.stringify(error));
}

```

## continueMission

```TypeScript
function continueMission(parameter: ContinueMissionInfo): Promise<void>
```

Continues a mission on a remote device, with the bundle name specified. This API uses a promise to return the result.

**起始版本：** 10

**需要权限：** 

 ohos.permission.MANAGE_MISSIONS and ohos.permission.DISTRIBUTED_DATASYNC

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.Mission

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| parameter | ContinueMissionInfo | 是 | Parameters required for mission continuation. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16300501 | The system ability work abnormally. |
| 16300503 | The application is not installed on the remote end and installation-free isnot  supported. |
| 16300504 | The application is not installed on the remote end but installation-free is  supported, try again with freeInstall flag. |
| 16300505 | The operation device must be the device where the application to be continuedis  located or the target device to be continued. |
| 16300506 | The local continuation task is already in progress. |
| 16300507 | Failed to get the missionInfo of the specified bundle name. |

**示例：**

```TypeScript
import { distributedMissionManager } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
    distributedMissionManager.continueMission(
      {
        srcDeviceId: "",
        dstDeviceId: "",
        bundleName: "ohos.test.continueapp",
        wantParam: {"key": "value"}
      }
    ).then(() => {
        console.info('continueMission finished successfully');
    }).catch((error: BusinessError) => {
        console.error('continueMission failed, cause: ' + JSON.stringify(error));
    })
} catch (error) {
    console.error('continueMission failed, cause: ' + JSON.stringify(error));
}

```

