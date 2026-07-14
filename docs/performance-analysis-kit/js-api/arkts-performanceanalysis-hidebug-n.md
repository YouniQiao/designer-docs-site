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
| [tags](arkts-performanceanalysis-tags-n.md) | Provide trace tags |

### Functions

| Name | Description |
| --- | --- |
| [getNativeHeapSize](arkts-performanceanalysis-getnativeheapsize-f.md#getnativeheapsize-1) | Obtains the total number of bytes occupied by the total space (**uordblks** + **fordblks**, which are obtained from **mallinfo**) held by a process, which is measured by the memory allocator. |
| [getNativeHeapAllocatedSize](arkts-performanceanalysis-getnativeheapallocatedsize-f.md#getnativeheapallocatedsize-1) | Obtains the total number of bytes occupied by the total allocated space (**uordblks**, which is obtained from **mallinfo**) held by a process, which is measured by the memory allocator. |
| [getNativeHeapFreeSize](arkts-performanceanalysis-getnativeheapfreesize-f.md#getnativeheapfreesize-1) | Obtains the total number of bytes occupied by the total free space (**fordblks**, which is obtained from **mallinfo**) held by a process, which is measured by the memory allocator. |
| [getVss](arkts-performanceanalysis-getvss-f.md#getvss-1) | Obtains the virtual set size used by the application process. This API is implemented by multiplying the value of **size** (number of memory pages) in the **\/proc/{pid}/statm** node by the page size (4 KB per page). |
| [getPss](arkts-performanceanalysis-getpss-f.md#getpss-1) | Obtains the size of the physical memory actually used by the application process. This API is implemented by summing up the values of **Pss** and **SwapPss** in the **\/proc/{pid}/smaps_rollup** node. &gt; **NOTE** &gt; &gt; Reading the **\/proc/{pid}/smaps_rollup** node is time-consuming. Therefore, you are advised not to use this API &gt; in the main thread. You can use this API in the asynchronous thread started by calling &gt; [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md) or [@ohos.worker](../../apis-arkts/arkts-apis/arkts-worker.md) to avoid frame freezing. |
| [getSharedDirty](arkts-performanceanalysis-getshareddirty-f.md#getshareddirty-1) | Obtains the size of the shared dirty memory of a process. This API is implemented by reading the value of **Shared_Dirty** in the **\/proc/{pid}/smaps_rollup** node. &gt; **NOTE** &gt; &gt; Reading the **\/proc/{pid}/smaps_rollup** node is time-consuming. Therefore, you are advised not to use this API &gt; in the main thread. You can use this API in the asynchronous thread started by calling &gt; [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md) or [@ohos.worker](../../apis-arkts/arkts-apis/arkts-worker.md) to avoid frame freezing. |
| [getPrivateDirty](arkts-performanceanalysis-getprivatedirty-f.md#getprivatedirty-1) | Obtains the size of the private dirty memory of a process. This API is implemented by reading the value of **Private_Dirty** in the **\/proc/{pid}/smaps_rollup** node. &gt; **NOTE** &gt; &gt; Reading the **\/proc/{pid}/smaps_rollup** node is time-consuming. Therefore, you are advised not to use this API &gt; in the main thread. You can use this API in the asynchronous thread started by calling &gt; [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md) or [@ohos.worker](../../apis-arkts/arkts-apis/arkts-worker.md) to avoid frame freezing. |
| [getCpuUsage](arkts-performanceanalysis-getcpuusage-f.md#getcpuusage-1) | Obtains the CPU usage of a process. &gt; **NOTE** &gt; &gt; This API involves cross-process communication and takes a long time. To avoid performance problems, you are &gt; advised not to call this API in the main thread. |
| [startProfiling](arkts-performanceanalysis-startprofiling-f.md#startprofiling-1) | Starts the VM profiling method. **startProfiling(filename: string)** and **stopProfiling()** are called in pairs. **startProfiling(filename: string)** always occurs before **stopProfiling()**. You are advised not to call either of these methods repeatedly. Otherwise, an exception may occur. |
| [stopProfiling](arkts-performanceanalysis-stopprofiling-f.md#stopprofiling-1) | Stops the VM profiling method. **stopProfiling()** and **startProfiling(filename: string)** are called in pairs. **startProfiling(filename: string)** always occurs before **stopProfiling()**. You are advised not to call either of these methods repeatedly. Otherwise, an exception may occur. |
| [dumpHeapData](arkts-performanceanalysis-dumpheapdata-f.md#dumpheapdata-1) | Exports the VM heap data and generates a filename.heapsnapshot file. The input parameter is a user-defined file name, excluding the file suffix. The generated file is in the files folder under the application directory. Such as "/data/accounts/account_0/appdata/[package name]/files/xxx.heapsnapshot". |
| [startJsCpuProfiling](arkts-performanceanalysis-startjscpuprofiling-f.md#startjscpuprofiling-1) | Starts the VM profiling method. **startJsCpuProfiling(filename: string)** and **stopJsCpuProfiling()** are called in pairs. **startJsCpuProfiling(filename: string)** always occurs before **stopJsCpuProfiling()**. You are advised not to call either of these methods repeatedly. Otherwise, an exception may occur. |
| [stopJsCpuProfiling](arkts-performanceanalysis-stopjscpuprofiling-f.md#stopjscpuprofiling-1) | Stops the VM profiling method. **stopJsCpuProfiling()** and **startJsCpuProfiling(filename: string)** are called in pairs. **startJsCpuProfiling()** always occurs before **stopJsCpuProfiling()**. You are advised not to call either of these methods repeatedly. Otherwise, an exception may occur. |
| [dumpJsHeapData](arkts-performanceanalysis-dumpjsheapdata-f.md#dumpjsheapdata-1) | Dumps VM heap data. &gt; **NOTE** &gt; &gt; Exporting the VM heap is time-consuming, and this API is a synchronous API. Therefore, you are advised not to &gt; call this API in the release version. Otherwise, the application screen may freeze, affecting user experience. |
| [dumpJsHeapData](arkts-performanceanalysis-dumpjsheapdata-f.md#dumpjsheapdata-2) | Exports the heap data. The input parameter is a user-defined file name, excluding the file suffix. The generated file is in the files folder under the application directory. |
| [getServiceDump](arkts-performanceanalysis-getservicedump-f.md#getservicedump-1) | Obtains system service information. It need dump permission. This API can be called only by system application. |
| [getSystemCpuUsage](arkts-performanceanalysis-getsystemcpuusage-f.md#getsystemcpuusage-1) | Obtains the CPU usage of the system. &gt; **NOTE** &gt; &gt; This API involves cross-process communication and takes a long time. To avoid performance problems, you are &gt; advised not to call this API in the main thread. |
| [getAppThreadCpuUsage](arkts-performanceanalysis-getappthreadcpuusage-f.md#getappthreadcpuusage-1) | Obtains the CPU usage of application threads. &gt; **NOTE** &gt; &gt; This API involves cross-process communication and takes a long time. To avoid performance problems, you are &gt; advised not to call this API in the main thread. |
| [getSystemMemInfo](arkts-performanceanalysis-getsystemmeminfo-f.md#getsystemmeminfo-1) | Obtains system memory information. This API is implemented by reading data from the **\/proc/meminfo** node. |
| [getAppNativeMemInfo](arkts-performanceanalysis-getappnativememinfo-f.md#getappnativememinfo-1) | Obtains the memory information of the application process. This API is implemented by reading data from the **\/proc/{pid}/smaps_rollup and /proc/{pid}/statm** node. &gt; **NOTE** &gt; &gt; Reading the **\/proc/{pid}/smaps_rollup** node takes a long time. You are advised to use the asynchronous API &gt; [hidebug.getAppNativeMemInfoAsync](arkts-performanceanalysis-getappnativememinfoasync-f.md#getappnativememinfoasync-1) to avoid frame loss or frame freezing. &gt; &gt; You are advised to use the [hidebug.getRssInfo](arkts-performanceanalysis-getrssinfo-f.md#getrssinfo-1) API to obtain the RSS information of an &gt; application. |
| [getAppMemoryLimit](arkts-performanceanalysis-getappmemorylimit-f.md#getappmemorylimit-1) | Obtains the memory limit of an application process. |
| [getAppVMMemoryInfo](arkts-performanceanalysis-getappvmmemoryinfo-f.md#getappvmmemoryinfo-1) | Obtains VM memory information. |
| [getAppVMObjectUsedSize](arkts-performanceanalysis-getappvmobjectusedsize-f.md#getappvmobjectusedsize-1) | Obtains the VM memory size occupied by ArkTS objects. |
| [getAppNativeMemInfoAsync](arkts-performanceanalysis-getappnativememinfoasync-f.md#getappnativememinfoasync-1) | Obtains the memory information of application processes by reading the data of the **\/proc/{pid}/smaps_rollup** and **\/proc/{pid}/statm** nodes. This API uses a promise to return the result. |
| [getAppNativeMemInfoWithCache](arkts-performanceanalysis-getappnativememinfowithcache-f.md#getappnativememinfowithcache-1) | Obtains the memory information of the application process. This API uses the cache mechanism and has higher performance than the **getAppNativeMemInfo** API. The cache is valid for 5 minutes. &gt; **NOTE** &gt; &gt; Reading **\/proc/{pid}/smaps_rollup** is time-consuming. Therefore, you are advised not to use this API in the &gt; main thread. You can use [@ohos.taskpool](../../apis-arkts/arkts-apis/arkts-taskpool.md) or [@ohos.worker](../../apis-arkts/arkts-apis/arkts-worker.md) to &gt; enable asynchronous threads to avoid application frame freezing. |
| [startAppTraceCapture](arkts-performanceanalysis-startapptracecapture-f.md#startapptracecapture-1) | Starts automatic trace collection in a specified scope. This API is a supplement to the HiTrace module. The performance consumption during trace collection increases with the collection scope. Therefore, before using this API, you are advised to run the **hitrace** command to capture trace logs and select the key scope of trace collection to improve the API performance. **startAppTraceCapture()** and [stopAppTraceCapture()](arkts-performanceanalysis-stopapptracecapture-f.md#stopapptracecapture-1) must be called in pairs. Repeat calling of **startAppTraceCapture()** will cause exceptions. Trace collection consumes a lot of performance resources. Therefore, call **stopAppTraceCapture()** immediately after trace collection is complete. When an application calls **startAppTraceCapture()** to collect trace data and the size of the data exceeds the value of **limitSize**, the system automatically calls **stopAppTraceCapture()** to stop trace collection. Therefore, if **limitSize** is set improperly, the generated trace data is insufficient for fault analysis. Therefore, you need to evaluate the value of **limitSize** as required. Evaluation method: limitSize = Expected trace collection duration x Unit trace traffic. Expected trace collection duration: You can determine the duration based on the fault scenario. The unit is second. Unit trace traffic: Size of trace data generated by an application per second, in KB/s. The recommended value is 30 0 KB/s. You are advised to use the actual value of your application. To obtain the unit trace traffic of an application, you can call **startAppTraceCapture()** with **limitSize** set to the maximum value 500 MB. After **N** seconds, call **stopAppTraceCapture()** to stop the collection and check the size **S** (KB) of the trace data. The unit trace traffic is **S**\/**N** (KB/s). |
| [stopAppTraceCapture](arkts-performanceanalysis-stopapptracecapture-f.md#stopapptracecapture-1) | Stops application trace collection. Use [startAppTraceCapture()](arkts-performanceanalysis-startapptracecapture-f.md#startapptracecapture-1) to start collection before calling this API. If this API is called before trace collection or it is repeatedly called, an exception will occur. If **startAppTraceCapture ()** is called without a properly specified **limitSize**, the size of the generated trace may exceed the **limitSize** value, causing the system to automatically call **stopAppTraceCapture()**. In this case, if **stopAppTraceCapture()** is called again, an error code 11400105 will be displayed. |
| [requestTrace](arkts-performanceanalysis-requesttrace-f.md#requesttrace-1) | Requests trace collection with the specified configuration. |
| [getVMRuntimeStats](arkts-performanceanalysis-getvmruntimestats-f.md#getvmruntimestats-1) | Obtains the system GC statistics. |
| [getVMRuntimeStat](arkts-performanceanalysis-getvmruntimestat-f.md#getvmruntimestat-1) | Obtains the specified system GC statistics based on parameters. |
| [setAppResourceLimit](arkts-performanceanalysis-setappresourcelimit-f.md#setappresourcelimit-1) | Sets the number of FDs, number of threads, JS memory, or native memory limit of the application. &gt; **NOTE** &gt; &gt; Enable **System resource leak log** in **Developer options** and restart the device for the API to take effect. |
| [isDebugState](arkts-performanceanalysis-isdebugstate-f.md#isdebugstate-1) | Obtains the debugging state of an application process. |
| [getGraphicsMemory](arkts-performanceanalysis-getgraphicsmemory-f.md#getgraphicsmemory-1) | Obtains the total GPU memory size (**gl** + **graph**) of the application. This API uses a promise to return the result. |
| [getGraphicsMemorySync](arkts-performanceanalysis-getgraphicsmemorysync-f.md#getgraphicsmemorysync-1) | Obtains the total GPU memory size (GL + graph) of an application in synchronous mode. &gt; **NOTE** &gt; &gt; This API involves multiple cross-process communications, which may take seconds. To avoid performance problems, &gt; you are advised to use the asynchronous API **getGraphicsMemory** instead of this API in the main thread. |
| [getGraphicsMemorySummary](arkts-performanceanalysis-getgraphicsmemorysummary-f.md#getgraphicsmemorysummary-1) | Obtains the size of the GPU memory summary. This API uses a promise to return the result. |
| [setJsRawHeapTrimLevel](arkts-performanceanalysis-setjsrawheaptrimlevel-f.md#setjsrawheaptrimlevel-1) | Sets the raw heap snapshot trimming level for the current process. |
| [dumpJsRawHeapData](arkts-performanceanalysis-dumpjsrawheapdata-f.md#dumpjsrawheapdata-1) | Dumps the original heap snapshot of the VM for the current thread and generates a .rawheap file. This API uses a promise to return the result. The file can be converted into a heapsnapshot file using rawheap-translator for parsing. &gt; **NOTE** &gt; &gt; This API is resource-consuming. Therefore, the calling frequency and times are strictly limited. You need to &gt; delete the files immediately after processing them. &gt; &gt; This API is valid only when the **Developer options** is enabled. |
| [dumpJsRawHeapData](arkts-performanceanalysis-dumpjsrawheapdata-f.md#dumpjsrawheapdata-2) | Dumps the original heap snapshot of the VM for the current thread. The API uses a promise to return the path of the .rawheap file. You can use rawheap-translator to convert the generated file into a .heapsnapshot file for parsing. The generated file will be stored in a folder within the application directory. However, since this file is usually large, the system imposes restrictions on the frequency and number of calls to this function. Consequently, you might fail to obtain the dump file due to quota limitations. These failures will persist until the quota is regularly refreshed by the system. Therefore, it is advisable to delete the file immediately after you have finished processing it. Moreover, it is recommended that you use this function in the gray - release version. |
| [dumpJsRawHeapData](arkts-performanceanalysis-dumpjsrawheapdata-f.md#dumpjsrawheapdata-3) | Dump the raw heap snapshot of the JavaScript Virtual Machine for the current thread. The generated file will be stored in a folder within the application directory. However, since this file is usually large, the system imposes restrictions on the frequency and number of calls to this function. Consequently, you might fail to obtain the dump file due to quota limitations. These failures will persist until the quota is regularly refreshed by the system. Therefore, it is advisable to delete the file immediately after you have finished processing it. Moreover, it is recommended that you use this function in the gray - release version. |
| [enableGwpAsanGrayscale](arkts-performanceanalysis-enablegwpasangrayscale-f.md#enablegwpasangrayscale-1) | Enable the GWP-ASAN grayscale of your application. |
| [disableGwpAsanGrayscale](arkts-performanceanalysis-disablegwpasangrayscale-f.md#disablegwpasangrayscale-1) | Disables GWP-ASan. This API is used to cancel the custom configuration and restore the default parameter [GwpAsanOptions](arkts-performanceanalysis-gwpasanoptions-i.md). |
| [getGwpAsanGrayscaleState](arkts-performanceanalysis-getgwpasangrayscalestate-f.md#getgwpasangrayscalestate-1) | Obtain the remaining days of GWP-ASan grayscale for your application. |
| [setProcDumpInSharedOOM](arkts-performanceanalysis-setprocdumpinsharedoom-f.md#setprocdumpinsharedoom-1) | Changes the dump heap snapshot from the thread-level to the process-level. &gt; **NOTE** &gt; &gt; To dump a process-level heap snapshot, you must call this API and pass **true**. In addition, SharedHeap OOM must &gt; occur. &gt; &gt; This API does not affect the heap snapshot dumped in other scenarios. For example, it does not affect the result &gt; of [dumpJsRawHeapData](arkts-performanceanalysis-dumpjsrawheapdata-f.md#dumpjsrawheapdata-1). &gt; &gt; This API can be called multiple times in the application lifecycle, but only the last call takes effect. |
| [getRssInfo](arkts-performanceanalysis-getrssinfo-f.md#getrssinfo-1) | Obtains the physical memory information of application process. This API is implemented by reading data from the /proc/{pid}/status node. |

### Interfaces

| Name | Description |
| --- | --- |
| [ThreadCpuUsage](arkts-performanceanalysis-threadcpuusage-i.md) | Describes the CPU usage of a thread. |
| [NativeMemInfo](arkts-performanceanalysis-nativememinfo-i.md) | Describes memory information of the application process. |
| [MemoryLimit](arkts-performanceanalysis-memorylimit-i.md) | Defines the memory limit of the application process. |
| [VMMemoryInfo](arkts-performanceanalysis-vmmemoryinfo-i.md) | Describes the VM memory information. |
| [RequestTraceConfig](arkts-performanceanalysis-requesttraceconfig-i.md) | Describes the trace request configuration. |
| [GraphicsMemorySummary](arkts-performanceanalysis-graphicsmemorysummary-i.md) | Describes the GPU memory data of an application, including the GL and Graph parts. |
| [GwpAsanOptions](arkts-performanceanalysis-gwpasanoptions-i.md) | GwpAsan Options. |
| [RssInfo](arkts-performanceanalysis-rssinfo-i.md) | Describes the physical memory information of the application process. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [SystemMemInfo](arkts-performanceanalysis-systemmeminfo-i.md) | Describes the system memory information, including the total memory, free memory, and available memory. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [TraceFlag](arkts-performanceanalysis-traceflag-e.md) | Describes types of trace collection threads, including the main thread and all threads. |
| [JsRawHeapTrimLevel](arkts-performanceanalysis-jsrawheaptrimlevel-e.md) | Trimming level of raw heap snapshot. |

### Types

| Name | Description |
| --- | --- |
| [GcStats](arkts-performanceanalysis-gcstats-t.md) | Describes the key-value pair used to store GC statistics. This type does not support multi-thread operations. If this type is operated by multiple threads at the same time in an application, use a lock for it. |

