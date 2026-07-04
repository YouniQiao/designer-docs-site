# TextMenuController

Provides the capability to control text menus. > **NOTE** > > - In the following non-static API examples, you must first use > [getTextMenuController()](arkts-arkui-uicontext-c.md#gettextmenucontroller-1) in **UIContext** to obtain a > **TextMenuController** instance, and then call the APIs using the obtained instance.

**Since:** 16

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@ohos.arkui.UIContext';
```

## disableMenuItems

```TypeScript
static disableMenuItems(items: Array<TextMenuItemId>): void
```

Disables specified system service menu items in the text selection menu. > **NOTE** > > - This API takes effect globally for the entire application process after being called. > > - This API can be used in [UIAbility](../../apis-ability-kit/arkts-apis/arkts-app-ability-uiability.md). > > - After this API is called, the [editMenuOptions](TextAttribute#editMenuOptions) API of text components > will be affected. The parameter list of its [onCreateMenu](../arkts-components/arkts-arkui-editmenuoptions-i.md#oncreatemenu-1) callback will not > include the disabled menu options. > > - Components involving text selection menus include the following: [Text](./@internal/component/ets/text), > [TextArea](./@internal/component/ets/text_area), [TextInput](./@internal/component/ets/text_input), > [Search](./@internal/component/ets/search), [RichEditor](./@internal/component/ets/rich_editor), and > [Web](./@internal/component/ets/web). > > - System service menu items refer to menu items other than copy, cut, select all, and paste in > [TextMenuItemId](../arkts-components/arkts-arkui-textmenuitemid-c.md#textmenuitemid). > > - When both **disableSystemServiceMenuItems** and **disableMenuItems** are set, the earlier-set > **disableSystemServiceMenuItems** takes precedence. > > - This API takes effect globally, and multiple calls are subject to the last call. > > - Disabling a first-level menu item will also disable all its second-level menu items. For example, disabling the > first-level menu item **autoFill** (parent item) in [TextMenuItemId](../arkts-components/arkts-arkui-textmenuitemid-c.md#textmenuitemid) will simultaneously > disable the second-level menu item **passwordVault** (child item) in **TextMenuItemId**. > > - Disabling individual second-level menu items is not supported. If required, this can be achieved by disabling > the corresponding first-level menu item. > > - Disabled menus can be restored in the following ways: > > - If only **disableSystemServiceMenuItems(true)** is used to disable menus, set it to **false** to restore. > > - If only **disableMenuItems** is used to disable menus, set it to an empty array to restore. > > - If both **disableSystemServiceMenuItems** and **disableMenuItems** are used, set the former to **false** and > the latter to an empty array to restore.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| items | Array&lt;TextMenuItemId&gt; | Yes | List of menu items to disable.<br>Default value: [].<br>By default, no menu item is disabled. |

## disableSystemServiceMenuItems

```TypeScript
static disableSystemServiceMenuItems(disable: boolean): void
```

Disables all system service menu items in the text selection menu. > **NOTE** > > - This API takes effect globally for the entire application process after being called. > > - This API can be used in [UIAbility](../../apis-ability-kit/arkts-apis/arkts-app-ability-uiability.md). > > - After this API is called, the [editMenuOptions](TextAttribute#editMenuOptions) API of text components > will be affected. The parameter list of its [onCreateMenu](../arkts-components/arkts-arkui-editmenuoptions-i.md#oncreatemenu-1) callback will not > include the disabled menu options. > > - Components involving text selection menus include the following: [Text](./@internal/component/ets/text), > [TextArea](./@internal/component/ets/text_area), [TextInput](./@internal/component/ets/text_input), > [Search](./@internal/component/ets/search), [RichEditor](./@internal/component/ets/rich_editor), and > [Web](./@internal/component/ets/web). > > - System service menu items refer to menu items other than copy, cut, select all, and paste in > [TextMenuItemId](../arkts-components/arkts-arkui-textmenuitemid-c.md#textmenuitemid). > > - When both **disableSystemServiceMenuItems** and **disableMenuItems** are set, the earlier-set > **disableSystemServiceMenuItems** takes precedence. > > - This API takes effect globally, and multiple calls are subject to the last call. > > - Disabled menus can be restored in the following ways: > > - If only **disableSystemServiceMenuItems(true)** is used to disable menus, set it to **false** to restore. > > - If only **disableMenuItems** is used to disable menus, set it to an empty array to restore. > > - If both **disableSystemServiceMenuItems** and **disableMenuItems** are used, set the former to **false** and > the latter to an empty array to restore.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| disable | boolean | Yes | Whether to disable system service menu items. The value **true** means to disablesystem service menu items, and **false** means the opposite.<br>Default value: false. |

## setMenuOptions

```TypeScript
setMenuOptions(options: TextMenuOptions): void
```

Set menu options.

**Since:** 16

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 16.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | TextMenuOptions | Yes | Menu options.<br>Default value: {showMode: TextMenuShowMode.DEFAULT}. |

