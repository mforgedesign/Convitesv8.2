window.config = {
  "evento": {
    "tipo": "Debutante",
    "nome": "Nicolly",
    "idade": 15,
    "data": "2026-11-27",
    "hora": "07:30",
    "horaTermino": "",
    "endereco": "Mansão Esteves\nEstr. Vovó Carolina, 2540 - Cidade Tiradentes\nSão Paulo - SP, 08473-370",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Azul",
    "tema": "Cinderela",
    "musica": "assets/music_1786212132024.mp3",
    "tipoAbertura": "curta",
    "particulasAbertura": true,
    "slug": "Nicolly15Anos",
    "seo": {
      "pageTitle": "Nicolly - 15 anos",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1786212132024.jpg",
    "cartao": "assets/1dce9710_44fe_4b65_a11c_f0e84386bedb_1786212132024.png",
    "aberturaSlides": [
      "assets/slide1_1786212132024.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1786212132024.mp4",
        "label": "Slide 1",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1786212132024.png",
    "folhaPreenchida": "assets/folha_1786212132024.jpg",
    "musica": "assets/music_1786212132024.mp3",
    "musicStartSec": 0,
    "musicEndSec": null,
    "fabric": {
      "saveTheDate": {
        "referencia": "",
        "resultado": "",
        "musicaPersonalizada": "",
        "musicSource": "convite",
        "hasMusic": true,
        "musicStartSec": 0,
        "durationSec": 20
      },
      "lembrete": {
        "referencia": "",
        "resultado": "",
        "musicaPersonalizada": "",
        "musicSource": "convite",
        "hasMusic": true,
        "musicStartSec": 0,
        "durationSec": 20
      }
    },
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "id": "btn_62a8aa6e-c1c6-4dda-8d92-b633ca445d9a",
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "rsvpMode": "database",
      "rsvpCleanupAfterDays": 7,
      "conteudo": "<div class=\"mforge-rsvp-database\" style=\"box-sizing:border-box;width:100%;max-width:560px;margin:0 auto;overflow:hidden;\"><iframe title=\"Confirmação de presença\" sandbox=\"allow-scripts allow-forms allow-top-navigation\" loading=\"eager\" style=\"box-sizing:border-box;display:block;width:100%;max-width:100%;height:min(720px,78vh);min-height:580px;border:0;border-radius:24px;background:#f5eee7;\" srcdoc=\"&lt;!doctype html&gt;\n&lt;html lang=&quot;pt-BR&quot;&gt;\n&lt;head&gt;\n&lt;meta charset=&quot;utf-8&quot;&gt;\n&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1&quot;&gt;\n&lt;style&gt;\n:root{--accent:#0c2b71;--ink:#2d231f;--muted:#756861;--paper:#fffdfa;--line:rgba(70,49,38,.15);font-family:Inter,ui-sans-serif,system-ui,-apple-system,&quot;Segoe UI&quot;,sans-serif;color:var(--ink);background:transparent}\n*{box-sizing:border-box}body{margin:0;padding:14px;background:linear-gradient(145deg,#0c2b711f,#0c2b714d);min-height:100vh}.card{position:relative;overflow:hidden;max-width:520px;margin:auto;padding:24px 20px 20px;border:1px solid rgba(255,255,255,.8);border-radius:28px;background:rgba(255,253,250,.96);box-shadow:0 22px 60px rgba(48,31,20,.16)}\n.card:before{content:&quot;&quot;;position:absolute;inset:0 0 auto;height:6px;background:linear-gradient(90deg,transparent,var(--accent),transparent)}.eyebrow{margin:0 0 6px;color:var(--accent);font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase}.title{margin:0;font-family:Georgia,serif;font-size:clamp(26px,7vw,38px);font-weight:500;line-height:1.05}.intro{margin:10px 0 20px;color:var(--muted);font-size:14px;line-height:1.55}.loading{padding:20px 0;color:var(--muted);text-align:center}.hidden{display:none!important}.field{margin:0 0 15px}.label{display:block;margin:0 0 7px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.input{width:100%;height:46px;padding:0 13px;border:1px solid var(--line);border-radius:13px;background:#fff;color:var(--ink);font:inherit;outline:none;transition:.2s}.input:focus{border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--accent) 16%,transparent)}.hint{display:block;margin-top:6px;color:var(--muted);font-size:12px;line-height:1.4}.choice-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.choice{min-height:44px;padding:9px;border:1px solid var(--line);border-radius:13px;background:#fff;color:var(--ink);font-weight:750;cursor:pointer}.choice.active{border-color:var(--accent);background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 68%,#000));color:#fff}.suggestions{display:grid;gap:7px;margin-top:10px;padding:9px;border:2px solid var(--accent);border-radius:16px;background:#fff;box-shadow:0 18px 42px color-mix(in srgb,var(--accent) 24%,rgba(45,35,31,.18));transform-origin:top center}.suggestions:not(.hidden){animation:suggestionsReveal .3s cubic-bezier(.2,.85,.25,1.18) both}.suggestion{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;min-height:48px;padding:11px 13px;border:1px solid color-mix(in srgb,var(--accent) 16%,var(--line));border-radius:12px;background:color-mix(in srgb,var(--accent) 5%,white);color:var(--ink);font:750 14px/1.25 inherit;text-align:left;cursor:pointer;transition:transform .16s ease,background .16s ease,box-shadow .16s ease}.suggestion:before{content:&quot;✓&quot;;display:grid;place-items:center;flex:0 0 24px;width:24px;height:24px;border-radius:50%;background:var(--accent);color:#fff;font-size:12px}.suggestion span{flex:1}.suggestion:hover,.suggestion:focus{background:color-mix(in srgb,var(--accent) 14%,white);box-shadow:0 8px 18px color-mix(in srgb,var(--accent) 18%,transparent);outline:none;transform:translateY(-2px) scale(1.01)}.suggestion small{color:var(--muted);font-weight:650}.selected{margin-top:9px;padding:10px 12px;border:1px solid color-mix(in srgb,var(--accent) 28%,transparent);border-radius:11px;background:color-mix(in srgb,var(--accent) 12%,white);color:var(--accent);font-size:12px;font-weight:800;animation:selectedReveal .24s ease-out both}.submit,.companion-button{display:flex;align-items:center;justify-content:center;width:100%;min-height:50px;margin-top:7px;border:0;border-radius:15px;background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 68%,#000));color:#fff;font:800 14px/1 inherit;letter-spacing:.04em;cursor:pointer;box-shadow:0 12px 25px color-mix(in srgb,var(--accent) 28%,transparent)}.companion-button{margin-top:18px;border:1px solid var(--accent);background:#fff;color:var(--accent);box-shadow:none}.submit:disabled{cursor:wait;opacity:.65}.message{margin:12px 0 0;padding:11px 12px;border-radius:12px;font-size:13px;line-height:1.45}.message.error{background:#fff0f0;color:#9b2c2c}.message.success{background:#edf9f0;color:#22683a}.success-screen{text-align:center;padding:26px 4px}.success-icon{display:grid;place-items:center;width:66px;height:66px;margin:0 auto 16px;border-radius:50%;background:color-mix(in srgb,var(--accent) 12%,white);color:var(--accent);font-size:32px}.footer{margin:18px 0 0;color:#9a8c84;font-size:10px;text-align:center;letter-spacing:.08em;text-transform:uppercase}@keyframes suggestionsReveal{from{opacity:0;transform:translateY(-8px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes selectedReveal{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}@media(prefers-reduced-motion:reduce){.suggestions:not(.hidden),.selected{animation:none}.suggestion{transition:none}}@media(max-width:420px){body{padding:8px}.card{padding:21px 15px 17px;border-radius:22px}.choice-grid{grid-template-columns:1fr}.title{font-size:28px}.suggestion{align-items:flex-start;flex-wrap:wrap}.suggestion small{width:100%;padding-left:34px}}\n&lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;main class=&quot;card&quot;&gt;\n  &lt;p class=&quot;eyebrow&quot;&gt;Confirmação de presença&lt;/p&gt;\n  &lt;h1 class=&quot;title&quot; id=&quot;event-title&quot;&gt;Aniversário - Nicolly&lt;/h1&gt;\n  &lt;p class=&quot;intro&quot;&gt;Sua resposta nos ajuda a preparar cada detalhe com carinho.&lt;/p&gt;\n  &lt;div class=&quot;loading&quot; id=&quot;loading&quot;&gt;Carregando confirmação…&lt;/div&gt;\n  &lt;form id=&quot;form&quot; class=&quot;hidden&quot; novalidate&gt;\n    &lt;div class=&quot;field&quot;&gt;\n      &lt;span class=&quot;label&quot; id=&quot;attendance-label&quot;&gt;Você poderá comparecer?&lt;/span&gt;\n      &lt;div class=&quot;choice-grid&quot;&gt;\n        &lt;button class=&quot;choice active&quot; id=&quot;attending-yes&quot; type=&quot;button&quot;&gt;Sim, estarei presente&lt;/button&gt;\n        &lt;button class=&quot;choice&quot; id=&quot;attending-no&quot; type=&quot;button&quot;&gt;Não poderei comparecer&lt;/button&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;field&quot;&gt;\n      &lt;label class=&quot;label&quot; id=&quot;guest-name-label&quot; for=&quot;guest-name&quot;&gt;Seu nome completo&lt;/label&gt;\n      &lt;input class=&quot;input&quot; id=&quot;guest-name&quot; autocomplete=&quot;off&quot; maxlength=&quot;160&quot; placeholder=&quot;Comece a digitar seu nome&quot; required&gt;\n      &lt;span class=&quot;hint&quot; id=&quot;name-hint&quot;&gt;&lt;/span&gt;\n      &lt;div class=&quot;suggestions hidden&quot; id=&quot;suggestions&quot; role=&quot;listbox&quot; aria-label=&quot;Selecione seu nome&quot;&gt;&lt;/div&gt;\n      &lt;div class=&quot;selected hidden&quot; id=&quot;selected-name&quot;&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=&quot;field hidden&quot; id=&quot;phone-field&quot;&gt;\n      &lt;label class=&quot;label&quot; for=&quot;guest-phone&quot;&gt;Seu WhatsApp&lt;/label&gt;\n      &lt;input class=&quot;input&quot; id=&quot;guest-phone&quot; inputmode=&quot;tel&quot; maxlength=&quot;30&quot; placeholder=&quot;(DDD) 99999-9999&quot;&gt;\n    &lt;/div&gt;\n    &lt;button class=&quot;submit&quot; id=&quot;submit&quot; type=&quot;submit&quot;&gt;Enviar confirmação&lt;/button&gt;\n    &lt;div class=&quot;message hidden&quot; id=&quot;message&quot; role=&quot;status&quot;&gt;&lt;/div&gt;\n  &lt;/form&gt;\n  &lt;section class=&quot;success-screen hidden&quot; id=&quot;success&quot;&gt;\n    &lt;div class=&quot;success-icon&quot;&gt;✓&lt;/div&gt;\n    &lt;h2 id=&quot;success-title&quot;&gt;Resposta registrada&lt;/h2&gt;\n    &lt;p class=&quot;intro&quot; id=&quot;success-copy&quot;&gt;&lt;/p&gt;\n    &lt;button class=&quot;companion-button hidden&quot; id=&quot;confirm-companions&quot; type=&quot;button&quot;&gt;Confirmar acompanhantes&lt;/button&gt;\n  &lt;/section&gt;\n  &lt;p class=&quot;footer&quot;&gt;RSVP protegido • MForge&lt;/p&gt;\n&lt;/main&gt;\n&lt;script&gt;\n(function(){\n  &#39;use strict&#39;;\n  var cfg={&quot;supabaseUrl&quot;:&quot;https://cqqglaelazsnsqommhqv.supabase.co&quot;,&quot;publishableKey&quot;:&quot;sb_publishable_2fLwRKAMPO7oGOk6aEI1VA_ODSek95q&quot;,&quot;publicToken&quot;:&quot;VDdEzUHLRvvo7WBtwxghNhwPWLjqZUYBXfAzQ5FR_6o&quot;,&quot;eventName&quot;:&quot;Aniversário - Nicolly&quot;};\n  var buildRsvpWhatsappRedirect=function buildRsvpWhatsappRedirect(options = {}) {\n    var phone = String(options.phone || &#39;&#39;).replace(/\\D/g, &#39;&#39;);\n    if (!phone) return &#39;&#39;;\n    var name = String(options.name || &#39;&#39;).trim() || &#39;Convidado&#39;;\n    var label = String(options.confirmationLabel || &#39;&#39;).trim() || &#39;o evento&#39;;\n    var attending = options.attending !== false;\n    var message = attending\n        ? &#39;Presença confirmada para &#39; + label + &#39;: &#39; + name + &#39;.&#39;\n        : name + &#39; informou que não poderá comparecer a &#39; + label + &#39;.&#39;;\n    return &#39;https://wa.me/&#39; + phone + &#39;?text=&#39; + encodeURIComponent(message);\n};\n  var normalizeRsvpGuestName=function normalizeRsvpGuestName(value) {\n    return String(value || &#39;&#39;)\n        .normalize(&#39;NFD&#39;)\n        .replace(/[\\u0300-\\u036f]/g, &#39;&#39;)\n        .toLocaleLowerCase(&#39;pt-BR&#39;)\n        .replace(/\\s+/g, &#39; &#39;)\n        .trim();\n};\n  var findExactRsvpGuest=function findExactRsvpGuest(items, typedName) {\n    var normalizedTypedName = normalizeRsvpGuestName(typedName);\n    if (!normalizedTypedName) return null;\n    return (Array.isArray(items) ? items : []).find(function(item) {\n        return item\n            &amp;&amp; item.guestId\n            &amp;&amp; normalizeRsvpGuestName(item.name) === normalizedTypedName;\n    }) || null;\n};\n  var state={policy:null,selectedGuest:null,attending:true,timer:null,notFoundTimer:null,redirectTimer:null,companionMode:false};\n  var byId=function(id){return document.getElementById(id)};\n  async function rpc(name,body){\n    var response=await fetch(cfg.supabaseUrl+&#39;/rest/v1/rpc/&#39;+name,{method:&#39;POST&#39;,headers:{apikey:cfg.publishableKey,&#39;Content-Type&#39;:&#39;application/json&#39;},body:JSON.stringify(body)});\n    var data=await response.json().catch(function(){return {ok:false,error:&#39;Resposta inválida do servidor.&#39;}});\n    if(!response.ok)throw new Error(data.message||data.error||&#39;Falha de comunicação.&#39;);\n    return data;\n  }\n  function message(text,type){var el=byId(&#39;message&#39;);el.textContent=text||&#39;&#39;;el.className=&#39;message &#39;+(type||&#39;&#39;);if(!text)el.classList.add(&#39;hidden&#39;)}\n  function setAttending(value){state.attending=value;byId(&#39;attending-yes&#39;).classList.toggle(&#39;active&#39;,value);byId(&#39;attending-no&#39;).classList.toggle(&#39;active&#39;,!value)}\n  function clearNoMatchWarning(){clearTimeout(state.notFoundTimer);state.notFoundTimer=null}\n  function showNameNotFound(){message(&#39;Esse nome não está na lista! Verifique se digitou corretamente ou pergunte ao organizador do evento&#39;,&#39;error&#39;)}\n  function selectGuest(item){clearNoMatchWarning();state.selectedGuest=item;byId(&#39;guest-name&#39;).value=item.name;byId(&#39;suggestions&#39;).classList.add(&#39;hidden&#39;);byId(&#39;selected-name&#39;).textContent=&#39;Selecionado: &#39;+item.name;byId(&#39;selected-name&#39;).classList.remove(&#39;hidden&#39;);message(&#39;&#39;,&#39;&#39;)}\n  function scheduleNoMatchWarning(query){clearNoMatchWarning();state.notFoundTimer=setTimeout(function(){if(!state.selectedGuest&amp;&amp;byId(&#39;guest-name&#39;).value.trim()===query)showNameNotFound()},3000)}\n  function renderSuggestions(items,query){var box=byId(&#39;suggestions&#39;);box.replaceChildren();if(!items.length){box.classList.add(&#39;hidden&#39;);scheduleNoMatchWarning(query);return}clearNoMatchWarning();items.forEach(function(item){var button=document.createElement(&#39;button&#39;);button.type=&#39;button&#39;;button.className=&#39;suggestion&#39;;var name=document.createElement(&#39;span&#39;);name.textContent=item.name;button.appendChild(name);button.onclick=function(){selectGuest(item)};box.appendChild(button)});box.classList.remove(&#39;hidden&#39;)}\n  async function searchNames(query){try{var data=await rpc(&#39;rsvp_search_guests&#39;,{p_public_token:cfg.publicToken,p_query:query});if(!data.ok)throw new Error(data.error||&#39;Não foi possível consultar a lista.&#39;);if(byId(&#39;guest-name&#39;).value.trim()!==query)return;renderSuggestions(data.items||[],query)}catch(error){message(error.message,&#39;error&#39;)}}\n  async function resolveListedGuest(name){var data=await rpc(&#39;rsvp_search_guests&#39;,{p_public_token:cfg.publicToken,p_query:name});if(!data.ok)throw new Error(data.error||&#39;Não foi possível consultar a lista.&#39;);var exact=findExactRsvpGuest(data.items||[],name);if(exact)selectGuest(exact);return exact}\n  async function rejectUnlistedName(name){if(name.length&gt;=2){try{await rpc(&#39;rsvp_record_failed_attempt&#39;,{p_public_token:cfg.publicToken,p_name:name})}catch(error){console.warn(&#39;Tentativa inválida não pôde ser registrada.&#39;,error)}}showNameNotFound()}\n  function resetForCompanion(){clearTimeout(state.redirectTimer);clearNoMatchWarning();state.companionMode=true;state.selectedGuest=null;state.attending=true;byId(&#39;guest-name&#39;).value=&#39;&#39;;byId(&#39;selected-name&#39;).classList.add(&#39;hidden&#39;);renderSuggestions([], &#39;&#39;);clearNoMatchWarning();message(&#39;&#39;,&#39;&#39;);byId(&#39;attendance-label&#39;).textContent=&#39;Acompanhante poderá comparecer?&#39;;byId(&#39;guest-name-label&#39;).textContent=&#39;Nome do acompanhante&#39;;byId(&#39;success&#39;).classList.add(&#39;hidden&#39;);byId(&#39;form&#39;).classList.remove(&#39;hidden&#39;);setAttending(true);byId(&#39;guest-name&#39;).focus()}\n  async function init(){\n    try{var policy=await rpc(&#39;rsvp_get_policy&#39;,{p_public_token:cfg.publicToken});if(!policy.ok)throw new Error(policy.error||&#39;Confirmação indisponível.&#39;);state.policy=policy;byId(&#39;event-title&#39;).textContent=policy.eventName||cfg.eventName;byId(&#39;loading&#39;).classList.add(&#39;hidden&#39;);byId(&#39;form&#39;).classList.remove(&#39;hidden&#39;);byId(&#39;phone-field&#39;).classList.toggle(&#39;hidden&#39;,!policy.collectWhatsapp);byId(&#39;confirm-companions&#39;).classList.toggle(&#39;hidden&#39;,!policy.companionConfirmationsEnabled);byId(&#39;name-hint&#39;).textContent=policy.nameLimitEnabled?&#39;Digite seu nome completo. Se ele estiver na lista, você pode enviar diretamente ou tocar na sugestão.&#39;:&#39;Digite seu nome como deseja que apareça na lista.&#39;;setAttending(true)}\n    catch(error){byId(&#39;loading&#39;).textContent=error.message;byId(&#39;loading&#39;).style.color=&#39;#9b2c2c&#39;}\n  }\n  byId(&#39;attending-yes&#39;).onclick=function(){setAttending(true)};byId(&#39;attending-no&#39;).onclick=function(){setAttending(false)};\n  byId(&#39;guest-name&#39;).addEventListener(&#39;input&#39;,function(){clearNoMatchWarning();message(&#39;&#39;,&#39;&#39;);state.selectedGuest=null;byId(&#39;selected-name&#39;).classList.add(&#39;hidden&#39;);byId(&#39;suggestions&#39;).classList.add(&#39;hidden&#39;);byId(&#39;suggestions&#39;).replaceChildren();if(!state.policy||!state.policy.nameLimitEnabled)return;clearTimeout(state.timer);var query=this.value.trim();if(query.length&lt;2)return;state.timer=setTimeout(function(){searchNames(query)},250)});\n  byId(&#39;form&#39;).addEventListener(&#39;submit&#39;,async function(event){\n    event.preventDefault();message(&#39;&#39;,&#39;&#39;);var name=byId(&#39;guest-name&#39;).value.trim();var phone=byId(&#39;guest-phone&#39;).value.trim();if(state.policy.nameLimitEnabled&amp;&amp;!state.selectedGuest){try{await resolveListedGuest(name)}catch(error){message(error.message,&#39;error&#39;);return}if(!state.selectedGuest){await rejectUnlistedName(name);return}name=state.selectedGuest.name||name}if(!state.policy.nameLimitEnabled&amp;&amp;name.length&lt;2)return message(state.companionMode?&#39;Informe o nome do acompanhante.&#39;:&#39;Informe seu nome completo.&#39;,&#39;error&#39;);if(state.policy.collectWhatsapp&amp;&amp;!phone)return message(&#39;Informe seu WhatsApp.&#39;,&#39;error&#39;);var submit=byId(&#39;submit&#39;);submit.disabled=true;submit.textContent=&#39;Enviando…&#39;;\n    try{var data=await rpc(&#39;rsvp_confirm&#39;,{p_public_token:cfg.publicToken,p_guest_id:state.selectedGuest?state.selectedGuest.guestId:null,p_name:name,p_whatsapp:phone,p_companions:0,p_attending:state.attending});if(!data.ok)throw new Error(data.error||&#39;Não foi possível registrar.&#39;);var whatsappUrl=state.policy.postConfirmWhatsappEnabled?buildRsvpWhatsappRedirect({phone:state.policy.postConfirmWhatsapp,name:data.name||name,attending:state.attending,confirmationLabel:state.policy.confirmationLabel||state.policy.eventName}):&#39;&#39;;byId(&#39;form&#39;).classList.add(&#39;hidden&#39;);byId(&#39;success-title&#39;).textContent=state.attending?&#39;Presença Confirmada!&#39;:&#39;Resposta registrada&#39;;byId(&#39;success-copy&#39;).textContent=whatsappUrl?&#39;Resposta salva. Abrindo o WhatsApp em alguns segundos…&#39;:(data.message||&#39;Obrigado por responder.&#39;);byId(&#39;success&#39;).classList.remove(&#39;hidden&#39;);if(whatsappUrl)state.redirectTimer=setTimeout(function(){window.top.location.href=whatsappUrl},4500)}\n    catch(error){message(error.message,&#39;error&#39;);submit.disabled=false;submit.textContent=&#39;Enviar confirmação&#39;}\n  });\n  byId(&#39;confirm-companions&#39;).onclick=function(){if(state.policy&amp;&amp;state.policy.companionConfirmationsEnabled)resetForCompanion()};\n  init();\n})();\n&lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;\"></iframe></div>"
    },
    {
      "id": "btn_a102b93e-d135-4d69-8ccd-69612915c148",
      "tipoAcao": "PopupImagem",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "assets/popup_botao_1_1786212132024.jpg"
    },
    {
      "id": "btn_123e798b-2d0d-4e60-a5c8-363617f1d130",
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Sugestão de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n\n<style>\n.lp-root,\n.lp-root *,\n.lp-root *::before,\n.lp-root *::after {\n  color-scheme: light only;\n  forced-color-adjust: none;\n  -webkit-font-smoothing: antialiased;\n  box-sizing: border-box;\n}\n\n.lp-root {\n  background: #f0f4fc;\n  color: #1a3a6b;\n  margin: 0;\n  padding: 0;\n}\n\n.lp-wrap {\n  position: relative;\n  padding: 30px 18px 36px;\n  overflow: hidden;\n  font-family: 'Cormorant Garamond', Georgia, serif;\n  background: linear-gradient(\n    160deg,\n    #f5f8ff 0%,\n    #eaf0fb 50%,\n    #f8faff 100%\n  );\n}\n\n/* Neve */\n.snow {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n  color: rgba(160,190,240,.55);\n  font-size: 13px;\n  animation: snowfall linear infinite;\n}\n\n@keyframes snowfall {\n  0% {\n    transform: translateY(-20px) rotate(0deg);\n    opacity: 0;\n  }\n\n  10% {\n    opacity: 1;\n  }\n\n  90% {\n    opacity: .6;\n  }\n\n  100% {\n    transform: translateY(700px) rotate(360deg);\n    opacity: 0;\n  }\n}\n\n/* Cabeçalho */\n.lp-header {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  margin-bottom: 22px;\n}\n\n.lp-header h2 {\n  font-family: 'Cinzel', Georgia, serif;\n  font-size: 22px;\n  color: #1a3a6b;\n  letter-spacing: .13em;\n  margin: 0 0 4px;\n}\n\n.lp-header .sub {\n  color: #5a7ab8;\n  font-size: 14px;\n  font-style: italic;\n  margin: 0 0 2px;\n}\n\n.lp-header .badge {\n  display: inline-block;\n  margin-top: 6px;\n  font-family: 'Cinzel', Georgia, serif;\n  font-size: 10px;\n  letter-spacing: .18em;\n  text-transform: uppercase;\n  background: linear-gradient(135deg, #c8d8f0, #e8eef8);\n  border: 1px solid rgba(160,190,230,.5);\n  border-radius: 30px;\n  padding: 3px 14px;\n  color: #3a5a90;\n}\n\n/* Divisor */\n.lp-divider {\n  text-align: center;\n  position: relative;\n  z-index: 2;\n  margin: 18px 0 14px;\n  font-family: 'Cinzel', Georgia, serif;\n  font-size: 10px;\n  letter-spacing: .22em;\n  color: #6a8ab8;\n}\n\n.lp-divider::before,\n.lp-divider::after {\n  content: '';\n  display: inline-block;\n  width: 44px;\n  height: .5px;\n  background: linear-gradient(\n    to right,\n    transparent,\n    rgba(100,150,210,.4)\n  );\n  vertical-align: middle;\n  margin: 0 10px;\n}\n\n.lp-divider::after {\n  background: linear-gradient(\n    to left,\n    transparent,\n    rgba(100,150,210,.4)\n  );\n}\n\n/* Bloco Pix */\n.pix-box {\n  position: relative;\n  z-index: 2;\n  border-radius: 20px;\n  background: rgba(255,255,255,.94);\n  border: 1px solid rgba(140,180,230,.30);\n  padding: 16px 15px 14px;\n  box-shadow: 0 2px 16px rgba(60,100,200,.08);\n  animation: lpFade .5s ease both;\n}\n\n@keyframes lpFade {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.pix-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 11px;\n}\n\n.pix-icon-wrap {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(145deg, #7aa4f0, #2a5cc8);\n  color: #fff;\n  box-shadow: 0 2px 12px rgba(60,100,200,.28);\n}\n\n/* Ícone Pix sem depender de biblioteca externa */\n.pix-symbol {\n  position: relative;\n  width: 22px;\n  height: 22px;\n}\n\n.pix-symbol::before,\n.pix-symbol::after {\n  content: '';\n  position: absolute;\n  width: 11px;\n  height: 11px;\n  border: 2px solid #fff;\n  transform: rotate(45deg);\n  border-radius: 3px;\n}\n\n.pix-symbol::before {\n  left: 1px;\n  top: 5px;\n}\n\n.pix-symbol::after {\n  right: 1px;\n  top: 5px;\n}\n\n.pix-label {\n  font-family: 'Cinzel', Georgia, serif;\n  font-size: 12px;\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: #1a3a6b;\n  margin-bottom: 2px;\n}\n\n.pix-sub {\n  font-size: 13px;\n  color: #5a7ab8;\n  font-style: italic;\n}\n\n.pix-key-wrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(235,242,255,.90);\n  border: 1px solid rgba(140,180,230,.28);\n  border-radius: 14px;\n  padding: 10px 13px;\n  margin-bottom: 9px;\n}\n\n/* Input real facilita seleção e fallback em celulares */\n.pix-key {\n  flex: 1;\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  padding: 2px 0;\n  margin: 0;\n  background: transparent;\n  font-family: 'Cinzel', Georgia, serif;\n  font-size: 12px;\n  color: #1a3a6b;\n  letter-spacing: .02em;\n  -webkit-text-fill-color: #1a3a6b;\n  opacity: 1;\n}\n\n.pix-copy-btn {\n  flex-shrink: 0;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  border-radius: 10px;\n  padding: 9px 13px;\n  min-height: 38px;\n  background: linear-gradient(145deg, #7aa4f0, #2a5cc8);\n  color: #fff;\n  font-family: 'Cinzel', Georgia, serif;\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: .08em;\n  box-shadow: 0 2px 10px rgba(60,100,200,.28);\n  transition:\n    transform .15s,\n    filter .2s,\n    box-shadow .2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n\n  appearance: none;\n  -webkit-appearance: none;\n\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n\n  user-select: none;\n  -webkit-user-select: none;\n}\n\n.pix-copy-btn:hover {\n  transform: scale(1.04);\n}\n\n.pix-copy-btn:active {\n  transform: scale(.97);\n}\n\n.pix-copy-btn.copied {\n  filter: saturate(.78);\n  box-shadow: 0 2px 12px rgba(42,92,200,.38);\n}\n\n.copy-icon {\n  width: 13px;\n  height: 15px;\n  position: relative;\n  display: inline-block;\n  flex-shrink: 0;\n}\n\n.copy-icon::before,\n.copy-icon::after {\n  content: '';\n  position: absolute;\n  width: 8px;\n  height: 10px;\n  border: 1.5px solid currentColor;\n  border-radius: 2px;\n}\n\n.copy-icon::before {\n  top: 0;\n  right: 0;\n}\n\n.copy-icon::after {\n  left: 0;\n  bottom: 0;\n  background: transparent;\n}\n\n.pix-copied {\n  text-align: center;\n  font-size: 13px;\n  color: #2a5cc8;\n  font-style: italic;\n  min-height: 20px;\n  opacity: 0;\n  transition: opacity .3s;\n}\n\n.pix-copied.show {\n  opacity: 1;\n}\n\n/* Rodapé */\n.lp-footer {\n  position: relative;\n  z-index: 2;\n  margin-top: 18px;\n  border-radius: 20px;\n  background: linear-gradient(\n    145deg,\n    rgba(255,255,255,.95),\n    rgba(220,235,255,.75)\n  );\n  border: 1px solid rgba(120,170,230,.30);\n  padding: 16px;\n  text-align: center;\n}\n\n.lp-footer-text {\n  font-size: 15px;\n  color: #2a4a7a;\n  line-height: 1.7;\n  font-style: italic;\n  margin: 0;\n}\n\n/* Estrelas */\n.lp-star {\n  position: absolute;\n  color: rgba(140,170,230,.5);\n  font-size: 11px;\n  animation: lsStar 3s ease-in-out infinite;\n  z-index: 1;\n}\n\n@keyframes lsStar {\n  0%,\n  100% {\n    opacity: 0;\n    transform: scale(0);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n/* Mobile */\n@media (max-width: 480px) {\n  .lp-wrap {\n    padding-left: 14px;\n    padding-right: 14px;\n  }\n\n  .pix-key-wrap {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .pix-key {\n    text-align: center;\n    font-size: 13px;\n    padding: 7px 4px;\n  }\n\n  .pix-copy-btn {\n    width: 100%;\n    min-height: 44px;\n  }\n}\n</style>\n\n\n<div class=\"lp-root\">\n\n  <!-- Neve -->\n  <span class=\"snow\" style=\"left:8%;animation-duration:6s;animation-delay:0s;\">❄</span>\n  <span class=\"snow\" style=\"left:22%;animation-duration:8s;animation-delay:1.2s;font-size:9px;\">❅</span>\n  <span class=\"snow\" style=\"left:38%;animation-duration:7s;animation-delay:2.5s;\">❆</span>\n  <span class=\"snow\" style=\"left:55%;animation-duration:9s;animation-delay:.8s;font-size:9px;\">❄</span>\n  <span class=\"snow\" style=\"left:70%;animation-duration:6.5s;animation-delay:3s;\">❅</span>\n  <span class=\"snow\" style=\"left:85%;animation-duration:8.5s;animation-delay:1.8s;font-size:10px;\">❆</span>\n\n  <!-- Ornamento superior -->\n  <svg\n    style=\"position:absolute;top:-14px;left:-14px;width:150px;height:150px;opacity:.10;pointer-events:none;z-index:1;\"\n    viewBox=\"0 0 160 160\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g>\n      <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"#7aa4f0\" transform=\"rotate(0 80 80)\"/>\n      <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"#b8cef8\" transform=\"rotate(45 80 80)\"/>\n      <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"#7aa4f0\" transform=\"rotate(90 80 80)\"/>\n      <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"#b8cef8\" transform=\"rotate(135 80 80)\"/>\n      <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"#7aa4f0\" transform=\"rotate(180 80 80)\"/>\n      <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"#b8cef8\" transform=\"rotate(225 80 80)\"/>\n      <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"#7aa4f0\" transform=\"rotate(270 80 80)\"/>\n      <ellipse cx=\"80\" cy=\"24\" rx=\"15\" ry=\"29\" fill=\"#b8cef8\" transform=\"rotate(315 80 80)\"/>\n      <circle cx=\"80\" cy=\"80\" r=\"12\" fill=\"#dce9fc\"/>\n    </g>\n  </svg>\n\n  <!-- Ornamento inferior -->\n  <svg\n    style=\"position:absolute;bottom:-8px;right:-8px;width:115px;height:115px;opacity:.10;pointer-events:none;z-index:1;\"\n    viewBox=\"0 0 120 120\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g>\n      <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(0 60 60)\"/>\n      <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(60 60 60)\"/>\n      <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(120 60 60)\"/>\n      <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(180 60 60)\"/>\n      <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#a8c0e8\" transform=\"rotate(240 60 60)\"/>\n      <ellipse cx=\"60\" cy=\"16\" rx=\"11\" ry=\"22\" fill=\"#d0e0f8\" transform=\"rotate(300 60 60)\"/>\n      <circle cx=\"60\" cy=\"60\" r=\"9\" fill=\"#eaf0fc\"/>\n    </g>\n  </svg>\n\n  <!-- Brilhos -->\n  <i class=\"lp-star\" style=\"top:9%;left:7%;animation-delay:0s;\">✦</i>\n  <i class=\"lp-star\" style=\"top:20%;right:13%;animation-delay:1s;\">✧</i>\n  <i class=\"lp-star\" style=\"bottom:22%;left:12%;animation-delay:2s;\">✦</i>\n  <i class=\"lp-star\" style=\"bottom:10%;right:9%;animation-delay:.5s;\">✧</i>\n\n\n  <div class=\"lp-wrap\">\n\n    <div class=\"lp-header\">\n      <h2>Sugestão de Presente</h2>\n      <p class=\"sub\">Com muito carinho e gratidão ✨</p>\n    </div>\n\n\n    <!-- PIX -->\n    <div class=\"pix-box\">\n\n      <div class=\"pix-row\">\n        <div class=\"pix-icon-wrap\">\n          <span class=\"pix-symbol\" aria-hidden=\"true\"></span>\n        </div>\n\n        <div>\n          <div class=\"pix-label\">Pix</div>\n          <div class=\"pix-sub\">Chave Pix — telefone</div>\n        </div>\n      </div>\n\n\n      <div class=\"pix-key-wrap\">\n\n        <input\n          class=\"pix-key\"\n          type=\"text\"\n          value=\"+5511940177510\"\n          readonly\n          aria-label=\"Chave Pix\"\n        >\n\n        <button\n          type=\"button\"\n          class=\"pix-copy-btn\"\n          aria-label=\"Copiar chave Pix\"\n          onclick=\"\n            (function(btn) {\n\n              var box = btn.closest('.pix-box');\n              var input = box.querySelector('.pix-key');\n              var status = box.querySelector('.pix-copied');\n              var key = '+5511940177510';\n\n              function sucesso() {\n                btn.classList.add('copied');\n\n                btn.innerHTML =\n                  '<span style=&quot;font-size:15px;line-height:1;&quot;>✓</span> Copiado';\n\n                status.textContent = 'Chave Pix copiada com sucesso!';\n                status.classList.add('show');\n\n                if (navigator.vibrate) {\n                  try {\n                    navigator.vibrate(40);\n                  } catch (e) {}\n                }\n\n                setTimeout(function() {\n                  btn.classList.remove('copied');\n\n                  btn.innerHTML =\n                    '<span class=&quot;copy-icon&quot; aria-hidden=&quot;true&quot;></span> Copiar';\n\n                  status.classList.remove('show');\n                }, 2500);\n              }\n\n\n              function selecionarChave() {\n                try {\n                  input.focus({ preventScroll: true });\n                } catch (e) {\n                  input.focus();\n                }\n\n                input.select();\n                input.setSelectionRange(0, input.value.length);\n              }\n\n\n              function fallback() {\n                var copiou = false;\n\n                /* Primeiro tenta copiar diretamente do input visível */\n                try {\n                  selecionarChave();\n                  copiou = document.execCommand('copy');\n                } catch (e) {\n                  copiou = false;\n                }\n\n\n                /* Segundo fallback: textarea temporária */\n                if (!copiou) {\n                  var textarea = document.createElement('textarea');\n\n                  textarea.value = key;\n                  textarea.setAttribute('readonly', '');\n                  textarea.setAttribute('aria-hidden', 'true');\n\n                  textarea.style.position = 'fixed';\n                  textarea.style.left = '-9999px';\n                  textarea.style.top = '0';\n                  textarea.style.opacity = '0';\n                  textarea.style.pointerEvents = 'none';\n                  textarea.style.fontSize = '16px';\n\n                  document.body.appendChild(textarea);\n\n                  try {\n                    textarea.focus();\n                    textarea.select();\n                    textarea.setSelectionRange(\n                      0,\n                      textarea.value.length\n                    );\n\n                    copiou = document.execCommand('copy');\n                  } catch (e) {\n                    copiou = false;\n                  }\n\n                  document.body.removeChild(textarea);\n                }\n\n\n                if (copiou) {\n                  sucesso();\n                } else {\n                  selecionarChave();\n\n                  status.textContent =\n                    'A chave foi selecionada. Toque e segure para copiar.';\n\n                  status.classList.add('show');\n                }\n              }\n\n\n              /*\n               * Clipboard API:\n               * funciona em HTTPS e navegadores que permitem clipboard-write.\n               *\n               * Em iframe, popup ou navegador que bloquear a API,\n               * o fallback acima é usado automaticamente.\n               */\n              if (\n                navigator.clipboard &&\n                typeof navigator.clipboard.writeText === 'function' &&\n                window.isSecureContext\n              ) {\n                navigator.clipboard\n                  .writeText(key)\n                  .then(sucesso)\n                  .catch(fallback);\n              } else {\n                fallback();\n              }\n\n            })(this);\n          \"\n        >\n          <span class=\"copy-icon\" aria-hidden=\"true\"></span>\n          Copiar\n        </button>\n\n      </div>\n\n\n      <div\n        class=\"pix-copied\"\n        role=\"status\"\n        aria-live=\"polite\"\n      ></div>\n\n    </div>\n\n\n    <div class=\"lp-footer\">\n      <div class=\"lp-footer-text\">Meu maior presente é sua presença, mas se quiser me presentear vou deixar a chave pix para facilitar!</div>\n    </div>\n\n  </div>\n</div>"
    },
    {
      "id": "btn_87821dc4-d04f-4737-9d93-690e7aef441d",
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/1Yf1pkJMFunqtbsz7"
    }
  ],
  "upsell": {
    "galeriaFotos": true,
    "saveTheDate": false,
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": false,
    "buttonColor": "#0c2b71",
    "buttonGradientColor": "#ec4899",
    "buttonGradientEnabled": false,
    "buttonSize": 1,
    "isButtonFilled": true,
    "shadowStyle": "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
    "brilhos": {
      "esquerdo": true,
      "direito": true,
      "centro": true
    }
  },
  "briefing": {
    "text": "🎉 DADOS DO EVENTO\n- Tipo de evento: 15 anos\n- Nome: Nicolly\n- Idade: 15\n- Data: 2026-11-27\n- Horário de início: 07:30\n- Horário de término: 00:30\n- Local: Vovó Carolina\n- Tema: Cinderela\n- Paleta de cores: Azul\n\n✨ ESCOLHAS DO CONVITE\n- Tipo de abertura: Abertura Curta\n- Confirmação de presença: Formulário Inteligente\n- Música: Usar música do modelo\n- Presentes: Sugestões Simples\n- Manual do Convidado: Manual Premium\n- Save The Date: Simples\n\n🎁 SUGESTÕES DE PRESENTES\nMaquiagem\n\n📖 MANUAL DO CONVIDADO\nExemplo de Manual:\nChegue no horário: Sua presença pontual é muito importante para nós.\nConfirme sua presença: Por favor, confirme presença pelo menos 15 dias antes do evento.\nConvidado não convida!\nDivirta-se bastante! Estamos ansiosos para celebrar este momento especial com você.\nNão vá embora sem me dar um abraço e comer um pedaço do bolo: Queremos compartilhar cada instante com você.\n\n📝 OBSERVAÇÕES\nVestir de acordo com a festa",
    "usedAt": "2026-08-06T17:27:50.814Z",
    "source": "fill-fields",
    "completionMode": "complete",
    "buttonDecisions": {
      "manualComConteudo": true,
      "presentesComConteudo": true,
      "manualPremium": true,
      "presentesPremium": false,
      "manualResumo": "Chegue no horário: Sua presença pontual é muito importante para nós. Confirme sua presença: Por favor, confirme presença pelo menos 15 dias antes do evento. Convidado não convida! Divirta-se bastante! Estamos ansiosos para celebrar este momento especial com você. Não vá embora sem me dar um abraço e comer um pedaço do bolo: Queremos compartilhar cada instante com você. Vestir de acordo com a festa.",
      "presentesResumo": "Maquiagem"
    },
    "optionalFeatures": {
      "saveTheDate": {
        "mentioned": true,
        "enabled": false,
        "evidence": "- Save The Date: Simples",
        "reason": "question_without_positive_answer"
      },
      "lembrete": {
        "mentioned": false,
        "enabled": false,
        "evidence": "",
        "reason": "not_mentioned"
      },
      "galeriaFotos": {
        "mentioned": false,
        "enabled": false,
        "evidence": "",
        "reason": "not_mentioned"
      },
      "cronometro": {
        "mentioned": false,
        "enabled": false,
        "evidence": "",
        "reason": "not_mentioned"
      }
    },
    "musicPolicy": {
      "mentioned": true,
      "mode": "template",
      "query": "",
      "preserveTemplate": true,
      "hasInheritedMusic": false,
      "evidence": "- Música: Usar música do modelo"
    },
    "rsvpPolicy": {
      "mode": "none",
      "whatsapp": ""
    },
    "workflow": {
      "runId": "1786037215081",
      "initiatedBy": "user",
      "publicationAuthorized": true,
      "startedAt": "2026-08-06T17:27:50.825Z"
    },
    "modelUpdate": {
      "requestedMode": false,
      "resolved": false,
      "compatible": false,
      "reasons": [
        "palette_mismatch",
        "missing_colors:azul"
      ],
      "themeCompatible": true,
      "paletteCompatible": false,
      "missingColors": [
        "azul"
      ],
      "sourceTheme": "Cinderela",
      "sourcePalette": "Cinderela",
      "targetTheme": "Cinderela",
      "targetPalette": "Azul"
    },
    "musicResolution": {
      "mode": "manual",
      "detail": "Áudio anexado manualmente pelo usuário no Builder.",
      "query": "",
      "resolvedAt": "2026-08-06T18:12:40.795Z",
      "actor": "user"
    },
    "assetDecisions": {
      "cover": {
        "inherited": true,
        "reused": true,
        "reuseApproved": true
      },
      "opening": {
        "inherited": true,
        "reused": true,
        "reuseApproved": true,
        "requestedType": "curta"
      }
    }
  }
};
