# UIEventObserver

用于监听UI事件的观察者。

**Since:** 10

**System capability:** SystemCapability.Test.UiTest

## Modules to Import

```TypeScript
import { ResizeDirection,WindowMode,PenMode,PenKeyOperation,Driver,MatchPattern,UiDirection,TouchOptions,ComponentEventType,PointerMatrix,WindowChangeType,Component,ON,PenKey,Rect,InputTextMode,UIEventObserver,WindowFilter,WindowChangeOptions,UiWindow,TouchPadSwipeOptions,Point,KeyOptions,DisplayRotation,UIElementInfo,PenKeyOperationOptions,ComponentEventOptions,MouseButton,On } from '@kit.TestKit';
```

## once('toastShow')

```TypeScript
once(type: 'toastShow', callback: Callback<UIElementInfo>): void
```

订阅toast组件事件。该API使用回调返回结果。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'toastShow' | Yes | 事件类型。固定值为'toastShow'。 |
| callback | Callback&lt;UIElementInfo> | Yes | 用于返回结果的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UIElementInfo, UIEventObserver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let observer: UIEventObserver = driver.createUIEventObserver();
  let callback = (UIElementInfo: UIElementInfo) => {
    console.info(UIElementInfo.bundleName);
    console.info(UIElementInfo.text);
    console.info(UIElementInfo.type);
  }
  observer.once('toastShow', callback);
}

```

## once('dialogShow')

```TypeScript
once(type: 'dialogShow', callback: Callback<UIElementInfo>): void
```

订阅dialog组件事件。该API使用回调返回结果。

**Since:** 10

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'dialogShow' | Yes | 事件类型。固定值为'dialogShow'。 |
| callback | Callback&lt;UIElementInfo> | Yes | 用于返回结果的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UIElementInfo, UIEventObserver } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let observer: UIEventObserver = driver.createUIEventObserver();
  let callback = (UIElementInfo: UIElementInfo) => {
    console.info(UIElementInfo.bundleName);
    console.info(UIElementInfo.text);
    console.info(UIElementInfo.type);
  }
  observer.once('dialogShow', callback);
}

```

## once('windowChange')

```TypeScript
once(type: 'windowChange', windowChangeType: WindowChangeType, options: WindowChangeOptions, callback: Callback<UIElementInfo>): void
```

开始监听指定类型的窗口变更事件，支持扩展配置。该API在检测到指定窗口变更事件时触发回调。 该API仅能在[自由窗口](docroot://windowmanager/window-terminology.md#free-windows)模式下使用。

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'windowChange' | Yes | 要订阅的事件类型，可为windowChange。窗口变更时触发该事件。 |
| windowChangeType | WindowChangeType | Yes | 窗口变更事件类型。 |
| options | WindowChangeOptions | Yes | 扩展配置，包括监听超时时间间隔和要监听的窗口的包名。 |
| callback | Callback&lt;UIElementInfo> | Yes | 事件发生时触发回调返回事件信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000005 | 不支持此操作。 |
| 17000007 | 参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UIElementInfo, UIEventObserver, WindowChangeOptions, WindowChangeType } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let observer: UIEventObserver = driver.createUIEventObserver();
  let options: WindowChangeOptions = {
    timeout: 20000,
    bundleName: 'com.example.myapplication'  // Use the actual bundle name.
  }
  let callback = (UIElementInfo: UIElementInfo) => {
    console.info(UIElementInfo.bundleName);
    console.info(UIElementInfo.text);
    console.info(UIElementInfo.type);
    console.info(UIElementInfo.windowChangeType?.toString());
    console.info(UIElementInfo.windowId?.toString());
  }
  observer.once('windowChange', WindowChangeType.WINDOW_ADDED, options, callback);
}

```

## once('componentEventOccur')

```TypeScript
once(type: 'componentEventOccur', componentEventType: ComponentEventType, options: ComponentEventOptions, callback: Callback<UIElementInfo>): void
```

开始监听指定类型的组件操作事件，支持扩展配置。该API在检测到指定组件操作事件时触发回调。

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'componentEventOccur' | Yes | 要订阅的事件类型，可为componentEventOccur。检测到组件操作时触发该事件。 |
| componentEventType | ComponentEventType | Yes | 组件操作事件类型。 |
| options | ComponentEventOptions | Yes | 扩展配置，包括监听超时时间间隔和要监听的组件的匹配条件。 |
| callback | Callback&lt;UIElementInfo> | Yes | 用于返回结果的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000005 | 不支持此操作。 |
| 17000007 | 参数校验失败。 |

**Example**

```TypeScript
// xxx.test.ets
import { Driver, UIElementInfo, UIEventObserver, ComponentEventOptions, ComponentEventType, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let observer: UIEventObserver = driver.createUIEventObserver();
  let option: ComponentEventOptions = {
    timeout: 20000,
    on: ON.id('123')  // Use the actual component ID.
  };
  let callback = (UIElementInfo: UIElementInfo) => {
    console.info(UIElementInfo.bundleName);
    console.info(UIElementInfo.text);
    console.info(UIElementInfo.type);
    console.info(UIElementInfo.componentEventType?.toString());
    console.info(UIElementInfo.windowId?.toString());
    console.info(UIElementInfo.componentId);
    console.info(UIElementInfo.componentRect?.left.toString());
    console.info(UIElementInfo.componentRect?.top.toString());
    console.info(UIElementInfo.componentRect?.right.toString());
    console.info(UIElementInfo.componentRect?.bottom.toString());
  };
  observer.once('componentEventOccur', ComponentEventType.COMPONENT_CLICKED, option, callback);
}

```

## onceComponentEventOccur

```TypeScript
onceComponentEventOccur(componentEventType: ComponentEventType, options: ComponentEventOptions, callback: Callback<UIElementInfo>): void
```

监听组件事件一次，可设置额外的监听选项。

**Since:** 23

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| componentEventType | ComponentEventType | Yes | 要监听的组件事件类型。 |
| options | ComponentEventOptions | Yes | 组件事件的额外监听选项。 |
| callback | Callback&lt;UIElementInfo> | Yes | 函数，返回监听到的UIElementInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000005 | 不支持此操作。 |
| 17000007 | 参数校验失败。 |

## onceDialogShow

```TypeScript
onceDialogShow(callback: Callback<UIElementInfo>): void
```

监听dialog显示一次

**Since:** 23

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;UIElementInfo> | Yes | 函数，返回监听到的UIElementInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

## onceToastShow

```TypeScript
onceToastShow(callback: Callback<UIElementInfo>): void
```

监听toast显示一次

**Since:** 23

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;UIElementInfo> | Yes | 函数，返回监听到的UIElementInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

## onceWindowChange

```TypeScript
onceWindowChange(windowChangeType: WindowChangeType, options: WindowChangeOptions, callback: Callback<UIElementInfo>): void
```

监听窗口变更一次，可设置额外的监听选项。

**Since:** 23

**System capability:** SystemCapability.Test.UiTest

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| windowChangeType | WindowChangeType | Yes | 要监听的窗口变更类型。 |
| options | WindowChangeOptions | Yes | 窗口变更的额外监听选项。 |
| callback | Callback&lt;UIElementInfo> | Yes | 函数，返回监听到的UIElementInfo。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 17000005 | 不支持此操作。 |
| 17000007 | 参数校验失败。 |

