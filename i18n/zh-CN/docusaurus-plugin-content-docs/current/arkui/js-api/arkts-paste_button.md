# paste_button

安全粘贴控件实例。

## paste_button

```TypeScript
paste_button()
```

默认创建带有图标、文本、背景的粘贴控件。控件创建完成后，用户点击时系统会执行授权校验；授权成功后，应用可读取当前剪贴板内容。 <br>**说明**</br> <ul><li>为避免因控件样式不合法而导致授权失败，请开发者先了解安全控件样式 的[约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。</li></ul>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

```TypeScript
paste_button(options: PasteButtonOptions)
```

使用指定的图标、文本和按钮类型创建粘贴按钮。创建后，系统会触发一个 点击按钮时的授权检查。授权成功后，应用将获得临时权限 读取剪贴板。 <br>**说明**</br> <ul><li>为避免因控件样式不合法而导致授权失败，请开发者先了解安全控件样式 的[约束与限制](docroot://security/AccessToken/security-component-overview.md#约束与限制)。</li> </ul>

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | PasteButtonOptions | 是 | 粘贴控件的配置选项，用于指定图标、文本和按钮类型等元素属性。  建议至少显式设置icon或text中的一项，以便用户清楚识别控件用途。 若icon和text都未传入，则options不生效，控件显示为默认样式： { icon: PasteIconStyle.LINES, text: PasteDescription.PASTE, buttonType: ButtonType.Capsule } |

## 汇总

### 类

| 名称 | 描述 |
| --- | --- |
| [PasteButtonAttribute](arkts-pastebuttonattribute-c.md) | 不支持通用属性，仅继承[安全控件通用属性]{@link ./security_component}。 不支持通用事件，仅支持以下事件。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [PasteButtonInterface](arkts-pastebuttoninterface-i.md) | 定义用于设置粘贴按钮的接口。 |
| [PasteButtonOptions](arkts-pastebuttonoptions-i.md) | 用于设置粘贴控件的图标、文本、按钮类型等属性。 > **说明** > - 建议icon或text至少传入一个。 > > - 如果icon、text都不传入，PasteButton将使用默认样式创建，默认样式：PasteIconStyle默认样式为LINES；PasteDescription默认样式为PASTEButtonType默认样式为Capsule。 > > - icon、text和buttonType不支持动态修改。这是因为安全控件的样式和属性在创建时已通过系统校验，动态修改可能导致控件样式不符合安全控件规范，从而影响授权的有效性。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [PasteButtonOnClickResult](arkts-pastebuttononclickresult-e.md) | 粘贴控件点击后的授权结果。 |
| [PasteDescription](arkts-pastedescription-e.md) | 粘贴控件的文本描述。 |
| [PasteIconStyle](arkts-pasteiconstyle-e.md) | 粘贴控件的图标风格。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [PasteButtonCallback](arkts-pastebuttoncallback-t.md) | 点击粘贴控件触发该回调。 |

### 常量

| 名称 | 描述 |
| --- | --- |
| [PasteButton](arkts-paste-button-con.md#PasteButton) | 安全控件的粘贴控件。用户点击粘贴控件，应用可以临时获取读取剪贴板权限。 <br>**说明**</br> <ul><li>###### 核心枚举类型</li> <li>**[PasteIconStyle]{@link PasteIconStyle}：** 粘贴控件图标风格枚举，用于指定控件展示的图标风格。</li> <li>**[PasteDescription]{@link PasteDescription}：** 粘贴控件文本描述枚举，用于指定控件展示的文本描述。</li> <li>**[PasteButtonOnClickResult]{@link PasteButtonOnClickResult}：** 粘贴控件点击结果枚举，用于表示点击后授权是否成功。</li> <li>###### 核心接口类型</li> <li>**[PasteButtonOptions]{@link PasteButtonOptions}：** 粘贴控件配置对象，用于指定图标、文字和按钮类型等元素属性。</li> <li>**[PasteButtonCallback]{@link PasteButtonCallback}：** 粘贴控件点击回调类型，用于返回点击事件、授权结果和错误信息。</li> <li>###### 子组件</li> <li>不支持</li></ul> |
| [PasteButtonInstance](arkts-paste-button-con.md#PasteButtonInstance) | 安全粘贴控件实例。 |

