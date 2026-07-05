# enableLeakWatcher

## enableLeakWatcher

```TypeScript
function enableLeakWatcher(isEnabled: boolean, configs: Array<string>, callback: Callback<Array<string>>): void
```

Enables the detection for JS object leaks. This function is disabled by default. This API can detect the JS object memory leak, which is simpler than the method that needs to call the **enable**, **watch**, **check**, and **dump** functions. If a memory leak occurs, the leaked file is returned through the callback.

**起始版本：** 20

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isEnabled | boolean | 是 | Whether to enable the detection for JS object memory leaks. true: yes; false  : no. |
| configs | Array&lt;string> | 是 | Configuration item. Each element in the array indicates a specific object type  to monitor. Options: XComponent, NodeContainer, Window, CustomComponent, and Ability.Note: An empty array indicates that all the preceding objects are monitored. |
| callback | Callback&lt;Array&lt;string>> | 是 | Callback used to receive the memory-leaked object returned by the  jsLeakWatcher.enableLeakWatcher API. You need to input an array object in the callback. Index 0 is  the name of the leak list file, whose extension is .jsleaklist. Index 1 is the name of the VM memory  snapshot file, whose extension is .rawheap. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10801001 | The parameter isEnabled is invalid. |
| 10801002 | The parameter config is invalid. |
| 10801003 | The parameter callback is invalid.  Input parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3.Parameter verification failed. |

**示例：**

```TypeScript
let config: Array<string> = ['XComponent'];
// 监测ArkTS对象XComponent的内存泄漏
// 传入空数组代表监测全部对象
jsLeakWatcher.enableLeakWatcher(true, config, (filePath: Array<string>) => {
    console.info('JsLeakWatcher leaklistFileName:' + filePath[0]);
    console.info('JsLeakWatcher heapDumpFileName:' + filePath[1]);
});

```

## enableLeakWatcher

```TypeScript
function enableLeakWatcher(isEnabled: boolean, configs: LeakWatcherConfig, callback: Callback<Array<string>>): void
```

Enables the ArkTS object leak detection. This API can detect memory leaks of ArkTS objects with a single call, which is simpler than the previous method that requires four functions (**enable**, **watch**, **check**, and **dump**). You can use the **configs** parameter to customize the properties of monitoring items, greatly improving the leak detection performance.

**起始版本：** 24

**系统能力：** SystemCapability.HiviewDFX.HiChecker

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| isEnabled | boolean | 是 | Whether to enable the detection for ArkTS object memory leaks. true: yes;  false: no. |
| configs | LeakWatcherConfig | 是 | LeakWatcherConfig object, which contains multiple configurable properties  for memory leak monitoring. Note: If the parameter type in the object is set to null or a false value, the  default value is used. |
| callback | Callback&lt;Array&lt;string>> | 是 | Callback used to receive the memory-leaked object returned by the  jsLeakWatcher.enableLeakWatcher API. You need to input an array object in the callback. Index 0 is  the name of the leak list file, whose extension is .jsleaklist. Index 1 is the name of the VM memory  snapshot file, whose extension is .rawheap. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 10801001 | The parameter isEnabled is invalid. |
| 10801002 | The parameter config is invalid. |
| 10801003 | The parameter callback is invalid.  Input parameter error. Possible causes:  1.Mandatory parameters are left unspecified;  2.Incorrect parameter types;  3.Parameter verification failed. |

**示例：**

```TypeScript
// 监测ArkTS对象CustomComponent和Window的内存泄漏
// 对象中类型传入空值或假值代表该属性设置为默认值
let config: jsLeakWatcher.LeakWatcherConfig = {
    monitorObjectTypes: jsLeakWatcher.MonitorObjectType.CUSTOM_COMPONENT | jsLeakWatcher.MonitorObjectType.WINDOW,
    objectUniqueIDs: [],
    checkInterval: 10000,
    fgLeakCountThreshold: 5,
    bgLeakCountThreshold: 3,
    maxStoredHeapDumps: 5,
    dumpHeapWaitTimeMs: 5000,
    exclusionList: []
};
jsLeakWatcher.enableLeakWatcher(true, config, (filePath : Array<string>) => {
    console.info('JsLeakWatcher leaklistFileName:' + filePath[0]);
    console.info('JsLeakWatcher heapDumpFileName:' + filePath[1]);
});

```

