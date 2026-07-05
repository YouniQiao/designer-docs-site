# WindowSnapshotConfiguration

主窗口截图的配置项。

**Since:** 21

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { window } from '@kit.ArkUI';
```

## useCache

```TypeScript
useCache?: boolean
```

是否使用主窗口的已有截图。默认值为true。 true表示使用主窗口的已有截图，若主窗口无保存的截图，则使用主窗口的最新截图。false表示使用主窗口的最新截图。

**Type:** boolean

**Since:** 21

**System capability:** SystemCapability.Window.SessionManager

