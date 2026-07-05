# FaultLogExtensionAbility

This module implements the delayed fault notification feature. When the crash and freeze events are subscribed by [HiAppEvent](arkts-hiappevent-n.md#hiAppEvent), the previous event can be received only after the application restarts. If the application fails to start or remains unresponsive for a long time, the fault may not be reported in time. > **NOTE** > > - The APIs of this module can be used only in the stage model. > > - Exceptions may occur if some APIs are called by this module. For details, see > [Appendix](docroot://reference/apis-performance-analysis-kit/js-apis-hiviewdfx-FaultLogExtensionAbility.md#appendix) > .

**起始版本：** 21

**系统能力：** SystemCapability.HiviewDFX.Hiview.FaultLogger

## 导入模块

```TypeScript
import { FaultLogExtensionAbility } from '@kit.PerformanceAnalysisKit';
```

## onConnect

```TypeScript
onConnect(): void
```

Called to perform the initialization operation when the system service completes the connection. This API can be overridden selectively.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.HiviewDFX.Hiview.FaultLogger

**示例：**

```TypeScript
export default class MyFaultLogExtension extends FaultLogExtensionAbility {
    onConnect() {
      console.info('onConnect');
    }
}

```

## onDisconnect

```TypeScript
onDisconnect(): void
```

Called to release resources and clear the running status when the system service completes the disconnection. This API can be overridden selectively.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.HiviewDFX.Hiview.FaultLogger

**示例：**

```TypeScript
export default class MyFaultLogExtension extends FaultLogExtensionAbility {
    onDisconnect() {
      console.info('onDisconnect');
    }
}

```

## onFaultReportReady

```TypeScript
onFaultReportReady(): void
```

Called to subscribe to and process fault events when the system service notifies the FaultLogExtensionAbility to process faults.

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.HiviewDFX.Hiview.FaultLogger

**示例：**

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';

export default class MyFaultLogExtension extends FaultLogExtensionAbility {
    onFaultReportReady() {
        hiAppEvent.addWatcher({
            name: "watcher",
            appEventFilters: [
                {
                    domain: hiAppEvent.domain.OS,
                    names: [hiAppEvent.event.APP_CRASH, hiAppEvent.event.APP_FREEZE]
                }
            ],
            onReceive: (domain: string, appEventGroups: Array<hiAppEvent.AppEventGroup>) => {
                // 进行故障事件处理
            }
        });
    }
}

```

## context

```TypeScript
context: FaultLogExtensionContext
```

Context of the FaultLogExtensionAbility. This context is inherited from [ExtensionContext]./application/ExtensionContext:ExtensionContext.

**类型：** FaultLogExtensionContext

**起始版本：** 21

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.HiviewDFX.Hiview.FaultLogger

