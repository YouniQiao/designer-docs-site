# on

## on('accessibilityStateChange')

```TypeScript
function on(type: 'accessibilityStateChange', callback: Callback<boolean>): void
```

Subscribes to the state changes of the accessibility application. This API uses an asynchronous callback to return the result. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync]accessibility.getAccessibilityExtensionListSync. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.off('accessibilityStateChange')]accessibility.off(type: 'accessibilityStateChange', callback?: Callback<boolean>) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**起始版本：** 7

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 23开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'accessibilityStateChange' | 是 | Event type, which is set to 'accessibilityStateChange' in this  API. |
| callback | Callback&lt;boolean> | 是 | Callback invoked when the enabled status of accessibility application  changes. The returned result indicates the global enabled status of the accessibility application. The value  true indicates that the accessibility application is enabled, and false indicates that the  accessibility application is disabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

// 系统内已安装一个或多个辅助应用时:
// 1. 启用辅助应用场景：第一个辅助应用启用后，回调函数会返回true。
// 2. 禁用辅助应用场景：若一个或多个辅助应用已启用，最后一个已启用的辅助应用被禁用时，回调函数会返回false。
accessibility.on('accessibilityStateChange', (data: boolean) => {
  console.info(`subscribe accessibility state change, result: ${JSON.stringify(data)}`);
});

```

## on('touchGuideStateChange')

```TypeScript
function on(type: 'touchGuideStateChange', callback: Callback<boolean>): void
```

Subscribes to the state changes in touch guide mode. This API uses an asynchronous callback to return the result. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync]accessibility.getAccessibilityExtensionListSync. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.off('touchGuideStateChange')]accessibility.off(type: 'touchGuideStateChange', callback?: Callback<boolean>) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**起始版本：** 7

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 23开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Vision

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'touchGuideStateChange' | 是 | Event type, which is set to 'touchGuideStateChange' in this API. |
| callback | Callback&lt;boolean> | 是 | Callback invoked when the enabling state of touch guide mode changes. The  value true indicates that the touch guide mode is enabled, and the value false indicates that the touch  guide mode is disabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

// 系统内已安装一个或多个具备触摸浏览能力的辅助应用（Capability配置中含有'touchGuide'的辅助应用）时：
// 1. 启用触摸浏览辅助应用场景：第一个触摸浏览辅助应用启用后，回调函数会返回true。
// 2. 禁用触摸浏览辅助应用场景：若一个或多个触摸浏览辅助应用已启用，最后一个已启用的触摸浏览辅助应用被禁用时，回调函数会返回false。
accessibility.on('touchGuideStateChange', (data: boolean) => {
  console.info(`subscribe touch guide state change, result: ${JSON.stringify(data)}`);
});

```

## on('screenReaderStateChange')

```TypeScript
function on(type: 'screenReaderStateChange', callback: Callback<boolean>): void
```

Subscribes to the state changes of the screen reader. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.off('screenReaderStateChange')]accessibility.off(type: 'screenReaderStateChange', callback?: Callback<boolean>) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**起始版本：** 18

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 23开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'screenReaderStateChange' | 是 | Event type, which is set to 'screenReaderStateChange' in this API. |
| callback | Callback&lt;boolean> | 是 | Callback invoked when the enabling state of screen reader changes. The  value true indicates that the screen reader is enabled, and the value false indicates that the screen  reader is disabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

accessibility.on('screenReaderStateChange', (data: boolean) => {
  console.info(`subscribe screen reader state change, result: ${JSON.stringify(data)}`);
});

```

## on('touchModeChange')

```TypeScript
function on(type: 'touchModeChange', callback: Callback<string>): void
```

Subscribes to the single- or double-touch event changes in touch guide mode. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [accessibility.off('touchModeChange')]accessibility.off(type: 'touchModeChange', callback?: Callback<string>) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**起始版本：** 20

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 23开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'touchModeChange' | 是 | Event type, which is set to 'touchModeChange' in this API. |
| callback | Callback&lt;string> | 是 | Callback to be invoked when the single- or double-touch event changes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 |  |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (mode: string) => void = this.eventCallback;
  eventCallback(mode: string): void {
    console.info(`current touch mode: ${JSON.stringify(mode)}`);
  }

  aboutToAppear(): void {
    accessibility.on('touchModeChange', this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

