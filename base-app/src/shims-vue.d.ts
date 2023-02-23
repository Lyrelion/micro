declare module '*.vue' {
  import { defineComponent } from 'vue';

  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'echarts';
declare module 'codemirror';

// 公共地址配置 - 数据类型接口
declare let appConfig: {
  jdpAppCode: string;
  jdpOuApiContext: string;
  demoApiContext: string;
  jdpDemoApiContext: string;
  jdpBpmApiContext: string;
};

interface Window {
  microApp: [
    {
      name: string;
      container: string;
      entries: {
        [key: string]: string;
      };
      activeRule: string;
    },
  ];
}
