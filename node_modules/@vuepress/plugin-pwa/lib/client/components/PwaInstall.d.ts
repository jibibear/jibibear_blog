import * as vue from 'vue';
import { PropType, VNode } from 'vue';
import { P as PwaPluginLocaleConfig } from '../types-B0Ty8tPv.js';
import '@vuepress/helper/client';

declare const PwaInstall: vue.DefineComponent<vue.ExtractPropTypes<{
    /** locale data */
    locales: {
        type: PropType<PwaPluginLocaleConfig>;
        required: true;
    };
}>, () => VNode, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    /** locale data */
    locales: {
        type: PropType<PwaPluginLocaleConfig>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

export { PwaInstall };
