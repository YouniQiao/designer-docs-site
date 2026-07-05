# UIEventObserver

用于监听UI事件的观察者。

**起始版本：** 10

**系统能力：** SystemCapability.Test.UiTest

## once('toastShow')

```TypeScript
once(type: 'toastShow', callback: Callback<UIElementInfo>): void
```

订阅toast组件事件。该API使用回调返回结果。

**起始版本：** 10

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'toastShow' | 是 | 事件类型。固定值为**'toastShow'**。 |
| callback | Callback&lt;UIElementInfo&gt; | 是 | 用于返回结果的回调。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UIElementInfo, UIEventObserver } from '@kit.TestKit';

async function demo() {
  // 创建Driver对象
  let driver: Driver = Driver.create();
  // 创建UI事件监听器
  let observer: UIEventObserver = driver.createUIEventObserver();
  // 定义回调函数，输出toast控件的属性信息
  let callback = (UIElementInfo: UIElementInfo) => {
    console.info(UIElementInfo.bundleName);
    console.info(UIElementInfo.text);
    console.info(UIElementInfo.type);
  }
  // 订阅toast控件出现事件
  observer.once('toastShow', callback);
}

```

## once('dialogShow')

```TypeScript
once(type: 'dialogShow', callback: Callback<UIElementInfo>): void
```

订阅dialog组件事件。该API使用回调返回结果。

**起始版本：** 10

**元服务API：** 从API版本11开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'dialogShow' | 是 | 事件类型。固定值为**'dialogShow'**。 |
| callback | Callback&lt;UIElementInfo&gt; | 是 | 用于返回结果的回调。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-请求广告参数错误) | 参数错误。可能原因：1.必填参数未指定；2.参数类型错误；3.参数校验失败。 |

**示例：**

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

开始监听指定类型的窗口变更事件，支持扩展配置。该API在检测到指定窗口变更事件时触发回调。 该API仅能在[自由窗口](../../../../windowmanager/window-terminology.md#free-windows)模式下使用。

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'windowChange' | 是 | 要订阅的事件类型，可为**windowChange**。窗口变更时触发该事件。 |
| windowChangeType | WindowChangeType | 是 | 窗口变更事件类型。 |
| options | WindowChangeOptions | 是 | 扩展配置，包括监听超时时间间隔和要监听的窗口的包名。 |
| callback | Callback&lt;UIElementInfo&gt; | 是 | 事件发生时触发回调返回事件信息。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000005](../errorcode-uitest.md#17000005-操作不支持) | 不支持此操作。 |
| [17000007](../errorcode-uitest.md#17000007-参数不合法) | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UIElementInfo, UIEventObserver, WindowChangeOptions, WindowChangeType } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let observer: UIEventObserver = driver.createUIEventObserver();
  let options: WindowChangeOptions = {
    timeout: 20000,
    bundleName: 'com.example.myapplication'  // 请开发者替换为实际包名
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

**起始版本：** 22

**元服务API：** 从API版本22开始，该接口支持在元服务API中使用。

**系统能力：** SystemCapability.Test.UiTest

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'componentEventOccur' | 是 | 要订阅的事件类型，可为**componentEventOccur**。检测到组件操作时触发该事件。 |
| componentEventType | ComponentEventType | 是 | 组件操作事件类型。 |
| options | ComponentEventOptions | 是 | 扩展配置，包括监听超时时间间隔和要监听的组件的匹配条件。 |
| callback | Callback&lt;UIElementInfo&gt; | 是 | 用于返回结果的回调。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| [17000005](../errorcode-uitest.md#17000005-操作不支持) | 不支持此操作。 |
| [17000007](../errorcode-uitest.md#17000007-参数不合法) | 参数校验失败。 |

**示例：**

```TypeScript
// xxx.test.ets
import { Driver, UIElementInfo, UIEventObserver, ComponentEventOptions, ComponentEventType, ON } from '@kit.TestKit';

async function demo() {
  let driver: Driver = Driver.create();
  let observer: UIEventObserver = driver.createUIEventObserver();
  let option: ComponentEventOptions = {
    timeout: 20000,
    on: ON.id('123')  // 请开发者替换为实际存在的控件id值
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

