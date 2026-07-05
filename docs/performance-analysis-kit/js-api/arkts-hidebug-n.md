# hidebug

Provide interfaces related to debugger access and obtaining CPU, memory and other virtual machine information during runtime for JS programs

**Since:** 12

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

## Modules to Import

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';
```

## Summary

### Namespaces

| Name | Description |
| --- | --- |
| [tags](arkts-hidebug-tags-n.md) | Provide trace tags |

### Functions

| Name | Description |
| --- | --- |
| [disableGwpAsanGrayscale](arkts-hidebug-disablegwpasangrayscale-f.md#disableGwpAsanGrayscale-1) | Disables GWP-ASan. This API is used to cancel the custom configuration and restore the default parameter [GwpAsanOptions](arkts-hidebug-gwpasanoptions-i.md#GwpAsanOptions). |
| [dumpHeapData](arkts-hidebug-dumpheapdata-f.md#dumpHeapData-1) | Exports the VM heap data and generates a filename.heapsnapshot file. The input parameter is a user-defined file name, excluding the file suffix. The generated file is in the files folder under the application directory. Such as "/data/accounts/account_0/appdata/[package name]/files/xxx.heapsnapshot". |
| [dumpJsHeapData](arkts-hidebug-dumpjsheapdata-f.md#dumpJsHeapData-1) | Dumps VM heap data. > **NOTE** > > Exporting the VM heap is time-consuming, and this API is a synchronous API. Therefore, you are advised not to > call this API in the release version. Otherwise, the application screen may freeze, affecting user experience. |
| [dumpJsHeapData](arkts-hidebug-dumpjsheapdata-f.md#dumpJsHeapData-2) | Exports the heap data. The input parameter is a user-defined file name, excluding the file suffix. The generated file is in the files folder under the application directory. |
| [dumpJsRawHeapData](arkts-hidebug-dumpjsrawheapdata-f.md#dumpJsRawHeapData-1) | Dumps the original heap snapshot of the VM for the current thread and generates a .rawheap file. This API uses a promise to return the result. The file can be converted into a heapsnapshot file using rawheap-translator for parsing. > **NOTE** > > This API is resource-consuming. Therefore, the calling frequency and times are strictly limited. You need to > delete the files immediately after processing them. > > This API is valid only when the **Developer options** is enabled. |
| [dumpJsRawHeapData](arkts-hidebug-dumpjsrawheapdata-f.md#dumpJsRawHeapData-2) | Dumps the original heap snapshot of the VM for the current thread. The API uses a promise to return the path of the .rawheap file. You can use rawheap-translator to convert the generated file into a .heapsnapshot file for parsing. The generated file will be stored in a folder within the application directory. However, since this file is usually large, the system imposes restrictions on the frequency and number of calls to this function. Consequently, you might fail to obtain the dump file due to quota limitations. These failures will persist until the quota is regularly refreshed by the system. Therefore, it is advisable to delete the file immediately after you have finished processing it. Moreover, it is recommended that you use this function in the gray - release version. |
| [dumpJsRawHeapData](arkts-hidebug-dumpjsrawheapdata-f.md#dumpJsRawHeapData-3) | Dump the raw heap snapshot of the JavaScript Virtual Machine for the current thread. The generated file will be stored in a folder within the application directory. However, since this file is usually large, the system imposes restrictions on the frequency and number of calls to this function. Consequently, you might fail to obtain the dump file due to quota limitations. These failures will persist until the quota is regularly refreshed by the system. Therefore, it is advisable to delete the file immediately after you have finished processing it. Moreover, it is recommended that you use this function in the gray - release version. |
| [enableGwpAsanGrayscale](arkts-hidebug-enablegwpasangrayscale-f.md#enableGwpAsanGrayscale-1) | Enable the GWP-ASAN grayscale of your application. |
| [getAppMemoryLimit](arkts-hidebug-getappmemorylimit-f.md#getAppMemoryLimit-1) | Obtains the memory limit of an application process. |
| [getAppNativeMemInfo](arkts-hidebug-getappnativememinfo-f.md#getAppNativeMemInfo-1) | Obtains the memory information of the application process. This API is implemented by reading data from the **\/proc/{pid}/smaps_rollup and /proc/{pid}/statm** node. > **NOTE** > > Reading the **\/proc/{pid}/smaps_rollup** node takes a long time. You are advised to use the asynchronous API > [hidebug.getAppNativeMemInfoAsync](arkts-hidebug-getappnativememinfoasync-f.md#getAppNativeMemInfoAsync-1) to avoid frame loss or frame freezing. > > You are advised to use the [hidebug.getRssInfo](arkts-hidebug-getrssinfo-f.md#getRssInfo-1) API to obtain the RSS information of an > application. |
| [getAppNativeMemInfoAsync](arkts-hidebug-getappnativememinfoasync-f.md#getAppNativeMemInfoAsync-1) | Obtains the memory information of application processes by reading the data of the **\/proc/{pid}/smaps_rollup** and **\/proc/{pid}/statm** nodes. This API uses a promise to return the result. |
| [getAppNativeMemInfoWithCache](arkts-hidebug-getappnativememinfowithcache-f.md#getAppNativeMemInfoWithCache-1) | Obtains the memory information of the application process. This API uses the cache mechanism and has higher performance than the **getAppNativeMemInfo** API. The cache is valid for 5 minutes. > **NOTE** > > Reading **\/proc/{pid}/smaps_rollup** is time-consuming. Therefore, you are advised not to use this API in the > main thread. You can use [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) or [@ohos.worker]@ohos.worker to > enable asynchronous threads to avoid application frame freezing. |
| [getAppThreadCpuUsage](arkts-hidebug-getappthreadcpuusage-f.md#getAppThreadCpuUsage-1) | Obtains the CPU usage of application threads. > **NOTE** > > This API involves cross-process communication and takes a long time. To avoid performance problems, you are > advised not to call this API in the main thread. |
| [getAppVMMemoryInfo](arkts-hidebug-getappvmmemoryinfo-f.md#getAppVMMemoryInfo-1) | Obtains VM memory information. |
| [getAppVMObjectUsedSize](arkts-hidebug-getappvmobjectusedsize-f.md#getAppVMObjectUsedSize-1) | Obtains the VM memory size occupied by ArkTS objects. |
| [getCpuUsage](arkts-hidebug-getcpuusage-f.md#getCpuUsage-1) | Obtains the CPU usage of a process. > **NOTE** > > This API involves cross-process communication and takes a long time. To avoid performance problems, you are > advised not to call this API in the main thread. |
| [getGraphicsMemory](arkts-hidebug-getgraphicsmemory-f.md#getGraphicsMemory-1) | Obtains the total GPU memory size (**gl** + **graph**) of the application. This API uses a promise to return the result. |
| [getGraphicsMemorySummary](arkts-hidebug-getgraphicsmemorysummary-f.md#getGraphicsMemorySummary-1) | Obtains the size of the GPU memory summary. This API uses a promise to return the result. |
| [getGraphicsMemorySync](arkts-hidebug-getgraphicsmemorysync-f.md#getGraphicsMemorySync-1) | Obtains the total GPU memory size (GL + graph) of an application in synchronous mode. > **NOTE** > > This API involves multiple cross-process communications, which may take seconds. To avoid performance problems, > you are advised to use the asynchronous API **getGraphicsMemory** instead of this API in the main thread. |
| [getGwpAsanGrayscaleState](arkts-hidebug-getgwpasangrayscalestate-f.md#getGwpAsanGrayscaleState-1) | Obtain the remaining days of GWP-ASan grayscale for your application. |
| [getNativeHeapAllocatedSize](arkts-hidebug-getnativeheapallocatedsize-f.md#getNativeHeapAllocatedSize-1) | Obtains the total number of bytes occupied by the total allocated space (**uordblks**, which is obtained from **mallinfo**) held by a process, which is measured by the memory allocator. |
| [getNativeHeapFreeSize](arkts-hidebug-getnativeheapfreesize-f.md#getNativeHeapFreeSize-1) | Obtains the total number of bytes occupied by the total free space (**fordblks**, which is obtained from **mallinfo**) held by a process, which is measured by the memory allocator. |
| [getNativeHeapSize](arkts-hidebug-getnativeheapsize-f.md#getNativeHeapSize-1) | Obtains the total number of bytes occupied by the total space (**uordblks** + **fordblks**, which are obtained from **mallinfo**) held by a process, which is measured by the memory allocator. |
| [getPrivateDirty](arkts-hidebug-getprivatedirty-f.md#getPrivateDirty-1) | Obtains the size of the private dirty memory of a process. This API is implemented by reading the value of **Private_Dirty** in the **\/proc/{pid}/smaps_rollup** node. > **NOTE** > > Reading the **\/proc/{pid}/smaps_rollup** node is time-consuming. Therefore, you are advised not to use this API > in the main thread. You can use this API in the asynchronous thread started by calling > [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) or [@ohos.worker]@ohos.worker to avoid frame freezing. |
| [getPss](arkts-hidebug-getpss-f.md#getPss-1) | Obtains the size of the physical memory actually used by the application process. This API is implemented by summing up the values of **Pss** and **SwapPss** in the **\/proc/{pid}/smaps_rollup** node. > **NOTE** > > Reading the **\/proc/{pid}/smaps_rollup** node is time-consuming. Therefore, you are advised not to use this API > in the main thread. You can use this API in the asynchronous thread started by calling > [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) or [@ohos.worker]@ohos.worker to avoid frame freezing. |
| [getRssInfo](arkts-hidebug-getrssinfo-f.md#getRssInfo-1) | Obtains the physical memory information of application process. This API is implemented by reading data from the /proc/{pid}/status node. |
| [getServiceDump](arkts-hidebug-getservicedump-f.md#getServiceDump-1) | Obtains system service information. It need dump permission. This API can be called only by system application. |
| [getSharedDirty](arkts-hidebug-getshareddirty-f.md#getSharedDirty-1) | Obtains the size of the shared dirty memory of a process. This API is implemented by reading the value of **Shared_Dirty** in the **\/proc/{pid}/smaps_rollup** node. > **NOTE** > > Reading the **\/proc/{pid}/smaps_rollup** node is time-consuming. Therefore, you are advised not to use this API > in the main thread. You can use this API in the asynchronous thread started by calling > [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md#taskpool) or [@ohos.worker]@ohos.worker to avoid frame freezing. |
| [getSystemCpuUsage](arkts-hidebug-getsystemcpuusage-f.md#getSystemCpuUsage-1) | Obtains the CPU usage of the system. > **NOTE** > > This API involves cross-process communication and takes a long time. To avoid performance problems, you are > advised not to call this API in the main thread. |
| [getSystemMemInfo](arkts-hidebug-getsystemmeminfo-f.md#getSystemMemInfo-1) | Obtains system memory information. This API is implemented by reading data from the **\/proc/meminfo** node. |
| [getVMRuntimeStat](arkts-hidebug-getvmruntimestat-f.md#getVMRuntimeStat-1) | Obtains the specified system GC statistics based on parameters. |
| [getVMRuntimeStats](arkts-hidebug-getvmruntimestats-f.md#getVMRuntimeStats-1) | Obtains the system GC statistics. |
| [getVss](arkts-hidebug-getvss-f.md#getVss-1) | Obtains the virtual set size used by the application process. This API is implemented by multiplying the value of **size** (number of memory pages) in the **\/proc/{pid}/statm** node by the page size (4 KB per page). |
| [isDebugState](arkts-hidebug-isdebugstate-f.md#isDebugState-1) | Obtains the debugging state of an application process. |
| [requestTrace](arkts-hidebug-requesttrace-f.md#requestTrace-1) | Requests trace collection with the specified configuration. |
| [setAppResourceLimit](arkts-hidebug-setappresourcelimit-f.md#setAppResourceLimit-1) | Sets the number of FDs, number of threads, JS memory, or native memory limit of the application. > **NOTE** > > Enable **System resource leak log** in **Developer options** and restart the device for the API to take effect. |
| [setJsRawHeapTrimLevel](arkts-hidebug-setjsrawheaptrimlevel-f.md#setJsRawHeapTrimLevel-1) | Sets the raw heap snapshot trimming level for the current process. |
| [setProcDumpInSharedOOM](arkts-hidebug-setprocdumpinsharedoom-f.md#setProcDumpInSharedOOM-1) | Changes the dump heap snapshot from the thread-level to the process-level. > **NOTE** > > To dump a process-level heap snapshot, you must call this API and pass **true**. In addition, SharedHeap OOM must > occur. > > This API does not affect the heap snapshot dumped in other scenarios. For example, it does not affect the result > of [dumpJsRawHeapData](arkts-hidebug-dumpjsrawheapdata-f.md#dumpJsRawHeapData-1). > > This API can be called multiple times in the application lifecycle, but only the last call takes effect. |
| [startAppTraceCapture](arkts-hidebug-startapptracecapture-f.md#startAppTraceCapture-1) | Starts automatic trace collection in a specified scope. This API is a supplement to the HiTrace module. The performance consumption during trace collection increases with the collection scope. Therefore, before using this API, you are advised to run the **hitrace** command to capture trace logs and select the key scope of trace collection to improve the API performance. **startAppTraceCapture()** and [stopAppTraceCapture()](arkts-hidebug-stopapptracecapture-f.md#stopAppTraceCapture-1) must be called in pairs. Repeat calling of **startAppTraceCapture()** will cause exceptions. Trace collection consumes a lot of performance resources. Therefore, call **stopAppTraceCapture()** immediately after trace collection is complete. When an application calls **startAppTraceCapture()** to collect trace data and the size of the data exceeds the value of **limitSize**, the system automatically calls **stopAppTraceCapture()** to stop trace collection. Therefore, if **limitSize** is set improperly, the generated trace data is insufficient for fault analysis. Therefore, you need to evaluate the value of **limitSize** as required. Evaluation method: limitSize = Expected trace collection duration x Unit trace traffic. Expected trace collection duration: You can determine the duration based on the fault scenario. The unit is second. Unit trace traffic: Size of trace data generated by an application per second, in KB/s. The recommended value is 30 0 KB/s. You are advised to use the actual value of your application. To obtain the unit trace traffic of an application, you can call **startAppTraceCapture()** with **limitSize** set to the maximum value 500 MB. After **N** seconds, call **stopAppTraceCapture()** to stop the collection and check the size **S** (KB) of the trace data. The unit trace traffic is **S**\/**N** (KB/s). |
| [startJsCpuProfiling](arkts-hidebug-startjscpuprofiling-f.md#startJsCpuProfiling-1) | Starts the VM profiling method. **startJsCpuProfiling(filename: string)** and **stopJsCpuProfiling()** are called in pairs. **startJsCpuProfiling(filename: string)** always occurs before **stopJsCpuProfiling()**. You are advised not to call either of these methods repeatedly. Otherwise, an exception may occur. |
| [startProfiling](arkts-hidebug-startprofiling-f.md#startProfiling-1) | Starts the VM profiling method. **startProfiling(filename: string)** and **stopProfiling()** are called in pairs. **startProfiling(filename: string)** always occurs before **stopProfiling()**. You are advised not to call either of these methods repeatedly. Otherwise, an exception may occur. |
| [stopAppTraceCapture](arkts-hidebug-stopapptracecapture-f.md#stopAppTraceCapture-1) | Stops application trace collection. Use [startAppTraceCapture()](arkts-hidebug-startapptracecapture-f.md#startAppTraceCapture-1) to start collection before calling this API. If this API is called before trace collection or it is repeatedly called, an exception will occur. If **startAppTraceCapture ()** is called without a properly specified **limitSize**, the size of the generated trace may exceed the **limitSize** value, causing the system to automatically call **stopAppTraceCapture()**. In this case, if **stopAppTraceCapture()** is called again, an error code 11400105 will be displayed. |
| [stopJsCpuProfiling](arkts-hidebug-stopjscpuprofiling-f.md#stopJsCpuProfiling-1) | Stops the VM profiling method. **stopJsCpuProfiling()** and **startJsCpuProfiling(filename: string)** are called in pairs. **startJsCpuProfiling()** always occurs before **stopJsCpuProfiling()**. You are advised not to call either of these methods repeatedly. Otherwise, an exception may occur. |
| [stopProfiling](arkts-hidebug-stopprofiling-f.md#stopProfiling-1) | Stops the VM profiling method. **stopProfiling()** and **startProfiling(filename: string)** are called in pairs. **startProfiling(filename: string)** always occurs before **stopProfiling()**. You are advised not to call either of these methods repeatedly. Otherwise, an exception may occur. |

### Interfaces

| Name | Description |
| --- | --- |
| [GraphicsMemorySummary](arkts-hidebug-graphicsmemorysummary-i.md) | Describes the GPU memory data of an application, including the GL and Graph parts. |
| [GwpAsanOptions](arkts-hidebug-gwpasanoptions-i.md) | GwpAsan Options. |
| [MemoryLimit](arkts-hidebug-memorylimit-i.md) | Defines the memory limit of the application process. |
| [NativeMemInfo](arkts-hidebug-nativememinfo-i.md) | Describes memory information of the application process. |
| [RequestTraceConfig](arkts-hidebug-requesttraceconfig-i.md) | Describes the trace request configuration. |
| [RssInfo](arkts-hidebug-rssinfo-i.md) | Describes the physical memory information of the application process. |
| [SystemMemInfo](arkts-hidebug-systemmeminfo-i.md) | Describes the system memory information, including the total memory, free memory, and available memory. |
| [ThreadCpuUsage](arkts-hidebug-threadcpuusage-i.md) | Describes the CPU usage of a thread. |
| [VMMemoryInfo](arkts-hidebug-vmmemoryinfo-i.md) | Describes the VM memory information. |

### Types

| Name | Description |
| --- | --- |
| [GcStats](arkts-hidebug-gcstats-t.md) | Describes the key-value pair used to store GC statistics. This type does not support multi-thread operations. If this type is operated by multiple threads at the same time in an application, use a lock for it. |

### Enums

| Name | Description |
| --- | --- |
| [JsRawHeapTrimLevel](arkts-hidebug-jsrawheaptrimlevel-e.md) | Trimming level of raw heap snapshot. |
| [TraceFlag](arkts-hidebug-traceflag-e.md) | Describes types of trace collection threads, including the main thread and all threads. |

