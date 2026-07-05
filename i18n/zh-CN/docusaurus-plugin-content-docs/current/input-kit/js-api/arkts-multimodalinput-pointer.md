# @ohos.multimodalInput.pointer

本模块提供鼠标光标管理能力，包括查询、设置鼠标光标属性。 > **说明**：

**起始版本：** 9

**系统能力：** SystemCapability.MultimodalInput.Input.Pointer

## 导入模块

```TypeScript
import { pointer } from '@kit.InputKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getHoverScrollState](arkts-pointer-gethoverscrollstate-f-sys.md#getHoverScrollState-1) | 获取鼠标悬停滚动开关状态，使用callback异步回调。 |
| <!--DelRow-->[getHoverScrollState](arkts-pointer-gethoverscrollstate-f-sys.md#getHoverScrollState-2) | 获取当前鼠标悬停滚动开关状态，使用Promise异步回调。 |
| <!--DelRow-->[getMousePrimaryButton](arkts-pointer-getmouseprimarybutton-f-sys.md#getMousePrimaryButton-1) | 获取当前鼠标主键，使用callback异步回调。 |
| <!--DelRow-->[getMousePrimaryButton](arkts-pointer-getmouseprimarybutton-f-sys.md#getMousePrimaryButton-2) | 获取当前鼠标主键，使用Promise异步回调。 |
| <!--DelRow-->[getMouseScrollDirection](arkts-pointer-getmousescrolldirection-f-sys.md#getMouseScrollDirection-1) | 获取鼠标滚轮滚动方向，使用Promise异步回调。 |
| <!--DelRow-->[getMouseScrollRows](arkts-pointer-getmousescrollrows-f-sys.md#getMouseScrollRows-1) | 获取鼠标滚动行数，使用callback异步回调。 |
| <!--DelRow-->[getMouseScrollRows](arkts-pointer-getmousescrollrows-f-sys.md#getMouseScrollRows-2) | 获取当前鼠标滚动行数，使用Promise异步回调。 |
| <!--DelRow-->[getPointerColor](arkts-pointer-getpointercolor-f-sys.md#getPointerColor-1) | 获取鼠标光标颜色，使用callback异步回调。 |
| <!--DelRow-->[getPointerColor](arkts-pointer-getpointercolor-f-sys.md#getPointerColor-2) | 获取当前鼠标光标颜色，使用Promise异步回调。 |
| <!--DelRow-->[getPointerColorSync](arkts-pointer-getpointercolorsync-f-sys.md#getPointerColorSync-1) | 获取鼠标光标颜色，使用同步方式返回结果。 |
| <!--DelRow-->[getPointerSize](arkts-pointer-getpointersize-f-sys.md#getPointerSize-1) | 获取鼠标光标大小，使用callback异步回调。 |
| <!--DelRow-->[getPointerSize](arkts-pointer-getpointersize-f-sys.md#getPointerSize-2) | 获取当前鼠标光标大小，使用Promise异步回调。 |
| <!--DelRow-->[getPointerSizeSync](arkts-pointer-getpointersizesync-f-sys.md#getPointerSizeSync-1) | 获取鼠标光标大小，使用同步方式返回结果。 |
| <!--DelRow-->[getPointerSpeed](arkts-pointer-getpointerspeed-f-sys.md#getPointerSpeed-1) | 获取鼠标移动速度，使用callback异步回调。 |
| <!--DelRow-->[getPointerSpeed](arkts-pointer-getpointerspeed-f-sys.md#getPointerSpeed-2) | 获取当前鼠标移动速度，使用Promise异步回调。 |
| <!--DelRow-->[getPointerSpeedSync](arkts-pointer-getpointerspeedsync-f-sys.md#getPointerSpeedSync-1) | 使用同步方式获取当前鼠标移动速度。 |
| [getPointerStyle](arkts-pointer-getpointerstyle-f.md#getPointerStyle-1) | 获取指定窗口的鼠标样式类型，此接口仅支持获取本应用进程内窗口的鼠标样式类型，使用callback异步回调。 |
| [getPointerStyle](arkts-pointer-getpointerstyle-f.md#getPointerStyle-2) | 获取鼠标样式类型，此接口仅支持获取本应用进程内窗口的鼠标样式类型，使用Promise异步回调。 |
| [getPointerStyleSync](arkts-pointer-getpointerstylesync-f.md#getPointerStyleSync-1) | 查询指定窗口的鼠标样式类型，如向东箭头、向西箭头、向南箭头、向北箭头等。此接口仅支持获取本应用进程内窗口的鼠标样式类型。 |
| <!--DelRow-->[getTouchpadDoubleTapAndDragState](arkts-pointer-gettouchpaddoubletapanddragstate-f-sys.md#getTouchpadDoubleTapAndDragState-1) | 获取触控板双击拖拽开关的开启状态，使用callback异步回调。 |
| <!--DelRow-->[getTouchpadDoubleTapAndDragState](arkts-pointer-gettouchpaddoubletapanddragstate-f-sys.md#getTouchpadDoubleTapAndDragState-2) | 获取触控板双击拖拽开关的开启状态，使用Promise异步回调。 |
| <!--DelRow-->[getTouchpadPinchSwitch](arkts-pointer-gettouchpadpinchswitch-f-sys.md#getTouchpadPinchSwitch-1) | 获取触控板双指捏合功能开启状态，使用callback异步回调。 |
| <!--DelRow-->[getTouchpadPinchSwitch](arkts-pointer-gettouchpadpinchswitch-f-sys.md#getTouchpadPinchSwitch-2) | 获取触控板双指捏合功能开启状态，使用Promise异步回调。 |
| <!--DelRow-->[getTouchpadPointerSpeed](arkts-pointer-gettouchpadpointerspeed-f-sys.md#getTouchpadPointerSpeed-1) | 获取触控板光标移动速度，使用callback异步回调。 |
| <!--DelRow-->[getTouchpadPointerSpeed](arkts-pointer-gettouchpadpointerspeed-f-sys.md#getTouchpadPointerSpeed-2) | 获取触控板光标移动速度，使用Promise异步回调。 |
| <!--DelRow-->[getTouchpadRightClickType](arkts-pointer-gettouchpadrightclicktype-f-sys.md#getTouchpadRightClickType-1) | 获取触控板右键菜单类型，使用callback异步回调。 |
| <!--DelRow-->[getTouchpadRightClickType](arkts-pointer-gettouchpadrightclicktype-f-sys.md#getTouchpadRightClickType-2) | 获取触控板右键菜单类型，使用Promise异步回调。 |
| <!--DelRow-->[getTouchpadScrollDirection](arkts-pointer-gettouchpadscrolldirection-f-sys.md#getTouchpadScrollDirection-1) | 获取触控板滚轴方向，使用callback异步回调。 |
| <!--DelRow-->[getTouchpadScrollDirection](arkts-pointer-gettouchpadscrolldirection-f-sys.md#getTouchpadScrollDirection-2) | 获取触控板滚轴方向，使用Promise异步回调。 |
| <!--DelRow-->[getTouchpadScrollSwitch](arkts-pointer-gettouchpadscrollswitch-f-sys.md#getTouchpadScrollSwitch-1) | 获取触控板滚轴能力开启状态，使用callback异步回调。 |
| <!--DelRow-->[getTouchpadScrollSwitch](arkts-pointer-gettouchpadscrollswitch-f-sys.md#getTouchpadScrollSwitch-2) | 获取触控板滚轴能力开启状态，使用Promise异步回调。 |
| <!--DelRow-->[getTouchpadSwipeSwitch](arkts-pointer-gettouchpadswipeswitch-f-sys.md#getTouchpadSwipeSwitch-1) | 获取触控板多指滑动功能开启状态，使用callback异步回调。 |
| <!--DelRow-->[getTouchpadSwipeSwitch](arkts-pointer-gettouchpadswipeswitch-f-sys.md#getTouchpadSwipeSwitch-2) | 获取触控板多指滑动功能开启状态，使用Promise异步回调。 |
| <!--DelRow-->[getTouchpadTapSwitch](arkts-pointer-gettouchpadtapswitch-f-sys.md#getTouchpadTapSwitch-1) | 获取触控板轻触能力开启状态，使用callback异步回调。 |
| <!--DelRow-->[getTouchpadTapSwitch](arkts-pointer-gettouchpadtapswitch-f-sys.md#getTouchpadTapSwitch-2) | 获取触控板轻触功能开启状态，使用Promise异步回调。 |
| [isPointerVisible](arkts-pointer-ispointervisible-f.md#isPointerVisible-1) | 获取鼠标光标显示状态，使用callback异步回调。 |
| [isPointerVisible](arkts-pointer-ispointervisible-f.md#isPointerVisible-2) | 获取鼠标光标显示状态，使用Promise异步回调。 |
| [isPointerVisibleSync](arkts-pointer-ispointervisiblesync-f.md#isPointerVisibleSync-1) | 获取当前窗口鼠标光标的显示状态，使用同步方式。 |
| [setCustomCursor](arkts-pointer-setcustomcursor-f.md#setCustomCursor-1) | 设置指定窗口的自定义光标样式，此接口仅支持设置本应用进程内窗口的自定义光标样式，如需通过UIExtensionAbility进程设置宿主窗口的自定义光标样式，请参阅 [setCustomCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcustomcursor)，使用 Promise异步回调。 |
| [setCustomCursor](arkts-pointer-setcustomcursor-f.md#setCustomCursor-2) | 设置指定窗口的自定义光标样式，此接口仅支持设置本应用进程内窗口的自定义光标样式，如需通过UIExtensionAbility进程设置宿主窗口的自定义光标样式，请参阅 [setCustomCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcustomcursor)，使用 Promise异步回调。 应用窗口布局改变、热区切换、页面跳转、光标移出再回到窗口、光标在窗口不同区域移动，以上场景可能导致光标切换回系统样式，需要开发者重新设置光标样式。 |
| [setCustomCursorSync](arkts-pointer-setcustomcursorsync-f.md#setCustomCursorSync-1) | 设置指定窗口的自定义光标样式，使用同步方式进行设置。此接口仅支持设置本应用进程内窗口的自定义光标样式，如需通过UIExtensionAbility进程设置宿主窗口的自定义光标样式，请参阅 [setCustomCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcustomcursor)。 |
| <!--DelRow-->[setHoverScrollState](arkts-pointer-sethoverscrollstate-f-sys.md#setHoverScrollState-1) | 设置鼠标悬停滚动开关状态，使用callback异步回调。 |
| <!--DelRow-->[setHoverScrollState](arkts-pointer-sethoverscrollstate-f-sys.md#setHoverScrollState-2) | 设置鼠标悬停滚动开关状态，使用Promise异步回调。 |
| <!--DelRow-->[setMousePrimaryButton](arkts-pointer-setmouseprimarybutton-f-sys.md#setMousePrimaryButton-1) | 设置鼠标主键，使用callback异步回调。 |
| <!--DelRow-->[setMousePrimaryButton](arkts-pointer-setmouseprimarybutton-f-sys.md#setMousePrimaryButton-2) | 设置鼠标主键，使用Promise异步回调。 |
| <!--DelRow-->[setMouseScrollDirection](arkts-pointer-setmousescrolldirection-f-sys.md#setMouseScrollDirection-1) | 设置鼠标滚轮滚动的方向，使用Promise异步回调。 |
| <!--DelRow-->[setMouseScrollRows](arkts-pointer-setmousescrollrows-f-sys.md#setMouseScrollRows-1) | 设置鼠标滚动行数，使用callback异步回调。 |
| <!--DelRow-->[setMouseScrollRows](arkts-pointer-setmousescrollrows-f-sys.md#setMouseScrollRows-2) | 设置鼠标滚动行数，使用Promise异步回调。 |
| <!--DelRow-->[setPointerColor](arkts-pointer-setpointercolor-f-sys.md#setPointerColor-1) | 设置鼠标光标颜色，使用callback异步回调。 > **说明**： > > 设置和调试时，需连接外部设备，如鼠标、蓝牙等。 |
| <!--DelRow-->[setPointerColor](arkts-pointer-setpointercolor-f-sys.md#setPointerColor-2) | 设置鼠标光标颜色，使用Promise异步回调。 > **说明**： > > 设置和调试时，需连接外部设备，如鼠标、蓝牙等。 |
| <!--DelRow-->[setPointerColorSync](arkts-pointer-setpointercolorsync-f-sys.md#setPointerColorSync-1) | 设置鼠标光标颜色，使用同步方式进行设置。 > **说明**： > > 设置和调试时，需连接外部设备，如鼠标、蓝牙等。 |
| <!--DelRow-->[setPointerSize](arkts-pointer-setpointersize-f-sys.md#setPointerSize-1) | 设置鼠标光标大小，使用callback异步回调。 |
| <!--DelRow-->[setPointerSize](arkts-pointer-setpointersize-f-sys.md#setPointerSize-2) | 设置鼠标光标大小，使用Promise异步回调。 |
| <!--DelRow-->[setPointerSizeSync](arkts-pointer-setpointersizesync-f-sys.md#setPointerSizeSync-1) | 设置鼠标光标大小，使用同步方式进行设置。 |
| <!--DelRow-->[setPointerSpeed](arkts-pointer-setpointerspeed-f-sys.md#setPointerSpeed-1) | 设置鼠标移动速度，使用callback异步回调。 |
| <!--DelRow-->[setPointerSpeed](arkts-pointer-setpointerspeed-f-sys.md#setPointerSpeed-2) | 设置鼠标移动速度，使用Promise异步回调。 |
| <!--DelRow-->[setPointerSpeedSync](arkts-pointer-setpointerspeedsync-f-sys.md#setPointerSpeedSync-1) | 使用同步方式设置鼠标移动速度。 |
| [setPointerStyle](arkts-pointer-setpointerstyle-f.md#setPointerStyle-1) | 设置指定窗口的鼠标样式类型，此接口仅支持设置本应用进程内窗口的鼠标样式类型，如需通过UIExtensionAbility进程设置宿主窗口的鼠标样式类型，请参阅 [setCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcursor12)，使用callback异步回调。 |
| [setPointerStyle](arkts-pointer-setpointerstyle-f.md#setPointerStyle-2) | 设置指定窗口的鼠标样式类型，此接口仅支持设置本应用进程内窗口的鼠标样式类型，如需通过UIExtensionAbility进程设置宿主窗口的鼠标样式类型，请参阅 [setCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcursor12)，使用Promise异步回调。 |
| [setPointerStyleSync](arkts-pointer-setpointerstylesync-f.md#setPointerStyleSync-1) | 设置指定窗口的鼠标样式类型，使用同步方式返回结果。此接口仅支持设置本应用进程内窗口的鼠标样式类型，如需通过UIExtensionAbility进程设置宿主窗口的鼠标样式类型，请参阅 [setCursor](docroot://reference/apis-arkui/arkts-apis-uicontext-cursorcontroller.md#setcursor12)。 |
| [setPointerVisible](arkts-pointer-setpointervisible-f.md#setPointerVisible-1) | 设置当前窗口的鼠标光标是否显示，使用callback异步回调。 |
| [setPointerVisible](arkts-pointer-setpointervisible-f.md#setPointerVisible-2) | 设置当前窗口的鼠标光标是否显示，使用Promise异步回调。 |
| [setPointerVisibleSync](arkts-pointer-setpointervisiblesync-f.md#setPointerVisibleSync-1) | 设置当前窗口鼠标光标的显示状态，使用同步方式。 |
| <!--DelRow-->[setTouchpadDoubleTapAndDragState](arkts-pointer-settouchpaddoubletapanddragstate-f-sys.md#setTouchpadDoubleTapAndDragState-1) | 设置触控板双击拖拽开关状态，使用callback异步回调。 |
| <!--DelRow-->[setTouchpadDoubleTapAndDragState](arkts-pointer-settouchpaddoubletapanddragstate-f-sys.md#setTouchpadDoubleTapAndDragState-2) | 设置触控板双击拖拽开关状态，使用Promise异步回调。 |
| <!--DelRow-->[setTouchpadPinchSwitch](arkts-pointer-settouchpadpinchswitch-f-sys.md#setTouchpadPinchSwitch-1) | 设置触控板双指捏合功能开关，使用callback异步回调。 |
| <!--DelRow-->[setTouchpadPinchSwitch](arkts-pointer-settouchpadpinchswitch-f-sys.md#setTouchpadPinchSwitch-2) | 设置触控板双指捏合功能开关，使用Promise异步回调。 |
| <!--DelRow-->[setTouchpadPointerSpeed](arkts-pointer-settouchpadpointerspeed-f-sys.md#setTouchpadPointerSpeed-1) | 设置触控板光标移动速度，使用callback异步回调。 |
| <!--DelRow-->[setTouchpadPointerSpeed](arkts-pointer-settouchpadpointerspeed-f-sys.md#setTouchpadPointerSpeed-2) | 设置触控板光标移动速度，使用Promise异步回调。 |
| <!--DelRow-->[setTouchpadRightClickType](arkts-pointer-settouchpadrightclicktype-f-sys.md#setTouchpadRightClickType-1) | 设置触控板右键菜单类型，使用callback异步回调。 |
| <!--DelRow-->[setTouchpadRightClickType](arkts-pointer-settouchpadrightclicktype-f-sys.md#setTouchpadRightClickType-2) | 设置触控板右键菜单类型，使用Promise异步回调。 |
| <!--DelRow-->[setTouchpadScrollDirection](arkts-pointer-settouchpadscrolldirection-f-sys.md#setTouchpadScrollDirection-1) | 设置触控板滚轴的方向，使用callback异步回调。 |
| <!--DelRow-->[setTouchpadScrollDirection](arkts-pointer-settouchpadscrolldirection-f-sys.md#setTouchpadScrollDirection-2) | 设置触控板滚轴的方向，使用Promise异步回调。 |
| <!--DelRow-->[setTouchpadScrollSwitch](arkts-pointer-settouchpadscrollswitch-f-sys.md#setTouchpadScrollSwitch-1) | 设置触控板滚轴开关，使用callback异步回调。 |
| <!--DelRow-->[setTouchpadScrollSwitch](arkts-pointer-settouchpadscrollswitch-f-sys.md#setTouchpadScrollSwitch-2) | 设置触控板滚轴开关，使用Promise异步回调。 |
| <!--DelRow-->[setTouchpadSwipeSwitch](arkts-pointer-settouchpadswipeswitch-f-sys.md#setTouchpadSwipeSwitch-1) | 设置触控板多指滑动功能开关，使用callback异步回调。 |
| <!--DelRow-->[setTouchpadSwipeSwitch](arkts-pointer-settouchpadswipeswitch-f-sys.md#setTouchpadSwipeSwitch-2) | 设置触控板多指滑动功能开关，使用Promise异步回调。 |
| <!--DelRow-->[setTouchpadTapSwitch](arkts-pointer-settouchpadtapswitch-f-sys.md#setTouchpadTapSwitch-1) | 设置触控板轻触功能开关，使用callback异步回调。 |
| <!--DelRow-->[setTouchpadTapSwitch](arkts-pointer-settouchpadtapswitch-f-sys.md#setTouchpadTapSwitch-2) | 设置触控板轻触功能开关，使用Promise异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [CursorConfig](arkts-pointer-cursorconfig-i.md) | 自定义光标配置。 |
| [CustomCursor](arkts-pointer-customcursor-i.md) | 自定义光标资源。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [PointerStyle](arkts-pointer-pointerstyle-e.md) | 鼠标光标样式类型。 |
| [PrimaryButton](arkts-pointer-primarybutton-e.md) | 鼠标主键类型。 |
| [RightClickType](arkts-pointer-rightclicktype-e.md) | 右键菜单的触发方式。 |

