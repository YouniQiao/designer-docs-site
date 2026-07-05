# @ohos.display

屏幕属性提供管理显示设备的一些基础能力，包括获取默认显示设备的信息，获取所有显示设备的信息以及监听显示设备的插拔行为。

**Since:** 7

**System capability:** SystemCapability.WindowManager.WindowManager.Core

## Modules to Import

```TypeScript
import { display } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[addVirtualScreenBlocklist](arkts-display-addvirtualscreenblocklist-f-sys.md#addVirtualScreenBlocklist-1) | 将窗口添加到禁止投屏显示的名单中，被添加的窗口无法在投屏时显示。仅对应用主窗或系统窗口生效。使用Promise异步回调。 |
| <!--DelRow-->[addVirtualScreenSurface](arkts-display-addvirtualscreensurface-f-sys.md#addVirtualScreenSurface-1) | 为虚拟屏幕添加surface。 |
| [convertGlobalToRelativeCoordinate](arkts-display-convertglobaltorelativecoordinate-f.md#convertGlobalToRelativeCoordinate-1) | 将主屏左上角为原点的全局坐标转换成displayId指定屏幕左上角为原点的相对坐标。若未传入displayId，默认转换为全局坐标所在屏幕的相对坐标系。若全局坐标不在任何屏幕上，默认转换成主屏的相对坐标。 |
| [convertRelativeToGlobalCoordinate](arkts-display-convertrelativetoglobalcoordinate-f.md#convertRelativeToGlobalCoordinate-1) | 将指定屏幕左上角为原点的相对坐标转换成主屏左上角为原点的全局坐标，仅支持主屏和扩展屏的坐标转换。 |
| [createVirtualScreen](arkts-display-createvirtualscreen-f.md#createVirtualScreen-1) | 创建虚拟屏幕，使用Promise异步回调。 |
| [destroyVirtualScreen](arkts-display-destroyvirtualscreen-f.md#destroyVirtualScreen-1) | 销毁虚拟屏幕，使用Promise异步回调。 |
| [getAllDisplay](arkts-display-getalldisplay-f.md#getAllDisplay-1) | 获取当前所有的Display对象，使用callback异步回调。 |
| [getAllDisplay](arkts-display-getalldisplay-f.md#getAllDisplay-2) | 获取当前所有的Display对象，使用Promise异步回调。 |
| [getAllDisplayPhysicalResolution](arkts-display-getalldisplayphysicalresolution-f.md#getAllDisplayPhysicalResolution-1) | 获取当前设备支持的所有显示模式及其对应的物理屏幕分辨率信息对象。使用Promise异步回调。 |
| [getAllDisplays](arkts-display-getalldisplays-f.md#getAllDisplays-1) | 获取当前所有的Display对象，使用callback异步回调。 |
| [getAllDisplays](arkts-display-getalldisplays-f.md#getAllDisplays-2) | 获取当前所有的Display对象，使用Promise异步回调。 |
| [getBrightnessInfo](arkts-display-getbrightnessinfo-f.md#getBrightnessInfo-1) | 获取指定displayId对应屏幕的亮度信息。如果屏幕不支持HDR，返回的[BrightnessInfo]{@link display.BrightnessInfo}对象中的currentHeadroom和maxHeadroom 为默认值。虚拟屏的BrightnessInfo对象中sdrNits为默认值。 |
| [getCurrentFoldCreaseRegion](arkts-display-getcurrentfoldcreaseregion-f.md#getCurrentFoldCreaseRegion-1) | 在当前显示模式下获取折叠折痕区域。 |
| [getDefaultDisplay](arkts-display-getdefaultdisplay-f.md#getDefaultDisplay-1) | 获取当前默认的Display对象，使用callback异步回调。 |
| [getDefaultDisplay](arkts-display-getdefaultdisplay-f.md#getDefaultDisplay-2) | 获取当前默认的Display对象，使用Promise异步回调。 |
| [getDefaultDisplaySync](arkts-display-getdefaultdisplaysync-f.md#getDefaultDisplaySync-1) | 返回应用所在屏幕的Display对象。若应用内多个Ability在不同屏幕，返回主屏的Display对象，若应用内多个Ability在同一屏幕，返回所在屏幕的Display对象。 |
| [getDisplayByIdSync](arkts-display-getdisplaybyidsync-f.md#getDisplayByIdSync-1) | 根据displayId获取对应的Display对象。 |
| [getFoldDisplayMode](arkts-display-getfolddisplaymode-f.md#getFoldDisplayMode-1) | 获取可折叠设备当前的显示模式。 |
| [getFoldStatus](arkts-display-getfoldstatus-f.md#getFoldStatus-1) | 获取可折叠设备当前的折叠状态。 |
| [getPrimaryDisplaySync](arkts-display-getprimarydisplaysync-f.md#getPrimaryDisplaySync-1) | 获取主屏信息。除2in1之外的设备获取的是设备自带屏幕的Display对象；2in1设备外接屏幕时获取的是当前主屏幕的Display对象；2in1设备没有外接屏幕时获取的是自带屏幕的Display对象。 |
| <!--DelRow-->[hasPrivateWindow](arkts-display-hasprivatewindow-f-sys.md#hasPrivateWindow-1) | 查询指定display对象上是否有可见的隐私窗口。可通过 [setWindowPrivacyMode()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowprivacymode9)接口设置隐私窗口。 隐私窗口内容将无法被截屏或录屏。 |
| [isCaptured](arkts-display-iscaptured-f.md#isCaptured-1) | 检查设备的屏幕显示信息是否被获取。 |
| [isCaptured](arkts-display-iscaptured-f.md#isCaptured-2) | 检查该设备是否被bundle名称列表中的任何应用抓拍、投影或录制。 |
| [isFoldable](arkts-display-isfoldable-f.md#isFoldable-1) | 判断设备是否可折叠。 |
| [makeUnique](arkts-display-makeunique-f.md#makeUnique-1) | 将屏幕设置为异源模式，使用Promise异步回调。 |
| [off](arkts-display-off-f.md#off-1) | 关闭显示设备变化的监听。 |
| [off](arkts-display-off-f.md#off-2) | 关闭显示设备变化的监听。 |
| [off](arkts-display-off-f.md#off-3) | 关闭显示设备变化的监听。 |
| [off](arkts-display-off-f.md#off-4) | 关闭折叠设备折叠状态变化的监听。 |
| [off](arkts-display-off-f.md#off-5) | 关闭折叠设备折叠角度变化的监听。 |
| [off](arkts-display-off-f.md#off-6) | 关闭设备的屏幕显示信息是否被获取的监听。 |
| [off](arkts-display-off-f.md#off-7) | 关闭折叠设备屏幕显示模式变化的监听。 |
| [off](arkts-display-off-f.md#off-8) | 关闭所有屏幕亮度信息状态变化的监听。 |
| <!--DelRow-->[off](arkts-display-off-f-sys.md#off-1) | 关闭屏幕隐私模式变化的监听。当屏幕前台有隐私窗口，则屏幕处于隐私模式，屏幕中的隐私窗口内容无法被截屏或录屏。 |
| [offAdd](arkts-display-offadd-f.md#offAdd-1) | Unregister the callback for display add events. |
| [offBrightnessInfoChange](arkts-display-offbrightnessinfochange-f.md#offBrightnessInfoChange-1) | Unregister the callback for brightness info changes. |
| [offCaptureStatusChange](arkts-display-offcapturestatuschange-f.md#offCaptureStatusChange-1) | Unregister the callback for device capture, casting, or recording status changes. |
| [offChange](arkts-display-offchange-f.md#offChange-1) | Unregister the callback for display changes. |
| [offFoldAngleChange](arkts-display-offfoldanglechange-f.md#offFoldAngleChange-1) | Unregister the callback for fold angle changes. |
| [offFoldDisplayModeChange](arkts-display-offfolddisplaymodechange-f.md#offFoldDisplayModeChange-1) | Unregister the callback for fold display mode changes. |
| [offFoldStatusChange](arkts-display-offfoldstatuschange-f.md#offFoldStatusChange-1) | Unregister the callback for fold status changes. |
| <!--DelRow-->[offPrivateModeChange](arkts-display-offprivatemodechange-f-sys.md#offPrivateModeChange-1) | Unregister the callback for private mode changes. |
| [offRemove](arkts-display-offremove-f.md#offRemove-1) | Unregister the callback for display remove events. |
| [on](arkts-display-on-f.md#on-1) | 开启显示设备变化的监听。 |
| [on](arkts-display-on-f.md#on-2) | 开启显示设备变化的监听。 |
| [on](arkts-display-on-f.md#on-3) | 开启显示设备变化的监听。 |
| [on](arkts-display-on-f.md#on-4) | 开启折叠设备折叠状态变化的监听。 本接口监听设备物理折叠状态的变化，如果要监听屏幕显示模式的变化，需要使用 [display.on('foldDisplayModeChange')]{@link display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>)} 接口。 两者存在差异，时序上物理折叠状态变化在前，底层会根据物理折叠状态匹配屏幕显示模式状态。 若需监听当前显示内容是显示在折叠设备的内屏还是外屏，请使用 [display.on('foldDisplayModeChange')]{@link display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>)} 。 |
| [on](arkts-display-on-f.md#on-5) | 开启折叠设备折叠角度变化的监听。如果是双折轴设备，则有两个角度值；在充电口朝下的状态下，从右到左分别是折轴一和折轴二。 |
| [on](arkts-display-on-f.md#on-6) | 开启设备的屏幕显示信息是否被获取的监听。 |
| [on](arkts-display-on-f.md#on-7) | 开启折叠设备屏幕显示模式变化的监听。 本接口监听设备屏幕显示模式的变化，如果要监听设备物理折叠状态的变化，需要使用 [display.on('foldStatusChange')]{@link display.on(type: 'foldStatusChange', callback: Callback<FoldStatus>)}接口。 两者存在差异，时序上物理折叠状态变化在前，底层会根据物理折叠状态匹配屏幕显示模式状态。 |
| [on](arkts-display-on-f.md#on-8) | 开启所有屏幕亮度信息变化的监听。如果屏幕不支持HDR，监听到的[BrightnessInfo]{@link display.BrightnessInfo}对象中的currentHeadroom和maxHeadroom为默认值。虚拟 屏的BrightnessInfo对象中sdrNits为默认值。 |
| <!--DelRow-->[on](arkts-display-on-f-sys.md#on-1) | 开启屏幕隐私模式变化的监听。当屏幕前台有隐私窗口，则屏幕处于隐私模式，屏幕中的隐私窗口内容无法被截屏或录屏。 |
| [onAdd](arkts-display-onadd-f.md#onAdd-1) | Register the callback for display add events. |
| [onBrightnessInfoChange](arkts-display-onbrightnessinfochange-f.md#onBrightnessInfoChange-1) | Register the callback for brightness info changes. |
| [onCaptureStatusChange](arkts-display-oncapturestatuschange-f.md#onCaptureStatusChange-1) | Register the callback for device capture, casting, or recording status changes. |
| [onChange](arkts-display-onchange-f.md#onChange-1) | Register the callback for display changes. |
| [onChangeWithAttribute](arkts-display-onchangewithattribute-f.md#onChangeWithAttribute-1) | 开启显示设备指定属性变化的监听。 |
| [onFoldAngleChange](arkts-display-onfoldanglechange-f.md#onFoldAngleChange-1) | Register the callback for fold angle changes. |
| [onFoldDisplayModeChange](arkts-display-onfolddisplaymodechange-f.md#onFoldDisplayModeChange-1) | Register the callback for fold display mode changes. |
| [onFoldStatusChange](arkts-display-onfoldstatuschange-f.md#onFoldStatusChange-1) | Register the callback for fold status changes. |
| <!--DelRow-->[onPrivateModeChange](arkts-display-onprivatemodechange-f-sys.md#onPrivateModeChange-1) | Register the callback for private mode changes. |
| [onRemove](arkts-display-onremove-f.md#onRemove-1) | Register the callback for display remove events. |
| <!--DelRow-->[removeVirtualScreenBlocklist](arkts-display-removevirtualscreenblocklist-f-sys.md#removeVirtualScreenBlocklist-1) | 将窗口从禁止投屏显示的名单中移除，被移除的窗口可以在投屏时显示。仅对应用主窗或系统窗口生效。使用Promise异步回调。 |
| <!--DelRow-->[removeVirtualScreenSurface](arkts-display-removevirtualscreensurface-f-sys.md#removeVirtualScreenSurface-1) | 删除虚拟屏的surface |
| <!--DelRow-->[setFoldDisplayMode](arkts-display-setfolddisplaymode-f-sys.md#setFoldDisplayMode-1) | 更改可折叠设备的显示模式。 |
| <!--DelRow-->[setFoldDisplayMode](arkts-display-setfolddisplaymode-f-sys.md#setFoldDisplayMode-2) | 更改可折叠设备的显示模式，并指明更改原因。 |
| <!--DelRow-->[setFoldStatusLocked](arkts-display-setfoldstatuslocked-f-sys.md#setFoldStatusLocked-1) | 设置可折叠设备当前折叠状态的锁定状态。 |
| [setVirtualScreenSurface](arkts-display-setvirtualscreensurface-f.md#setVirtualScreenSurface-1) | 设置虚拟屏幕的surfaceId，surfaceId用于标识一个surface，表示当前虚拟屏用于显示对应surface中的内容。使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| [BrightnessInfo](arkts-display-brightnessinfo-i.md) | 屏幕亮度信息。此类型中的信息均来自底层屏幕信息数据。 |
| [CutoutInfo](arkts-display-cutoutinfo-i.md) | 挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。 |
| [Display](arkts-display-display-i.md) | 屏幕实例。描述Display对象的属性和方法。 下列API示例中都需先使用[getAllDisplays()]{@link display.getAllDisplays(callback: AsyncCallback<Array<Display>>)}、 [getDefaultDisplaySync()]{@link display.getDefaultDisplaySync}中的任一方法获取到Display实例，再通过此实例调用对应方法。 |
| [DisplayPhysicalResolution](arkts-display-displayphysicalresolution-i.md) | 设备的显示模式以及对应的物理屏幕分辨率信息。 |
| [FoldCreaseRegion](arkts-display-foldcreaseregion-i.md) | 折叠折痕区域。 |
| [Position](arkts-display-position-i.md) | 坐标位置：在全局坐标系中，以主屏左上角为原点。在相对坐标系中，以指定屏幕左上角为原点。 |
| [Rect](arkts-display-rect-i.md) | 矩形区域。 |
| [RelativePosition](arkts-display-relativeposition-i.md) | 相对坐标系下的坐标位置，以displayId对应的屏幕左上角为原点。 |
| [RoundedCorner](arkts-display-roundedcorner-i.md) | 屏幕圆角定义。 |
| [VirtualScreenConfig](arkts-display-virtualscreenconfig-i.md) | 创建虚拟屏幕的参数。 |
| [WaterfallDisplayAreaRects](arkts-display-waterfalldisplayarearects-i.md) | 瀑布屏曲面部分显示区域。 |

### Types

| Name | Description |
| --- | --- |
| [BrightnessCallback](arkts-display-brightnesscallback-t.md) | 监听屏幕亮度信息时使用的回调函数类型。 |

### Enums

| Name | Description |
| --- | --- |
| [CornerType](arkts-display-cornertype-e.md) | 屏幕圆角类型枚举。 |
| [DisplaySourceMode](arkts-display-displaysourcemode-e.md) | 屏幕显示内容的显示模式枚举。 |
| [DisplayState](arkts-display-displaystate-e.md) | 显示设备的状态枚举。 |
| [FoldDisplayMode](arkts-display-folddisplaymode-e.md) | 可折叠设备的显示模式枚举。 > **说明：** > 对于内外屏均可作为主屏幕使用的折叠产品，例如大折叠、阔折叠，内屏显示状态为FOLD_DISPLAY_MODE_FULL，外屏显示状态为FOLD_DISPLAY_MODE_MAIN。 > 对于外屏只有简单的辅助显示作用的折叠产品，例如小折叠，内屏显示状态为FOLD_DISPLAY_MODE_MAIN，外屏显示状态为FOLD_DISPLAY_MODE_SUB。 |
| [FoldStatus](arkts-display-foldstatus-e.md) | 当前可折叠设备的折叠状态枚举。如果是双折轴设备，则在充电口朝下的状态下，从右到左分别是折轴一和折轴二。 > **说明：** > 只有一个折轴的产品包含FOLD_STATUS_EXPANDED、FOLD_STATUS_FOLDED、FOLD_STATUS_HALF_FOLDED三种折叠状态。 > 具有两个折轴的产品包含上表除FOLD_STATUS_UNKNOWN以外的九种折叠状态。 > FOLD_STATUS_UNKNOWN是一种不可用的折叠状态。 |
| [Orientation](arkts-display-orientation-e.md) | 显示设备当前显示的方向枚举。 |
| [ScreenShape](arkts-display-screenshape-e.md) | 显示设备的屏幕形状枚举。 |

