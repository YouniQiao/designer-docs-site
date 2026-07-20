# getCfgDirListSync (System API)

## Modules to Import

```TypeScript
import { configPolicy } from '@kit.BasicServicesKit';
```

## getCfgDirListSync

```TypeScript
function getCfgDirListSync(): Array<string>
```

Obtains a list of configuration level directories, in ascending order of priority.

**Since:** 11

<!--Device-configPolicy-function getCfgDirListSync(): Array<string>--><!--Device-configPolicy-function getCfgDirListSync(): Array<string>-End-->

**System capability:** SystemCapability.Customization.ConfigPolicy

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Obtains the list of configuration level directories. This API returns the result synchronously. |

