# setOutputTypeByDomainID

## Modules to Import

```TypeScript
import { hilog } from '@ohos.hilog';
```

## setOutputTypeByDomainID

```TypeScript
function setOutputTypeByDomainID(type: OutputType, domainIDs: Array<number>, isExclude: boolean): OutputType
```

Sets the output type for hilog for the domainID list.

**Since:** 26.0.0

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.HiviewDFX.HiLog

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | OutputType | Yes | output type for hilog. |
| domainIDs | Array&lt;number&gt; | Yes | domainID list, if isExclude is true, the output type for the domainIDlist is set to DEFAULT, and the output type for the remaining domainIDs is set to the currentlyspecified output type; if isExclude is false, the output type for the domainID list is set to thecurrently specified output type, and the output type for the remaining domainIDs is set to DEFAULT |
| isExclude | boolean | Yes | determine whether the domainIDs take effect for the currently specified output type. |

**Return value:**

| Type | Description |
| --- | --- |
| OutputType | previous value of output type. |

**Example**

```TypeScript
hilog.setOutputTypeByDomainID(hilog.OutputType.SHARE_SANDBOX_ONLY, [0x0001, 0x0002, 0x0003], false);
hilog.info(0x0001, "testTag", 'sandbox log to share sandbox only');
hilog.info(0x0002, "testTag", 'sandbox log to share sandbox only');
hilog.info(0x0003, "testTag", 'sandbox log to share sandbox only');
hilog.info(0x0004, "testTag", 'sandbox log to share sandbox only');
hilog.flush();

```

Sandbox log output. The logs of domain 0x0004 are not printed.

```TypeScript
05-15 16:57:04.238 40518 40518 I A00001/testTag: sandbox log to share sandbox only
05-15 16:57:04.238 40518 40518 I A00002/testTag: sandbox log to share sandbox only
05-15 16:57:04.238 40518 40518 I A00003/testTag: sandbox log to share sandbox only

```

