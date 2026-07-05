# isOpenAccessibilitySync

## isOpenAccessibilitySync

```TypeScript
function isOpenAccessibilitySync(): boolean
```

Checks whether any accessibility application has been enabled in the system. To obtain information about accessibility applications in the system, use [accessibility.getAccessibilityExtensionListSync]accessibility.getAccessibilityExtensionListSync.

**起始版本：** 10

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**卡片能力：** 从API version 23开始，该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.BarrierFree.Accessibility.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Whether any accessibility application has been enabled in the system. Returns true if one  or more accessibility applications are enabled; returns false otherwise. |

**示例：**

```TypeScript
import { accessibility } from '@kit.AccessibilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

// 1、系统内已安装多个辅助应用，若都没有开启，返回false。
// 2、系统内已安装多个辅助应用，若开启任意一个，返回true。
let status: boolean = accessibility.isOpenAccessibilitySync();

```

