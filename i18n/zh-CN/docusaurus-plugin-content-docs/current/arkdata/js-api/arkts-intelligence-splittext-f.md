# splitText

## splitText

```TypeScript
function splitText(text: string, config: SplitConfig): Promise<Array<string>>
```

Splits text.

**起始版本：** 15

**系统能力：** SystemCapability.DistributedDataManager.DataIntelligence.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| text | string | 是 | Text for chunking. The length of the text is no longer then 100k tokens. |
| config | SplitConfig | 是 | Configurations of text chunking. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;Array&lt;string>> | The promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types. |
| 801 | Capability not supported. |
| 31300000 | Inner error. |

**示例：**

```TypeScript
import { BusinessError } from '@kit.BasicServicesKit';

let splitConfig: intelligence.SplitConfig = {
  size: 10,
  overlapRatio: 0.1
}
let splitText = 'text';

intelligence.splitText(splitText, splitConfig)
  .then((data: Array<string>) => {
    console.info("Succeeded in splitting Text");
  })
  .catch((err: BusinessError) => {
    console.error("Failed to split Text and code is " + err.code);
  })

```

