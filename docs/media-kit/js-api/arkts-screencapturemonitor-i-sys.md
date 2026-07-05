# ScreenCaptureMonitor

A class that provides APIs to query and monitor the system screen recorder status. Before calling any API, you must use getScreenCaptureMonitor() to obtain a ScreenCaptureMonitor instance.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { media } from '@kit.MediaKit';
```

## off('systemScreenRecorder')

```TypeScript
off(type: 'systemScreenRecorder', callback?: Callback<ScreenCaptureEvent>): void
```

Unsubscribes from state change events of the system screen recorder.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemScreenRecorder' | Yes | Event type, which is 'systemScreenRecorder' in this case.  This event is triggered when the state of the system screen recorder changes. |
| callback | Callback&lt;ScreenCaptureEvent> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |

**Example**

```TypeScript
screenCaptureMonitor.off('systemScreenRecorder');   

```

## offSystemScreenRecorder

```TypeScript
offSystemScreenRecorder(callback?: Callback<ScreenCaptureEvent>): void
```

Unsubscribes from state change events of the system screen recorder. This event is triggered when the state of the system screen recorder changes.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ScreenCaptureEvent> | No |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |

## on('systemScreenRecorder')

```TypeScript
on(type: 'systemScreenRecorder', callback: Callback<ScreenCaptureEvent>): void
```

Subscribes to state change events of the system screen recorder. From the ScreenCaptureEvent event reported, you can determine whether the system screen recorder is working.

**Since:** 18

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'systemScreenRecorder' | Yes | Event type, which is 'systemScreenRecorder' in this case.  This event is triggered when the state of the system screen recorder changes. |
| callback | Callback&lt;ScreenCaptureEvent> | Yes | Callback invoked when the event is triggered,  where ScreenCaptureEvent indicates the new state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |

**Example**

```TypeScript

// This event is reported when the state of the system screen recorder changes.
screenCaptureMonitor.on('systemScreenRecorder', (event: media.ScreenCaptureEvent) => { 
  // Set the 'systemScreenRecorder' event callback.
  console.info(`system ScreenRecorder event: ${event}`);
})

```

## onSystemScreenRecorder

```TypeScript
onSystemScreenRecorder(callback: Callback<ScreenCaptureEvent>): void
```

Subscribes to state change events of the system screen recorder. From the ScreenCaptureEvent event reported, you can determine whether the system screen recorder is working. This event is triggered when the state of the system screen recorder changes.

**Since:** 23

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ScreenCaptureEvent> | Yes | Callback invoked when the event is triggered,  where ScreenCaptureEvent indicates the new state. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Not System App. |

## isSystemScreenRecorderWorking

```TypeScript
readonly isSystemScreenRecorderWorking: boolean
```

Whether the system screen recorder is working.

**Type:** boolean

**Since:** 18

**System capability:** SystemCapability.Multimedia.Media.AVScreenCapture

**System API:** This is a system API.

