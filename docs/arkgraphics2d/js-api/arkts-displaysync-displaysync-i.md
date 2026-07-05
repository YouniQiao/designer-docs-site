# DisplaySync

帧率和回调函数设置实例。用于帧率设置和回调函数的注册，以及启动和停止回调函数的调用。 下列API示例中都需先使用displaySync.create()方法获取到DisplaySync实例，再通过此实例调用对应方法。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { displaySync } from '@kit.ArkGraphics2D';
```

## off('frame')

```TypeScript
off(type: 'frame', callback?: Callback<IntervalInfo>): void
```

取消订阅每一帧的变化。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frame' | Yes | 设置注册回调的类型（只能是'frame'类型）。 |
| callback | Callback&lt;IntervalInfo> | No |  |

**Example**

```TypeScript
let callback = (frameInfo: displaySync.IntervalInfo) => {
    console.info("DisplaySync", 'TimeStamp:' + frameInfo.timestamp + ' TargetTimeStamp: ' + frameInfo.targetTimestamp);
}

backDisplaySync?.on("frame", callback)

// Unsubscribe from the event.
backDisplaySync?.off("frame", callback)

```

## offFrame

```TypeScript
offFrame(callback?: Callback<IntervalInfo>): void
```

取消订阅每一帧的变化。

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;IntervalInfo> | No |  |

## on('frame')

```TypeScript
on(type: 'frame', callback: Callback<IntervalInfo>): void
```

订阅每一帧的变化。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frame' | Yes | 设置注册回调的类型（只能是'frame'类型）。 |
| callback | Callback&lt;IntervalInfo> | Yes | 订阅函数。 |

**Example**

```TypeScript
let callback = (frameInfo: displaySync.IntervalInfo) => {
    console.info("DisplaySync", 'TimeStamp:' + frameInfo.timestamp + ' TargetTimeStamp: ' + frameInfo.targetTimestamp);
}

// Subscribe to the event.
backDisplaySync?.on("frame", callback)

```

## onFrame

```TypeScript
onFrame(callback: Callback<IntervalInfo>): void
```

订阅每一帧的变化。

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;IntervalInfo> | Yes | 订阅函数。 |

## setExpectedFrameRateRange

```TypeScript
setExpectedFrameRateRange(rateRange: ExpectedFrameRateRange) : void
```

设置期望的帧率范围。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rateRange | ExpectedFrameRateRange | Yes | 设置DisplaySync期望的帧率。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed.  or check if ExpectedFrameRateRange is valid. |

**Example**

```TypeScript
let range : ExpectedFrameRateRange = {
  expected: 10,
  min:0,
  max:120
};

// Set the expected frame rate range.
backDisplaySync?.setExpectedFrameRateRange(range)

```

## start

```TypeScript
start(): void
```

开始每帧回调。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
let range : ExpectedFrameRateRange = {
  expected: 10,
  min:0,
  max:120
};

backDisplaySync?.setExpectedFrameRateRange(range)

let callback = (frameInfo: displaySync.IntervalInfo) => {
    console.info("DisplaySync", 'TimeStamp:' + frameInfo.timestamp + ' TargetTimeStamp: ' + frameInfo.targetTimestamp);
}

backDisplaySync?.on("frame", callback)

// Start callback for each frame.
backDisplaySync?.start()


import { displaySync } from '@kit.ArkGraphics2D';
import { UIContext } from '@kit.ArkUI';

// xxx.ets
@Entry
@Component
struct Index {
  // Create a DisplaySync instance.
  backDisplaySync: displaySync.DisplaySync = displaySync.create();

  aboutToAppear() {
    // Obtain a UIContext instance.
    let uiContext: UIContext = this.getUIContext();
    // Call start() in the current UI context.
    uiContext?.runScopedTask(() => {
      this.backDisplaySync?.start();
    })
  }

  build() {
    // ...
  }
}


```

## stop

```TypeScript
stop(): void
```

停止每帧回调。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Example**

```TypeScript
let range : ExpectedFrameRateRange = {
  expected: 10,
  min:0,
  max:120
};

backDisplaySync?.setExpectedFrameRateRange(range)

let callback = (frameInfo: displaySync.IntervalInfo) => {
    console.info("DisplaySync", 'TimeStamp:' + frameInfo.timestamp + ' TargetTimeStamp: ' + frameInfo.targetTimestamp);
}

backDisplaySync?.on("frame", callback)

backDisplaySync?.start()

// ...

// Stop callback for each frame.
backDisplaySync?.stop()

```

