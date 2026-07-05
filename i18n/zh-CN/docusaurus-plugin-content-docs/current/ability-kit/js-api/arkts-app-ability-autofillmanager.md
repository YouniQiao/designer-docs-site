# @ohos.app.ability.autoFillManager

autoFillManager模块提供账号密码保存等功能。 不同于页面切换时触发的系统自动保存功能，该功能需要由用户手动触发。例如用户在网站上输入了账号密码，并点击“保存”按钮，才能触发相应的自动保存操作。

**起始版本：** 11

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

## 导入模块

```TypeScript
import { autoFillManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [requestAutoSave](arkts-autofillmanager-requestautosave-f.md#requestAutoSave-1) | 请求保存表单数据。使用callback异步回调。 如果当前表单没有提供表单切换的功能，可以通过此接口保存历史表单输入数据，保存请求完成时会触发该回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [AutoSaveCallback](arkts-autofillmanager-autosavecallback-i.md) | 当保存请求完成时所触发的回调接口。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[AutoFillPopupConfig](arkts-autofillmanager-autofillpopupconfig-t-sys.md) | 自动填充气泡弹窗的尺寸和位置信息。 |
| <!--DelRow-->[AutoFillPopupConfig](arkts-autofillmanager-autofillpopupconfig-t-sys.md) | 自动填充气泡弹窗的尺寸和位置信息。 |
| <!--DelRow-->[AutoFillRect](arkts-autofillmanager-autofillrect-t-sys.md) | 用于自动填充的矩形区域。 |
| <!--DelRow-->[AutoFillRect](arkts-autofillmanager-autofillrect-t-sys.md) | 用于自动填充的矩形区域。 |
| <!--DelRow-->[AutoFillTriggerType](arkts-autofillmanager-autofilltriggertype-t-sys.md) | 自动填充拉起类型。 |
| <!--DelRow-->[AutoFillType](arkts-autofillmanager-autofilltype-t-sys.md) | 自动填充的类型信息。 |
| <!--DelRow-->[CustomData](arkts-autofillmanager-customdata-t-sys.md) | 自定义数据。 |
| <!--DelRow-->[CustomData](arkts-autofillmanager-customdata-t-sys.md) | 自定义数据。 |
| [FillRequest](arkts-autofillmanager-fillrequest-t.md) | 自动填充的请求信息。 |
| [FillRequest](arkts-autofillmanager-fillrequest-t.md) | 自动填充的请求信息。 |
| <!--DelRow-->[FillRequestCallback](arkts-autofillmanager-fillrequestcallback-t-sys.md) | 自动填充或者生成密码时的回调对象，可以通过此回调通知客户端成功或者失败。 |
| <!--DelRow-->[FillRequestCallback](arkts-autofillmanager-fillrequestcallback-t-sys.md) | 自动填充或者生成密码时的回调对象，可以通过此回调通知客户端成功或者失败。 |
| <!--DelRow-->[FillResponse](arkts-autofillmanager-fillresponse-t-sys.md) | 自动填充的响应信息。 |
| <!--DelRow-->[FillResponse](arkts-autofillmanager-fillresponse-t-sys.md) | 自动填充的响应信息。 |
| [OnFailureFn](arkts-autofillmanager-onfailurefn-t.md) | 当保存请求失败时，该回调被调用。 |
| [OnSuccessFn](arkts-autofillmanager-onsuccessfn-t.md) | 当保存请求成功时，该回调被调用。 |
| <!--DelRow-->[PageNodeInfo](arkts-autofillmanager-pagenodeinfo-t-sys.md) | 自动填充的页面节点信息。 |
| <!--DelRow-->[PageNodeInfo](arkts-autofillmanager-pagenodeinfo-t-sys.md) | 自动填充的页面节点信息。 |
| <!--DelRow-->[PopupPlacement](arkts-autofillmanager-popupplacement-t-sys.md) | 气泡弹窗的位置。 |
| <!--DelRow-->[PopupSize](arkts-autofillmanager-popupsize-t-sys.md) | 气泡弹窗的宽和高。 |
| <!--DelRow-->[PopupSize](arkts-autofillmanager-popupsize-t-sys.md) | 气泡弹窗的宽和高。 |
| [SaveRequest](arkts-autofillmanager-saverequest-t.md) | 自动保存的请求信息。 |
| [SaveRequest](arkts-autofillmanager-saverequest-t.md) | 自动保存的请求信息。 |
| <!--DelRow-->[SaveRequestCallback](arkts-autofillmanager-saverequestcallback-t-sys.md) | 自动保存或者手动保存请求的回调对象。 |
| <!--DelRow-->[SaveRequestCallback](arkts-autofillmanager-saverequestcallback-t-sys.md) | 自动保存或者手动保存请求的回调对象。 |
| <!--DelRow-->[UpdateRequest](arkts-autofillmanager-updaterequest-t-sys.md) | 自动填充的更新信息。 |
| <!--DelRow-->[UpdateRequest](arkts-autofillmanager-updaterequest-t-sys.md) | 自动填充的更新信息。 |
| <!--DelRow-->[ViewData](arkts-autofillmanager-viewdata-t-sys.md) | 自动填充的视图数据信息。 |
| <!--DelRow-->[ViewData](arkts-autofillmanager-viewdata-t-sys.md) | 自动填充的视图数据信息。 |

