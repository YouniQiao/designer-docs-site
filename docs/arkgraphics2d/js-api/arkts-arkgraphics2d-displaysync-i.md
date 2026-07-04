# DisplaySync

An object that implements the setting of the frame rate and callback. It provides APIs for you to set the frame rate, register a callback, and start/stop the callback. Before calling any of the following APIs, you must use [displaySync.create()](arkts-arkgraphics2d-create-f.md#create-1) to create a **DisplaySync** instance.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { displaySync } from '@ohos.graphics.displaySync';
```

## off('frame')

```TypeScript
off(type: 'frame', callback?: Callback<IntervalInfo>): void
```

Unsubscribes from change events of each frame.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frame' | Yes | Event type. The value is fixed at **'frame'**. |
| callback | Callback&lt;IntervalInfo&gt; | No | Callback used for unsubscription.If no value is passed in, all subscriptions to the specified event are canceled. |

**Example**

```TypeScript
let callback = (frameInfo: displaySync.IntervalInfo) => {
    console.info("DisplaySync", 'TimeStamp:' + frameInfo.timestamp + ' TargetTimeStamp: ' + frameInfo.targetTimestamp);
}

backDisplaySync?.on("frame", callback)

// Unsubscribe from the event.
backDisplaySync?.off("frame", callback)

```

## on('frame')

```TypeScript
on(type: 'frame', callback: Callback<IntervalInfo>): void
```

Subscribes to change events of each frame.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'frame' | Yes | Event type. The value is fixed at **'frame'**. |
| callback | Callback&lt;IntervalInfo&gt; | Yes | Callback used for subscription. |

**Example**

```TypeScript
let callback = (frameInfo: displaySync.IntervalInfo) => {
    console.info("DisplaySync", 'TimeStamp:' + frameInfo.timestamp + ' TargetTimeStamp: ' + frameInfo.targetTimestamp);
}

// Subscribe to the event.
backDisplaySync?.on("frame", callback)

```

## setExpectedFrameRateRange

```TypeScript
setExpectedFrameRateRange(rateRange: ExpectedFrameRateRange) : void
```

Sets the expected frame rate range.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rateRange | ExpectedFrameRateRange | Yes | Expected frame rate range. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes:<br> 1. Mandatory parameters are left unspecified.<br> 2. Incorrect parameters types.<br> 3. Parameter verification failed.or check if ExpectedFrameRateRange is valid. |

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

Starts callback for each frame.

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

```

```TypeScript
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

Stops callback for each frame.

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

