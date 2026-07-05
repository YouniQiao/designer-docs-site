# FloatingBallController

闪控球控制器实例，用于启动、更新、停止闪控球以及注册回调等操作。 下列API示例中都需先使用[floatingBall.create()]floatingBall.create方法获取到闪控球控制器实例（即floatingBallController），再通过此实例调用对应方法。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { floatingBall } from '@kit.ArkUI';
```

## getFloatingBallWindowInfo

```TypeScript
getFloatingBallWindowInfo(): Promise<FloatingBallWindowInfo>
```

获得闪控球窗口信息，使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;FloatingBallWindowInfo> | Promise对象，返回闪控球窗口信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |
| 1300025 | The floating ball state does not support this operation. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

floatingBallController.getFloatingBallWindowInfo().then((data: floatingBall.FloatingBallWindowInfo) => {
  console.info('Succeeded in getting floating ball window info. Info: ' + JSON.stringify(data));
}).catch((err: BusinessError) => {
  console.error(`Failed to get floating ball window info. Cause code: ${err.code}, message: ${err.message}`);
});

```

## off('stateChange')

```TypeScript
off(type: 'stateChange', callback?: Callback<FloatingBallState>): void
```

取消闪控球生命周期状态变化的监听事件。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | 监听事件，固定为'stateChange'，即闪控球生命周期状态变化事件。 |
| callback | Callback&lt;FloatingBallState> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300019 | Wrong parameters for operating the floating ball. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |

**Example**

```TypeScript
let onStateChange = (state: floatingBall.FloatingBallState) => {
  console.info('Floating ball stateChange: ' + state);
};
try {
  floatingBallController.off('stateChange', onStateChange);
} catch(e) {
  console.error(`Failed to off stateChange floating ball. Cause:${e.code}, message:${e.message}`);
}

```

## off('click')

```TypeScript
off(type: 'click', callback?: Callback<void>): void
```

取消闪控球点击的监听事件。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'click' | Yes | 监听事件，固定为'click'，即闪控球点击事件。 |
| callback | Callback&lt;void> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300019 | Wrong parameters for operating the floating ball. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |

**Example**

```TypeScript
let onClick = () => {
  console.info('Floating ball onClick');
};
try {
  floatingBallController.off('click', onClick);
} catch(e) {
  console.error(`Failed to off click floating ball. Cause:${e.code}, message:${e.message}`);
}

```

## offClick

```TypeScript
offClick(callback?: Callback<void>): void
```

Unregister floating ball click event listener.

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300019 | Wrong parameters for operating the floating ball. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |

## offDestroy

```TypeScript
offDestroy(callback?: Callback<string>): void
```

取消闪控球销毁事件的监听。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300019 | Wrong parameters for operating the floating ball. Possible cause:  Callback is null or not callable. |
| 1300023 | Floating ball internal error. Possible cause:  System error, such as a null pointer, insufficient memory. |
| 1300024 | The floating ball window state is abnormal. Possible cause:  The floating ball controller has been destroyed. |

**Example**

```TypeScript
let onDestroy = (reason: string) => {
  console.info('Floating ball has destroyed, reason: ' + reason);
};
try {
  floatingBallController?.offDestroy(onDestroy);
} catch(e) {
  console.error(`Failed to offDestroy floating ball. Cause:${e.code}, message:${e.message}`);
}
// Unregister all callbacks.
try {
  floatingBallController?.offDestroy();
} catch(e) {
  console.error(`Failed to offDestroy all listeners. Cause:${e.code}, message:${e.message}`);
}

```

## offStateChange

```TypeScript
offStateChange(callback?: Callback<FloatingBallState>): void
```

Unregister floating ball stateChange event listener.

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FloatingBallState> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300019 | Wrong parameters for operating the floating ball. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |

## on('stateChange')

```TypeScript
on(type: 'stateChange', callback: Callback<FloatingBallState>): void
```

注册闪控球生命周期状态变化的监听事件。不再使用时，取消监听以避免内存泄漏。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChange' | Yes | 监听事件，固定为'stateChange'，即闪控球生命周期状态变化事件。 |
| callback | Callback&lt;FloatingBallState> | Yes | 回调函数。返回当前的闪控球生命周期状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300019 | Wrong parameters for operating the floating ball. |
| 1300022 | Repeated floating ball operation. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |

**Example**

```TypeScript
let onStateChange = (state: floatingBall.FloatingBallState) => {
  console.info('Floating ball stateChange: ' + state);
};
try {
  floatingBallController.on('stateChange', onStateChange);
} catch(e) {
  console.error(`Failed to on stateChange floating ball. Cause:${e.code}, message:${e.message}`);
}

```

## on('click')

```TypeScript
on(type: 'click', callback: Callback<void>): void
```

注册闪控球的点击监听事件，不使用时，取消监听以避免内存泄漏。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'click' | Yes | 监听事件，固定为'click'，即闪控球点击事件。 |
| callback | Callback&lt;void> | Yes | 回调函数。当点击闪控球事件发生时的回调。该回调函数不返回任何参数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300019 | Wrong parameters for operating the floating ball. |
| 1300022 | Repeated floating ball operation. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |

**Example**

```TypeScript
let onClick = () => {
  console.info('Floating ball onClick');
};
try {
  floatingBallController.on('click', onClick);
} catch(e) {
  console.error(`Failed to on click floating ball. Cause:${e.code}, message:${e.message}`);
}

```

## onClick

```TypeScript
onClick(callback: Callback<void>): void
```

Register floating ball click event listener.

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | Used to handle {'click'} command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300019 | Wrong parameters for operating the floating ball. |
| 1300022 | Repeated floating ball operation. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |

## onDestroy

```TypeScript
onDestroy(callback: Callback<string>): void
```

注册闪控球销毁事件的监听。当闪控球销毁时，回调函数会接收到销毁原因的字符串。不再使用时，调用[offDestroy](#offdestroy)接口取消监听以避免内存泄漏。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;string> | Yes | 回调函数。返回闪控球停止的原因。停止原因包括：  - "APP_STOP"：应用主动停止。  - "DUMPSTER_STOP"：拖动到垃圾桶触发停止。  - "LONG_PRESS_SINGLE_STOP"：长按单个闪控球触发停止。  - "LONG_PRESS_ALL_STOP"：长按全部闪控球触发停止。  - "MAIN_WINDOW_DESTROY_STOP"：context关联的主窗口被销毁后触发停止。  - "SQUEEZE"：超出设备闪控球数量上限，被其他闪控球挤占停止。  - "FLOAT_VIEW_STOP"：与标准悬浮窗绑定后，绑定状态下跟随标准悬浮窗停止。  - "STOP_IN_SIDEBAR"：在侧边栏中被停止。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300019 | Wrong parameters for operating the floating ball. Possible cause:  Callback is null or not callable. |
| 1300022 | Repeated floating ball operation. |
| 1300023 | Floating ball internal error. Possible cause:  System error, such as a null pointer, insufficient memory. |
| 1300024 | The floating ball window state is abnormal. Possible cause:  The floating ball controller has been destroyed. |

**Example**

```TypeScript
let onDestroy = (reason: string) => {
  console.info('Floating ball has destroyed, reason: ' + reason);
};
try {
  floatingBallController?.onDestroy(onDestroy);
} catch(e) {
  console.error(`Failed to onDestroy floating ball. Cause:${e.code}, message:${e.message}`);
}

```

## onStateChange

```TypeScript
onStateChange(callback: Callback<FloatingBallState>): void
```

Register floating ball stateChange event listener.

**Since:** 23

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;FloatingBallState> | Yes | Used to handle {'stateChange'} command. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300019 | Wrong parameters for operating the floating ball. |
| 1300022 | Repeated floating ball operation. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |

## restoreMainWindow

```TypeScript
restoreMainWindow(want: Want): Promise<void>
```

恢复应用主窗口并加载指定页面。使用Promise异步回调。仅支持在点击闪控球后调用；若应用拥有`ohos.permission.AUTO_RESTORE_MAIN_WINDOW`权限，可以无需点击直接调用该接口。

**Since:** 20

**Required permissions:** 

 ohos.permission.USE_FLOAT_BALL

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 加载指定页面的Want。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually returned by VerifyAccessToken. |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300019 | Wrong parameters for operating the floating ball. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |
| 1300025 | The floating ball state does not support this operation. |
| 1300026 | Failed to restore the main window. Possible causes:  1. Invalid parameter. The provided bundleName does not match the caller's application bundleName.  2. The application lacks the ohos.permission.AUTO_RESTORE_MAIN_WINDOW permission,  and no user interaction (click) on the floating ball has occurred. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';

let want: Want = {
  bundleName: 'xxx.xxx.xxx',
  abilityName: 'EntryAbility'
};
try {
  floatingBallController.restoreMainWindow(want).then(() => {
    console.info('Succeeded in restoring floating ball main window.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to restore floating ball main window. Cause code: ${err.code}, message: ${err.message}`);
  });
} catch(e) {
  console.error(`Failed to create floating ball controller. Cause:${e.code}, message:${e.message}`);
}

```

## setFloatingBallVisibilityInApp

```TypeScript
setFloatingBallVisibilityInApp(isVisible: boolean): Promise<void>
```

设置闪控球在应用内是否可见。使用Promise异步回调。 - 当应用处于多任务界面时（[生命周期状态](docroot://windowmanager/window-overview.md#生命周期状态)为PAUSED），闪控球不可见。 - 默认情况（即未调用此接口设置时）和调用此接口传入true时：除多任务界面外，闪控球均可见。 - 调用此接口传入false时：当应用处于前台（[生命周期状态](docroot://windowmanager/window-overview.md#生命周期状态)为SHOWN或者RESUMED）时，闪控球不可见；当应用处于 后台（[生命周期状态](docroot://windowmanager/window-overview.md#生命周期状态)为HIDDEN）时，闪控球可见。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isVisible | boolean | Yes | true表示闪控球在应用内可见；false表示闪控球在应用内不可见。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300003 | This window manager service works abnormally.  Possible cause: Internal IPC error. |
| 1300023 | Floating ball internal error. Possible cause:  The floating ball controller is null. |
| 1300024 | The floating ball window state is abnormal. Possible causes:  The floating ball window has not been created or has been destroyed. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

floatingBallController?.setFloatingBallVisibilityInApp(false).then(() => {
  console.info('Succeeded in setting floating ball visibility.');
}).catch((err: BusinessError) => {
  console.error(`Failed to set floating ball visibility. Cause code: ${err.code}, message: ${err.message}`);
});

```

## startFloatingBall

```TypeScript
startFloatingBall(params: FloatingBallParams): Promise<void>
```

启动闪控球，使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.USE_FLOAT_BALL

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | FloatingBallParams | Yes | 启动闪控球的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission verification failed, usually returned by VerifyAccessToken. |
| 1300019 | Wrong parameters for operating the floating ball. |
| 1300020 | Failed to create the floating ball window. |
| 1300021 | Failed to start multiple floating ball windows. |
| 1300022 | Repeated floating ball operation. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |
| 1300025 | The floating ball state does not support this operation. |
| 1300034 | This operation conflicts with other floating windows. Possible cause:  App has already started float view. [since 26.0.0] |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let startParams: floatingBall.FloatingBallParams = {
  template: floatingBall.FloatingBallTemplate.EMPHATIC,
  title: 'title',
  content: 'content'
};
try {
  floatingBallController.startFloatingBall(startParams).then(() => {
    console.info('Succeeded in starting floating ball.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to start floating ball. Cause:${err.code}, message:${err.message}`);
  });
} catch(e) {
  console.error(`Failed to start floating ball. Cause:${e.code}, message:${e.message}`);
}

```

## stopFloatingBall

```TypeScript
stopFloatingBall(): Promise<void>
```

停止闪控球，使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300022 | Repeated floating ball operation. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

floatingBallController.stopFloatingBall().then(() => {
  console.info('Succeeded in stopping floating ball.');
}).catch((err: BusinessError) => {
  console.error(`Failed to stop floating ball. Cause:${err.code}, message:${err.message}`);
});

```

## updateFloatingBall

```TypeScript
updateFloatingBall(params: FloatingBallParams): Promise<void>
```

更新闪控球，使用Promise异步回调。

**Since:** 20

**System capability:** SystemCapability.Window.SessionManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | FloatingBallParams | Yes | 更新闪控球的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 1300002 | This window state is abnormal. |
| 1300003 | This window manager service works abnormally. |
| 1300004 | Unauthorized operation. |
| 1300019 | Wrong parameters for operating the floating ball. |
| 1300023 | Floating ball internal error. |
| 1300024 | The floating ball window state is abnormal. |
| 1300025 | The floating ball state does not support this operation. |
| 1300027 | When updating the floating ball, the template type cannot be changed. |
| 1300028 | Updating static template-based floating balls is not supported. |

**Example**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let updateParams: floatingBall.FloatingBallParams = {
  template: floatingBall.FloatingBallTemplate.EMPHATIC,
  title: 'title2',
  content: 'content2'
};
try {
  floatingBallController.updateFloatingBall(updateParams).then(() => {
    console.info('Succeeded in updating floating ball.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to update floating ball. Cause:${err.code}, message:${err.message}`);
  });
} catch(e) {
  console.error(`Failed to update floating ball. Cause:${e.code}, message:${e.message}`);
}

```

