# startVibration

## startVibration

```TypeScript
function startVibration(effect: VibrateEffect, attribute: VibrateAttribute, callback: AsyncCallback<void>): void
```

Starts vibration based on a specified effect and attribute. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.VIBRATE

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| effect | VibrateEffect | 是 | Vibration effect. The following options are supported: 1.  [VibratePreset]vibrator.VibratePreset: triggers vibration according to preset vibration effects. This  mode is suitable for short vibration scenarios in interactive feedback (such as tapping, long-pressing, sliding  , dragging, etc.). This API is recommended to maintain consistency with the system's overall vibration feedback  experience. 2. [VibrateFromFile]vibrator.VibrateFromFile: triggers vibration according to custom  vibration configuration file. This mode is suitable for interactive feedback in complex scenarios requiring  precise vibration patterns (such as realistic effects triggered by emoji packs, or feedback for in-game actions  /mechanics). 3. [VibrateTime]vibrator.VibrateTime: triggers vibration of the specified duration,  providing basic control over the start and stop of vibration. This mode does not support customization of  vibration intensity, frequency, or other parameters. As a result, the vibration adjustment is relatively coarse  and not suitable for delivering a refined experience. 4.  [VibrateFromPattern18+]vibrator.VibrateFromPattern: starts vibration according to a custom  vibration pattern. The usage scenario is the same as VibrateFromFile. VibrateFromFile utilizes  predefined effects in a custom configuration file, passing specific vibration events to the API via file  descriptors. By contrast, VibrateFromPattern enables more flexible vibration event combinations, delivering  them to the API as a vibration event array. |
| attribute | VibrateAttribute | 是 | Vibration attribute. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the operation result. If the operation is  successful, err is undefined; otherwise, err is an error object, which contains the error code and  error information. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported |
| 14600101 | Device operation failed |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  // 查询是否支持'haptic.notice.success'
  vibrator.isSupportEffect('haptic.notice.success', (err: BusinessError, state: boolean) => {
    if (err) {
      console.error(`Failed to query effect. Code: ${err.code}, message: ${err.message}`);
      return;
    }
    console.info('Succeed in querying effect');
    if (state) {
      try {
        vibrator.startVibration({
          type: 'preset',
          effectId: 'haptic.notice.success',
          count: 1,
        }, {
          usage: 'notification' // 根据实际选择类型归属不同的开关管控
        }, (error: BusinessError) => {
          if (error) {
            console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);
       return;
          }
          console.info('Succeed in starting vibration');

        });
      } catch (err) {
        let e: BusinessError = err as BusinessError;
    console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
      }
    }
  })
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}


import { vibrator } from '@kit.SensorServiceKit';
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

const fileName: string = 'xxx.json';

@Entry
@Component
struct Index {
  uiContext = this.getUIContext();

  build() {
    Row() {
      Column() {
        Button('alarm-file')
          .onClick(() => {
            let rawFd: resourceManager.RawFileDescriptor | undefined = this.uiContext.getHostContext()?.resourceManager.getRawFdSync(fileName);
            if (rawFd != undefined) {
              try {
                vibrator.startVibration({
                  type: "file",
                  hapticFd: { fd: rawFd.fd, offset: rawFd.offset, length: rawFd.length }
                }, {
                  id: 0,
                  usage: 'alarm' // 根据实际选择类型归属不同的开关管控
                }, (error: BusinessError) => {
                  if (error) {
                    console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);
                    return;
                  }
                  console.info('Succeed in starting vibration');
                });
              } catch (err) {
                let e: BusinessError = err as BusinessError;
                console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
              } finally {
                vibrator.stopVibration();
                this.uiContext.getHostContext()?.resourceManager.closeRawFdSync(fileName);
              }
            }
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}


import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  vibrator.startVibration({
    type: 'time',
    duration: 1000,
  }, {
    id: 0,
    usage: 'alarm' // 根据实际选择类型归属不同的开关管控
  }, (error: BusinessError) => {
    if (error) {
      console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);
      return;
    }
    console.info('Succeed in starting vibration');
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

## startVibration

```TypeScript
function startVibration(effect: VibrateEffect, attribute: VibrateAttribute): Promise<void>
```

Starts vibration based on a specified effect and attribute. This API uses a promise to return the result.

**起始版本：** 9

**需要权限：** 

 ohos.permission.VIBRATE

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Sensors.MiscDevice

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| effect | VibrateEffect | 是 | Vibration effect. The following options are supported: 1.  [VibrateTime]vibrator.VibrateTime: triggers vibration according to preset vibration effects. This mode  is suitable for short vibration scenarios in interactive feedback (such as tapping, long-pressing, sliding,  dragging, etc.). This API is recommended to maintain consistency with the system's overall vibration feedback  experience. 2. [VibratePreset]vibrator.VibratePreset: triggers vibration according to custom  vibration configuration file. This mode is suitable for interactive feedback in complex scenarios requiring  precise vibration patterns (such as realistic effects triggered by emoji packs, or feedback for in-game actions  /mechanics). 3. [VibrateFromFile]vibrator.VibrateFromFile: triggers vibration of the specified  duration, providing basic control over the start and stop of vibration. This mode does not support  customization of vibration intensity, frequency, or other parameters. As a result, the vibration adjustment is  relatively coarse and not suitable for delivering a refined experience. 4.  [VibrateFromPattern18+]vibrator.VibrateFromPattern: starts vibration according to a custom  vibration pattern. The usage scenario is the same as VibrateFromFile. VibrateFromFile utilizes  predefined effects in a custom configuration file, passing specific vibration events to the API via file  descriptors. By contrast, VibrateFromPattern enables more flexible vibration event combinations, delivering  them to the API as a vibration event array. |
| attribute | VibrateAttribute | 是 | Vibration attribute. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 14600101 | Device operation failed. |

**示例：**

```TypeScript
import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 使用try catch对可能出现的异常进行捕获
try {
  // 查询是否支持'haptic.notice.success'
  vibrator.isSupportEffect('haptic.notice.success').then((state: boolean) => {
    console.info('Succeed in querying effect');
    if (state) {
      try {
        vibrator.startVibration({
          type: 'preset',
          effectId: 'haptic.notice.success',
          count: 1,
        }, {
          usage: 'notification' // 根据实际选择类型归属不同的开关管控
        }).then(() => {
          console.info('Succeed in starting vibration');
        }).catch((error: BusinessError) => {
          console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);
        });
      } catch (err) {
        let e: BusinessError = err as BusinessError;
        console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
      }
    }
  }, (error: BusinessError) => {
    console.error(`Failed to query effect. Code: ${error.code}, message: ${error.message}`);
  })
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}


import { vibrator } from '@kit.SensorServiceKit';
import { resourceManager } from '@kit.LocalizationKit';
import { BusinessError } from '@kit.BasicServicesKit';

const fileName: string = 'xxx.json';

@Entry
@Component
struct Index {
  uiContext = this.getUIContext();

  build() {
    Row() {
      Column() {
        Button('alarm-file')
          .onClick(() => {
            let rawFd: resourceManager.RawFileDescriptor | undefined = this.uiContext.getHostContext()?.resourceManager.getRawFdSync(fileName);
            if (rawFd != undefined) {
              try {
                vibrator.startVibration({
                  type: "file",
                  hapticFd: { fd: rawFd.fd, offset: rawFd.offset, length: rawFd.length }
                }, {
                  id: 0,
                  usage: 'alarm' // 根据实际选择类型归属不同的开关管控
                }, (error: BusinessError) => {
                  if (error) {
                    console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);
                    return;
                  }
                  console.info('Succeed in starting vibration');
                });
              } catch (err) {
                let e: BusinessError = err as BusinessError;
                console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
              } finally {
                vibrator.stopVibration();
                this.uiContext.getHostContext()?.resourceManager.closeRawFdSync(fileName);
              }
            }
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}


import { vibrator } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  vibrator.startVibration({
    type: 'time',
    duration: 1000
  }, {
    id: 0,
    usage: 'alarm' // 根据实际选择类型归属不同的开关管控
  }).then(() => {
    console.info('Succeed in starting vibration');
  }, (error: BusinessError) => {
    console.error(`Failed to start vibration. Code: ${error.code}, message: ${error.message}`);
  });
} catch (err) {
  let e: BusinessError = err as BusinessError;
  console.error(`An unexpected error occurred. Code: ${e.code}, message: ${e.message}`);
}

```

