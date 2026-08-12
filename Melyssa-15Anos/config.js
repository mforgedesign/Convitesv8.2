window.config = {
  "evento": {
    "tipo": "Debutante",
    "nome": "Melyssa",
    "idade": 15,
    "data": "2026-10-06",
    "hora": "19:00",
    "horaTermino": "",
    "endereco": "Mansão Arabésque\nAv Washington Luís 3001- 04660000",
    "frase1": "",
    "frase2": "",
    "frase3": ""
  },
  "convite": {
    "paletaCores": "Rosa/Rosé",
    "tema": "Floral",
    "musica": "assets/music_1786493283562.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Melyssa-15Anos",
    "seo": {
      "pageTitle": "Convite Especial",
      "ogTitle": "Você recebeu um convite especial!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "assets/cover_1786493283562.png",
    "cartao": "assets/cartao_chatgpt_1786493283562.jpg",
    "aberturaSlides": [
      "assets/slide1_1786493283562.mp4",
      "assets/slide2_1786493283562.jpg",
      "assets/slide3_1786493283562.mp4",
      "assets/slide4_1786493283562.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1786493283562.mp4",
        "label": "Abertura (Video)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1786493283562.jpg",
        "label": "Convite Especial",
        "type": "image"
      },
      {
        "filePath": "assets/slide3_1786493283562.mp4",
        "label": "Slide 2",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1786493283562.mp4",
        "label": "Slide 1",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1786493283562.jpg",
    "folhaPreenchida": "assets/folha_1786493283562.png",
    "musica": "assets/music_1786493283562.mp3",
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
      "id": "btn_eb0c3db4-f656-42b8-8de8-b2bc18f36c7f",
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://www.google.com/maps/search/?api=1&query=Mans%C3%A3o+Arab%C3%A9sque+Av+Washington+Lu%C3%ADs+3001-+04660000"
    },
    {
      "id": "btn_dc71b13d-0622-4cab-90d5-69e5b308a755",
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n\n<style>\n*{\n  box-sizing:border-box;\n  margin:0;\n  padding:0;\n}\n\n.rsvp-wrap{\n  position:relative;\n  max-width:620px;\n  margin:0 auto;\n  padding:34px 18px 38px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n  background:linear-gradient(\n    160deg,\n    #fff7fa 0%,\n    #f9e5ed 45%,\n    #fff3f7 100%\n  );\n}\n\n.rsvp-header{\n  position:relative;\n  z-index:2;\n  margin-bottom:10px;\n  text-align:center;\n}\n\n.rsvp-header h2{\n  margin-bottom:6px;\n  font-family:'Cinzel',serif;\n  font-size:22px;\n  font-weight:500;\n  letter-spacing:.12em;\n  text-transform:uppercase;\n  color:#8b3f5d;\n}\n\n.rsvp-header p{\n  font-size:16px;\n  font-style:italic;\n  color:#b87591;\n}\n\n.rsvp-date{\n  position:relative;\n  z-index:2;\n  margin-bottom:23px;\n  text-align:center;\n  font-family:'Cinzel',serif;\n  font-size:11px;\n  letter-spacing:.13em;\n  text-transform:uppercase;\n  color:#a15776;\n}\n\n.rsvp-date::before,\n.rsvp-date::after{\n  content:'';\n  display:inline-block;\n  width:35px;\n  height:1px;\n  margin:0 9px;\n  vertical-align:middle;\n  background:linear-gradient(\n    to right,\n    transparent,\n    rgba(190,110,140,.45)\n  );\n}\n\n.rsvp-date::after{\n  background:linear-gradient(\n    to left,\n    transparent,\n    rgba(190,110,140,.45)\n  );\n}\n\n.rsvp-card{\n  position:relative;\n  z-index:2;\n  overflow:hidden;\n  padding:22px 17px 18px;\n  border:1px solid rgba(190,110,140,.24);\n  border-radius:22px;\n  background:rgba(255,255,255,.88);\n  box-shadow:0 4px 24px rgba(160,70,100,.10);\n  animation:rsvpFade .65s ease both;\n}\n\n@keyframes rsvpFade{\n  from{\n    opacity:0;\n    transform:translateY(12px);\n  }\n\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n}\n\n.rsvp-intro{\n  margin-bottom:19px;\n  text-align:center;\n}\n\n.rsvp-intro-title{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  width:58px;\n  height:58px;\n  margin:0 auto 12px;\n  border-radius:17px;\n  background:linear-gradient(145deg,#e9a9bd,#c87596);\n  box-shadow:0 3px 12px rgba(180,90,120,.24);\n  color:#fff;\n  font-family:'Cinzel',serif;\n  font-size:14px;\n  font-weight:500;\n  letter-spacing:.08em;\n}\n\n.rsvp-intro h3{\n  margin-bottom:7px;\n  font-family:'Cinzel',serif;\n  font-size:13px;\n  font-weight:500;\n  letter-spacing:.12em;\n  text-transform:uppercase;\n  color:#8b3f5d;\n}\n\n.rsvp-intro p{\n  max-width:460px;\n  margin:0 auto;\n  font-size:16px;\n  line-height:1.55;\n  color:#633b4a;\n}\n\n.rsvp-divider{\n  width:100%;\n  height:1px;\n  margin-bottom:18px;\n  background:linear-gradient(\n    to right,\n    transparent,\n    rgba(190,110,140,.3),\n    transparent\n  );\n}\n\n.rsvp-field{\n  margin-bottom:15px;\n}\n\n.rsvp-field label{\n  display:block;\n  margin:0 0 6px 3px;\n  font-family:'Cinzel',serif;\n  font-size:10.5px;\n  letter-spacing:.11em;\n  text-transform:uppercase;\n  color:#9b4568;\n}\n\n.rsvp-field input{\n  width:100%;\n  height:48px;\n  padding:0 14px;\n  outline:none;\n  border:1px solid rgba(190,110,140,.28);\n  border-radius:14px;\n  background:#fffafb;\n  font-family:'Cormorant Garamond',serif;\n  font-size:16px;\n  color:#633b4a;\n  transition:border-color .25s ease,box-shadow .25s ease;\n}\n\n.rsvp-field input::placeholder{\n  color:#bd91a2;\n}\n\n.rsvp-field input:focus{\n  border-color:#c87596;\n  box-shadow:0 0 0 3px rgba(200,117,150,.12);\n}\n\n.rsvp-quantities{\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  gap:11px;\n}\n\n.rsvp-help{\n  display:block;\n  margin:5px 2px 0;\n  font-size:12.5px;\n  font-style:italic;\n  color:#a8788b;\n}\n\n.rsvp-total{\n  display:flex;\n  align-items:center;\n  justify-content:space-between;\n  gap:10px;\n  margin:4px 0 16px;\n  padding:11px 13px;\n  border:1px solid rgba(190,110,140,.20);\n  border-radius:14px;\n  background:rgba(235,180,200,.16);\n}\n\n.rsvp-total span{\n  font-size:14px;\n  color:#783d56;\n}\n\n.rsvp-total strong{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.08em;\n  color:#9b4568;\n}\n\n.rsvp-error{\n  display:none;\n  margin-bottom:12px;\n  padding:9px 12px;\n  border:1px solid rgba(175,65,90,.24);\n  border-radius:12px;\n  background:rgba(255,225,230,.7);\n  color:#8b3f5d;\n  font-size:13.5px;\n  text-align:center;\n}\n\n.rsvp-button{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  width:100%;\n  min-height:51px;\n  padding:12px 15px;\n  border:none;\n  border-radius:16px;\n  background:linear-gradient(145deg,#e19ab4,#b95f83);\n  box-shadow:0 4px 16px rgba(180,90,120,.28);\n  color:#fff;\n  cursor:pointer;\n  font-family:'Cinzel',serif;\n  font-size:11.5px;\n  font-weight:500;\n  letter-spacing:.1em;\n  text-align:center;\n  text-transform:uppercase;\n  transition:transform .2s ease,box-shadow .2s ease;\n}\n\n.rsvp-button:hover{\n  transform:translateY(-2px);\n  box-shadow:0 7px 20px rgba(180,90,120,.35);\n}\n\n.rsvp-button:active{\n  transform:translateY(0);\n}\n\n.rsvp-note{\n  position:relative;\n  z-index:2;\n  margin-top:14px;\n  padding:13px 16px;\n  border:1px solid rgba(190,110,140,.22);\n  border-radius:18px;\n  background:rgba(255,255,255,.65);\n  text-align:center;\n  font-size:14px;\n  font-style:italic;\n  line-height:1.5;\n  color:#8b3f5d;\n}\n\n.rsvp-footer{\n  position:relative;\n  z-index:2;\n  margin-top:15px;\n  text-align:center;\n  font-size:14px;\n  color:#a15776;\n}\n\n.rsvp-footer strong{\n  font-family:'Cinzel',serif;\n  font-size:10.5px;\n  font-weight:500;\n  letter-spacing:.12em;\n  text-transform:uppercase;\n}\n\n@media(max-width:480px){\n  .rsvp-quantities{\n    grid-template-columns:1fr;\n  }\n\n  .rsvp-header h2{\n    font-size:19px;\n  }\n\n  .rsvp-date::before,\n  .rsvp-date::after{\n    width:22px;\n    margin:0 6px;\n  }\n}\n</style>\n\n<div class=\"rsvp-wrap\" id=\"confirmacao-melyssa\">\n\n  <div class=\"rsvp-header\">\n    <h2>Confirmação de Presença</h2>\n    <p>Melyssa XV</p>\n  </div>\n\n  <div class=\"rsvp-date\">\n    06 de outubro de 2026\n  </div>\n\n  <div class=\"rsvp-card\">\n\n    <div class=\"rsvp-intro\">\n\n      <div class=\"rsvp-intro-title\">\n        RSVP\n      </div>\n\n      <h3>Você estará conosco?</h3>\n\n      <p>\n        Preencha os dados abaixo e envie sua confirmação\n        diretamente pelo WhatsApp.\n      </p>\n\n    </div>\n\n    <div class=\"rsvp-divider\"></div>\n\n    <div class=\"rsvp-field\">\n\n      <label for=\"rsvp-nome\">\n        Nome do convidado ou família\n      </label>\n\n      <input\n        type=\"text\"\n        id=\"rsvp-nome\"\n        placeholder=\"Digite seu nome completo\"\n        autocomplete=\"name\"\n        oninput=\"\n          document.getElementById('rsvp-error').style.display='none';\n        \"\n      >\n\n    </div>\n\n    <div class=\"rsvp-quantities\">\n\n      <div class=\"rsvp-field\">\n\n        <label for=\"rsvp-adultos\">\n          Adultos\n        </label>\n\n        <input\n          type=\"number\"\n          id=\"rsvp-adultos\"\n          min=\"0\"\n          max=\"20\"\n          value=\"0\"\n          inputmode=\"numeric\"\n          oninput=\"\n            var adultos = Math.max(0, parseInt(this.value) || 0);\n\n            var criancas = Math.max(\n              0,\n              parseInt(\n                document.getElementById('rsvp-criancas').value\n              ) || 0\n            );\n\n            var total = adultos + criancas;\n\n            document.getElementById('rsvp-total').textContent =\n              total === 1\n                ? '1 pessoa'\n                : total + ' pessoas';\n\n            document.getElementById('rsvp-error').style.display =\n              'none';\n          \"\n        >\n\n        <small class=\"rsvp-help\">\n          Inclua você na quantidade.\n        </small>\n\n      </div>\n\n      <div class=\"rsvp-field\">\n\n        <label for=\"rsvp-criancas\">\n          Crianças\n        </label>\n\n        <input\n          type=\"number\"\n          id=\"rsvp-criancas\"\n          min=\"0\"\n          max=\"20\"\n          value=\"0\"\n          inputmode=\"numeric\"\n          oninput=\"\n            var adultos = Math.max(\n              0,\n              parseInt(\n                document.getElementById('rsvp-adultos').value\n              ) || 0\n            );\n\n            var criancas = Math.max(0, parseInt(this.value) || 0);\n            var total = adultos + criancas;\n\n            document.getElementById('rsvp-total').textContent =\n              total === 1\n                ? '1 pessoa'\n                : total + ' pessoas';\n\n            document.getElementById('rsvp-error').style.display =\n              'none';\n          \"\n        >\n\n        <small class=\"rsvp-help\">\n          Informe apenas as crianças.\n        </small>\n\n      </div>\n\n    </div>\n\n    <div class=\"rsvp-total\">\n\n      <span>Total de convidados confirmados:</span>\n\n      <strong id=\"rsvp-total\">\n        0 pessoas\n      </strong>\n\n    </div>\n\n    <div class=\"rsvp-error\" id=\"rsvp-error\">\n      Preencha seu nome e informe pelo menos uma pessoa.\n    </div>\n\n    <button\n      type=\"button\"\n      class=\"rsvp-button\"\n      onclick=\"\n        var nome =\n          document.getElementById('rsvp-nome').value.trim();\n\n        var adultos = Math.max(\n          0,\n          parseInt(\n            document.getElementById('rsvp-adultos').value\n          ) || 0\n        );\n\n        var criancas = Math.max(\n          0,\n          parseInt(\n            document.getElementById('rsvp-criancas').value\n          ) || 0\n        );\n\n        var total = adultos + criancas;\n        var erro = document.getElementById('rsvp-error');\n\n        if(nome === ''){\n          erro.textContent =\n            'Por favor, informe o nome do convidado ou da família.';\n\n          erro.style.display = 'block';\n\n          document.getElementById('rsvp-nome').focus();\n\n          return;\n        }\n\n        if(total < 1){\n          erro.textContent =\n            'Informe pelo menos uma pessoa para confirmar a presença.';\n\n          erro.style.display = 'block';\n\n          document.getElementById('rsvp-adultos').focus();\n\n          return;\n        }\n\n        erro.style.display = 'none';\n\n        var textoAdultos =\n          adultos === 1\n            ? '1 adulto'\n            : adultos + ' adultos';\n\n        var textoCriancas =\n          criancas === 1\n            ? '1 criança'\n            : criancas + ' crianças';\n\n        var textoTotal =\n          total === 1\n            ? '1 pessoa'\n            : total + ' pessoas';\n\n        var mensagem =\n          'Olá! Gostaria de confirmar presença nos 15 anos da Melyssa.' +\n          '\\n\\nNome: ' + nome +\n          '\\nAdultos: ' + textoAdultos +\n          '\\nCrianças: ' + textoCriancas +\n          '\\nTotal confirmado: ' + textoTotal +\n          '\\n\\nAgradeço pelo convite!';\n\n        var linkWhatsApp =\n          'https://wa.me/5511965507194?text=' +\n          encodeURIComponent(mensagem);\n\n        window.location.href = linkWhatsApp;\n      \"\n    >\n      Confirmar pelo WhatsApp\n    </button>\n\n  </div>\n\n  <div class=\"rsvp-note\">\n    Ao tocar no botão, uma mensagem será preparada automaticamente.\n    Basta conferir os dados e enviá-la pelo WhatsApp.\n  </div>\n\n  <div class=\"rsvp-footer\">\n    <strong>Com carinho, família da Melyssa</strong>\n  </div>\n\n</div>"
    },
    {
      "id": "btn_4ce7c9357ea45730",
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n.mc-wrap{position:relative;padding:32px 18px 36px;overflow:hidden;font-family:'Cormorant Garamond',serif;background:linear-gradient(160deg,#fff7fa 0%,#f9e5ed 45%,#fff3f7 100%)}\n.mc-header{position:relative;z-index:2;text-align:center;margin-bottom:10px}.mc-crown{font-size:26px;margin-bottom:6px;display:block;animation:crownFloat 4s ease-in-out infinite}@keyframes crownFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}\n.mc-header h2{font-family:'Cinzel',serif;font-size:22px;color:#8b3f5d;letter-spacing:.15em;margin-bottom:5px}.mc-header p{color:#b87591;font-size:14.5px;font-style:italic}.mc-sub{position:relative;z-index:2;text-align:center;margin-bottom:24px;font-size:13px;color:#b87591;font-family:'Cinzel',serif;letter-spacing:.12em;text-transform:uppercase}.mc-sub:before,.mc-sub:after{content:'';display:inline-block;width:40px;height:.5px;background:linear-gradient(to right,transparent,rgba(190,110,140,.4));vertical-align:middle;margin:0 10px}.mc-sub:after{background:linear-gradient(to left,transparent,rgba(190,110,140,.4))}.mc-grid{display:grid;gap:12px;position:relative;z-index:2}.mc-card{border-radius:20px;background:rgba(255,255,255,.82);border:1px solid rgba(190,110,140,.2);box-shadow:0 2px 16px rgba(160,70,100,.07);overflow:hidden;animation:mcFade .6s ease both}@keyframes mcFade{from{opacity:0;transform:translateY(11px)}to{opacity:1;transform:translateY(0)}}.mc-top{display:flex;align-items:center;gap:13px;padding:15px 15px 13px}.mc-icon{width:46px;height:46px;border-radius:14px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:linear-gradient(145deg,#e9a9bd,#c87596);color:#fff;font-size:18px;box-shadow:0 2px 10px rgba(180,90,120,.22)}.mc-title{font-family:'Cinzel',serif;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:#a15776;margin-bottom:3px}.mc-text{font-size:15px;line-height:1.6;color:#633b4a}.mc-divider{height:.5px;margin:0 15px;background:linear-gradient(to right,transparent,rgba(190,110,140,.22),transparent)}.mc-body{padding:11px 15px 15px}.mc-highlight{color:#9b4568;font-weight:600}.mc-tag-row{display:flex;flex-wrap:wrap;gap:7px;margin-top:9px}.mc-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:30px;font-size:12.5px;font-style:italic}.mc-tag-no{background:rgba(245,210,222,.55);border:1px solid rgba(180,90,125,.25);color:#783d56}.mc-section-label{font-family:'Cinzel',serif;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:#b87591;margin:12px 0 6px}.mc-note{margin-top:11px;padding:10px 13px;border-radius:14px;background:rgba(235,180,200,.18);border:1px solid rgba(190,110,140,.22);font-size:13.5px;color:#8b3f5d;font-style:italic;line-height:1.55}.mc-footer{position:relative;z-index:2;margin-top:14px;border-radius:20px;background:linear-gradient(145deg,rgba(255,255,255,.9),rgba(246,215,226,.55));border:1px solid rgba(190,110,140,.28);padding:16px;box-shadow:0 2px 18px rgba(160,70,100,.1);text-align:center;animation:mcFade .6s .38s ease both}.mc-footer-title{font-family:'Cinzel',serif;font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:#8b3f5d;margin-bottom:7px}.mc-quote{font-size:16px;color:#783d56;font-style:italic;line-height:1.55}.mc-source{font-size:13px;color:#b87591;margin-top:5px}.lp-star{position:absolute;color:rgba(190,110,140,.5);font-size:11px;animation:starAnim 3s ease-in-out infinite;pointer-events:none}@keyframes starAnim{0%,100%{opacity:0;transform:scale(0)}50%{opacity:1;transform:scale(1)}}\n</style>\n<div class=\"mc-wrap\">\n<i class=\"lp-star\" style=\"top:9%;left:8%\">✦</i><i class=\"lp-star\" style=\"top:17%;right:13%;animation-delay:1.1s\">✧</i><i class=\"lp-star\" style=\"bottom:14%;left:14%;animation-delay:2s\">✦</i><i class=\"lp-star\" style=\"bottom:7%;right:11%;animation-delay:.6s\">✧</i>\n<div class=\"mc-header\"><span class=\"mc-crown\">✦</span><h2>Manual do Convidado</h2><p>Melyssa XV</p></div><div class=\"mc-sub\">06 de outubro de 2026</div>\n<div class=\"mc-grid\">\n<div class=\"mc-card\"><div class=\"mc-top\"><div class=\"mc-icon\"><i class=\"fa-solid fa-heart\"></i></div><div><div class=\"mc-title\">Seja muito bem-vindo(a)</div><div class=\"mc-text\">É com imensa alegria e gratidão a Deus que recebemos você para celebrar os 15 anos da Melyssa.</div></div></div><div class=\"mc-divider\"></div><div class=\"mc-body\"><div class=\"mc-text\">Sua presença tornará esta noite ainda mais especial e inesquecível.</div></div></div>\n<div class=\"mc-card\"><div class=\"mc-top\"><div class=\"mc-icon\"><i class=\"fa-solid fa-user-tie\"></i></div><div><div class=\"mc-title\">Dress Code</div><div class=\"mc-text\"><span class=\"mc-highlight\">Traje: Esporte Fino</span></div></div></div></div>\n<div class=\"mc-card\"><div class=\"mc-top\"><div class=\"mc-icon\"><i class=\"fa-solid fa-palette\"></i></div><div><div class=\"mc-title\">Cores reservadas</div><div class=\"mc-text\">Gentileza evitar trajes nas cores abaixo:</div></div></div><div class=\"mc-divider\"></div><div class=\"mc-body\"><div class=\"mc-tag-row\"><span class=\"mc-tag mc-tag-no\">Rosa</span><span class=\"mc-tag mc-tag-no\">Rosê</span><span class=\"mc-tag mc-tag-no\">Prata</span></div><div class=\"mc-note\">Essas cores serão reservadas exclusivamente para a debutante e sua corte.</div></div></div>\n<div class=\"mc-card\"><div class=\"mc-top\"><div class=\"mc-icon\"><i class=\"fa-solid fa-clock\"></i></div><div><div class=\"mc-title\">Pontualidade</div><div class=\"mc-text\">A cerimônia terá início no horário previsto.</div></div></div><div class=\"mc-divider\"></div><div class=\"mc-body\"><div class=\"mc-text\">Sua pontualidade será muito importante para que você possa acompanhar cada momento preparado com carinho.</div></div></div>\n<div class=\"mc-card\"><div class=\"mc-top\"><div class=\"mc-icon\"><i class=\"fa-solid fa-mobile-screen-button\"></i></div><div><div class=\"mc-title\">Durante a celebração</div><div class=\"mc-text\">Mantenha o celular no modo silencioso durante a cerimônia.</div></div></div><div class=\"mc-divider\"></div><div class=\"mc-body\"><div class=\"mc-text\">Depois, aproveite para registrar sorrisos, abraços e momentos inesquecíveis.</div></div></div>\n</div>\n<div class=\"mc-footer\"><div class=\"mc-footer-title\">Nossa Gratidão</div><div class=\"mc-text\">Celebrar esta data é reconhecer a fidelidade de Deus em cada etapa da vida da Melyssa.</div><div class=\"mc-quote\">“Tudo fez formoso em seu devido tempo.”</div><div class=\"mc-source\">Eclesiastes 3:11</div><div class=\"mc-source\">Com carinho,<br>Família da Melyssa</div></div>\n</div>"
    },
    {
      "id": "btn_a48358b83065b0d9",
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&amp;family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&amp;display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{\n  box-sizing:border-box;\n  margin:0;\n  padding:0;\n}\n\n.mlp-wrap{\n  position:relative;\n  padding:28px 16px 34px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',serif;\n  background:\n    radial-gradient(circle at 10% 5%,rgba(201,110,75,.09),transparent 28%),\n    radial-gradient(circle at 92% 95%,rgba(201,110,75,.08),transparent 30%),\n    linear-gradient(160deg,#fffaf8 0%,#fdf3f0 45%,#fffaf8 100%);\n}\n\n/* CABEÇALHO */\n\n.mlp-header{\n  position:relative;\n  z-index:2;\n  text-align:center;\n  margin-bottom:23px;\n}\n\n.mlp-header h2{\n  font-family:'Cinzel',serif;\n  font-size:22px;\n  line-height:1.3;\n  color:#9b402c;\n  letter-spacing:.10em;\n  margin-bottom:4px;\n}\n\n.mlp-header .mlp-subtitle{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  text-transform:uppercase;\n  letter-spacing:.20em;\n  color:#b4674d;\n  margin-bottom:11px;\n}\n\n.mlp-intro{\n  max-width:650px;\n  margin:0 auto;\n  font-size:15.5px;\n  line-height:1.45;\n  color:#65392f;\n}\n\n.mlp-name{\n  color:#bd5c73;\n  font-size:20px;\n  font-style:italic;\n  font-weight:600;\n}\n\n/* GRID */\n\n.mlp-grid{\n  display:grid;\n  grid-template-columns:1fr;\n  gap:10px;\n  position:relative;\n  z-index:2;\n}\n\n@media (min-width:720px){\n  .mlp-grid{\n    grid-template-columns:repeat(2,minmax(0,1fr));\n  }\n}\n\n/* CARDS */\n\n.mlp-card{\n  display:flex;\n  gap:13px;\n  align-items:flex-start;\n  padding:15px 16px;\n  border-radius:20px;\n  background:rgba(255,255,255,.78);\n  border:1px solid rgba(181,95,64,.18);\n  box-shadow:0 3px 15px rgba(120,55,35,.065);\n  animation:mlpFade .5s ease both;\n}\n\n.mlp-card:nth-child(1){animation-delay:.03s}\n.mlp-card:nth-child(2){animation-delay:.06s}\n.mlp-card:nth-child(3){animation-delay:.09s}\n.mlp-card:nth-child(4){animation-delay:.12s}\n.mlp-card:nth-child(5){animation-delay:.15s}\n.mlp-card:nth-child(6){animation-delay:.18s}\n.mlp-card:nth-child(7){animation-delay:.21s}\n.mlp-card:nth-child(8){animation-delay:.24s}\n.mlp-card:nth-child(9){animation-delay:.27s}\n.mlp-card:nth-child(10){animation-delay:.30s}\n.mlp-card:nth-child(11){animation-delay:.33s}\n.mlp-card:nth-child(12){animation-delay:.36s}\n.mlp-card:nth-child(13){animation-delay:.39s}\n\n@keyframes mlpFade{\n  from{\n    opacity:0;\n    transform:translateY(10px);\n  }\n  to{\n    opacity:1;\n    transform:translateY(0);\n  }\n}\n\n.mlp-icon{\n  width:45px;\n  height:45px;\n  border-radius:14px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(145deg,#d88967,#ad4d34);\n  color:#fff;\n  font-size:17px;\n  box-shadow:0 3px 11px rgba(155,64,44,.23);\n}\n\n.mlp-content{\n  min-width:0;\n  flex:1;\n}\n\n.mlp-title{\n  font-family:'Cinzel',serif;\n  font-size:11px;\n  line-height:1.35;\n  letter-spacing:.11em;\n  text-transform:uppercase;\n  color:#a04c37;\n  margin-bottom:6px;\n}\n\n.mlp-note{\n  display:block;\n  font-size:12.5px;\n  color:#a56856;\n  font-style:italic;\n  margin-top:-2px;\n  margin-bottom:5px;\n}\n\n.mlp-list{\n  list-style:none;\n  padding:0;\n  margin:0;\n}\n\n.mlp-list li{\n  position:relative;\n  padding-left:13px;\n  margin-bottom:3px;\n  font-size:14.5px;\n  line-height:1.38;\n  color:#60392f;\n}\n\n.mlp-list li:last-child{\n  margin-bottom:0;\n}\n\n.mlp-list li::before{\n  content:'•';\n  position:absolute;\n  left:0;\n  top:0;\n  color:#c8795d;\n}\n\n.mlp-tip{\n  display:inline-block;\n  margin-top:7px;\n  font-size:12.5px;\n  color:#944531;\n  background:rgba(215,137,103,.11);\n  border:1px solid rgba(181,95,64,.20);\n  border-radius:30px;\n  padding:3px 10px;\n  font-style:italic;\n}\n\n/* DIVISOR PIX */\n\n.mlp-divider{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  gap:10px;\n  position:relative;\n  z-index:2;\n  margin:22px 0 15px;\n  font-family:'Cinzel',serif;\n  font-size:11px;\n  letter-spacing:.20em;\n  text-transform:uppercase;\n  color:#a04c37;\n}\n\n.mlp-divider::before,\n.mlp-divider::after{\n  content:'';\n  width:55px;\n  height:1px;\n}\n\n.mlp-divider::before{\n  background:linear-gradient(to right,transparent,#d89a83);\n}\n\n.mlp-divider::after{\n  background:linear-gradient(to left,transparent,#d89a83);\n}\n\n/* PIX */\n\n.mlp-pix-box{\n  position:relative;\n  z-index:2;\n  margin-top:0;\n  border-radius:22px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(255,255,255,.92),\n      rgba(247,225,216,.72)\n    );\n  border:1px solid rgba(181,95,64,.25);\n  padding:19px 16px 17px;\n  box-shadow:0 3px 18px rgba(120,55,35,.09);\n}\n\n.mlp-pix-header{\n  display:flex;\n  align-items:center;\n  gap:11px;\n  margin-bottom:12px;\n}\n\n.mlp-pix-icon{\n  width:46px;\n  height:46px;\n  border-radius:14px;\n  flex-shrink:0;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  background:linear-gradient(145deg,#cf7956,#9d402c);\n  color:#fff;\n  font-size:19px;\n  box-shadow:0 3px 12px rgba(155,64,44,.28);\n}\n\n.mlp-pix-label{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.13em;\n  text-transform:uppercase;\n  color:#943e2c;\n  margin-bottom:2px;\n}\n\n.mlp-pix-sub{\n  font-size:13px;\n  line-height:1.3;\n  color:#a76854;\n  font-style:italic;\n}\n\n.mlp-pix-message{\n  font-size:14.5px;\n  line-height:1.4;\n  text-align:center;\n  color:#60392f;\n  margin:4px 4px 14px;\n}\n\n.mlp-key-wrap{\n  display:flex;\n  align-items:center;\n  gap:9px;\n  background:rgba(255,255,255,.88);\n  border:1px solid rgba(181,95,64,.22);\n  border-radius:14px;\n  padding:10px 11px 10px 14px;\n  margin-bottom:8px;\n}\n\n.mlp-pix-key{\n  flex:1;\n  min-width:0;\n  font-family:'Cinzel',serif;\n  font-size:14px;\n  color:#943e2c;\n  letter-spacing:.07em;\n  word-break:break-all;\n}\n\n.mlp-copy-btn{\n  flex-shrink:0;\n  cursor:pointer;\n  border:none;\n  outline:none;\n  border-radius:10px;\n  padding:8px 13px;\n  background:linear-gradient(145deg,#cf7956,#9d402c);\n  color:#fff;\n  font-family:'Cinzel',serif;\n  font-size:10.5px;\n  letter-spacing:.08em;\n  box-shadow:0 2px 10px rgba(155,64,44,.25);\n  transition:transform .15s ease,box-shadow .15s ease;\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  gap:6px;\n  -webkit-tap-highlight-color:transparent;\n  touch-action:manipulation;\n}\n\n.mlp-copy-btn:hover{\n  transform:scale(1.035);\n}\n\n.mlp-copy-btn:active{\n  transform:scale(.97);\n}\n\n.mlp-copy-btn:focus-visible{\n  outline:2px solid rgba(155,64,44,.35);\n  outline-offset:2px;\n}\n\n.mlp-copied{\n  text-align:center;\n  font-size:13px;\n  line-height:20px;\n  min-height:20px;\n  color:#9b4d39;\n  font-style:italic;\n  opacity:0;\n  transition:opacity .25s ease;\n}\n\n@media (max-width:430px){\n  .mlp-wrap{\n    padding-left:12px;\n    padding-right:12px;\n  }\n\n  .mlp-card{\n    padding:14px;\n    gap:11px;\n  }\n\n  .mlp-icon{\n    width:41px;\n    height:41px;\n  }\n\n  .mlp-list li{\n    font-size:14px;\n  }\n\n  .mlp-key-wrap{\n    flex-wrap:wrap;\n  }\n\n  .mlp-pix-key{\n    width:100%;\n    flex-basis:100%;\n    text-align:center;\n  }\n\n  .mlp-copy-btn{\n    width:100%;\n  }\n}\n</style>\n\n\n<div class=\"mlp-wrap\">\n\n  <div class=\"mlp-header\">\n    <h2>Sugestões de Presentes</h2>\n    <div class=\"mlp-subtitle\">♥ Para a Debutante ♥</div>\n\n    <div class=\"mlp-intro\">\n      Sua presença é o que mais importa para nós!<br>\n      Mas, caso deseje presentear a\n      <span class=\"mlp-name\">Melyssa</span>,<br>\n      seguem algumas sugestões com muito carinho:\n    </div>\n  </div>\n\n\n  <div class=\"mlp-grid\">\n\n    <!-- PERFUMES -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-spray-can-sparkles\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Perfumes</div>\n\n        <ul class=\"mlp-list\">\n          <li>Good Girl — Carolina Herrera</li>\n          <li>La Vie Est Belle — Lancôme</li>\n          <li>Lily — O Boticário</li>\n          <li>Egeo Dolce — O Boticário</li>\n          <li>Fantasy — Britney Spears</li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- SKINCARE -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-pump-soap\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Skincare</div>\n        <span class=\"mlp-note\">(produtos que ela vai amar!)</span>\n\n        <ul class=\"mlp-list\">\n          <li>Gel de limpeza facial</li>\n          <li>Hidratante facial</li>\n          <li>Sérum de vitamina C</li>\n          <li>Protetor solar facial</li>\n          <li>Balm labial</li>\n          <li>Máscaras faciais</li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- BODY SPLASH -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-bottle-droplet\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Body Splash</div>\n\n        <ul class=\"mlp-list\">\n          <li>Victoria's Secret Bare Vanilla</li>\n          <li>Victoria's Secret Pure Seduction</li>\n          <li>Bath &amp; Body Works Warm Vanilla Sugar</li>\n          <li>O Boticário Cuide-se Bem Deleite</li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- MAQUIAGEM -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-wand-magic-sparkles\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Maquiagem</div>\n\n        <ul class=\"mlp-list\">\n          <li>Base líquida</li>\n          <li>Corretivo</li>\n          <li>Paleta de sombras</li>\n          <li>Máscara de cílios</li>\n          <li>Batom</li>\n          <li>Blush</li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- ACESSÓRIOS -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-gem\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Acessórios</div>\n\n        <ul class=\"mlp-list\">\n          <li>Colares, brincos, anéis e pulseiras</li>\n          <li>Relógios delicados</li>\n          <li>Óculos de sol</li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- BOLSAS E NECESSAIRES -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-bag-shopping\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Bolsas e Necessaires</div>\n\n        <ul class=\"mlp-list\">\n          <li>Bolsa transversal</li>\n          <li>Bolsa tote média</li>\n          <li>Necessaire média</li>\n          <li>Necessaire pequena</li>\n          <li>Organizador de mala</li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- CABELOS -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-wind\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Cabelos</div>\n\n        <ul class=\"mlp-list\">\n          <li>Secador de cabelo</li>\n          <li>Prancha alisadora</li>\n          <li>Modelador de cachos</li>\n          <li>Escova secadora</li>\n          <li>Difusor de ar</li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- ROUPA CASUAIS -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-shirt\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Roupa Casuais</div>\n\n        <ul class=\"mlp-list\">\n          <li>Calça jeans</li>\n          <li>Blusa de algodão (básica e confortável)</li>\n        </ul>\n\n        <span class=\"mlp-tip\">✦ Roupa: 38 ou M</span>\n      </div>\n    </div>\n\n\n    <!-- ROUPA DE ACADEMIA -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-dumbbell\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Roupa de Academia</div>\n\n        <ul class=\"mlp-list\">\n          <li>Top</li>\n          <li>Legging</li>\n          <li>Short de academia</li>\n          <li>Jaqueta leve</li>\n        </ul>\n\n        <span class=\"mlp-tip\">✦ Roupa: 38 ou M</span>\n      </div>\n    </div>\n\n\n    <!-- CALÇADOS -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-shoe-prints\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Calçados</div>\n\n        <ul class=\"mlp-list\">\n          <li>Sandália salto bloco</li>\n          <li>Sapatilha básica</li>\n          <li>All Star (conversa)</li>\n          <li>Tênis casual (branco)</li>\n          <li>Tênis casual (bege)</li>\n          <li>Mule (básico)</li>\n        </ul>\n\n        <span class=\"mlp-tip\">✦ Sapato: 35</span>\n      </div>\n    </div>\n\n\n    <!-- ORGANIZADORES DE MALA -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-suitcase-rolling\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Organizadores de Mala</div>\n\n        <ul class=\"mlp-list\">\n          <li>Organizador de roupas</li>\n          <li>Necessaire de viagem</li>\n          <li>Organizador de eletrônicos</li>\n          <li>Saco organizador</li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- OUTROS ITENS -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-gift\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Outros Itens</div>\n\n        <ul class=\"mlp-list\">\n          <li>Garrafa térmica (tipo Stanley)</li>\n          <li>Fone de ouvido Bluetooth</li>\n          <li>Caixa de som Bluetooth</li>\n        </ul>\n      </div>\n    </div>\n\n\n    <!-- TAMANHOS -->\n    <div class=\"mlp-card\">\n      <div class=\"mlp-icon\">\n        <i class=\"fa-solid fa-ruler-combined\"></i>\n      </div>\n\n      <div class=\"mlp-content\">\n        <div class=\"mlp-title\">Tamanhos</div>\n\n        <ul class=\"mlp-list\">\n          <li>Sapato: 35</li>\n          <li>Roupa: 38 ou M</li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div class=\"mlp-divider\">\n    ♥ &nbsp; Ou, se preferir &nbsp; ♥\n  </div>\n\n\n  <!-- PIX -->\n  <div class=\"mlp-pix-box\">\n\n    <div class=\"mlp-pix-header\">\n      <div class=\"mlp-pix-icon\">\n        <i class=\"fa-solid fa-qrcode\"></i>\n      </div>\n\n      <div>\n        <div class=\"mlp-pix-label\">Chave Pix</div>\n        <div class=\"mlp-pix-sub\">\n          Uma opção prática de presente 💕\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"mlp-pix-message\">\n      Se for mais prático para você, também disponibilizamos\n      uma opção de presente via Pix.<br>\n      Fique à vontade para escolher a forma que preferir!\n    </div>\n\n\n    <div class=\"mlp-key-wrap\">\n      <span\n        class=\"mlp-pix-key\"\n        id=\"melyssaPixKey\"\n      >47137257810</span>\n\n      <button\n        type=\"button\"\n        class=\"mlp-copy-btn\"\n        id=\"melyssaCopyButton\"\n        onclick=\"copyMelyssaPix(this)\"\n        aria-label=\"Copiar chave Pix\"\n      >\n        <i class=\"fa-solid fa-copy\"></i>\n        <span>Copiar</span>\n      </button>\n    </div>\n\n\n    <div\n      class=\"mlp-copied\"\n      id=\"melyssaCopiedMsg\"\n      role=\"status\"\n      aria-live=\"polite\"\n    >\n      Chave Pix copiada! 💕\n    </div>\n\n  </div>\n\n</div>\n\n\n<script>\n(function(){\n\n  window.copyMelyssaPix = function(button){\n\n    var keyElement = document.getElementById('melyssaPixKey');\n    var messageElement = document.getElementById('melyssaCopiedMsg');\n\n    if(!keyElement){\n      return;\n    }\n\n    var key = keyElement.textContent.trim();\n\n\n    function showSuccess(){\n\n      if(messageElement){\n        messageElement.textContent = 'Chave Pix copiada! 💕';\n        messageElement.style.opacity = '1';\n      }\n\n      if(button){\n        var text = button.querySelector('span');\n\n        if(text){\n          text.textContent = 'Copiado!';\n        }\n\n        button.disabled = true;\n\n        setTimeout(function(){\n\n          if(text){\n            text.textContent = 'Copiar';\n          }\n\n          button.disabled = false;\n\n          if(messageElement){\n            messageElement.style.opacity = '0';\n          }\n\n        },2200);\n      }\n    }\n\n\n    function showError(){\n\n      if(messageElement){\n        messageElement.textContent =\n          'Não foi possível copiar automaticamente. Toque e segure a chave para copiar.';\n        messageElement.style.opacity = '1';\n\n        setTimeout(function(){\n          messageElement.style.opacity = '0';\n        },4000);\n      }\n    }\n\n\n    function fallbackCopy(){\n\n      var textarea = document.createElement('textarea');\n\n      textarea.value = key;\n      textarea.setAttribute('readonly','');\n\n      textarea.style.position = 'fixed';\n      textarea.style.left = '0';\n      textarea.style.top = '0';\n      textarea.style.width = '1px';\n      textarea.style.height = '1px';\n      textarea.style.padding = '0';\n      textarea.style.border = '0';\n      textarea.style.outline = '0';\n      textarea.style.boxShadow = 'none';\n      textarea.style.background = 'transparent';\n      textarea.style.opacity = '0.01';\n      textarea.style.fontSize = '16px';\n\n      document.body.appendChild(textarea);\n\n      textarea.focus();\n      textarea.select();\n\n      if(typeof textarea.setSelectionRange === 'function'){\n        textarea.setSelectionRange(0,textarea.value.length);\n      }\n\n      var copied = false;\n\n      try{\n        copied = document.execCommand('copy');\n      }catch(error){\n        copied = false;\n      }\n\n      document.body.removeChild(textarea);\n\n      if(copied){\n        showSuccess();\n      }else{\n        showError();\n      }\n    }\n\n\n    /*\n      Tenta primeiro a Clipboard API moderna.\n      Se o navegador, iframe ou popup bloquear,\n      utiliza o método clássico como fallback.\n    */\n    if(\n      navigator.clipboard &&\n      typeof navigator.clipboard.writeText === 'function' &&\n      window.isSecureContext\n    ){\n\n      navigator.clipboard\n        .writeText(key)\n        .then(showSuccess)\n        .catch(fallbackCopy);\n\n    }else{\n\n      fallbackCopy();\n\n    }\n\n  };\n\n})();\n</script>"
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
    "buttonColor": "#b03a73",
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
    "text": "• Nome(s) — Melyssa \n\n• Se aniversário, Idade — 15\n\n• Paleta de CORES — Rosa/Rosé\n\n• TEMA do Convite — Floral\n\n• DATA do evento — 06/10/2026\n\n• HORA do evento — 19:00\n\n• Endereço do Evento — \nMansão Arabésque\nAv Washington Luís 3001- 04660000\n\n• Quer Botão Confirmação de Presença? — sim  11 96550-7194\n\n• Quer Botão Dicas de Presente? — sim gostaria de uma lista de presente \n\n• Quer Botão Manual do Convidado? — sim gostaria",
    "usedAt": "2026-07-30T12:23:51.708Z",
    "source": "fill-fields",
    "completionMode": "complete",
    "buttonDecisions": {
      "manualComConteudo": true,
      "presentesComConteudo": true,
      "manualPremium": false,
      "presentesPremium": false,
      "manualResumo": "",
      "presentesResumo": "Gostaria de uma lista de presentes."
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
      "mentioned": false,
      "mode": "none",
      "query": "",
      "preserveTemplate": false,
      "hasInheritedMusic": false
    },
    "rsvpPolicy": {
      "mode": "whatsapp",
      "whatsapp": "5511965507194"
    },
    "workflow": {
      "runId": "1785414217331",
      "initiatedBy": "user",
      "publicationAuthorized": true,
      "startedAt": "2026-07-30T12:23:51.792Z"
    },
    "modelUpdate": {
      "requestedMode": false,
      "resolved": false,
      "compatible": true,
      "reasons": [],
      "themeCompatible": true,
      "paletteCompatible": true,
      "missingColors": [],
      "sourceTheme": "Floral",
      "sourcePalette": "Rosa Pink e Rosa Claro",
      "targetTheme": "Floral",
      "targetPalette": "Rosa/Rosé"
    },
    "musicResolution": {
      "mode": "manual",
      "detail": "Áudio anexado manualmente pelo usuário no Builder.",
      "query": "",
      "resolvedAt": "2026-07-30T15:32:37.955Z",
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
        "reused": false,
        "reuseApproved": true,
        "requestedType": "longa"
      }
    }
  }
};
