# setUserId

## Modules to Import

```TypeScript
import { hiAppEvent } from '@ohos.hiviewdfx.hiAppEvent';
```

## setUserId

```TypeScript
function setUserId(name: string, value: string): void
```

Sets a user ID, which is used for association when a [Processor](arkts-performanceanalysis-processor-i.md#processor) is configured.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.HiviewDFX.HiAppEvent

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Key of a user ID. The value is string that contains a maximum of 256 characters, includingdigits (0 to 9), letters (a to z)(A to Z), underscore (_), and dollar sign ($). It must not start with a digit. |
| value | string | Yes | Value of a user ID. It can contain a maximum of 256 characters. If the value is **null**or left empty, the user ID is cleared. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types. |

**Example**

```TypeScript
import { hilog } from '@kit.PerformanceAnalysisKit';

try {
  hiAppEvent.setUserId('key', 'value');
} catch (error) {
  hilog.error(0x0000, 'hiAppEvent', `failed to setUserId event, code=${error.code}`);
}

```

