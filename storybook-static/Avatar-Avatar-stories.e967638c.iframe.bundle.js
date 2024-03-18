"use strict";(self.webpackChunkgitogram=self.webpackChunkgitogram||[]).push([[542],{"./src/components/Avatar/Avatar.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},defaultView:function(){return defaultView},postsView:function(){return postsView},storiesView:function(){return storiesView}});var ___WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Avatar/index.ts");__webpack_exports__.default={title:"Avatar",components:{Avatar:___WEBPACK_IMPORTED_MODULE_0__.e}};const defaultView=()=>({components:{Avatar:___WEBPACK_IMPORTED_MODULE_0__.e},template:'\n    <Avatar avatarUrl="https://i.pravatar.cc/300" />\n    '});defaultView.story={name:"Стандартный вид"};const storiesView=()=>({components:{Avatar:___WEBPACK_IMPORTED_MODULE_0__.e},template:'\n  <Avatar vClass="stories" avatarUrl="https://i.pravatar.cc/300" />\n  '});storiesView.story={name:"Имеется сторис"};const postsView=()=>({components:{Avatar:___WEBPACK_IMPORTED_MODULE_0__.e},template:'\n  <Avatar vClass="posts" avatarUrl="https://i.pravatar.cc/300" />\n  '});postsView.story={name:"В посте"},defaultView.parameters={...defaultView.parameters,docs:{...defaultView.parameters?.docs,source:{originalSource:'() => ({\n  components: {\n    Avatar\n  },\n  template: `\n    <Avatar avatarUrl="https://i.pravatar.cc/300" />\n    `\n})',...defaultView.parameters?.docs?.source}}},storiesView.parameters={...storiesView.parameters,docs:{...storiesView.parameters?.docs,source:{originalSource:'() => ({\n  components: {\n    Avatar\n  },\n  template: `\n  <Avatar vClass="stories" avatarUrl="https://i.pravatar.cc/300" />\n  `\n})',...storiesView.parameters?.docs?.source}}},postsView.parameters={...postsView.parameters,docs:{...postsView.parameters?.docs,source:{originalSource:'() => ({\n  components: {\n    Avatar\n  },\n  template: `\n  <Avatar vClass="posts" avatarUrl="https://i.pravatar.cc/300" />\n  `\n})',...postsView.parameters?.docs?.source}}};const __namedExportsOrder=["defaultView","storiesView","postsView"]},"./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/exportHelper.js":function(__unused_webpack_module,exports){exports.A=(sfc,props)=>{const target=sfc.__vccOpts||sfc;for(const[key,val]of props)target[key]=val;return target}},"./node_modules/css-loader/dist/cjs.js!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/components/Avatar/Avatar.vue?vue&type=style&index=0&id=fd2e4284&lang=scss&scoped=true":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".avatar[data-v-fd2e4284]{border-radius:50%;overflow:hidden;width:40px;height:40px}.avatar img[data-v-fd2e4284]{width:100%;height:100%;display:block;border-radius:50%;object-fit:cover}.stories[data-v-fd2e4284]{border:2px solid #a6328d;padding:4px;width:92px;height:92px;transition:border .1s;margin-bottom:10px}.stories[data-v-fd2e4284]:hover{border-color:rgba(0,0,0,0)}.posts[data-v-fd2e4284]{width:44px;height:44px}.slide[data-v-fd2e4284]{width:32px;height:32px}.profile[data-v-fd2e4284]{width:90px;height:90px}.following[data-v-fd2e4284]{width:72px;height:72px;margin-right:20px}","",{version:3,sources:["webpack://./src/components/Avatar/Avatar.vue"],names:[],mappings:"AACA,yBACE,iBAAA,CACA,eAAA,CACA,UAAA,CACA,WAAA,CAEA,6BACE,UAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CACA,gBAAA,CAGJ,0BACE,wBAAA,CACA,WAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,kBAAA,CAEA,gCACE,0BAAA,CAIJ,wBACE,UAAA,CACA,WAAA,CAGF,wBACE,UAAA,CACA,WAAA,CAGF,0BACE,UAAA,CACA,WAAA,CAGF,4BACE,UAAA,CACA,WAAA,CACA,iBAAA",sourcesContent:["\n.avatar {\n  border-radius: 50%;\n  overflow: hidden;\n  width: 40px;\n  height: 40px;\n\n  & img {\n    width: 100%;\n    height: 100%;\n    display: block;\n    border-radius: 50%;\n    object-fit: cover;\n  }\n}\n.stories {\n  border: 2px solid #a6328d;\n  padding: 4px;\n  width: 92px;\n  height: 92px;\n  transition: border 0.1s;\n  margin-bottom: 10px;\n\n  &:hover {\n    border-color: transparent;\n  }\n}\n\n.posts {\n  width: 44px;\n  height: 44px;\n}\n\n.slide {\n  width: 32px;\n  height: 32px;\n}\n\n.profile {\n  width: 90px;\n  height: 90px;\n}\n\n.following {\n  width: 72px;\n  height: 72px;\n  margin-right: 20px;\n}\n"],sourceRoot:""}]),__webpack_exports__.A=___CSS_LOADER_EXPORT___},"./src/components/Avatar/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{e:function(){return Avatar}});var vue_esm_bundler=__webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");const _hoisted_1=["src"];var Avatarvue_type_script_lang_ts={name:"Avatar",props:{avatarUrl:{type:String,default:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"},vClass:{type:String,required:!1}}},injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Avatarvue_type_style_index_0_id_fd2e4284_lang_scss_scoped_true=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/components/Avatar/Avatar.vue?vue&type=style&index=0&id=fd2e4284&lang=scss&scoped=true"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Avatarvue_type_style_index_0_id_fd2e4284_lang_scss_scoped_true.A,options),Avatarvue_type_style_index_0_id_fd2e4284_lang_scss_scoped_true.A&&Avatarvue_type_style_index_0_id_fd2e4284_lang_scss_scoped_true.A.locals&&Avatarvue_type_style_index_0_id_fd2e4284_lang_scss_scoped_true.A.locals;const __exports__=(0,__webpack_require__("./node_modules/@storybook/preset-vue3-webpack/node_modules/vue-loader/dist/exportHelper.js").A)(Avatarvue_type_script_lang_ts,[["render",function render(_ctx,_cache,$props,$setup,$data,$options){return(0,vue_esm_bundler.uX)(),(0,vue_esm_bundler.CE)("div",{class:(0,vue_esm_bundler.C4)(["avatar",$props.vClass])},[(0,vue_esm_bundler.Lk)("img",{src:$props.avatarUrl,alt:"avatar"},null,8,_hoisted_1)],2)}],["__scopeId","data-v-fd2e4284"]]);var Avatar=__exports__;__exports__.__docgenInfo={displayName:"Avatar",exportName:"default",description:"",tags:{},props:[{name:"avatarUrl",type:{name:"string"},defaultValue:{func:!1,value:'"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E"'}},{name:"vClass",type:{name:"string"},required:!1}],sourceFiles:["D:\\_www\\loft-school\\gitogramLS\\src\\components\\Avatar\\Avatar.vue"]}}}]);