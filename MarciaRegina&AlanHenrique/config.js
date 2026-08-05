window.config = {
  "evento": {
    "tipo": "Casamento",
    "nome": "Márcia Regina e Alan Henrique",
    "idade": 0,
    "data": "2026-12-12",
    "hora": "17:00",
    "horaTermino": "",
    "endereco": "Sítio da Sandra, rural minas",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Bege com Branco",
    "tema": "Casamento",
    "musica": "assets/music_1785948762299.mp3",
    "tipoAbertura": "curta",
    "particulasAbertura": true,
    "slug": "MarciaRegina&AlanHenrique",
    "seo": {
      "pageTitle": "Convite Especial",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1785948762299.png",
    "cartao": "",
    "aberturaSlides": [
      "assets/slide1_1785948762299.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1785948762299.mp4",
        "label": "Abertura (Vídeo)",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1785948762299.png",
    "folhaPreenchida": "assets/folha_1785948762299.jpg",
    "musica": "assets/music_1785948762299.mp3",
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
      "id": "btn_07a952d8-b95d-42f0-9aad-6b1f450d09e9",
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://www.google.com/maps/search/?api=1&query=S%C3%ADtio+da+Sandra,+rural+minas"
    },
    {
      "id": "btn_69b57373-64a4-4f73-8b76-abe3c6e5cbe2",
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5538991151422",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    },
    {
      "id": "btn_660e90f7dc0c0579",
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n.mc-wrap{\n  position:relative;padding:32px 18px 36px;overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n  background:linear-gradient(160deg,#fbf6ee 0%,#f4eadb 42%,#fffdf8 100%);\n}\n.mc-header{position:relative;z-index:2;text-align:center;margin-bottom:10px;}\n.mc-crown{font-size:26px;margin-bottom:6px;display:block;animation:crownFloat 4s ease-in-out infinite;}\n@keyframes crownFloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}\n.mc-header h2{font-family:'Cinzel',serif;font-size:22px;color:#7a6246;letter-spacing:.15em;margin-bottom:5px;}\n.mc-header p{color:#9a8468;font-size:14.5px;font-style:italic;}\n.mc-sub{\n  position:relative;z-index:2;text-align:center;margin-bottom:24px;\n  font-size:13px;color:#b39a7b;font-family:'Cinzel',serif;letter-spacing:.12em;text-transform:uppercase;\n}\n.mc-sub::before,.mc-sub::after{\n  content:'';display:inline-block;width:40px;height:.5px;\n  background:linear-gradient(to right,transparent,rgba(170,145,115,.40));\n  vertical-align:middle;margin:0 10px;\n}\n.mc-sub::after{background:linear-gradient(to left,transparent,rgba(170,145,115,.40));}\n.mc-grid{display:grid;gap:12px;position:relative;z-index:2;}\n.mc-card{\n  border-radius:20px;background:rgba(255,255,255,.84);\n  border:1px solid rgba(170,145,115,.18);\n  box-shadow:0 2px 16px rgba(120,95,60,.07);\n  overflow:hidden;animation:mcFade .6s ease both;\n}\n@keyframes mcFade{from{opacity:0;transform:translateY(11px);}to{opacity:1;transform:translateY(0);}}\n.mc-top{display:flex;align-items:center;gap:13px;padding:15px 15px 13px;}\n.mc-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,#d9c7ad,#b89a73);\n  color:#fff;font-size:18px;box-shadow:0 2px 10px rgba(120,95,60,.18);\n}\n.mc-title{font-family:'Cinzel',serif;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:#8a7257;margin-bottom:3px;}\n.mc-text{font-size:15px;line-height:1.6;color:#4a3b2d;}\n.mc-divider{height:.5px;margin:0 15px;background:linear-gradient(to right,transparent,rgba(170,145,115,.22),transparent);}\n.mc-body{padding:11px 15px 15px;}\n.mc-highlight{color:#8a7257;font-weight:600;}\n.mc-tag-row{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px;}\n.mc-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:30px;font-size:12.5px;font-style:italic;}\n.mc-tag-ok{background:rgba(245,236,224,.85);border:1px solid rgba(170,145,115,.22);color:#6f5a43;}\n.mc-tag-no{background:rgba(250,247,241,.95);border:1px solid rgba(190,175,155,.28);color:#7a6753;}\n.mc-tag-white{background:rgba(255,255,255,.92);border:1px solid rgba(200,190,175,.35);color:#7a6753;}\n.mc-section-label{\n  font-family:'Cinzel',serif;font-size:10.5px;letter-spacing:.12em;\n  text-transform:uppercase;color:#b39a7b;margin:12px 0 6px;\n}\n.mc-note{\n  margin-top:11px;padding:10px 13px;border-radius:14px;\n  background:rgba(235,224,208,.28);border:1px solid rgba(170,145,115,.20);\n  font-size:13.5px;color:#6f5a43;font-style:italic;line-height:1.55;\n}\n.mc-confirm{\n  position:relative;z-index:2;margin-top:14px;\n  border-radius:20px;\n  background:linear-gradient(145deg,rgba(255,255,255,.92),rgba(244,234,219,.72));\n  border:1px solid rgba(170,145,115,.24);\n  padding:16px 16px 15px;\n  box-shadow:0 2px 18px rgba(120,95,60,.10);\n  animation:mcFade .6s .38s ease both;\n}\n.mc-confirm-top{display:flex;align-items:center;gap:12px;margin-bottom:11px;}\n.mc-confirm-icon{\n  width:46px;height:46px;border-radius:14px;flex-shrink:0;\n  display:flex;align-items:center;justify-content:center;\n  background:linear-gradient(145deg,#b89a73,#8a7257);\n  color:#fff;font-size:18px;box-shadow:0 2px 12px rgba(120,95,60,.22);\n}\n.mc-confirm-title{font-family:'Cinzel',serif;font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:#7a6246;margin-bottom:2px;}\n.mc-confirm-sub{font-size:13px;color:#9a8468;font-style:italic;}\n.mc-date-badge{\n  display:flex;align-items:center;justify-content:center;gap:10px;\n  background:linear-gradient(145deg,#f2e7d8,#e0cfb6);\n  border:1px solid rgba(170,145,115,.26);\n  border-radius:14px;padding:11px 14px;\n  font-family:'Cinzel',serif;font-size:15px;\n  color:#6f5a43;letter-spacing:.10em;\n  box-shadow:inset 0 0 10px rgba(255,255,255,.40);\n}\n.mc-date-badge i{color:#b89a73;font-size:16px;}\n.mc-confirm-note{\n  margin-top:10px;font-size:13.5px;color:#6f5a43;\n  font-style:italic;line-height:1.55;text-align:center;\n}\n.lp-star{position:absolute;color:rgba(184,154,115,.45);font-size:11px;animation:starAnim 3s ease-in-out infinite;pointer-events:none;}\n@keyframes starAnim{0%,100%{opacity:0;transform:scale(0);}50%{opacity:1;transform:scale(1);}}\n</style>\n\n<svg style=\"position:absolute;top:-14px;left:-14px;width:168px;height:168px;opacity:.11;pointer-events:none;z-index:1;\" viewBox=\"0 0 168 168\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#d9c7ad\" transform=\"rotate(0 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#f2e7d8\" transform=\"rotate(45 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#d9c7ad\" transform=\"rotate(90 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#f2e7d8\" transform=\"rotate(135 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#d9c7ad\" transform=\"rotate(180 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#f2e7d8\" transform=\"rotate(225 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#d9c7ad\" transform=\"rotate(270 84 84)\"/>\n    <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#f2e7d8\" transform=\"rotate(315 84 84)\"/>\n    <circle cx=\"84\" cy=\"84\" r=\"13\" fill=\"#fffdf8\"/>\n  </g>\n</svg>\n\n<svg style=\"position:absolute;bottom:-10px;right:-10px;width:128px;height:128px;opacity:.09;pointer-events:none;z-index:1;\" viewBox=\"0 0 128 128\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#d9c7ad\" transform=\"rotate(0 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#f2e7d8\" transform=\"rotate(60 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#d9c7ad\" transform=\"rotate(120 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#f2e7d8\" transform=\"rotate(180 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#d9c7ad\" transform=\"rotate(240 64 64)\"/>\n    <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#f2e7d8\" transform=\"rotate(300 64 64)\"/>\n    <circle cx=\"64\" cy=\"64\" r=\"10\" fill=\"#fffdf8\"/>\n  </g>\n</svg>\n\n<svg style=\"position:absolute;top:44%;left:-6px;width:70px;height:70px;opacity:.08;pointer-events:none;z-index:1;\" viewBox=\"0 0 70 70\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"#d9c7ad\" transform=\"rotate(0 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"#f2e7d8\" transform=\"rotate(72 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"#d9c7ad\" transform=\"rotate(144 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"#f2e7d8\" transform=\"rotate(216 35 35)\"/>\n    <ellipse cx=\"35\" cy=\"10\" rx=\"7\" ry=\"14\" fill=\"#d9c7ad\" transform=\"rotate(288 35 35)\"/>\n    <circle cx=\"35\" cy=\"35\" r=\"6\" fill=\"#fffdf8\"/>\n  </g>\n</svg>\n\n<i class=\"lp-star\" style=\"top:9%;left:8%;animation-delay:0s;\">✦</i>\n<i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s;\">✧</i>\n<i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s;\">✦</i>\n<i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s;\">✧</i>\n<i class=\"lp-star\" style=\"top:38%;right:7%;animation-delay:1.6s;\">✦</i>\n\n<div class=\"mc-wrap\">\n  <div class=\"mc-header\">\n    <span class=\"mc-crown\">🤍</span>\n    <h2>Manual do Convidado</h2>\n    <p>Informações importantes para o nosso encontro especial</p>\n  </div>\n  <div class=\"mc-sub\">✦ &nbsp; orientações &nbsp; ✦</div>\n\n  <div class=\"mc-grid\">\n    <div class=\"mc-card\" style=\"animation-delay:.04s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\"><i class=\"fa-solid fa-clock\"></i></div>\n        <div>\n          <div class=\"mc-title\">Pontualidade</div>\n          <div class=\"mc-text\">Chegue no horário: <span class=\"mc-highlight\">Sua presença pontual é muito importante para nós.</span></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mc-card\" style=\"animation-delay:.09s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div>\n        <div>\n          <div class=\"mc-title\">Confirmação de Presença</div>\n          <div class=\"mc-text\">Por favor, confirme presença <span class=\"mc-highlight\">pelo menos 15 dias antes do evento.</span></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mc-card\" style=\"animation-delay:.14s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\"><i class=\"fa-solid fa-face-smile\"></i></div>\n        <div>\n          <div class=\"mc-title\">Celebração</div>\n          <div class=\"mc-text\">Divirta-se bastante! Estamos ansiosos para celebrar este momento especial com você.</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mc-card\" style=\"animation-delay:.19s\">\n      <div class=\"mc-top\">\n        <div class=\"mc-icon\"><i class=\"fa-solid fa-cake-candles\"></i></div>\n        <div>\n          <div class=\"mc-title\">Abraço e Bolo</div>\n          <div class=\"mc-text\">Não vá embora sem me dar um abraço e comer um pedaço do bolo: Queremos compartilhar cada instante com você.</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"
    },
    {
      "id": "btn_f9f2e0fe-4b78-48f8-930e-4d7369e63aad",
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Presentes",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n\n<style>\n*{\n  box-sizing:border-box;\n  margin:0;\n  padding:0;\n}\n\n.mc-wrap{\n  position:relative;\n  min-height:260px;\n  padding:55px 24px;\n  overflow:hidden;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  font-family:'Cormorant Garamond',serif;\n  background:\n    linear-gradient(\n      160deg,\n      #fbf7ef 0%,\n      #f4eadb 42%,\n      #ffffff 100%\n    );\n}\n\n.mc-content{\n  position:relative;\n  z-index:2;\n  width:100%;\n  max-width:520px;\n  padding:40px 25px;\n  text-align:center;\n  border-radius:24px;\n  background:rgba(255,255,255,.72);\n  border:1px solid rgba(179,154,120,.25);\n  box-shadow:\n    0 8px 30px rgba(120,95,60,.08),\n    inset 0 0 20px rgba(255,255,255,.55);\n  backdrop-filter:blur(4px);\n  animation:mcFade .8s ease both;\n}\n\n.mc-title{\n  font-family:'Cinzel',serif;\n  font-size:25px;\n  font-weight:500;\n  color:#7b6648;\n  letter-spacing:.18em;\n  text-transform:uppercase;\n}\n\n.mc-divider{\n  width:90px;\n  height:1px;\n  margin:16px auto 18px;\n  background:linear-gradient(\n    to right,\n    transparent,\n    rgba(179,154,120,.75),\n    transparent\n  );\n}\n\n.mc-text{\n  max-width:390px;\n  margin:0 auto;\n  font-size:18px;\n  line-height:1.65;\n  font-style:italic;\n  color:#6f5a40;\n}\n\n.mc-decoration{\n  position:absolute;\n  border-radius:50%;\n  pointer-events:none;\n}\n\n.mc-decoration-one{\n  top:-65px;\n  left:-60px;\n  width:180px;\n  height:180px;\n  border:1px solid rgba(179,154,120,.15);\n  box-shadow:\n    0 0 0 22px rgba(232,220,200,.08),\n    0 0 0 45px rgba(232,220,200,.05);\n}\n\n.mc-decoration-two{\n  right:-45px;\n  bottom:-60px;\n  width:150px;\n  height:150px;\n  border:1px solid rgba(179,154,120,.14);\n  box-shadow:\n    0 0 0 20px rgba(200,176,138,.07),\n    0 0 0 40px rgba(200,176,138,.04);\n}\n\n.mc-flower{\n  position:absolute;\n  pointer-events:none;\n  opacity:.10;\n  z-index:1;\n}\n\n.mc-flower-one{\n  top:-25px;\n  left:-25px;\n  width:160px;\n  height:160px;\n}\n\n.mc-flower-two{\n  right:-20px;\n  bottom:-20px;\n  width:125px;\n  height:125px;\n  transform:rotate(25deg);\n}\n\n@keyframes mcFade{\n  from{\n    opacity:0;\n    transform:translateY(14px);\n  }\n\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n}\n\n@media (max-width:480px){\n  .mc-wrap{\n    min-height:230px;\n    padding:38px 18px;\n  }\n\n  .mc-content{\n    padding:34px 20px;\n  }\n\n  .mc-title{\n    font-size:21px;\n  }\n\n  .mc-text{\n    font-size:17px;\n  }\n}\n</style>\n\n<div class=\"mc-wrap\">\n\n  <div class=\"mc-decoration mc-decoration-one\"></div>\n  <div class=\"mc-decoration mc-decoration-two\"></div>\n\n  <svg\n    class=\"mc-flower mc-flower-one\"\n    viewBox=\"0 0 168 168\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#c8b08a\" transform=\"rotate(0 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#f7f1e7\" transform=\"rotate(45 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#c8b08a\" transform=\"rotate(90 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#f7f1e7\" transform=\"rotate(135 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#c8b08a\" transform=\"rotate(180 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#f7f1e7\" transform=\"rotate(225 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#c8b08a\" transform=\"rotate(270 84 84)\"/>\n      <ellipse cx=\"84\" cy=\"25\" rx=\"15\" ry=\"31\" fill=\"#f7f1e7\" transform=\"rotate(315 84 84)\"/>\n      <circle cx=\"84\" cy=\"84\" r=\"13\" fill=\"#f4eadb\"/>\n    </g>\n  </svg>\n\n  <svg\n    class=\"mc-flower mc-flower-two\"\n    viewBox=\"0 0 128 128\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <g>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#c8b08a\" transform=\"rotate(0 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#f7f1e7\" transform=\"rotate(60 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#c8b08a\" transform=\"rotate(120 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#f7f1e7\" transform=\"rotate(180 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#c8b08a\" transform=\"rotate(240 64 64)\"/>\n      <ellipse cx=\"64\" cy=\"18\" rx=\"12\" ry=\"24\" fill=\"#f7f1e7\" transform=\"rotate(300 64 64)\"/>\n      <circle cx=\"64\" cy=\"64\" r=\"10\" fill=\"#fbf7ef\"/>\n    </g>\n  </svg>\n\n  <div class=\"mc-content\">\n    <h2 class=\"mc-title\">Presentes</h2>\n\n    <div class=\"mc-divider\"></div>\n\n    <p class=\"mc-text\">\n      A sua escolha será recebida com muito carinho e tornará este momento ainda mais especial.\n    </p>\n  </div>\n\n</div>"
    }
  ],
  "upsell": {
    "galeriaFotos": false,
    "saveTheDate": false,
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": false,
    "buttonColor": "#8b6f47",
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
    "text": "*PEDIDO DE CONVITE DIGITAL*\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n*� MODELO ESCOLHIDO*\nCasamento\nLink: https://convite.mforge.com.br/Modelo-casamento-branco-dourado\n\n*FUNÇÕES SELECIONADAS:*\n- Abertura Padrão (Curta)\n- Sugestão de Presentes (O snippet deve ser criado apenas dizendo \"Presentes a sua escolha\").\n- Confirmação via WhatsApp\n- Manual do Convidado\n- Música do Convite: Kailane frauches-eu vou fazer\n\n*� TOTAL: R$ 60,00*\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n*� DADOS DO EVENTO*\n- Nome(s): Márcia Regina e Alan Henrique\n- Tipo: Casamento\n- Tema: Casamento\n- Cores: Beje,banco\n- Data: 12/12/2026\n- Horário: 17:00\n- Endereço: Sítio da Sandra, rural minas\n- WhatsApp Confirmação: 38991151422\n\n*� MANUAL DO CONVIDADO:*\nChegue no horário: Sua presença pontual é muito importante para nós.\nConfirme sua presença: Por favor, confirme presença pelo menos 15 dias antes do evento.\nDivirta-se bastante! Estamos ansiosos para celebrar este momento especial com você.\nNão vá embora sem me dar um abraço e comer um pedaço do bolo: Queremos compartilhar cada instante com você.\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n*� DADOS PENDENTES*\n- Link da Música\n- Sugestões de Presentes",
    "usedAt": "2026-08-04T21:54:45.663Z",
    "source": "fill-fields",
    "completionMode": "complete",
    "buttonDecisions": {
      "manualComConteudo": true,
      "presentesComConteudo": false,
      "manualPremium": false,
      "presentesPremium": false,
      "manualResumo": "Chegue no horário: Sua presença pontual é muito importante para nós. Confirme sua presença pelo menos 15 dias antes do evento. Divirta-se bastante! Estamos ansiosos para celebrar este momento especial com você. Não vá embora sem me dar um abraço e comer um pedaço do bolo: Queremos compartilhar cada instante com você.",
      "presentesResumo": ""
    },
    "optionalFeatures": {
      "saveTheDate": {
        "mentioned": false,
        "enabled": false,
        "evidence": "",
        "reason": "not_mentioned"
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
      "evidence": "- Música do Convite: Kailane frauches-eu vou fazer"
    },
    "rsvpPolicy": {
      "mode": "whatsapp",
      "whatsapp": "5538991151422"
    },
    "workflow": {
      "runId": "1785880470035",
      "initiatedBy": "user",
      "publicationAuthorized": true,
      "startedAt": "2026-08-04T21:54:45.687Z"
    },
    "modelUpdate": {
      "requestedMode": true,
      "resolved": true,
      "compatible": false,
      "reasons": [
        "palette_mismatch",
        "missing_colors:bege,branco"
      ],
      "themeCompatible": true,
      "paletteCompatible": false,
      "missingColors": [
        "bege",
        "branco"
      ],
      "sourceTheme": "Elegante, Elementos de casamento no design",
      "sourcePalette": "branca, verde oliva e algumas flores no tom rose",
      "targetTheme": "Casamento",
      "targetPalette": "Bege com Branco"
    },
    "assetDecisions": {
      "cover": {
        "inherited": true,
        "reused": false,
        "reuseApproved": false
      },
      "opening": {
        "inherited": false,
        "reused": false,
        "reuseApproved": false,
        "requestedType": "nenhuma"
      }
    },
    "musicResolution": {
      "mode": "downloaded",
      "detail": "Música localizada e aplicada.",
      "query": "Kailane frauches-eu vou fazer",
      "resolvedAt": "2026-08-04T21:55:05.999Z"
    }
  }
};
