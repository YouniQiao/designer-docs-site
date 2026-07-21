# ArkTSVM

A class that provides VM maintenance and test capabilities for developers.

**Since:** 23

<!--Device-util-class ArkTSVM--><!--Device-util-class ArkTSVM-End-->

**System capability:** SystemCapability.Utils.Lang

## Modules to Import

```TypeScript
import { util } from '@kit.ArkTS';
```

<a id="enablelocalhandledetection"></a>
## enableLocalHandleDetection

```TypeScript
static enableLocalHandleDetection(): void
```

Enable the local handle detection to avoid memory leakage in the event looper of Libuv or EventHandler.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-ArkTSVM-static enableLocalHandleDetection(): void--><!--Device-ArkTSVM-static enableLocalHandleDetection(): void-End-->

**System capability:** SystemCapability.Utils.Lang

<a id="getallvmheapmemoryinfo"></a>
## getAllVMHeapMemoryInfo

```TypeScript
static getAllVMHeapMemoryInfo(): Promise<HeapMemoryInfo[]>
```

Get all heap memory information from ArkTS-VMs and the shared heap.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-ArkTSVM-static getAllVMHeapMemoryInfo(): Promise<HeapMemoryInfo[]>--><!--Device-ArkTSVM-static getAllVMHeapMemoryInfo(): Promise<HeapMemoryInfo[]>-End-->

**System capability:** SystemCapability.Utils.Lang

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HeapMemoryInfo[]&gt; | Returns a promise containing all the heap memory information from ArkTS-VMs' local heap and the shared heap. |

<a id="offvmheapmemorypressure"></a>
## offVMHeapMemoryPressure

```TypeScript
static offVMHeapMemoryPressure(): void
```

Unregister the callback that is triggered when the heap memory exceeds the critical warning threshold after a GC.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-ArkTSVM-static offVMHeapMemoryPressure(): void--><!--Device-ArkTSVM-static offVMHeapMemoryPressure(): void-End-->

**System capability:** SystemCapability.Utils.Lang

<a id="onvmheapmemorypressure"></a>
## onVMHeapMemoryPressure

```TypeScript
static onVMHeapMemoryPressure(callback: Callback<string>, heapMemoryThreshold: HeapMemoryThreshold): boolean
```

Register a callback that is triggered if the heap memory exceeds the critical warning threshold after a GC.It must be called on the main thread and only one callback can be registered.

NOTE:There is no guarantee that the callback will be triggered before OOM.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

<!--Device-ArkTSVM-static onVMHeapMemoryPressure(callback: Callback<string>, heapMemoryThreshold: HeapMemoryThreshold): boolean--><!--Device-ArkTSVM-static onVMHeapMemoryPressure(callback: Callback<string>, heapMemoryThreshold: HeapMemoryThreshold): boolean-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;string&gt; | Yes | This callback is triggered if the memory reaches the threshold after a GC.The string parameter indicates the type of memory pressure event:"LocalHeapMemPressure", "SharedHeapMemPressure", or "ProcessHeapMemPressure". |
| heapMemoryThreshold | [HeapMemoryThreshold](arkts-arkts-util-heapmemorythreshold-i.md) | Yes | Indicates the percentage threshold of the heap memory to trigger the callback after a GC. The value range is [70, 95]. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns {@code true} if the registration succeeds;returns {@code false} if not called on the main thread or if the callback is already registered.@static |

<a id="setmultithreadingdetectionenabled"></a>
## setMultithreadingDetectionEnabled

```TypeScript
static setMultithreadingDetectionEnabled(enabled: boolean, options?: MultithreadingDetectionOptions):void
```

Sets whether to enable multithreading detection. When **enabled** is set to **true**, the detection is turned on,and multithreading-related details will be included in the cppcrash files generated for multithreading issues.When **enabled** is set to **false**, the detection is turned off, and no such details will be present in the corresponding cppcrash files.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-ArkTSVM-static setMultithreadingDetectionEnabled(enabled: boolean, options?: MultithreadingDetectionOptions):void--><!--Device-ArkTSVM-static setMultithreadingDetectionEnabled(enabled: boolean, options?: MultithreadingDetectionOptions):void-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean | Yes | Controls whether to enable multithreading detection. **true** means enabling the detection, and **false** means disabling it. |
| options | [MultithreadingDetectionOptions](arkts-arkts-util-multithreadingdetectionoptions-i.md) | No | Optional configuration items<br>**Since:** 26.0.0 |

<a id="settrackglobalref"></a>
## setTrackGlobalRef

```TypeScript
static setTrackGlobalRef(enable: boolean): void
```

Enable or disable tracking of the relationship between napi_ref and global handle. When enabled, heap snapshot will include native reference address information. When disabled (enable is false), the tracking will be stopped and heap snapshot will not display the relationship between native reference and global handle.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-ArkTSVM-static setTrackGlobalRef(enable: boolean): void--><!--Device-ArkTSVM-static setTrackGlobalRef(enable: boolean): void-End-->

**System capability:** SystemCapability.Utils.Lang

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enable | boolean | Yes | The boolean flag enable to Indicates whether to turn on or off tracking, **true** means to turn on tracking, and **false** means to turn off it. |

