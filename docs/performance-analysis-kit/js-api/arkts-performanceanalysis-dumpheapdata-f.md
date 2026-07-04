# dumpHeapData

## Modules to Import

```TypeScript
import { hidebug } from '@ohos.hidebug';
```

## dumpHeapData

```TypeScript
function dumpHeapData(filename: string): void
```

Exports the VM heap data and generates a filename.heapsnapshot file. The input parameter is a user-defined file name, excluding the file suffix. The generated file is in the files folder under the application directory. Such as "/data/accounts/account_0/appdata/[package name]/files/xxx.heapsnapshot".

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [dumpJsHeapData](arkts-performanceanalysis-dumpjsheapdata-f.md#dumpjsheapdata-1)

**System capability:** SystemCapability.HiviewDFX.HiProfiler.HiDebug

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filename | string | Yes | User-defined heap file name. The .heapsnapshot file is generated in the **files**directory of the application based on the specified file name. The maximum length of a string is 128. |

**Example**

```TypeScript
import { hidebug } from '@kit.PerformanceAnalysisKit';

hidebug.dumpHeapData("heap-20220216");

```

