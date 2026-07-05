# PiPConfiguration

创建画中画控制器时的参数。

**Since:** 11

**System capability:** SystemCapability.Window.SessionManager

## Modules to Import

```TypeScript
import { PiPWindow } from '@kit.ArkUI';
```

## templateType

```TypeScript
templateType?: PiPTemplateType
```

模板类型，用以区分视频播放、视频通话、视频会议或视频直播，不传值则默认为视频播放模板。

**Type:** PiPTemplateType

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## contentWidth

```TypeScript
contentWidth?: int
```

原始内容宽度，单位为px。用于确定画中画窗口比例。当 [使用typeNode的方式]PiPWindow.create(config: PiPConfiguration, contentNode: typeNode.XComponent)创建 PiPController时，不传值则默认为1920。当[不使用typeNode的方式]PiPWindow.create(config: PiPConfiguration)创建PiPController时，不传 值则默认为[XComponent]XComponent组件的宽度。

**Type:** int

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## cornerAdsorptionEnabled

```TypeScript
cornerAdsorptionEnabled?: boolean
```

是否开启画中画四角吸附功能。当开启画中画四角吸附功能后，屏幕将被划分为四个热区：以屏幕的上下中线和左右中线为界，形成左上、右上、左下、右下四个区域。画中画拉起时会根据上次画中画消失的位置出现在屏幕对应的角落，用户拖动窗口时可自由移动，松手后则会自动吸附在屏幕边缘。 true：表示开启画中画四角吸附功能。 false：表示关闭画中画四角吸附功能。 不传值则为默认值true。 该接口在Phone、Tablet设备上可正常调用，在其他设备上不生效。

**Type:** boolean

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## navigationId

```TypeScript
navigationId?: string
```

navigation控件ID，不传值则默认不需要缓存页面。 1、UIAbility使用[Navigation]Navigation管理页面时，需要设置Navigation控件的id属性，并将该id设置给画中画控制器，确 保还原场景下能够从画中画窗口恢复到原页面。 2、UIAbility使用[Router](arkts-router.md#router)管理页面时，无需设置navigationId。 3、UIAbility只有单页面时，无需设置navigationId，还原场景下也能够从画中画窗口恢复到原页面。

**Type:** string

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## customUIController

```TypeScript
customUIController?: NodeController
```

自定义UI控制器，用于实现在画中画界面的自定义UI功能。此参数不填时，默认不使用自定义UI功能

**Type:** NodeController

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## localStorage

```TypeScript
localStorage?: LocalStorage
```

页面级别的UI状态存储单元。多实例下可用来跟踪主窗实例的UI状态存储对象，不传值则无法通过画中画窗口获取主窗的UI状态存储对象。

**Type:** LocalStorage

**Since:** 17

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## componentController

```TypeScript
componentController: XComponentController
```

表示原始[XComponent]./@internal/component/ets/xcomponent控制器。

**Type:** XComponentController

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## context

```TypeScript
context: BaseContext
```

表示上下文环境。

**Type:** BaseContext

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## controlGroups

```TypeScript
controlGroups?: Array<PiPControlGroup>
```

画中画控制面板的可选控件组列表，应用可以对此进行配置以决定是否显示。应用未配置时，面板显示基础控件（如视频播放控件组的播放/暂停控件）；应用选择配置时，则最多可以选择三个控件，超出三个create接口抛出401错误码。

**Type:** Array<PiPControlGroup>

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## handleId

```TypeScript
handleId?: int
```

navigation控件下的子页面ID，点击"恢复全屏窗口"按钮后，恢复到指定的页面。 只适用于UIAbility使用[Navigation]Navigation管理页面的场景，可以设置为Navigation下的子页面ID。 默认为-1，恢复Navigation栈顶页面。推荐使用方法[getUniqueId()]BaseCustomComponent#getUniqueId获取页面ID。 使用[Navigation]Navigation模块内页面路由时， 推荐使用[系统路由表](docroot://ui/arkts-navigation-cross-package.md#系统路由表)， 否则可能会出现[getUniqueId()]BaseCustomComponent#getUniqueId获取页面ID不准确的情况。

**Type:** int

**Since:** 22

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## defaultWindowSizeType

```TypeScript
defaultWindowSizeType?: int
```

当前应用第一次拉起画中画的窗口大小。 0：代表不设置大小。按照上个应用的画中画关闭前的大小启动； 1：代表小窗； 2：代表大窗； 不传值则为默认值0。

**Type:** int

**Since:** 19

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

## contentHeight

```TypeScript
contentHeight?: int
```

原始内容高度，单位为px。用于确定画中画窗口比例。当 [使用typeNode的方式]PiPWindow.create(config: PiPConfiguration, contentNode: typeNode.XComponent)创建 PiPController时，不传值则默认为1080。当[不使用typeNode的方式]PiPWindow.create(config: PiPConfiguration)创建PiPController时，不传 值则默认为[XComponent]XComponent组件的高度。

**Type:** int

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Window.SessionManager

