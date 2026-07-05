# CaptionsManager

Implements configuration management for captions. Before calling any API of **CaptionsManager**, you must use the [accessibility.getCaptionsManager()]accessibility.getCaptionsManager API to obtain a **CaptionsManager** instance.

**起始版本：** 8

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

## 导入模块

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
```

## off('enableChange')

```TypeScript
off(type: 'enableChange', callback?: Callback<boolean>): void
```

Unsubscribes from the state changes of captions configuration. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'enableChange' | 是 | Event type, which is set to 'enableChange' in this API. |
| callback | Callback&lt;boolean> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (data: boolean) => void = this.eventCallback;
  eventCallback(data: boolean): void {
    console.info(`subscribe caption manager enable state change, result: ${JSON.stringify(data)}`);
  }

  aboutToAppear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.on('enableChange', this.callback);
  }

  aboutToDisappear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.off('enableChange', this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

## off('styleChange')

```TypeScript
off(type: 'styleChange', callback?: Callback<CaptionsStyle>): void
```

Unsubscribes from the captions style changes. This API uses an asynchronous callback to return the result.

**起始版本：** 8

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'styleChange' | 是 | Event type, which is set to 'styleChange' in this API. |
| callback | Callback&lt;CaptionsStyle> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (data: accessibility.CaptionsStyle) => void = this.eventCallback;
  eventCallback(data: accessibility.CaptionsStyle): void {
    console.info(`subscribe caption manager style state change, result: ${JSON.stringify(data)}`);
  }

  aboutToAppear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.on('styleChange', this.callback);
  }

  aboutToDisappear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.off('styleChange', this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

## offEnableChange

```TypeScript
offEnableChange(callback?: Callback<boolean>): void
```

Unregister the observe of the enable state.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 否 |  |

## offStyleChange

```TypeScript
offStyleChange(callback?: Callback<CaptionsStyle>): void
```

Unregister the observer of the style.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CaptionsStyle> | 否 |  |

## on('enableChange')

```TypeScript
on(type: 'enableChange', callback: Callback<boolean>): void
```

Subscribes to the state changes of captions configuration. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [off('enableChange')]accessibility.CaptionsManager.off(type: 'enableChange', callback?: Callback<boolean>) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**起始版本：** 8

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'enableChange' | 是 | Event type, which is set to 'enableChange' in this API. |
| callback | Callback&lt;boolean> | 是 | Callback invoked when the enabled status of captions configuration  changes. The value true indicates that the subtitle configuration is enabled, and the value false  indicates that the subtitle configuration is disabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (data: boolean) => void = this.eventCallback;
  eventCallback(data: boolean): void {
    console.info(`subscribe caption manager enable state change, result: ${JSON.stringify(data)}`);
  }

  aboutToAppear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.on('enableChange', this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

## on('styleChange')

```TypeScript
on(type: 'styleChange', callback: Callback<CaptionsStyle>): void
```

Subscribes to captions style changes. This API uses an asynchronous callback to return the result. > **NOTE** > > - The callback parameter for registering a listener must use a named function instead of an anonymous function. > Otherwise, a new underlying object is created each time the function is called, causing memory leakage. > > - After calling this method, you must use > [off('styleChange')]accessibility.CaptionsManager.off(type: 'styleChange', callback?: Callback<CaptionsStyle>) > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.

**起始版本：** 8

**废弃版本：** 12

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'styleChange' | 是 | Event type, which is set to 'styleChange' in this API. |
| callback | Callback&lt;CaptionsStyle> | 是 | Callback invoked when the style of captions changes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';

@Entry
@Component
struct Index {
  callback: (data: accessibility.CaptionsStyle) => void = this.eventCallback;
  eventCallback(data: accessibility.CaptionsStyle): void {
    console.info(`subscribe caption manager style state change, result: ${JSON.stringify(data)}`);
  }

  aboutToAppear(): void {
    let captionsManager = accessibility.getCaptionsManager();
    captionsManager.on('styleChange', this.callback);
  }

  build() {
    Column() {
    }
  }
}

```

## onEnableChange

```TypeScript
onEnableChange(callback: Callback<boolean>): void
```

Register the observe of the enable state.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;boolean> | 是 |  |

## onStyleChange

```TypeScript
onStyleChange(callback: Callback<CaptionsStyle>): void
```

Register the observer of the style.

**起始版本：** 23

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;CaptionsStyle> | 是 |  |

## style

```TypeScript
style: CaptionsStyle
```

Style of captions.

**类型：** CaptionsStyle

**起始版本：** 8

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 23开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

## enabled

```TypeScript
enabled: boolean
```

Whether to enable captions configuration. The value **true** indicates that the caption configuration is enabled, and **false** indicates the opposite.

**类型：** boolean

**起始版本：** 8

**原子化服务API：** 从API version 23开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 23开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Hearing

