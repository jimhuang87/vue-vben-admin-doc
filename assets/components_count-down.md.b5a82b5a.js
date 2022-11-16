import{_ as n,f as t,e as a,N as s}from"./plugin-vue_export-helper.147b70e9.js";const g='{"title":"CountDown","description":"","frontmatter":{},"headers":[{"level":2,"title":"CountButton","slug":"countbutton"},{"level":3,"title":"Usage","slug":"usage"},{"level":3,"title":"Props","slug":"props"},{"level":2,"title":"CountDownInput","slug":"countdowninput"},{"level":3,"title":"Usage","slug":"usage-1"},{"level":3,"title":"Props","slug":"props-1"}],"relativePath":"components/count-down.md","lastUpdated":1668603914615}',p={},o=s(`<h1 id="countdown"><a class="header-anchor" href="#countdown" aria-hidden="true">#</a> CountDown</h1><p>\u5012\u8BA1\u65F6\u7EC4\u4EF6</p><h2 id="countbutton"><a class="header-anchor" href="#countbutton" aria-hidden="true">#</a> CountButton</h2><p>\u5012\u8BA1\u65F6\u6309\u94AE\u7EC4\u4EF6</p><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CountButton</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> CountButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/CountDown&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> CountButton <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><code>any</code></td><td>-</td><td>-</td><td>\u7ED1\u5B9A\u503C</td></tr><tr><td>count</td><td><code>number</code></td><td><code>60</code></td><td>-</td><td>\u5012\u8BA1\u65F6\u65F6\u95F4</td></tr><tr><td>beforeStartFunc</td><td><code>()=&gt;promise</code></td><td>-</td><td>-</td><td>\u5012\u8BA1\u65F6\u4E4B\u524D\u6267\u884C\u7684\u51FD\u6570\uFF0C\u8FD4\u56DE true \u624D\u4F1A\u5F00\u59CB\u6267\u884C</td></tr></tbody></table><h2 id="countdowninput"><a class="header-anchor" href="#countdowninput" aria-hidden="true">#</a> CountDownInput</h2><p>\u5012\u8BA1\u65F6\u8F93\u5165\u6846\u6309\u94AE\u7EC4\u4EF6</p><h3 id="usage-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CountdownInput</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> CountdownInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/CountDown&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> CountdownInput <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>value</td><td><code>any</code></td><td>-</td><td>-</td><td>\u7ED1\u5B9A\u503C</td></tr><tr><td>size</td><td><code>string</code></td><td><code>&#39;default&#39;, &#39;large&#39;, &#39;small&#39;</code></td><td>-</td><td>\u8F93\u5165\u6846\u5373\u6309\u94AE\u5927\u5C0F</td></tr><tr><td>count</td><td><code>number</code></td><td><code>60</code></td><td>-</td><td>\u5012\u8BA1\u65F6\u65F6\u95F4</td></tr><tr><td>sendCodeApi</td><td><code>()=&gt;promise</code></td><td>-</td><td>-</td><td>\u5012\u8BA1\u65F6\u4E4B\u524D\u6267\u884C\u7684\u51FD\u6570\uFF0C\u8FD4\u56DE true \u624D\u4F1A\u5F00\u59CB\u6267\u884C</td></tr></tbody></table>`,14),e=[o];function c(u,l,d,r,i,k){return a(),t("div",null,e)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};