# on

## on('touch')

```TypeScript
function on(type: 'touch', receiver: TouchEventReceiver): void
```

监听全局触屏输入事件，使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'touch' | Yes | 输入设备事件类型，取值'touch'。 |
| receiver | TouchEventReceiver | Yes | 回调函数，返回触摸屏输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission denied, non-system app called system api. [since 12] |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';
import { TouchEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Subscribe to Touch Events
            inputMonitor.on('touch', (touchEvent: TouchEvent) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(touchEvent)}.`);
              return false;
            });
          } catch (error) {
            console.error(`Failed to monitor the touch screen event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('mouse')

```TypeScript
function on(type: 'mouse', receiver: Callback<MouseEvent>): void
```

监听全局鼠标事件。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'mouse' | Yes | 输入设备事件类型，取值'mouse'。 |
| receiver | Callback&lt;MouseEvent> | Yes | 回调函数，返回鼠标输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | Permission denied, non-system app called system api. [since 12] |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';
import { MouseEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Subscribe to Mouse Events
            inputMonitor.on('mouse', (mouseEvent: MouseEvent) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(mouseEvent)}.`);
              return false;
            });
          } catch (error) {
            console.error(`Failed to monitor the mouse event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('mouse')

```TypeScript
function on(type: 'mouse', rect: display.Rect[], receiver: Callback<MouseEvent>): void
```

监听鼠标事件，当鼠标移动至指定矩形区域内时，触发回调任务。使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'mouse' | Yes | 输入设备事件类型，取值'mouse'。 |
| rect | display.Rect[] | Yes | 可以触发回调任务的矩形区域，可传入1至2个。 |
| receiver | Callback&lt;MouseEvent> | Yes | 回调函数，返回鼠标输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 202 | SystemAPI permit error. [since 12] |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';
import { MouseEvent } from '@kit.InputKit';
import { display } from '@kit.ArkUI';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          /**
           * Callback triggered when the mouse pointer moves to the specified rectangular area.
           */
          let callback = (mouseEvent : MouseEvent) => {
            this.getUIContext().getPromptAction().showToast({
              message: `Monitor on success: ${JSON.stringify(mouseEvent)}`
            })
            console.info(`Succeeded in monitoring on ${JSON.stringify(mouseEvent)}.`);
            return false;
          };

          /**
           * Rectangular area where a callback is triggered.
           */
          let rect: display.Rect[] = [{
            left: 100,
            top: 100,
            width: 100,
            height: 100
          }, {
            left: 600,
            top: 100,
            width: 100,
            height: 100
          }];

          try {
            // Subscribe to Mouse Events
            inputMonitor.on('mouse', rect, callback);
          } catch (error) {
            console.error(`Failed to monitor the mouse event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('pinch')

```TypeScript
function on(type: 'pinch', receiver: Callback<Pinch>): void
```

监听全局触控板的捏合事件。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pinch' | Yes | 输入设备事件类型，取值'pinch'。 |
| receiver | Callback&lt;Pinch> | Yes | 回调函数，返回捏合输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Subscribe to Pinch Event
            inputMonitor.on('pinch', (pinchEvent) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(pinchEvent)}.`);
              return false;
            });
          } catch (error) {
            console.error(`Failed to monitor the pinch event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('pinch')

```TypeScript
function on(type: 'pinch', fingers: number, receiver: Callback<Pinch>): void
```

监听全局触控板的捏合事件。使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pinch' | Yes | 输入设备事件类型，取值'pinch'。 |
| fingers | number | Yes | 捏合的手指数，取值范围：大于等于2。 |
| receiver | Callback&lt;Pinch> | Yes | 回调函数，返回捏合输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';
import { Pinch } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Number of fingers for pinch gesture monitoring: 2
            inputMonitor.on('pinch', 2, (pinchEvent: Pinch) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(pinchEvent)}.`);
              return false;
            });
          } catch (error) {
            console.error(`Failed to monitor pinch event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('rotate')

```TypeScript
function on(type: 'rotate', fingers: number, receiver: Callback<Rotate>): void
```

监听全局触控板的旋转事件。使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'rotate' | Yes | 输入设备事件类型，取值'rotate'。 |
| fingers | number | Yes | 旋转的手指数，目前支持监听手指数是2。 |
| receiver | Callback&lt;Rotate> | Yes | 回调函数，返回旋转输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';
import { Rotate } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Number of Fingers for Rotation Gesture Monitoring: 2
            inputMonitor.on('rotate', 2, (rotateEvent: Rotate) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(rotateEvent)}.`);
              return false;
            });
          } catch (error) {
            console.error(`Failed to monitor rotate event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('threeFingersSwipe')

```TypeScript
function on(type: 'threeFingersSwipe', receiver: Callback<ThreeFingersSwipe>): void
```

监听全局触控板的三指滑动事件。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'threeFingersSwipe' | Yes | 输入设备事件类型，取值'threeFingersSwipe'。 |
| receiver | Callback&lt;ThreeFingersSwipe> | Yes | 回调函数，返回三指滑动输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Subscribe to Three-Finger Swipe Events
            inputMonitor.on('threeFingersSwipe', (threeFingersSwipe) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(threeFingersSwipe)}.`);
              return false;
            });
          } catch (error) {
            console.error(`Failed to monitor three fingers swipe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('fourFingersSwipe')

```TypeScript
function on(type: 'fourFingersSwipe', receiver: Callback<FourFingersSwipe>): void
```

监听全局触控板的四指滑动事件。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'fourFingersSwipe' | Yes | 输入设备事件类型，取值'fourFingersSwipe'。 |
| receiver | Callback&lt;FourFingersSwipe> | Yes | 回调函数，返回四指滑动输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Subscribe to Four-Finger Swipe Events
            inputMonitor.on('fourFingersSwipe', (fourFingersSwipe) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(fourFingersSwipe)}.`);
              return false;
            });
          } catch (error) {
            console.error(`Failed to monitor four fingers swipe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('threeFingersTap')

```TypeScript
function on(type: 'threeFingersTap', receiver: Callback<ThreeFingersTap>): void
```

监听全局触控板的三指轻点事件。使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'threeFingersTap' | Yes | 输入设备事件类型，取值'threeFingersTap'。 |
| receiver | Callback&lt;ThreeFingersTap> | Yes | 回调函数，返回三指轻点输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Subscribe to Three-Finger Tap Event
            inputMonitor.on('threeFingersTap', (threeFingersTap) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(threeFingersTap)}.`);
              return false;
            });
          } catch (error) {
            console.error(`Failed to monitor three fingers tap, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('fingerprint')

```TypeScript
function on(type: 'fingerprint', receiver: Callback<FingerprintEvent>): void
```

监听指纹手势输入事件。使用callback异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'fingerprint' | Yes | 输入事件类型，取唯一值'fingerprint'。 |
| receiver | Callback&lt;FingerprintEvent> | Yes | 回调函数，返回指纹器件手势输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Subscribe to Fingerprint Events
            inputMonitor.on('fingerprint', (FingerprintEvent) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(FingerprintEvent)}.`);
              return false;
            });
          } catch (error) {
            console.error(`Failed to monitor finger print event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('swipeInward')

```TypeScript
function on(type: 'swipeInward', receiver: Callback<SwipeInward>): void
```

监听向内滑动事件。使用callback异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'swipeInward' | Yes | 输入事件类型，取唯一值'SwipeInward'。 |
| receiver | Callback&lt;SwipeInward> | Yes | 回调函数，返回向内滑动事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            // Subscribe to Swipe Inward Event
            inputMonitor.on('swipeInward', (SwipeInward) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(SwipeInward)}.`);
              return false;
            });
          } catch (error) {
            console.error(`Failed to monitor swipe inward, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('touchscreenSwipe')

```TypeScript
function on(type: 'touchscreenSwipe', fingers: number, receiver: Callback<TouchGestureEvent>): void
```

监听触摸屏滑动手势事件。使用callback异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'touchscreenSwipe' | Yes | 输入设备事件类型，取值'touchscreenSwipe'。 |
| fingers | number | Yes | 滑动手势的手指数，取值范围：[3,5]。 |
| receiver | Callback&lt;TouchGestureEvent> | Yes | 回调函数，返回触摸屏滑动手势事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types.  3.Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';
import { TouchGestureEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          let fingers: number = 4;
          try {
            // Subscribe to Touchscreen Swipe Events
            inputMonitor.on('touchscreenSwipe', fingers, (event: TouchGestureEvent) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(event)}.`);
            });
          } catch (error) {
            console.error(`Failed to monitor touch screen swipe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('touchscreenPinch')

```TypeScript
function on(type: 'touchscreenPinch', fingers: number, receiver: Callback<TouchGestureEvent>): void
```

监听触摸屏捏合手势事件。使用callback异步回调。

**Since:** 18

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'touchscreenPinch' | Yes | 输入设备事件类型，取值'touchscreenPinch'。 |
| fingers | number | Yes | 捏合手势的手指数，取值范围：[4,5]。 |
| receiver | Callback&lt;TouchGestureEvent> | Yes | 回调函数，返回触摸屏捏合手势事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Caller is not a system application. |
| 401 | Parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types.  3.Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';
import { TouchGestureEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          let fingers: number = 4;
          try {
            // Subscribe to Touchscreen Pinch Event
            inputMonitor.on('touchscreenPinch', fingers, (event: TouchGestureEvent) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(event)}.`);
            });
          } catch (error) {
            console.error(`Failed to monitor touch screen pinch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## on('keyPressed')

```TypeScript
function on(type: 'keyPressed', keys: Array<KeyCode>, receiver: Callback<KeyEvent>): void
```

监听指定按键的按下抬起事件，支持监听META_LEFT键、META_RIGHT键、电源键、音量键。使用callback异步回调。

**Since:** 15

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyPressed' | Yes | 按键事件类型，取唯一值'keyPressed'。 |
| keys | Array&lt;KeyCode> | Yes | 键值，支持如下键值：KEYCODE_META_LEFT、KEYCODE_META_RIGHT、KEYCODE_POWER、KEYCODE_VOLUME_DOWN、  KEYCODE_VOLUME_UP。 |
| receiver | Callback&lt;KeyEvent> | Yes | 回调函数，返回按键输入事件。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 4100001 | Event listening not supported for the key. |

**Example**

```TypeScript
import { inputMonitor, KeyEvent, KeyCode } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          try {
            let keys: Array<KeyCode> = [KeyCode.KEYCODE_VOLUME_UP];
            // Subscribe to Key Press Events
            inputMonitor.on('keyPressed', keys, (event: KeyEvent ) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(event)}.`);
            });
          } catch (error) {
            console.error(`Failed to monitor key pressed, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

