# notifyMetadataBindingEvent

## notifyMetadataBindingEvent

```TypeScript
function notifyMetadataBindingEvent(bundleName: string): Promise<string>
```

Transfers metadata to the application or service that calls the encoding API. This API uses a promise to return the result.

**起始版本：** 18

**系统能力：** SystemCapability.MultimodalAwareness.MetadataBinding

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| bundleName | string | 是 | Bundle name used to obtain the application link. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;string> | Promise used to return the application link information of the current page. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission check failed. A non-system application uses the system API. |
| 32100001 | Internal handling failed. |

**示例：**

```TypeScript
import { metadataBinding } from '@kit.MultimodalAwarenessKit';
import { BusinessError } from '@kit.BasicServicesKit';

let bundleName: string = '';
metadataBinding.notifyMetadataBindingEvent(bundleName).then((appLink:string)=>{
  console.info("notify metadata:" + appLink);
}).catch((error: BusinessError) => {
  console.error("notify metadata error" + error);
});

```

