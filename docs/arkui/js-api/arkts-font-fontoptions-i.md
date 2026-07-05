# FontOptions

注册的自定义字体信息。 > **说明：** > > 直接使用font可能导致[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)的问题，推荐通过使用 > [UIContext]@ohos.arkui.UIContext中的 > [getFont](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#getfont)方法获取当前UI上下文关联的 > [Font]@ohos.arkui.UIContext对象。

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { font } from '@kit.ArkUI';
```

## familySrc

```TypeScript
familySrc: string | Resource
```

设置注册字体文件的路径。 **说明：** 读取系统沙箱路径内的资源时，建议使用file://路径前缀的字符串，需要确保沙箱目录路径下的文件存在并且有可读权限。

**Type:** string | Resource

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## familyName

```TypeScript
familyName: string | Resource
```

设置注册的字体名称。

**Type:** string | Resource

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

