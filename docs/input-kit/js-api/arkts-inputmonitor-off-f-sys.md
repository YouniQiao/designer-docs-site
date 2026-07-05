# off

## off('touch')

```TypeScript
function off(type: 'touch', receiver?: TouchEventReceiver): void
```

取消监听全局触屏输入事件，使用callback异步回调。

**Since:** 7

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'touch' | Yes | 输入设备事件类型，取值'touch'。 |
| receiver | TouchEventReceiver | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

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
          // Disable listening for a single callback.
          let callback = (touchEvent: TouchEvent) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(touchEvent)}.`);
            return false;
          };
          try {
            // Subscribe to Touch Events
            inputMonitor.on('touch', callback);
            // Unsubscribe from Touch Events
            inputMonitor.off('touch', callback);
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to monitor the touch screen event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor } from '@kit.InputKit';
import { TouchEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          let callback = (touchEvent: TouchEvent) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(touchEvent)}.`);
            return false;
          };
          try {
            // Subscribe to Touch Events
            inputMonitor.on('touch', callback);
            // Unsubscribe from Touch Events
            inputMonitor.off('touch');
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to monitor the touch screen event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('mouse')

```TypeScript
function off(type: 'mouse', receiver?: Callback<MouseEvent>): void
```

取消监听全局鼠标事件。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'mouse' | Yes | 输入设备事件类型，取值'mouse'。 |
| receiver | Callback&lt;MouseEvent> | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

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
          // Disable listening for a single callback.
          let callback = (mouseEvent: MouseEvent) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(mouseEvent)}.`);
            return false;
          };
          try {
            // Subscribe to Mouse Events
            inputMonitor.on('mouse', callback);
            // Unsubscribe from Mouse Events
            inputMonitor.off('mouse', callback);
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to monitor the mouse event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor } from '@kit.InputKit';
import { MouseEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          let callback = (mouseEvent: MouseEvent) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(mouseEvent)}.`);
            return false;
          };
          try {
            // Subscribe to Mouse Events
            inputMonitor.on('mouse', callback);
            // Unsubscribe from Mouse Events
            inputMonitor.off('mouse');
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to monitor the mouse event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('pinch')

```TypeScript
function off(type: 'pinch', receiver?: Callback<Pinch>): void
```

取消监听全局触控板的捏合事件。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'pinch' | Yes | 输入设备事件类型，取值'pinch'。 |
| receiver | Callback&lt;Pinch> | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

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
          // Disable listening for a single callback.
          let callback = (pinchEvent: Pinch) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(pinchEvent)}.`);
            return false;
          };
          try {
            // Subscribe to Pinch Event
            inputMonitor.on('pinch', callback);
            // Unsubscribe from Pinch Event
            inputMonitor.off('pinch', callback);
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitor pinch event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor } from '@kit.InputKit';
import { Pinch } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          let callback = (pinchEvent: Pinch) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(pinchEvent)}.`);
            return false;
          };
          try {
            // Subscribe to Pinch Event
            inputMonitor.on('pinch', callback);
            // Unsubscribe from Pinch Event
            inputMonitor.off('pinch');
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitor pinch event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('pinch')

```TypeScript
function off(type: 'pinch', fingers: number, receiver?: Callback<Pinch>): void
```

取消监听全局触控板的捏合事件。使用callback异步回调。

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
| receiver | Callback&lt;Pinch> | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

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
          // Disable listening for a single callback.
          let callback = (pinchEvent: Pinch) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(pinchEvent)}.`);
            return false;
          };
          try {
            // Subscribe to Pinch Event
            inputMonitor.on('pinch', 2, callback);
            // Unsubscribe from Pinch Event
            inputMonitor.off('pinch', 2, callback);
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitor pinch event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor } from '@kit.InputKit';
import { Pinch } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          let callback = (pinchEvent: Pinch) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(pinchEvent)}.`);
            return false;
          };
          try {
            // Number of fingers for pinch gesture monitoring: 2
            inputMonitor.on('pinch', 2, callback);
            // Unsubscribe from pinch events
            inputMonitor.off('pinch', 2);
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitor pinch event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('rotate')

```TypeScript
function off(type: 'rotate', fingers: number, receiver?: Callback<Rotate>): void
```

取消监听全局触控板的旋转事件。使用callback异步回调。

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
| receiver | Callback&lt;Rotate> | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

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
          // Disable listening for a single callback.
          let callback = (rotateEvent: Rotate) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(rotateEvent)}.`);
            return false;
          };
          try {
            // Rotation gesture listening finger count 2
            inputMonitor.on('rotate', 2, callback);
            // Unsubscribe from rotation events
            inputMonitor.off('rotate', 2, callback);
            console.info(`Succeeded in turning off monitor.`); 
          } catch (error) {
            console.error(`Failed to cancel monitor rotate event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor } from '@kit.InputKit';
import { Rotate } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          let callback = (rotateEvent: Rotate) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(rotateEvent)}.`);
            return false;
          };
          try {
            // Number of fingers for rotation gesture monitoring: 2
            inputMonitor.on('rotate', 2, callback);
            // Unsubscribe from rotation events
            inputMonitor.off('rotate', 2);
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitor rotate event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('threeFingersSwipe')

```TypeScript
function off(type: 'threeFingersSwipe', receiver?: Callback<ThreeFingersSwipe>): void
```

取消监听全局触控板的三指滑动事件。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'threeFingersSwipe' | Yes | 输入设备事件类型，取值'threeFingersSwipe'。 |
| receiver | Callback&lt;ThreeFingersSwipe> | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';
import { ThreeFingersSwipe } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Disable listening for a single callback.
          let callback = (threeFingersSwipe: ThreeFingersSwipe) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(threeFingersSwipe)}.`);
            return false;
          };
          try {
            // Subscribe to Three-Finger Swipe Event
            inputMonitor.on('threeFingersSwipe', callback);
            // Unsubscribe from Three-Finger Swipe Event
            inputMonitor.off("threeFingersSwipe", callback);
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitor three fingers swipe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor } from '@kit.InputKit';
import { ThreeFingersSwipe } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          let callback = (threeFingersSwipe: ThreeFingersSwipe) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(threeFingersSwipe)}.`);
            return false;
          };
          try {
            // Subscribe to Three-Finger Swipe Events
            inputMonitor.on("threeFingersSwipe", callback);
            // Unsubscribe from Three-Finger Swipe Events
            inputMonitor.off("threeFingersSwipe");
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitor three fingers swipe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('fourFingersSwipe')

```TypeScript
function off(type: 'fourFingersSwipe', receiver?: Callback<FourFingersSwipe>): void
```

取消监听全局触控板的四指滑动事件。使用callback异步回调。

**Since:** 10

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'fourFingersSwipe' | Yes | 输入设备事件类型，取值'fourFingersSwipe'。 |
| receiver | Callback&lt;FourFingersSwipe> | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';
import { FourFingersSwipe } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Disable listening for a single callback.
          let callback = (fourFingersSwipe: FourFingersSwipe) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(fourFingersSwipe)}.`);
            return false;
          };
          try {
            // Subscribe to Four-Finger Swipe Event
            inputMonitor.on('fourFingersSwipe', callback);
            // Unsubscribe from Four-Finger Swipe Event
            inputMonitor.off('fourFingersSwipe', callback);
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitoring four fingers swipe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor } from '@kit.InputKit';
import { FourFingersSwipe } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          let callback = (fourFingersSwipe: FourFingersSwipe) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(fourFingersSwipe)}.`);
            return false;
          };
          try {
            // Subscribe to Four-Finger Swipe Event
            inputMonitor.on('fourFingersSwipe', callback);
            // Unsubscribe from Four-Finger Swipe Event
            inputMonitor.off('fourFingersSwipe');
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitoring four fingers swipe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('threeFingersTap')

```TypeScript
function off(type: 'threeFingersTap', receiver?: Callback<ThreeFingersTap>): void
```

取消监听全局触控板的三指轻点事件。使用callback异步回调。

**Since:** 11

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'threeFingersTap' | Yes | 输入设备事件类型，取值'threeFingersTap'。 |
| receiver | Callback&lt;ThreeFingersTap> | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';
import { ThreeFingersTap } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Disable listening for a single callback.
          let callback = (threeFingersTap: ThreeFingersTap) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(threeFingersTap)}.`);
            return false;
          };
          try {
            // Subscribe to three-finger tap event
            inputMonitor.on('threeFingersTap', callback);
            // Unsubscribe from three-finger tap event
            inputMonitor.off("threeFingersTap", callback);
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitor three fingers tap, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor } from '@kit.InputKit';
import { ThreeFingersTap } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          let callback = (threeFingersTap: ThreeFingersTap) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(threeFingersTap)}.`);
            return false;
          };
          try {
            // Subscribe to three-finger tap event
            inputMonitor.on('threeFingersTap', callback);
            // Unsubscribe from three-finger tap event
            inputMonitor.off("threeFingersTap");
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitor three fingers tap, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('fingerprint')

```TypeScript
function off(type: 'fingerprint', receiver?: Callback<FingerprintEvent>): void
```

取消监听指纹手势输入事件。使用callback异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'fingerprint' | Yes | 输入事件类型，取值'fingerprint'。 |
| receiver | Callback&lt;FingerprintEvent> | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { inputMonitor } from '@kit.InputKit';
import { FingerprintEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Disable listening for a single callback.
          let callback = (fingerprintEvent: FingerprintEvent) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(fingerprintEvent)}.`);
            return false;
          };
          try {
            // Subscribe to Fingerprint Events
            inputMonitor.on('fingerprint', callback);
            // Unsubscribe from Fingerprint Events
            inputMonitor.off("fingerprint", callback);
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitor finger print event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor } from '@kit.InputKit';
import { FingerprintEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          let callback = (fingerprintEvent: FingerprintEvent) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(fingerprintEvent)}.`);
            return false;
          };
          try {
            // Subscribe to Fingerprint Events
            inputMonitor.on('fingerprint', callback);
            // Unsubscribe from Fingerprint Events
            inputMonitor.off("fingerprint");
            console.info(`Succeeded in turning off monitor.`);
          } catch (error) {
            console.error(`Failed to cancel monitor finger print event, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('swipeInward')

```TypeScript
function off(type: 'swipeInward', receiver?: Callback<SwipeInward>): void
```

取消监听向内滑动事件。使用callback异步回调。

**Since:** 12

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'swipeInward' | Yes | 输入事件类型，取值'swipeInward'。 |
| receiver | Callback&lt;SwipeInward> | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | SystemAPI permit error. |
| 401 | Parameter error. |

**Example**

```TypeScript
import { inputMonitor, SwipeInward } from '@kit.InputKit';

@Entry
@Component
struct Index {
build() {
  RelativeContainer() {
    Text()
      .onClick(() => {
        // Disable listening for a single callback.
        let callback = (swipeInward: SwipeInward) => {
          console.info(`Succeeded in monitoring on ${JSON.stringify(swipeInward)}.`);
          return false;
        };
        try {
          // Subscribe to Swipe Inward Event
          inputMonitor.on('swipeInward', callback);
          // Unsubscribe from Swipe Inward Event
          inputMonitor.off("swipeInward", callback);
          console.info(`Succeeded in turning off monitor.`);
        } catch (error) {
          console.error(`Failed to cancel monitor swipe inward, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
        }
      })
  }
}
}


import { inputMonitor, SwipeInward } from '@kit.InputKit';

@Entry
@Component
struct Index {
build() {
  RelativeContainer() {
    Text()
      .onClick(() => {
        // Cancel listening for all callbacks.
        let callback = (swipeInward: SwipeInward) => {
          console.info(`Succeeded in monitoring on ${JSON.stringify(swipeInward)}.`);
          return false;
        };
        try {
          // Subscribe to Swipe Inward Event
          inputMonitor.on('swipeInward', callback);
          // Unsubscribe from Swipe Inward Event
          inputMonitor.off("swipeInward");
          console.info(`Succeeded in turning off monitor.`);
        } catch (error) {
          console.error(`Failed to cancel monitor swipe inward, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
        }
      })
  }
}
}

```

## off('touchscreenSwipe')

```TypeScript
function off(type: 'touchscreenSwipe', fingers: number, receiver?: Callback<TouchGestureEvent>): void
```

取消监听触摸屏滑动手势事件。使用callback异步回调。

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
| receiver | Callback&lt;TouchGestureEvent> | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

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
          // Disable listening for a single callback.
          let callback = (event: TouchGestureEvent) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(event)}.`);
          };
          let fingers: number = 4;
          try {
            // Subscribe to Touchscreen Swipe Events
            inputMonitor.on('touchscreenSwipe', fingers, callback);
            // Unsubscribe from Touchscreen Swipe Events
            inputMonitor.off('touchscreenSwipe', fingers, callback);
          } catch (error) {
            console.error(`Failed to cancel monitor touch screen swipe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor } from '@kit.InputKit';
import { TouchGestureEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          let fingers: number = 4;
          try {
            // Subscribe to Touchscreen Swipe Events
            inputMonitor.on('touchscreenSwipe', fingers, (event: TouchGestureEvent) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(event)}.`);
            });
            // Unsubscribe from Touchscreen Swipe Events
            inputMonitor.off('touchscreenSwipe', fingers);
          } catch (error) {
            console.error(`Failed to monitor touch screen swipe, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('touchscreenPinch')

```TypeScript
function off(type: 'touchscreenPinch', fingers: number, receiver?: Callback<TouchGestureEvent>): void
```

取消监听触摸屏捏合手势事件。使用callback异步回调。

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
| receiver | Callback&lt;TouchGestureEvent> | No | 需要取消监听的回调函数。若不填，则取消当前应用监听的所有回调函数。 |

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
          // Disable listening for a single callback.
          let callback = (event: TouchGestureEvent) => {
            console.info(`Succeeded in monitoring on ${JSON.stringify(event)}.`);
          };
          let fingers: number = 4;
          try {
            // Subscribe to Touchscreen Pinch Event
            inputMonitor.on('touchscreenPinch', fingers, callback);
            // Unsubscribe from Touchscreen Pinch Event
            inputMonitor.off("touchscreenPinch", fingers, callback);
          } catch (error) {
            console.error(`Failed to cancel monitor touch screen pinch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor } from '@kit.InputKit';
import { TouchGestureEvent } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          let fingers: number = 4;
          try {
            // Subscribe to Touchscreen Pinch Event
            inputMonitor.on('touchscreenPinch', fingers, (event: TouchGestureEvent) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(event)}.`);
            });
            // Unsubscribe from Touchscreen Pinch Event
            inputMonitor.off("touchscreenPinch", fingers);
          } catch (error) {
            console.error(`Failed to cancel monitor touch screen pinch, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

## off('keyPressed')

```TypeScript
function off(type: 'keyPressed', receiver?: Callback<KeyEvent>): void
```

取消监听按键按下抬起事件。支持取消监听META_LEFT键、META_RIGHT键、电源键、音量键。需和inputMonitor.on('keyPressed')配套使用。使用callback异步回调。

**Since:** 15

**Required permissions:** 

 ohos.permission.INPUT_MONITORING

**System capability:** SystemCapability.MultimodalInput.Input.InputMonitor

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'keyPressed' | Yes | 按键事件类型，取唯一值'keyPressed'。 |
| receiver | Callback&lt;KeyEvent> | No | 需要取消监听的回调函数。若不填，取消应用所有按键监听的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

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
          // Disable listening for a single callback.
          try {
            let callback = (event: KeyEvent) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(event)}.`);
            };
            let keys: Array<KeyCode> = [KeyCode.KEYCODE_VOLUME_UP];
            // Subscribe to Key Press Event
            inputMonitor.on('keyPressed', keys, callback);
            // Unsubscribe from Key Press Event
            inputMonitor.off("keyPressed", callback);
          } catch (error) {
            console.error(`Failed to cancel monitor key pressed, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}


import { inputMonitor, KeyEvent, KeyCode } from '@kit.InputKit';

@Entry
@Component
struct Index {
  build() {
    RelativeContainer() {
      Text()
        .onClick(() => {
          // Cancel listening for all callbacks.
          try {
            let keys: Array<KeyCode> = [KeyCode.KEYCODE_VOLUME_UP];
            // Subscribe to Key Press Events
            inputMonitor.on('keyPressed', keys, (event: KeyEvent) => {
              console.info(`Succeeded in monitoring on ${JSON.stringify(event)}.`);
            });
            // Unsubscribe from Key Press Events
            inputMonitor.off("keyPressed");
          } catch (error) {
            console.error(`Failed to cancel monitor key pressed, Code: ${(error as BusinessError).code}, message: ${(error as BusinessError).message}.`);
          }
        })
    }
  }
}

```

