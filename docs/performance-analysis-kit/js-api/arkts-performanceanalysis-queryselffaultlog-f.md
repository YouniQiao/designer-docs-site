# querySelfFaultLog

## Modules to Import

```TypeScript
import { FaultLogger } from '@kit.PerformanceAnalysisKit';
```

## querySelfFaultLog

```TypeScript
function querySelfFaultLog(faultType: FaultType, callback: AsyncCallback<Array<FaultLogInfo>>): void
```

Obtains the fault information about the current application. This API uses an asynchronous callback to return the
fault information array obtained, which contains a maximum of 10 pieces of fault information.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** query

**System capability:** SystemCapability.HiviewDFX.Hiview.FaultLogger

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| faultType | FaultType | Yes | Fault type. |
| callback | AsyncCallback&lt;Array&lt;FaultLogInfo&gt;&gt; | Yes | Callback used to return the fault information array.<br>**value** is the fault information array obtained. If **value** is **undefined**, an exception occurs duringthe information retrieval. In this case, an error string will be returned. |

**Example**

```TypeScript
import { FaultLogger } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

function queryFaultLogCallback(error: BusinessError, value: Array<FaultLogger.FaultLogInfo>) {
  if (error) {
    console.error(`error code:${error.code}, error msg:${error.message}`);
  } else {
    console.info(`value length: ${value.length}`);
    let len: number = value.length;
    for (let i = 0; i < len; i++) {
      console.info(`log: ${i}`);
      console.info(`Log pid: ${value[i].pid}`);
      console.info(`Log uid: ${value[i].uid}`);
      console.info(`Log type: ${value[i].type}`);
      console.info(`Log timestamp: ${value[i].timestamp}`);
      console.info(`Log reason: ${value[i].reason}`);
      console.info(`Log module: ${value[i].module}`);
      console.info(`Log summary: ${value[i].summary}`);
      console.info(`Log text: ${value[i].fullLog}`);
    }
  }
}
FaultLogger.querySelfFaultLog(FaultLogger.FaultType.JS_CRASH, queryFaultLogCallback);

```


## querySelfFaultLog

```TypeScript
function querySelfFaultLog(faultType: FaultType): Promise<Array<FaultLogInfo>>
```

Obtains the fault information about the current application. This API uses a promise to return the fault
information array obtained, which contains a maximum of 10 pieces of fault information.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** query

**System capability:** SystemCapability.HiviewDFX.Hiview.FaultLogger

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| faultType | FaultType | Yes | Fault type. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;FaultLogInfo&gt;&gt; | Promise used to return the fault information array. You can obtain thefault information instance in its **then()** method or use **await**.<br>**value** is the fault information array obtained. If **value** is **undefined**, an exception occursduring the information retrieval. |

**Example**

```TypeScript
import { FaultLogger } from '@kit.PerformanceAnalysisKit';

async function getLog() {
  let value: Array<FaultLogger.FaultLogInfo> = await FaultLogger.querySelfFaultLog(FaultLogger.FaultType.JS_CRASH);
  if (value) {
    console.info(`value length: ${value.length}`);
    let len: number = value.length;
    for (let i = 0; i < len; i++) {
      console.info(`log: ${i}`);
      console.info(`Log pid: ${value[i].pid}`);
      console.info(`Log uid: ${value[i].uid}`);
      console.info(`Log type: ${value[i].type}`);
      console.info(`Log timestamp: ${value[i].timestamp}`);
      console.info(`Log reason: ${value[i].reason}`);
      console.info(`Log module: ${value[i].module}`);
      console.info(`Log summary: ${value[i].summary}`);
      console.info(`Log text: ${value[i].fullLog}`);
    }
  }
}

```

