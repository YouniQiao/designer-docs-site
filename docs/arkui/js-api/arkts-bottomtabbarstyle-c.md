# BottomTabBarStyle

�ײ�ҳǩ�Ͳ��ҳǩ��ʽ��

**Since:** 9

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## constructor

```TypeScript
constructor(icon: ResourceStr | TabBarSymbol, text: ResourceStr)
```

BottomTabBarStyle�Ĺ��캯����

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| icon | ResourceStr \| TabBarSymbol | Yes | ҳǩ�ڵ�ͼƬ���ݡ� [since 9 - 11] |
| text | ResourceStr | Yes | ҳǩ�ڵ��������ݡ� |

## iconStyle

```TypeScript
iconStyle(style: TabBarIconStyle): BottomTabBarStyle
```

���õײ�ҳǩ��labelͼ�����ʽ��

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | TabBarIconStyle | Yes | �ײ�ҳǩ��labelͼ�����ʽ�� |

**Return value:**

| Type | Description |
| --- | --- |
| BottomTabBarStyle | ����BottomTabBarStyle�������� |

## id

```TypeScript
id(value: string): BottomTabBarStyle
```

���õײ�ҳǩ��id��

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | ���õײ�ҳǩ��id�� |

**Return value:**

| Type | Description |
| --- | --- |
| BottomTabBarStyle | ����BottomTabBarStyle�������� |

## labelStyle

```TypeScript
labelStyle(value: LabelStyle): BottomTabBarStyle
```

���õײ�ҳǩ��label�ı����������ʽ��

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LabelStyle | Yes | �ײ�ҳǩ��label�ı����������ʽ�� |

**Return value:**

| Type | Description |
| --- | --- |
| BottomTabBarStyle | ����BottomTabBarStyle�������� |

## layoutMode

```TypeScript
layoutMode(value: LayoutMode): BottomTabBarStyle
```

���õײ�ҳǩ��ͼƬ�������Ų��ķ�ʽ��

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | LayoutMode | Yes | �ײ�ҳǩ��ͼƬ�������Ų��ķ�ʽ���������LayoutModeö�١� Ĭ��ֵ��LayoutMode.VERTICAL |

**Return value:**

| Type | Description |
| --- | --- |
| BottomTabBarStyle | ����BottomTabBarStyle�������� |

## of

```TypeScript
static of(icon: ResourceStr | TabBarSymbol, text: ResourceStr): BottomTabBarStyle
```

BottomTabBarStyle�ľ�̬���캯����

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| icon | ResourceStr \| TabBarSymbol | Yes | ҳǩ�ڵ�ͼƬ���ݡ� [since 10 - 11] |
| text | ResourceStr | Yes | ҳǩ�ڵ��������ݡ� |

**Return value:**

| Type | Description |
| --- | --- |
| BottomTabBarStyle | ���ش�����BottomTabBarStyle���� |

## padding

```TypeScript
padding(value: Padding | Dimension | LocalizedPadding): BottomTabBarStyle
```

���õײ�ҳǩ���ڱ߾����ԣ���֧�ְٷֱ����ã���ʹ��Dimensionʱ���ĸ������ڱ߾�ͬʱ��Ч��

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Padding \| Dimension \| LocalizedPadding | Yes | �ײ�ҳǩ���ڱ߾ࡣ ȡֵ��Χ��[0, +��] Ĭ��ֵ��{left:4.0vp,right:4.0vp,top:0.0vp,bottom:  0.0vp} ʹ��LocalizedPaddingʱ��֧�־��������� Ĭ��ֵ��{start:LengthMetrics.vp(4),end:LengthMetrics.vp(4), top:  LengthMetrics.vp(0),bottom:LengthMetrics.vp(0)} [since 10 - 11] |

**Return value:**

| Type | Description |
| --- | --- |
| BottomTabBarStyle | ����BottomTabBarStyle�������� |

## symmetricExtensible

```TypeScript
symmetricExtensible(value: boolean): BottomTabBarStyle
```

���õײ�ҳǩ��ͼƬ�������Ƿ���ԶԳƽ������ҵײ�ҳǩ�Ŀ���λ���е���Сֵ����fixedˮƽģʽ���ڵײ�ҳǩ֮����Ч��

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | �ײ�ҳǩ��ͼƬ�������Ƿ���ԶԳƽ������ҵײ�ҳǩ�Ŀ���λ���е���Сֵ�� Ĭ��ֵ��false���ײ�ҳǩ��ͼƬ�����ֲ����ԶԳƽ������ҵײ�ҳǩ�Ŀ���λ���е���Сֵ�� |

**Return value:**

| Type | Description |
| --- | --- |
| BottomTabBarStyle | ����BottomTabBarStyle�������� |

## verticalAlign

```TypeScript
verticalAlign(value: VerticalAlign): BottomTabBarStyle
```

���õײ�ҳǩ��ͼƬ�������ڴ�ֱ�����ϵĶ����ʽ��

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | VerticalAlign | Yes | �ײ�ҳǩ��ͼƬ�������ڴ�ֱ�����ϵĶ����ʽ�� Ĭ��ֵ��VerticalAlign.Center |

**Return value:**

| Type | Description |
| --- | --- |
| BottomTabBarStyle | ����BottomTabBarStyle�������� |

