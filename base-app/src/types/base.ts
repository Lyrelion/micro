/*
 * @Description: 基座中的数据类型接口
 * @Author: Lyrelion
 * @Date: 2022-03-22 13:41:05
 * @LastEditTime: 2023-02-23 10:08:49
 */

// 菜单项
export interface MenuItem {
  APP_ID?: string;
  AUTH_VISIT?: number;
  CHILDREN?: MenuItem[];
  IS_MENU?: number;
  MENU_URL?: string;
  PARENT?: string;
  PERMISSION_CODE?: string;
  RES_ID?: string;
  RES_NAME?: string | undefined;
  RES_PATH?: {
    MENU_ICON?: string;
    MENU_URL?: string;
    RES_ID?: string;
    RES_NAME?: string;
  }[];
  RES_TYPE?: number;
  TARGET?: string;
  [propName: string]: string | unknown;
}

// Tabs
export interface TabsInf {
  [propName: string]: MenuItem;
}

// 菜单的响应数据
export interface MenuDataResponse {
  activeMenuItem: MenuItem;
  appMap: MenuItem;
  asideMenusMap: MenuItem[];
  headerMenuList: { APP_ID: string }[];
  asideMenuList: MenuItem;
}

// 检查 Token 是否过期的响应数据
export interface CheckTokenResponse {
  status: number;
  message: boolean;
}

// 登出的响应数据
export interface LogoutResponse {
  message: string; // 返回消息描述
  status: string; // 返回值状态 - 0：登出失败 1：登出成功
}

// 配置数据
export interface ConfigData {
  theme: string; // 默认主题
  themes: string; // 默认主题
  themeColor: string; // 主题色
  themeStyle: string; // 主题风格-左亮上暗

  showHeader: boolean; // 显示顶栏
  headerBackgroundImage: string; // 顶栏背景图片

  menuLayoutInHeader: string; // 顶栏菜单结构
  menuActiveStyle: string; // 菜单选中样式
  showMenuIconInHeader: boolean; // 显示顶栏菜单图标
  showAllMenu: boolean; // 显示全部菜单
  menuLevelInHeader: number; // 顶栏菜单显示级别

  showAside: boolean; // 显示侧边栏
  collapseAside: boolean; // 折叠侧边栏
  asideCollapsible: boolean; // 侧边栏是否可折叠

  showTabs: boolean; // 显示标签栏
  showTabIcon: boolean; // 显示标签图标

  showBreadcrumbs: boolean; // 显示面包屑
  showBreadcrumbIcon: boolean; // 显示面包屑图标

  fontSize: number;
}

// 主题配置的响应数据
export interface Config {
  themes: string;
  themeStyle: string;
}

// 主题数据类型接口
export interface ThemesInf {
  [propName: string]: {
    title: string;
    color: string;
    backgroundImage: string;
  };
}

// store - user.ts 中的 state
export interface UserStoreStateInf {
  userName: string;
  loginName: string;
  userId: string;
  accessToken: string;
  headerMenuList: MenuItem[];
  asideMenusMap: { [propName: string]: MenuItem[] };
  activeMenuItem: MenuItem;
  appMap: MenuItem;
  asideMenuList: MenuItem[];
  tabs: TabsInf;
  [propName: string]: unknown;
}

// store - settings.ts 中的 state
export interface SettingsStoreStateInf {
  [propName: string]: string | boolean | number;
}

// store - index.ts
export interface ModuleInf {
  [key: string]: { namespaced: boolean };
}

// 加密数据格式
export interface DecodedDataInf {
  [n: string]: string;
}
