# FenceExtensionContext

class of static subscriber extension context.

**Inheritance:** FenceExtensionContextextends: ExtensionContext.

**Since:** 14

**System capability:** SystemCapability.Location.Location.Geofence

## Modules to Import

```TypeScript
import { FenceExtensionContext } from '@kit.LocationKit';
```

## startAbility

```TypeScript
startAbility(want: Want): Promise<void>
```

Starts a new service extension ability. If the target service extension ability is visible, you can start the target service extension ability; If the target service extension ability is invisible, you need to apply for permission:ohos.permission.START_INVISIBLE_ABILITY to start target invisible service extension ability. If the target service extension ability is in cross-device, you need to apply for permission:ohos.permission.DISTRIBUTED_DATASYNC.

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Location.Location.Geofence

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the want info to start. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000019 | No matching ability is found. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |

**Example**

```TypeScript
import { FenceExtensionAbility, geoLocationManager } from '@kit.LocationKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';

export class MyFenceExtensionAbility extends FenceExtensionAbility {
  onFenceStatusChange(transition: geoLocationManager.GeofenceTransition, additions: Record<string, string>): void {
    // Receive the geofence status change event and process the service logic.
    console.info(`on geofence transition,id:${transition.geofenceId},event:${transition.transitionEvent},additions:${JSON.stringify(additions)}`);
    let want: Want = {
      bundleName: "com.example.myapp",
      abilityName: "MyServiceExtensionAbility"
    };
    try {
      this.context.startAbility(want)
        .then(() => {
          // Carry out normal service processing.
          console.info('startAbility succeed');
        })
        .catch((error: BusinessError) => {
          // Process service logic errors.
          console.error('startAbility failed, error.code: ' + JSON.stringify(error.code) +
            ' error.message: ' + JSON.stringify(error.message));
        });
    } catch (paramError) {
      // Process input parameter errors.
      let code = (paramError as BusinessError).code;
      let message = (paramError as BusinessError).message;
      console.error('startAbility failed, error.code: ' + JSON.stringify(code) +
        ' error.message: ' + JSON.stringify(message));
    }
  }
}

```

