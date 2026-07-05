# splitText

## Modules to Import

```TypeScript
import { intelligence } from '@ohos.data.intelligence';
```

## splitText

```TypeScript
function splitText(text: string, config: SplitConfig): Promise<Array<string>>
```

Splits text.

**Since:** 15

**System capability:** SystemCapability.DistributedDataManager.DataIntelligence.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | string | Yes | Text for chunking. The length of the text is no longer then 100k tokens. |
| config | SplitConfig | Yes | Configurations of text chunking. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;string&gt;&gt; | The promise used to return the result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [31300000](../errorcode-intelligence.md#31300000-internal-error) | Inner error. |

**Example**

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

