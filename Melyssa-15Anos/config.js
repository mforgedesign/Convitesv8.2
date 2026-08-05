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
    "musica": "assets/music_1785969097743.mp3",
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
    "capa": "assets/cover_1785969097743.png",
    "cartao": "assets/cartao_chatgpt_1785969097743.jpg",
    "aberturaSlides": [
      "assets/slide1_1785969097743.mp4",
      "assets/slide2_1785969097743.jpg",
      "assets/slide3_1785969097743.mp4",
      "assets/slide4_1785969097743.mp4"
    ],
    "aberturaSlidesMeta": [
      {
        "filePath": "assets/slide1_1785969097743.mp4",
        "label": "Abertura (Video)",
        "type": "video"
      },
      {
        "filePath": "assets/slide2_1785969097743.jpg",
        "label": "Convite Especial",
        "type": "image"
      },
      {
        "filePath": "assets/slide3_1785969097743.mp4",
        "label": "Slide 2",
        "type": "video"
      },
      {
        "filePath": "assets/slide4_1785969097743.mp4",
        "label": "Slide 1",
        "type": "video"
      }
    ],
    "folhaVazia": "assets/folha_vazia_1785969097743.jpg",
    "folhaPreenchida": "assets/folha_1785969097743.png",
    "musica": "assets/music_1785969097743.mp3",
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
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n.lp-root, .lp-root *, .lp-root *::before, .lp-root *::after { color-scheme: light only; forced-color-adjust: none; -webkit-font-smoothing: antialiased; box-sizing: border-box; }\n.lp-root { background: #fff5f8; color: #6b1a3a; margin: 0; padding: 0; }\n.lp-wrap { position: relative; padding: 30px 18px 36px; overflow: hidden; font-family: 'Cormorant Garamond', serif; background: linear-gradient(160deg, #fff8fa 0%, #fbeaf0 50%, #fffafd 100%); }\n.flower { position: absolute; pointer-events: none; color: rgba(214,125,153,.45); font-size: 16px; animation: floatFlower 6s ease-in-out infinite; }\n@keyframes floatFlower { 0%,100% { transform: translateY(0) rotate(0deg); opacity: .35; } 50% { transform: translateY(18px) rotate(20deg); opacity: .75; } }\n.lp-header { position: relative; z-index: 2; text-align: center; margin-bottom: 22px; }\n.lp-header h2 { font-family: 'Cinzel', serif; font-size: 22px; color: #6b1a3a; letter-spacing: .13em; margin-bottom: 4px; }\n.lp-header .sub { color: #b05a78; font-size: 14px; font-style: italic; margin-bottom: 2px; }\n.lp-header .badge { display: inline-block; margin-top: 6px; font-family: 'Cinzel', serif; font-size: 10px; letter-spacing: .18em; text-transform: uppercase; background: linear-gradient(135deg, #f2c4d2, #f9e3ea); border: 1px solid rgba(214,125,153,.5); border-radius: 30px; padding: 3px 14px; color: #8d3d5b; }\n.lp-grid { display: grid; gap: 10px; position: relative; z-index: 2; }\n.lp-card { display: flex; gap: 13px; align-items: center; padding: 13px 15px; border-radius: 20px; background: rgba(255,255,255,.93); border: 1px solid rgba(214,125,153,.35); box-shadow: 0 2px 14px rgba(180,70,110,.07); animation: lpFade .5s ease both; }\n@keyframes lpFade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }\n.lp-icon { width: 44px; height: 44px; border-radius: 14px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 17px; color: #fff; background: #d67d99; box-shadow: 0 2px 10px rgba(180,70,110,.22); }\n.icon-blue { background: linear-gradient(145deg, #e7a9bc, #b84f75); }\n.icon-silver { background: linear-gradient(145deg, #e8c4cf, #bb8194); }\n.icon-light { background: linear-gradient(145deg, #f0b9ca, #d27698); }\n.icon-deep { background: linear-gradient(145deg, #bd5278, #812443); }\n.icon-ice { background: linear-gradient(145deg, #f3ced9, #c47794); }\n.lp-title { font-family: 'Cinzel', serif; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: #b05a78; margin-bottom: 2px; }\n.lp-name { font-size: 15.5px; font-weight: 600; color: #6b1a3a; line-height: 1.3; }\n.lp-tip { display: inline-block; margin-top: 4px; font-size: 12px; color: #8d3d5b; background: rgba(240,185,202,.22); border: 1px solid rgba(214,125,153,.28); border-radius: 30px; padding: 2px 10px; font-style: italic; }\n.lp-footer { position: relative; z-index: 2; margin-top: 18px; border-radius: 20px; background: linear-gradient(145deg, rgba(255,255,255,.95), rgba(250,224,233,.75)); border: 1px solid rgba(214,125,153,.3); padding: 16px; text-align: center; }\n.lp-footer-text { font-size: 15px; color: #7a3652; line-height: 1.7; font-style: italic; }\n.lp-footer-accent { color: #b84f75; font-weight: 600; font-family: 'Cinzel', serif; font-size: 12px; letter-spacing: .08em; display: block; margin-top: 6px; }\n</style>\n\n<div class=\"lp-root\">\n  <span class=\"flower\" style=\"top:8%;left:8%;\">✿</span>\n  <span class=\"flower\" style=\"top:20%;right:12%;animation-delay:1s;\">❀</span>\n  <span class=\"flower\" style=\"bottom:20%;left:12%;animation-delay:2s;\">✦</span>\n  <span class=\"flower\" style=\"bottom:10%;right:9%;animation-delay:.5s;\">✿</span>\n\n  <div class=\"lp-wrap\">\n    <div class=\"lp-header\">\n      <h2>Lista de Presentes</h2>\n      <p class=\"sub\">Com muito carinho e gratidão ✨</p>\n      <span class=\"badge\">✿ Melyssa · 15 anos ✿</span>\n    </div>\n\n    <div class=\"lp-grid\">\n      <div class=\"lp-card\" style=\"animation-delay:.05s\"><div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-spray-can-sparkles\"></i></div><div><div class=\"lp-title\">Presente</div><div class=\"lp-name\">Perfumes</div></div></div>\n      <div class=\"lp-card\" style=\"animation-delay:.10s\"><div class=\"lp-icon icon-silver\"><i class=\"fa-solid fa-jar\"></i></div><div><div class=\"lp-title\">Presente</div><div class=\"lp-name\">Cremes</div></div></div>\n      <div class=\"lp-card\" style=\"animation-delay:.15s\"><div class=\"lp-icon icon-light\"><i class=\"fa-solid fa-gem\"></i></div><div><div class=\"lp-title\">Presente</div><div class=\"lp-name\">Acessórios</div></div></div>\n      <div class=\"lp-card\" style=\"animation-delay:.20s\"><div class=\"lp-icon icon-deep\"><i class=\"fa-solid fa-palette\"></i></div><div><div class=\"lp-title\">Presente</div><div class=\"lp-name\">Maquiagem</div></div></div>\n      <div class=\"lp-card\" style=\"animation-delay:.25s\"><div class=\"lp-icon icon-blue\"><i class=\"fa-solid fa-shirt\"></i></div><div><div class=\"lp-title\">Presente</div><div class=\"lp-name\">Roupas</div><span class=\"lp-tip\">✦ Tamanho P</span></div></div>\n      <div class=\"lp-card\" style=\"animation-delay:.30s\"><div class=\"lp-icon icon-ice\"><i class=\"fa-solid fa-scissors\"></i></div><div><div class=\"lp-title\">Presente</div><div class=\"lp-name\">Calça · Shorts · Saia</div><span class=\"lp-tip\">✦ Tamanho 34</span></div></div>\n    </div>\n\n    <div class=\"lp-footer\"><div class=\"lp-footer-text\">Sua presença já é o maior presente desta noite especial.</div><span class=\"lp-footer-accent\">Obrigada por fazer parte desse momento ✿✨</span></div>\n  </div>\n</div>"
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
