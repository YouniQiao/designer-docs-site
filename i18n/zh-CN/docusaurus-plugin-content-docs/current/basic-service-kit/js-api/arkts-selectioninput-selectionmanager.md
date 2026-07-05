# @ohos.selectionInput.selectionManager

本模块提供划词管理能力，包括创建窗口、显示窗口、移动窗口、隐藏窗口、销毁窗口、监听鼠标划词事件、获取选中文本等。 > **说明：** > - 本模块仅支持PC/2in1设备。 > - 仅支持集成了划词扩展的应用调用。

**起始版本：** 20

**系统能力：** SystemCapability.SelectionInput.Selection

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { selectionManager } from '@kit.BasicServicesKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[createPanel](arkts-selectionmanager-createpanel-f-sys.md#createPanel-1) | 创建划词面板。使用Promise异步回调。 单个划词应用仅允许创建一个[MENU_PANEL]{@link @ohos.selectionInput.SelectionPanel}和一个 [MAIN_PANEL]{@link @ohos.selectionInput.SelectionPanel}。 |
| <!--DelRow-->[destroyPanel](arkts-selectionmanager-destroypanel-f-sys.md#destroyPanel-1) | 销毁划词面板。使用Promise异步回调。 |
| <!--DelRow-->[getSelectionContent](arkts-selectionmanager-getselectioncontent-f-sys.md#getSelectionContent-1) | 获取选中文本的内容。使用Promise异步回调。 |
| <!--DelRow-->[off](arkts-selectionmanager-off-f-sys.md#off-1) | 取消订阅划词完成事件。使用callback异步回调。 |
| [offSelectionComplete](arkts-selectionmanager-offselectioncomplete-f.md#offSelectionComplete-1) | 取消订阅划词完成事件。使用callback异步回调。 |
| <!--DelRow-->[on](arkts-selectionmanager-on-f-sys.md#on-1) | 订阅划词完成事件。使用callback异步回调。 |
| [onSelectionComplete](arkts-selectionmanager-onselectioncomplete-f.md#onSelectionComplete-1) | 订阅划词完成事件。使用callback异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[Panel](arkts-selectionmanager-panel-i-sys.md) | 划词面板。 |
| <!--DelRow-->[SelectionInfo](arkts-selectionmanager-selectioninfo-i-sys.md) | 划词事件信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[SelectionType](arkts-selectionmanager-selectiontype-e-sys.md) | 定义触发划词的类型枚举。 |

