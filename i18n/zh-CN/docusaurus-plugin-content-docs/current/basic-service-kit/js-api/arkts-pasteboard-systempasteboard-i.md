# SystemPasteboard

Provides **SystemPasteboard** APIs. Before calling any **SystemPasteboard** API, you must obtain a **SystemPasteboard** object using [getSystemPasteboard]pasteboard.getSystemPasteboard().

**起始版本：** 6

**系统能力：** SystemCapability.MiscServices.Pasteboard

## 导入模块

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit';
```

## clear

```TypeScript
clear(callback: AsyncCallback<void>): void
```

Clears the system pasteboard. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.SystemPasteboard.clearData(callback:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.clear((err, data) => {
    if (err) {
        console.error(`Failed to clear the PasteData. Cause: ${err.message}`);
        return;
    }
    console.info('Succeeded in clearing the PasteData.');
});

```

## clear

```TypeScript
clear(): Promise<void>
```

Clears the system pasteboard. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.SystemPasteboard.clearData()

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.clear().then((data) => {
    console.info('Succeeded in clearing the PasteData.');
}).catch((err: BusinessError) => {
    console.error(`Failed to clear the PasteData. Cause: ${err.message}`);
});

```

## clearData

```TypeScript
clearData(callback: AsyncCallback<void>): void
```

Clears the system pasteboard. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
// 获取系统剪贴板对象
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
// 清空系统剪贴板内容
systemPasteboard.clearData((err, data) => {
    if (err) {
        console.error(`Failed to clear the pasteboard. Cause: ${err.message}`);
        return;
    }
    console.info('Succeeded in clearing the pasteboard.');
});

```

## clearData

```TypeScript
clearData(): Promise<void>
```

Clears the system pasteboard. This API uses a promise to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.clearData().then((data: void) => {
    console.info('Succeeded in clearing the pasteboard.');
}).catch((err: BusinessError) => {
    console.error(`Failed to clear the pasteboard. Cause: ${err.message}`);
});

```

## clearDataSync

```TypeScript
clearDataSync(): void
```

Clears the system pasteboard. This API returns the result synchronously.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12900005 | Excessive processing time for internal data. |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
    systemPasteboard.clearDataSync();
    console.info('Succeeded in clearing the pasteboard.');
} catch (err) {
    console.error('Failed to clear the pasteboard. Cause: ' + err.message);
};

```

## detectPatterns

```TypeScript
detectPatterns(patterns: Array<Pattern>): Promise<Array<Pattern>>
```

Detects [patterns]pasteboard.Pattern in the system pasteboard. This API uses a promise to return the result.

**起始版本：** 13

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| patterns | Array&lt;Pattern> | 是 | Pattern to be detected in the system pasteboard. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;Pattern>> | Promise used to return the detected patterns. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |

**示例：**

```TypeScript
import { pasteboard } from '@kit.BasicServicesKit'

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
let patterns: Array<pasteboard.Pattern> = [pasteboard.Pattern.URL, pasteboard.Pattern.EMAIL_ADDRESS];

systemPasteboard.detectPatterns(patterns).then((data: Array<pasteboard.Pattern>) => {
    if (patterns.sort().join('')==data.sort().join('')) {
      console.info('All needed patterns detected, next get data');
      try {
        let result: pasteboard.PasteData = systemPasteboard.getDataSync();
        console.info('Succeeded in getting PasteData.');
      } catch (err) {
        console.error('Failed to get PasteData. Cause:' + err.message);
      };
    } else {
      console.info("Not all needed patterns detected, no need to get data.");
    }
});

```

## getChangeCount

```TypeScript
getChangeCount(): long
```

Obtains the number of pasteboard content changes. Returns the number of pasteboard content changes if this API is called successfully; returns **0** otherwise. Even though the PasteData expires, or the data becomes empty because of the called [clearDataSync]pasteboard.SystemPasteboard.clearDataSync() API, the number of data changes remains. When the system is restarted, or the pasteboard service is restarted due to an exception, the number of PasteData changes counts from 0. In addition, copying the same data repeatedly is considered to change the data for multiple times. Therefore, each time the data is copied, the number of data changes increases.

**起始版本：** 18

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | The number of pasteboard content changes obtained. |

**示例：**

```TypeScript
import { BusinessError, pasteboard } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
    let result : number = systemPasteboard.getChangeCount();
    console.info(`Succeeded in getting the ChangeCount. Result: ${result}`);
} catch (err) {
    console.error(`Failed to get the ChangeCount. Cause: ${err.message}`);
};

```

## getData

```TypeScript
getData(callback: AsyncCallback<PasteData>): void
```

Obtains a **PasteData** object from the pasteboard. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**需要权限：** 

- API版本12+： ohos.permission.READ_PASTEBOARD

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;PasteData> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 27787277 | Another copy or paste operation is in progress. |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. [since 12] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取系统剪贴板对象
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
// 读取系统剪贴板内容
systemPasteboard.getData((err: BusinessError, pasteData: pasteboard.PasteData) => {
    if (err) {
        console.error('Failed to get PasteData. Cause: ' + err.message);
        return;
    }
    // 获取剪贴板中的纯文本内容
    let text: string = pasteData.getPrimaryText();
});

```

## getData

```TypeScript
getData(): Promise<PasteData>
```

Obtains a **PasteData** object from the pasteboard. This API uses a promise to return the result.

**起始版本：** 9

**需要权限：** 

- API版本12+： ohos.permission.READ_PASTEBOARD

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PasteData> | Promise used to return the system PasteData. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 27787277 | Another copy or paste operation is in progress. |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. [since 12] |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取系统剪贴板对象
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
// 读取系统剪贴板内容
systemPasteboard.getData().then((pasteData: pasteboard.PasteData) => {
    // 获取剪贴板中的纯文本内容
    let text: string = pasteData.getPrimaryText();
}).catch((err: BusinessError) => {
    console.error('Failed to get PasteData. Cause: ' + err.message);
});

```

## getDataSource

```TypeScript
getDataSource(): string
```

Obtains the name of the application that provides data.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Application name. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12900005 | Excessive processing time for internal data. |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
    let result: string = systemPasteboard.getDataSource();
    console.info(`Succeeded in getting DataSource. Result: ${result}`);
} catch (err) { 
    console.error('Failed to get DataSource. Cause: ' + err.message);
};

```

## getDataSync

```TypeScript
getDataSync(): PasteData
```

Obtains a **PasteData** object from the pasteboard. This API returns the result synchronously.

**起始版本：** 11

**需要权限：** 

- API版本12+： ohos.permission.READ_PASTEBOARD

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PasteData | Data in the system pasteboard. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12900005 | Excessive processing time for internal data. |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. [since 12] |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
    let result: pasteboard.PasteData = systemPasteboard.getDataSync();
    console.info('Succeeded in getting PasteData.');
} catch (err) {
    console.error('Failed to get PasteData. Cause:' + err.message);
};   

```

## getDataWithProgress

```TypeScript
getDataWithProgress(params: GetDataParams): Promise<PasteData>
```

Obtains the PasteData from the system pasteboard with system progress. This API uses a promise to return the result. Folders cannot be copied.

**起始版本：** 15

**需要权限：** 

 ohos.permission.READ_PASTEBOARD

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | GetDataParams | 是 | Parameters required when an application obtains the Data from the  system pasteboard, including the destination path, file conflict options, and progress indicator types. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PasteData> | Promise used to return the system PasteData. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. |
| 401 | Parameter error. |
| 12900003 | Another copy or paste operation is in progress. |
| 12900007 | Invalid destUri or file system error. |
| 12900008 | Failed to start progress. |
| 12900009 | Progress exits abnormally. |
| 12900010 | System error occurred during paste execution. |

**示例：**

```TypeScript
import { BusinessError, pasteboard } from '@kit.BasicServicesKit';
import { fileUri } from '@kit.CoreFileKit';
@Entry
@Component
struct PasteboardTest {
 build() {
   RelativeContainer() {
     Column() {
       Column() {
         Button("Copy txt")
           .onClick(async ()=>{
              let text = "test";
              let pasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, text);
              let systemPasteboard = pasteboard.getSystemPasteboard();
              await systemPasteboard.setData(pasteData);
              let progressListenerInfo = (progress: pasteboard.ProgressInfo) => {
                console.info('progressListener success, progress:' + progress.progress);
              };
              let destPath: string = '/data/storage/el2/base/files/';
              let destUri : string = fileUri.getUriFromPath(destPath);
              let params: pasteboard.GetDataParams = {
                destUri: destUri,
                fileConflictOptions: pasteboard.FileConflictOptions.OVERWRITE,
                progressIndicator: pasteboard.ProgressIndicator.DEFAULT,
                progressListener: progressListenerInfo,
              };
              systemPasteboard.getDataWithProgress(params).then((pasteData: pasteboard.PasteData) => {
                console.info('getDataWithProgress success');
              }).catch((err: BusinessError) => {
                console.error('Failed to get PasteData. Cause: ' + err.message);
              })
          })
        }
      }
    }
  }
}

```

## getMimeTypes

```TypeScript
getMimeTypes(): Promise<Array<string>>
```

Obtains the types of PasteData in the system pasteboard. This API uses a promise to return the result.

**起始版本：** 14

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string>> | Promise used to return the types. |

**示例：**

```TypeScript
import { pasteboard, BusinessError } from '@kit.BasicServicesKit'

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.getMimeTypes().then((data: Array<string>) => {
    console.info('Succeeded in getting mimeTypes. mimeTypes: ' + data.sort().join(','));
}).catch((err: BusinessError) => {
    console.error('Failed to get mimeTypes. Cause: ' + err.message);
});

```

## getPasteData

```TypeScript
getPasteData(callback: AsyncCallback<PasteData>): void
```

Obtains a **PasteData** object from the pasteboard. This API uses an asynchronous callback to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** pasteboard.SystemPasteboard.getData(callback:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;PasteData> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取系统剪贴板对象
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
// 读取系统剪贴板内容
systemPasteboard.getPasteData((err: BusinessError, pasteData: pasteboard.PasteData) => {
    if (err) {
        console.error('Failed to get PasteData. Cause: ' + err.message);
        return;
    }
    // 获取剪贴板中的纯文本内容
    let text: string = pasteData.getPrimaryText();
});

```

## getPasteData

```TypeScript
getPasteData(): Promise<PasteData>
```

Obtains a **PasteData** object from the pasteboard. This API uses a promise to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** pasteboard.SystemPasteboard.getData()

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;PasteData> | Promise used to return the system PasteData. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 获取系统剪贴板对象
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
// 读取系统剪贴板内容
systemPasteboard.getPasteData().then((pasteData: pasteboard.PasteData) => {
    // 获取剪贴板中的纯文本内容
    let text: string = pasteData.getPrimaryText();
}).catch((err: BusinessError) => {
    console.error('Failed to get PasteData. Cause: ' + err.message);
});

```

## getUnifiedData

```TypeScript
getUnifiedData(): Promise<unifiedDataChannel.UnifiedData>
```

Obtains a **PasteData** object from the system pasteboard. This API uses a promise to return the result.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_PASTEBOARD

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;unifiedDataChannel.UnifiedData> | Promise used to return the system PasteData. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. |
| 27787277 | Another copy or paste operation is in progress. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { unifiedDataChannel, uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.getUnifiedData().then((data) => {
    let records: Array<unifiedDataChannel.UnifiedRecord> = data.getRecords();
    for (let j = 0; j < records.length; j++) {
        if (records[j].getType() === uniformTypeDescriptor.UniformDataType.PLAIN_TEXT) {
            let text = records[j].getValue() as uniformDataStruct.PlainText;
            console.info(`${j + 1}.${text.textContent}`);
        }
    }
}).catch((err: BusinessError) => {
    console.error('Failed to get UnifiedData. Cause: ' + err.message);
});

```

## getUnifiedDataSync

```TypeScript
getUnifiedDataSync(): unifiedDataChannel.UnifiedData
```

Obtains a **UnifiedData** object from the system pasteboard. This API returns the result synchronously.

**起始版本：** 12

**需要权限：** 

 ohos.permission.READ_PASTEBOARD

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| unifiedDataChannel.UnifiedData | Data in the system pasteboard. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. |
| 12900005 | Excessive processing time for internal data. |

**示例：**

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
    let result: unifiedDataChannel.UnifiedData = systemPasteboard.getUnifiedDataSync();
    console.info('Succeeded in getting UnifiedData.');
} catch (err) {
    console.error('Failed to get UnifiedData. Cause:' + err.message);
};   

```

## hasData

```TypeScript
hasData(callback: AsyncCallback<boolean>): void
```

Checks whether the system pasteboard contains data. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. Returns true if the system  pasteboard contains data; returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.hasData((err: BusinessError, data: boolean) => {
    if (err) {
        console.error(`Failed to check the PasteData. Cause: ${err.message}`);
        return;
    }
    console.info(`Succeeded in checking the PasteData. Data: ${data}`);
});

```

## hasData

```TypeScript
hasData(): Promise<boolean>
```

Checks whether the system pasteboard contains data. This API uses a promise to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Callback used to return the result.  Returns true if the system pasteboard contains data; returns false otherwise. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.hasData().then((data: boolean) => {
    console.info(`Succeeded in checking the PasteData. Data: ${data}`);
}).catch((err: BusinessError) => {
    console.error(`Failed to check the PasteData. Cause: ${err.message}`);
});

```

## hasDataSync

```TypeScript
hasDataSync(): boolean
```

Checks whether the system pasteboard contains data. This API returns the result synchronously.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Callback used to return the result. Returns true if the system pasteboard contains data;  returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12900005 | Excessive processing time for internal data. |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
    let result: boolean = systemPasteboard.hasDataSync();
    console.info(`Succeeded in checking the PasteData. Result: ${result}`);
} catch (err) {
    console.error('Failed to check the PasteData. Cause: ' + err.message);
};    

```

## hasDataType

```TypeScript
hasDataType(mimeType: string): boolean
```

Checks whether the pasteboard contains data of the specified type.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| mimeType | string | 是 | Data type. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the pasteboard contains data of the specified type; returns false  otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 12900005 | Excessive processing time for internal data. |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
    let result: boolean = systemPasteboard.hasDataType(pasteboard.MIMETYPE_TEXT_PLAIN);
    console.info(`Succeeded in checking the DataType. Result: ${result}`);
} catch (err) {
    console.error('Failed to check the DataType. Cause: ' + err.message);
};

```

## hasPasteData

```TypeScript
hasPasteData(callback: AsyncCallback<boolean>): void
```

Checks whether the system pasteboard contains data. This API uses an asynchronous callback to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.SystemPasteboard.hasData(callback:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;boolean> | 是 | Callback used to return the result. Returns true if the system  pasteboard contains data; returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.hasPasteData((err: BusinessError, data: boolean) => {
    if (err) {
        console.error(`Failed to check the PasteData. Cause: ${err.message}`);
        return;
    }
    console.info(`Succeeded in checking the PasteData. Data: ${data}`);
});

```

## hasPasteData

```TypeScript
hasPasteData(): Promise<boolean>
```

Checks whether the system pasteboard contains data. This API uses a promise to return the result.

**起始版本：** 7

**废弃版本：** 9

**替代接口：** pasteboard.SystemPasteboard.hasData()

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;boolean> | Callback used to return the result.  Returns true if the system pasteboard contains data; returns false otherwise. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.hasPasteData().then((data: boolean) => {
    console.info(`Succeeded in checking the PasteData. Data: ${data}`);
}).catch((err: BusinessError) => {
    console.error(`Failed to check the PasteData. Cause: ${err.message}`);
});

```

## hasRemoteData

```TypeScript
hasRemoteData(): boolean
```

Checks whether the PasteData is on a remote device. Transferring data across devices takes time. If the PasteData is in a remote device, do not check for custom data types or read the PasteData on the UI thread.

**起始版本：** 24

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns the check result. The value true indicates that the PasteData  is in a remote device, and false indicates the opposite. Default value: false. |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();

let result: boolean = systemPasteboard.hasRemoteData();
console.info(`Succeeded in checking the remote data. Result: ${result}`);


```

## isRemoteData

```TypeScript
isRemoteData(): boolean
```

Checks whether the data in the pasteboard is from another device.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns true if the data in the pasteboard is from another device;  returns false otherwise. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 12900005 | Excessive processing time for internal data. |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
    let result: boolean = systemPasteboard.isRemoteData();
    console.info(`Succeeded in checking the RemoteData. Result: ${result}`);
} catch (err) {
    console.error('Failed to check the RemoteData. Cause: ' + err.message);
};

```

## off('update')

```TypeScript
off(type: 'update', callback?: () => void): void
```

Unsubscribes the content change event of the system pasteboard.

**起始版本：** 7

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'update' | 是 | Event type. The value 'update' indicates changes in the pasteboard content. |
| callback | () => void | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
// 获取系统剪贴板对象
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
// 定义剪贴板内容变化回调函数 
let listener = () => {
    console.info('The system pasteboard has changed.');
};
// 订阅剪贴板内容变化事件
systemPasteboard.off('update', listener);

```

## offRemoteUpdate

```TypeScript
offRemoteUpdate(callback?: UpdateCallback): void
```

Remove a callback invoked when remote pasteboard content changes.

**起始版本：** 22

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | UpdateCallback | 否 |  |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
let listener = () => {
    console.info('The remote pasteboard has changed.');
};
systemPasteboard.offRemoteUpdate(listener);

```

## offUpdate

```TypeScript
offUpdate(callback?: UpdateCallback): void
```

Remove a callback invoked when pasteboard content changes.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | UpdateCallback | 否 |  |

## on('update')

```TypeScript
on(type: 'update', callback: () => void): void
```

Subscribes the content change event of the system pasteboard.

**起始版本：** 7

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | 'update' | 是 | Event type. The value 'update' indicates changes in the pasteboard content. |
| callback | () => void | 是 | Callback invoked when the pasteboard content changes. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
// 获取系统剪贴板对象
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
// 定义剪贴板内容变化回调函数 
let listener = () => {
    console.info('The system pasteboard has changed.');
};
// 订阅剪贴板内容变化事件
systemPasteboard.on('update', listener);

```

## onRemoteUpdate

```TypeScript
onRemoteUpdate(callback: UpdateCallback): void
```

Add a callback invoked when remote pasteboard content changes.

**起始版本：** 22

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | UpdateCallback | 是 | the callback to add. |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
let listener = () => {
    console.info('The remote pasteboard has changed.');
};
systemPasteboard.onRemoteUpdate(listener);

```

## onUpdate

```TypeScript
onUpdate(callback: UpdateCallback): void
```

Add a callback invoked when pasteboard content changes.

**起始版本：** 23

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | UpdateCallback | 是 | the callback to add. |

## removeAppShareOptions

```TypeScript
removeAppShareOptions(): void
```

Deletes the global pasteable range of the application.

**起始版本：** 12

**需要权限：** 

- API版本14+： ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION

**系统能力：** SystemCapability.MiscServices.Pasteboard

**系统接口：** 此接口为系统接口。

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 12 - 13] |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. [since 14] |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
  systemPasteboard.removeAppShareOptions();
  console.info('Remove app share options success.');
} catch (error) {
  console.error(`Remove app share options failed, errorCode: ${error.code}, errorMessage: ${error.message}.`);
}

```

## setAppShareOptions

```TypeScript
setAppShareOptions(shareOptions: ShareOption): void
```

Sets pasteable range of PasteData for application.

**起始版本：** 12

**需要权限：** 

- API版本14+： ohos.permission.MANAGE_PASTEBOARD_APP_SHARE_OPTION

**系统能力：** SystemCapability.MiscServices.Pasteboard

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| shareOptions | ShareOption | 是 | Pasteable range. Only pasteboard.ShareOption.INAPP is allowed. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API.  [since 12 - 13] |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types;  3. Parameter verification failed. |
| 12900006 | Settings already exist. |
| 201 | Permission verification failed. The application does not have the  permission required to call the API. [since 14] |

**示例：**

```TypeScript
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
  systemPasteboard.setAppShareOptions(pasteboard.ShareOption.INAPP);
  console.info('Set app share options success.');
} catch (error) {
  console.error(`Set app share options failed, errorCode: ${error.code}, errorMessage: ${error.message}.`);
}

```

## setData

```TypeScript
setData(data: PasteData, callback: AsyncCallback<void>): void
```

Writes a **PasteData** object to the pasteboard. This API uses an asynchronous callback to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | PasteData | 是 | PasteData object. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 27787277 | Another copy or paste operation is in progress. |
| 27787278 | Replication is prohibited. |

**示例：**

```TypeScript
// 创建纯文本剪贴板内容对象
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'content');
// 获取系统剪贴板对象
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
// 将数据写入系统剪贴板
systemPasteboard.setData(pasteData, (err, data) => {
    if (err) {
        console.error('Failed to set PasteData. Cause: ' + err.message);
        return;
    }
    console.info('Succeeded in setting PasteData.');
});

```

## setData

```TypeScript
setData(data: PasteData): Promise<void>
```

Writes a **PasteData** object to the system pasteboard. This API uses a promise to return the result.

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | PasteData | 是 | PasteData object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 27787277 | Another copy or paste operation is in progress. |
| 27787278 | Replication is prohibited. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

// 创建纯文本剪贴板内容对象
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'content');
// 获取系统剪贴板对象
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
// 将数据写入系统剪贴板
systemPasteboard.setData(pasteData).then((data: void) => {
    console.info('Succeeded in setting PasteData.');
}).catch((err: BusinessError) => {
    console.error('Failed to set PasteData. Cause: ' + err.message);
});

```

## setDataSync

```TypeScript
setDataSync(data: PasteData): void
```

Writes data to the system system pasteboard. This API returns the result synchronously.

**起始版本：** 11

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | PasteData | 是 | Data to be written to the pasteboard. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 12900005 | Excessive processing time for internal data. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createData(pasteboard.MIMETYPE_TEXT_PLAIN, 'hello');
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
    systemPasteboard.setDataSync(pasteData);
    console.info('Succeeded in setting PasteData.');
} catch (err) {
    console.error('Failed to set PasteData. Cause:' + err.message);
};  

```

## setPasteData

```TypeScript
setPasteData(data: PasteData, callback: AsyncCallback<void>): void
```

Writes a **PasteData** object to the system pasteboard. This API uses an asynchronous callback to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** pasteboard.SystemPasteboard.setData(data:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | PasteData | 是 | PasteData object. |
| callback | AsyncCallback&lt;void> | 是 | Callback used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |

**示例：**

```TypeScript
let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('content');
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.setPasteData(pasteData, (err, data) => {
    if (err) {
        console.error('Failed to set PasteData. Cause: ' + err.message);
        return;
    }
    console.info('Succeeded in setting PasteData.');
});

```

## setPasteData

```TypeScript
setPasteData(data: PasteData): Promise<void>
```

Writes a **PasteData** object to the system pasteboard. This API uses a promise to return the result.

**起始版本：** 6

**废弃版本：** 9

**替代接口：** pasteboard.SystemPasteboard.setData(data:

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | PasteData | 是 | PasteData object. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let pasteData: pasteboard.PasteData = pasteboard.createPlainTextData('content');
const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.setPasteData(pasteData).then((data: void) => {
    console.info('Succeeded in setting PasteData.');
}).catch((err: BusinessError) => {
    console.error('Failed to set PasteData. Cause: ' + err.message);
});

```

## setUnifiedData

```TypeScript
setUnifiedData(data: unifiedDataChannel.UnifiedData): Promise<void>
```

Writes a **PasteData** object to the system pasteboard. This API uses a promise to return the result.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | unifiedDataChannel.UnifiedData | 是 | Data to be written to the pasteboard. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 27787277 | Another copy or paste operation is in progress. |
| 27787278 | Replication is prohibited. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';
import { unifiedDataChannel, uniformDataStruct, uniformTypeDescriptor } from '@kit.ArkData';

// 创建纯文本数据结构对象
let plainText : uniformDataStruct.PlainText = {
    uniformDataType: uniformTypeDescriptor.UniformDataType.PLAIN_TEXT,
    textContent : 'PLAINTEXT_CONTENT',
    abstract : 'PLAINTEXT_ABSTRACT',
}
// 创建统一数据记录对象
let record = new unifiedDataChannel.UnifiedRecord(uniformTypeDescriptor.UniformDataType.PLAIN_TEXT, plainText);
// 创建统一数据对象
let data = new unifiedDataChannel.UnifiedData();
// 添加数据记录到统一数据对象
data.addRecord(record);

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
systemPasteboard.setUnifiedData(data).then((data: void) => {
    console.info('Succeeded in setting UnifiedData.');
}).catch((err: BusinessError) => {
    console.error('Failed to setUnifiedData. Cause: ' + err.message);
});

```

## setUnifiedDataSync

```TypeScript
setUnifiedDataSync(data: unifiedDataChannel.UnifiedData): void
```

Writes data to the system pasteboard. This API returns the result synchronously.

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.MiscServices.Pasteboard

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| data | unifiedDataChannel.UnifiedData | 是 | Data to be written to the pasteboard. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameters types. |
| 12900005 | Excessive processing time for internal data. |

**示例：**

```TypeScript
import { unifiedDataChannel } from '@kit.ArkData';

// 创建统一数据对象
let plainTextData = new unifiedDataChannel.UnifiedData();
// 创建纯文本数据对象
let plainText = new unifiedDataChannel.PlainText();
// 设置纯文本的详细信息
plainText.details = {
    Key: 'delayPlaintext',
    Value: 'delayPlaintext',
};
// 设置文本内容
plainText.textContent = 'delayTextContent';
// 设置摘要内容
plainText.abstract = 'delayTextContent';
// 添加数据记录到统一数据对象
plainTextData.addRecord(plainText);

const systemPasteboard: pasteboard.SystemPasteboard = pasteboard.getSystemPasteboard();
try {
    systemPasteboard.setUnifiedDataSync(plainTextData);
    console.info('Succeeded in setting UnifiedData.');
} catch (err) {
    console.error('Failed to set UnifiedData. Cause:' + err.message);
};

```

