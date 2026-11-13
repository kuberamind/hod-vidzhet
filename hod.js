(function () {
  var root = document.getElementById("h");
  if (!root) return;
  function dannye() {
    var d = null;
    try { var a = root.getAttribute("data-hod"); if (a) d = JSON.parse(a); } catch (x) { d = null; }
    if (!d || typeof d !== "object") d = window.HOD;
    return d && typeof d === "object" && Object.keys(d).length ? d : null;
  }
  var gotov = false;
  function risovat() { if (gotov) return true; var d = dannye(); if (!d) return false; gotov = true; render(d); return true; }
  root.innerHTML = "<div style='font:13px system-ui,sans-serif;color:#71717a'>загрузка…</div>";
  if (!risovat()) {
    var t0 = Date.now(), iv = setInterval(function () { if (risovat() || Date.now() - t0 > 3000) clearInterval(iv); }, 50);
    window.addEventListener("hod", function (ev) { if (!gotov) { var dd = ev && ev.detail; if (dd && typeof dd === "object") window.HOD = dd; risovat(); } });
  }
  function render(d) {
    var VER = "v0.9.2", NORMA = 4, PULT = "https://claude.ai/artifact/FwzxVQ5JKYHEthP9HdUJJC", CDN = "https://cdn.jsdelivr.net/gh/kuberamind/hod-vidzhet@main/d/";
    var SP = { pachka: ["пачка", "#2563eb"], skript: ["скрипт", "#7c3aed"], cikl: ["подагент", "#d97706"], dlinnoe: ["длинное", "#0891b2"], gotovyy: ["готовый", "#059669"], cepochka: ["цепочка", "#db2777"], potok: ["воркфлоу", "#16a34a"], obychnyy: ["одиночный", "#6b7280"] };
    var ST = { ok: ["✓", "#22c55e", "готово"], err: ["✗", "#ef4444", "ошибка"], run: ["…", "#d97706", "идёт"], oshibka: ["✗", "#ef4444", "ошибка"], propusk: ["–", "#9ca3af", "пропуск"] };
    var e = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
    var num = function (v) { v = Number(v) || 0; return v >= 1e6 ? (v / 1e6).toFixed(1) + " млн" : v >= 1e3 ? Math.round(v / 1e3) + " тыс." : String(Math.round(v)); };
    if (d.plan) {
      var pk = d.k || [], pq = Number(d.q) || NORMA, pc = pq > NORMA ? "#ef4444" : "#22c55e";
      var ph = "<style>.hp{font:13px/1.45 system-ui,sans-serif;color:var(--color-text-primary,#18181b)}.hp details{border-radius:10px;background:var(--color-background-secondary,#f4f4f5);border-left:5px solid " + pc + "}.hp summary{list-style:none;cursor:pointer;display:flex;gap:8px;align-items:center;padding:6px 10px;font-weight:600}.hp summary::-webkit-details-marker{display:none}.hp .pt{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hp .pm{font-size:12px;color:var(--color-text-secondary,#71717a);white-space:nowrap}.hp .pr{display:flex;gap:8px;align-items:center;padding:3px 10px 3px 14px}.hp .pb{font-size:11px;color:#fff;border-radius:8px;padding:1px 7px;white-space:nowrap}.hp .pf{padding:4px 10px 8px;font-size:12px;color:var(--color-text-secondary,#71717a)}@media (prefers-color-scheme:dark){.hp{color:var(--color-text-primary,#e4e4e7)}.hp details{background:var(--color-background-secondary,#27272a)}}</style>";
      ph += "<div class=hp><details><summary><span>\u25B8</span><span class=pt>\u041F\u043B\u0430\u043D: " + e(d.t || "\u0445\u043E\u0434") + "</span><span class=pm>" + pk.length + " \u043A\u0443\u0441. \u00B7 \u0446\u0435\u043B\u044C \u2264" + pq + " \u0437\u0430\u043F\u0440.</span></summary>";
      pk.forEach(function (x, i) { var sp = SP[x[1]] || [x[1] || "\u2013", "#71717a"]; ph += "<div class=pr><span class=pb style='background:" + sp[1] + "'>" + e(sp[0]) + "</span><span>" + (i + 1) + ". " + e(x[0]) + "</span></div>"; });
      if (d.m) ph += "<div class=pf>" + e(d.m) + "</div>";
      root.innerHTML = ph + "</details></div>";
      return;
    }
    var dur = function (ms) { ms = Number(ms) || 0; return ms >= 60000 ? (ms / 60000).toFixed(1) + " мин" : ms >= 1000 ? (ms / 1000).toFixed(1) + " с" : ms + " мс"; };
    var hm = function (min) { var t = new Date(min * 60000); return ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2); };
    var css = ".hw{font:13px/1.45 system-ui,-apple-system,sans-serif;color:var(--color-text-primary,#18181b);max-width:780px}.hw *{box-sizing:border-box}" +
      ".hw h3{margin:0;font-size:15px;font-weight:600;flex:1;min-width:0;overflow-wrap:anywhere}.hw .hd{display:flex;gap:8px;align-items:flex-start;padding:6px 10px;border-radius:10px;border-left:5px solid #22c55e;background:var(--color-background-secondary,#f4f4f5)}.hw .hd.er{border-color:#ef4444}.hw .hd.ru{border-color:#d97706}" +
      ".hw .sb{font-size:11px;font-weight:600;white-space:nowrap}.hw .sub{color:var(--color-text-secondary,#71717a);font-size:12px}" +
      ".hw .row{display:grid;grid-template-columns:repeat(auto-fit,minmax(104px,1fr));gap:6px;margin:8px 0}" +
      ".hw .c{border-radius:10px;padding:6px 9px;background:var(--color-background-secondary,#f4f4f5);border:1px solid transparent;cursor:help}.hw .c b{display:block;font-size:19px;font-weight:600;line-height:1.2}.hw .c span{font-size:10.5px;color:var(--color-text-secondary,#71717a);line-height:1.25;display:block}.hw .c i{display:block;font-style:normal;font-size:10px;color:#22c55e}" +
      ".hw .grn{border-color:#22c55e;background:rgba(34,197,94,.12)}.hw .grn b{color:#22c55e}.hw .red{border-color:#ef4444;background:rgba(239,68,68,.12)}.hw .red b{color:#ef4444}" +
      ".hw .sec{margin:10px 0 3px;font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--color-text-secondary,#71717a)}" +
      ".hw .nd{display:inline-block;padding:2px 8px;border-radius:99px;font-size:11px;font-weight:600;background:rgba(128,128,128,.2)}.hw .ln{margin:0 0 0 14px;padding-left:10px;border-left:2px solid rgba(128,128,128,.35)}" +
      ".hw details.k{border-left:4px solid;border-radius:6px;background:var(--color-background-secondary,#f4f4f5);margin:4px 0}.hw details.k>summary{list-style:none;cursor:pointer;display:flex;gap:6px;align-items:baseline;padding:5px 8px;flex-wrap:wrap}.hw details.k>summary::-webkit-details-marker{display:none}.hw details.k>summary:before{content:'▸';font-size:10px;color:#9ca3af}.hw details[open].k>summary:before{content:'▾'}" +
      ".hw .sp{font-size:10.5px;padding:1px 7px;border-radius:99px;color:#fff;white-space:nowrap}.hw .n{flex:1;min-width:90px;font-weight:600;overflow-wrap:anywhere}.hw .m{font-size:11px;color:var(--color-text-secondary,#71717a);white-space:nowrap}" +
      ".hw .bd{padding:2px 9px 8px}.hw pre{margin:3px 0;padding:5px 7px;border-radius:6px;background:rgba(128,128,128,.14);font:11px/1.4 ui-monospace,Menlo,monospace;white-space:pre-wrap;overflow-wrap:anywhere;max-height:130px;overflow:auto}.hw pre.er{background:rgba(239,68,68,.15);color:#ef4444}.hw .lb{font-size:10.5px;color:var(--color-text-secondary,#71717a)}" +
      ".hw .gr{display:flex;align-items:center;gap:4px;overflow-x:auto;padding:4px 0}.hw .gc{display:flex;flex-direction:column;gap:3px}.hw .gn{border:1.5px solid;border-radius:6px;padding:2px 6px;font-size:10.5px;white-space:nowrap;background:var(--color-background-primary,transparent)}.hw .ar{color:#9ca3af;font-size:14px}" +
      ".hw .bars{display:flex;align-items:flex-end;gap:2px;height:38px;border-bottom:1px solid rgba(128,128,128,.3)}.hw .b{flex:1;max-width:16px;min-width:3px;background:#22c55e;border-radius:2px 2px 0 0}.hw .b.mx{background:#ef4444}.hw .up{color:#ef4444}.hw .dn{color:#22c55e}" +
      ".hw .tip{display:flex;gap:6px;align-items:center;padding:6px 9px;border-radius:8px;background:rgba(37,99,235,.1);border:1px solid rgba(37,99,235,.35);margin:8px 0}.hw .tip div{flex:1;min-width:0;overflow-wrap:anywhere;font-size:12px}" +
      ".hw button{font:12px system-ui,sans-serif;padding:4px 10px;border-radius:7px;border:1px solid rgba(128,128,128,.5);background:var(--color-background-secondary,#f4f4f5);color:inherit;cursor:pointer;white-space:nowrap}.hw button:hover{border-color:#2563eb}" +
      ".hw .ds{display:grid;grid-template-columns:90px 1fr 34px;gap:4px 6px;align-items:center;font-size:11px}.hw .ds i{display:block;height:9px;border-radius:5px}" +
      ".hw .cl{display:flex;gap:6px;align-items:baseline;font-size:12px;margin:1px 0}.hw .wf{display:flex;gap:6px;margin-top:6px}.hw .wf input{flex:1;min-width:0;font:12px system-ui;padding:5px 8px;border-radius:7px;border:1px solid rgba(128,128,128,.5);background:var(--color-background-secondary,#f4f4f5);color:inherit}" +
      ".hw table{width:100%;border-collapse:collapse;font-size:11.5px}.hw th{text-align:left;font-weight:500;font-size:10.5px;color:var(--color-text-secondary,#71717a);padding:2px 5px;border-bottom:1px solid rgba(128,128,128,.3)}.hw td{padding:2px 5px;border-bottom:1px solid rgba(128,128,128,.15);vertical-align:baseline;overflow-wrap:anywhere}.hw .r{text-align:right;white-space:nowrap}" +
      ".hw details.x>summary{cursor:pointer;font-size:12px;color:var(--color-text-secondary,#71717a);margin-top:6px}.hw .ch{display:inline-block;margin:0 4px 2px 0;padding:1px 8px;border-radius:99px;background:rgba(128,128,128,.18);font-size:11px}.hw .lk{color:#2563eb;text-decoration:none;font-weight:600}" +
      "@media (prefers-color-scheme:dark){.hw{color:var(--color-text-primary,#e4e4e7)}.hw .c,.hw details.k,.hw .hd,.hw button,.hw .wf input{background:var(--color-background-secondary,#27272a)}.hw .sub,.hw .c span,.hw .m,.hw .lb,.hw th,.hw .sec,.hw details.x>summary{color:var(--color-text-secondary,#a1a1aa)}.hw .lk{color:#60a5fa}.hw .tip{background:rgba(96,165,250,.12)}}";
    var q = Number(d.q) || 0, s = d.s || [], v = Number(d.v) || 0, n = d.n && typeof d.n === "object" ? d.n : null;
    var det = (window.HODQ || {})[d.id] || null;
    function st3(sx) { var er = 0, ru = 0; sx.forEach(function (x) { var t = Array.isArray(x) ? x[2] : x.s; if (t === "err") er++; else if (t === "run") ru++; }); return er ? "er" : ru ? "ru" : ""; }
    function formula() { return "ток. = сумма контекстов всех запросов хода (сколько токенов прочитано)"; }
    function graph(g) {
      return "<div class=gr>" + g.map(function (col, i) { return (i ? "<span class=ar>→</span>" : "") + "<div class=gc>" + col.map(function (u) { var z = ST[u[2]] || ST.ok; return "<span class=gn style='border-color:" + z[1] + "' title='" + e((u[4] || "") + "") + "'>" + z[0] + " " + e(u[0]) + " <span class=m>" + e(u[1]) + (u[3] ? " · " + dur(u[3]) : "") + "</span></span>"; }).join("") + "</div>"; }).join("") + "</div>";
    }
    function kusok(x, i, det0) {
      var sp = SP[x.sp] || [x.sp || "?", "#6b7280"], z = ST[x.s] || ST.run, h = "<details class=k style='border-left-color:" + sp[1] + "'><summary><span class=sp style='background:" + sp[1] + "'>" + e(sp[0]) + "</span><span class=n>" + (i + 1) + ". " + e(x.n) + "</span><span class=m>" + (x.c ? x.c + " вызов(ов) · " : "") + dur(x.ms) + "</span><b style='color:" + z[1] + "'>" + z[0] + "</b></summary><div class=bd>";
      if (x.g) h += "<div class=lb>воркфлоу: узлы и порядок</div>" + graph(x.g);
      if (x.k) h += "<div class=lb>код / команды</div><pre>" + e(x.k) + "</pre>";
      if (x.vz && x.vz.length) h += "<div class=lb>вызовы внутри</div><table>" + x.vz.map(function (y) { return "<tr><td>" + e(y[0]) + "</td><td class=r>" + dur(y[1]) + "</td><td class=r>" + (y[2] ? num(y[2]) + " зн." : "") + "</td><td class=r style='color:" + (y[3] ? "#22c55e" : "#ef4444") + "'>" + (y[3] ? "✓" : "✗") + "</td></tr>"; }).join("") + "</table>";
      if (x.o) h += "<div class=lb>вывод (обрезан)</div><pre>" + e(x.o) + "</pre>";
      if (x.er) h += "<div class=lb style='color:#ef4444'>ошибка</div><pre class=er>" + e(x.er) + "</pre>";
      return h + "</div></details>";
    }
    var acik = false;
    function paint() {
      det = (window.HODQ || {})[d.id] || det;
      var tm = det && det.ts ? [Math.round(det.ts[0] / 60000), Math.round((det.ts[1] - det.ts[0]) / 1000)] : d.tm;
      var cls = st3(det && det.pl ? det.pl : s), stt = cls === "er" ? ["ошибка в куске", "#ef4444"] : cls === "ru" ? ["идёт", "#d97706"] : ["готово", "#22c55e"];
      var cn = det && det.cn ? det.cn : null, cr = cn ? cn.cr : d.kc ? d.kc[0] * 1000 : null, cw = cn ? cn.cw : d.kc ? d.kc[1] * 1000 : null;
      var zz = Array.isArray(d.z) ? d.z : null, dl = Array.isArray(d.d) ? d.d : null, oo = Array.isArray(d.o) ? d.o : null, mm = Number(d.m) || 0;
      var h = "<style>" + css + "</style><div class=hw><div class='hd " + cls + "'><h3>" + e((det && det.t) || d.t || "Ход") + "</h3><div style='text-align:right'><div class=sb style='color:" + stt[1] + "'>● " + stt[0] + "</div>" + (tm ? "<div class=sub>" + hm(tm[0]) + " · " + dur(tm[1] * 1000) + "</div>" : "") + "</div></div>";
      var qs = "запросов · норма ≤" + NORMA, ar = "";
      if (n) { if (n.sr != null) qs += " · ты " + e(n.sr); if (n.vse != null) qs += " · все " + e(n.vse); if (n.pred != null) { var df = q - Number(n.pred); ar = df < 0 ? "<i>▼ лучше прошлого (" + e(n.pred) + ")</i>" : df > 0 ? "<i style='color:#ef4444'>▲ хуже прошлого (" + e(n.pred) + ")</i>" : ""; } }
      h += "<div class=row><div class='c " + (q > NORMA ? "red" : q > 0 ? "grn" : "") + "' title='запросов к модели за ход; норма ≤" + NORMA + ". Красный — выше нормы'><b>" + q + "</b><span>" + qs + "</span>" + (q > 0 && q <= NORMA ? "<i>✓ выше нормы</i>" : "") + ar + "</div>" +
        "<div class='c" + (Number(d.e) > 65e4 ? " red" : "") + "' title='" + formula() + "'><b>" + num(d.e) + "</b><span>ток. за ход</span></div>";
      if (cr != null) h += "<div class=c title='чтение кэша ×0,1: дёшево. " + formula() + "'><b>" + num(cr) + "</b><span>кэш-чтение</span></div><div class=c title='запись кэша ×1,25: растёт при новом контексте или разрыве кэша'><b>" + num(cw) + "</b><span>кэш-запись</span></div>";
      h += "<div class='c" + (oo && oo[0] > 0 ? " red" : "") + "' title='сколько прямых вызовов отбил замок и направил в цепочку'><b>" + (oo ? e(oo[0]) : 0) + "</b><span>отбил замок</span></div><div class=c title='вызовов внутри кусков (скрипты, воркфлоу, подагенты)'><b>" + v + "</b><span>вызовов внутри</span></div>";
      if (zz && zz[0] > 0) h += "<div class='c grn' title='оценка: вызовов внутри ≈ запросов, которые цепочка не потратила'><b>~" + e(zz[0]) + "</b><span>запросов сэкономила цепочка · ~" + num(zz[1]) + " ток.</span></div>";
      if (mm > 0) h += "<div class=c><b>🥇 " + mm + "</b><span>ходов выше нормы сегодня</span></div>";
      h += "</div>";
      // цепочка
      var pl = det && det.pl && det.pl.length ? det.pl : s.map(function (x) { return { n: x[0], sp: x[1], s: x[2], ms: x[3], c: 0 }; });
      h += "<div class=sec>цепочка</div><div><span class=nd>план · " + pl.length + " кус.</span></div><div class=ln>" + pl.map(kusok).join("") + "</div><div><span class=nd>итог · " + q + " запр. · " + (tm ? dur(tm[1] * 1000) : "") + "</span></div>";
      if (!det) h += "<div class=sub id=hdd>подробности куска (код, вывод, граф) загружаются…</div>";
      // совет
      var p = d.p ? String(d.p) : "", cm = (/(node \S.*|ekon_\w+ .*)/.exec(p) || [])[1] || p;
      h += p ? "<div class=tip><div>💡 " + e(p) + "</div><button data-cp=1>скопировать команду</button></div>" : q > NORMA ? "<div class=tip><div>💡 запросов больше нормы: сведи мелкие куски в один skript/potok</div></div>" : "";
      // пожелание
      h += "<div class=sec>пожелание: как удлинить цепочку</div><div class=wf><input maxlength=300 placeholder='что улучшить или удлинить?'><button data-wish=1>отправить</button></div><div class=sub id=hws>" + (d.u ? "💡 " + e(d.u) : "") + "</div>";
      // день
      var dn = det && det.dn ? det.dn : null, mi = dn ? dn.mine : n && n.sr, vs = dn ? dn.vse : n && n.vse;
      if (mi != null || vs != null) {
        var mx = Math.max(NORMA, Number(mi) || 0, Number(vs) || 0), W = function (x) { return Math.max(3, Math.round(100 * x / mx)) + "%"; };
        h += "<div class=sec>день · запросов за ход</div><div class=ds><span>ты сегодня</span><div><i style='background:" + (mi > NORMA ? "#ef4444" : "#22c55e") + ";width:" + W(mi) + "'></i></div><b>" + e(mi) + "</b><span>все агенты</span><div><i style='background:#6b7280;width:" + W(vs) + "'></i></div><b>" + e(vs) + "</b><span>норма</span><div><i style='background:#2563eb;width:" + W(NORMA) + "'></i></div><b>" + NORMA + "</b></div>";
        if (dn && dn.tok != null) h += "<div class=sub>токенов на запрос: ты " + num(dn.tok) + " · все " + num(dn.tokv) + " · цель <50 тыс.</div>";
        var tr = dn && dn.tr ? dn.tr : [];
        if (tr.filter(function (x) { return x != null; }).length > 1) {
          var all = tr.concat(dn.trv || []).filter(function (x) { return x != null; }), hi = Math.max.apply(null, all.concat([NORMA])) * 1.1, W2 = 200, H2 = 34, line = function (a, col, dash) { var pts = a.map(function (y, i) { return y == null ? null : (a.length > 1 ? Math.round(i * W2 / (a.length - 1)) : 0) + "," + Math.round(H2 - H2 * y / hi); }).filter(Boolean).join(" "); return "<polyline fill=none stroke='" + col + "' stroke-width=1.6 " + (dash ? "stroke-dasharray='3 3' " : "") + "points='" + pts + "'/>"; };
          h += "<svg viewBox='-2 -2 " + (W2 + 4) + " " + (H2 + 4) + "' style='width:100%;max-width:260px;height:44px'>" + line(Array(tr.length).fill(NORMA), "#2563eb", 1) + line(dn.trv || [], "#9ca3af", 1) + line(tr, "#22c55e") + "</svg><div class=sub>тренд за " + tr.length + " дн.: зелёная — ты, серая — все, синяя — норма</div>";
        }
      }
      // цель
      if (det && det.cel) h += "<div class=sec>цель</div><div class=sub>" + e(det.cel.t) + " · " + det.cel.sh.filter(function (x) { return x[1]; }).length + "/" + det.cel.sh.length + "</div>" + det.cel.sh.map(function (x) { return "<div class=cl><b style='color:" + (x[1] ? "#22c55e" : "#9ca3af") + "'>" + (x[1] ? "☑" : "☐") + "</b><span>" + e(x[0]) + "</span></div>"; }).join("");
      // раскрытия
      var X = "";
      if (det && det.rq && det.rq.length) {
        var rr = det.rq.map(function (x) { return x[0]; }), mxr = Math.max.apply(null, rr.concat([1])), im = rr.indexOf(mxr);
        X += "<details class=x><summary>запросы: цена, контекст, кэш (" + rr.length + ")</summary><div class=bars>" + rr.map(function (x, i) { return "<i class='b" + (i === im && rr.length > 1 ? " mx" : "") + "' title='№" + (i + 1) + ": " + x + " тыс. ток.' style='height:" + Math.max(2, Math.round(36 * x / mxr)) + "px'></i>"; }).join("") + "</div><table><tr><th>№</th><th class=r>ток.</th><th class=r>контекст</th><th class=r>чт.</th><th class=r>зап.</th><th class=r>вых.</th><th>почему</th></tr>" + det.rq.slice(0, 20).map(function (x, i) { return "<tr><td>" + (i + 1) + "</td><td class=r>" + x[0] + "к</td><td class=r>" + x[1] + "к</td><td class=r>" + x[2] + "к</td><td class=r>" + x[3] + "к</td><td class=r>" + x[4] + "</td><td>" + e(x[5]) + "</td></tr>"; }).join("") + "</table>" + (cn && cn.k0 != null ? "<div class=sub>контекст " + Math.round(cn.k0 / 1000) + " → " + Math.round(cn.k1 / 1000) + " тыс. · " + (cn.k1 > cn.k0 ? "<b class=up>▲ +" + Math.round((cn.k1 - cn.k0) / 1000) + "</b>" : "<b class=dn>без роста</b>") + "</div>" : "") + "</details>";
      } else if (d.r) { var rr2 = d.r, m2 = Math.max.apply(null, rr2.concat([1])); X += "<div class=bars>" + rr2.map(function (x, i) { return "<i class=b title='" + x + " тыс.' style='height:" + Math.max(2, Math.round(36 * x / m2)) + "px'></i>"; }).join("") + "</div><div class=sub>ток. по запросам, тыс.</div>"; }
      if (det && det.vz && det.vz.length) X += "<details class=x><summary>вызовы хода (" + det.vz.length + ")</summary><table><tr><th>инструмент</th><th>способ</th><th class=r>время</th><th class=r>вывод</th></tr>" + det.vz.map(function (x) { return "<tr><td>" + e(x[0]) + (x[4] ? "<br><span style='color:#ef4444'>" + e(x[4]) + "</span>" : "") + "</td><td>" + e(x[1]) + "</td><td class=r>" + (x[2] ? dur(x[2]) : "—") + "</td><td class=r>" + (x[3] ? num(x[3]) : "—") + "</td></tr>"; }).join("") + "</table></details>";
      else if (d.w) { var WN = [["p", "прямых"], ["i", "внутри"], ["k", "куратор"], ["a", "подагенты"]]; X += "<div class=sub>" + WN.filter(function (z) { return d.w[z[0]] > 0; }).map(function (z) { return "<span class=ch>" + z[1] + " " + d.w[z[0]] + "</span>"; }).join("") + "</div>"; }
      var rc = det && det.rc && det.rc.length ? det.rc : d.rc ? d.rc.map(function (x) { return [x, null]; }) : null;
      if (rc) X += "<div class=sec>рецепты</div><div>" + rc.map(function (x) { return "<span class=ch>" + e(x[0]) + (x[1] ? " · заменил ~" + x[1] + " запр." : "") + "</span>"; }).join("") + "</div>";
      if (Array.isArray(d.er) && d.er[0]) X += "<div class=sec>ошибки: " + d.er[0] + "</div><div>" + Object.keys(d.er[1] || {}).map(function (k) { return "<span class=ch>" + e(k) + " \u00D7" + d.er[1][k] + "</span>"; }).join("") + "</div>";
      if (Array.isArray(d.mp) && d.mp.length) X += "<div class=sec>мимо: " + d.mm + "</div><div>" + d.mp.map(function (x) { return "<span class=ch>" + e(x[0]) + " \u00D7" + x[1] + "</span>"; }).join("") + "</div>";
      var ot = det && det.ot && det.ot.length ? det.ot : null;
      if (ot) X += "<div class=sec>отказы замка</div>" + ot.map(function (x) { return "<div class=cl><b style='color:#ef4444'>⛔</b><span>" + e(x[0]) + (x[1] ? " → " + e(x[1]) : " → бриф / skript / potok") + "</span></div>"; }).join("");
      else if (oo && oo[0] > 0) X += "<div class=sub style='color:#ef4444'>⛔ отказов замка " + e(oo[0]) + (oo[1] ? " · " + e(oo[1]) : "") + "</div>";
      var ku = det && det.ku && det.ku.length ? det.ku : null;
      if (ku) X += "<div class=sec>куратор</div>" + ku.map(function (x) { return "<div class=cl><span>бриф · " + e(x[0]) + " · " + dur(x[1]) + " · " + num(x[2]) + " ед.</span></div>"; }).join("");
      else if (d.ku && d.ku[0] > 0) X += "<div class=sub>куратор: " + e(d.ku[0]) + " бриф(ов), ok " + e(d.ku[1]) + "</div>";
      if (d.sv === 1 || d.sv === 0) X += "<div class=sub style='color:" + (d.sv ? "#22c55e" : "#d97706") + "'>" + (d.sv ? "✓ сверено с журналом посредника и замка" : "⚠ расхождение со сверкой") + "</div>";
      if (d.id) X += "<div class=sub style='margin-top:6px'><a class=lk target=_blank rel=noopener href='" + PULT + "#hod=" + encodeURIComponent(d.id) + "'>открыть в пульте →</a></div>";
      var xx = Array.isArray(d.x) && d.x.length >= 7 ? d.x : null, xtit = xx ? ("с нами " + num(xx[1]) + " ток. / без нас ≈" + num(xx[2]) + " ток. Лестница (каждый вызов внутри — отдельный запрос со всем контекстом) " + num(xx[3]) + ", подагенты и куратор " + num(xx[4]) + ". Потери (лишние запросы: компресс, повторы) " + num(xx[6])) : "";
      if (xx) X += "<div class=c title='" + xtit + "' style='display:inline-block;margin:6px 6px 0 0'><b>с нами " + num(xx[1]) + " / без нас \u2248" + num(xx[2]) + "</b><span>\u2212" + Math.max(0, xx[0]) + " % \u00B7 A " + num(xx[3]) + " \u00B7 B " + num(xx[4]) + " \u00B7 C " + num(xx[5]) + " \u00B7 накладные " + num(xx[6]) + "</span></div>";
      var cq = q > NORMA ? "#ef4444" : "#22c55e", sm = (xx ? "<span class=hx style='color:" + (xx[0] > 0 ? "#22c55e" : "#d97706") + "' title='" + xtit + "'>эк \u2212" + Math.max(0, xx[0]) + "%</span>" : "") + "<span class=hq style='color:" + cq + "'>" + q + "/" + NORMA + "</span>" + (q > 0 && q <= NORMA ? "<span class=hm title='ход выше нормы'>🥇</span>" : "") + (Array.isArray(d.rl) && d.rl.length === 4 ? "<span class=hr style='font-size:11px;color:var(--color-text-secondary,#71717a)' title='рельс хода: замок, запись, виджет, сверка'>" + ["замок", "запись", "виджет", "сверка"].map(function (n, i) { var v = d.rl[i]; return n + "<b style='color:" + (v === 1 ? "#22c55e" : v === 2 ? "#a1a1aa" : "#ef4444") + "'>" + (v === 1 ? "✓" : v === 2 ? "–" : "✗") + "</b>"; }).join(" ") + "</span>" : "") + (d.rv && d.rv !== VER ? "<span class=hw2 style='color:#d97706' title='версия карточки " + VER + ", последняя " + e(d.rv) + "'>⚠ " + VER + "</span>" : "") + (d.sv === 1 ? "<span class=hv style='color:#22c55e' title='сверено с журналом посредника и замка'>✓</span>" : d.sv === 0 ? "<span class=hv style='color:#d97706' title='расхождение со сверкой'>⚠</span>" : "");
      var ern = Array.isArray(d.er) ? d.er[0] : 0; sm = (xx ? "<span class=hx style='color:" + (xx[0] > 0 ? "#22c55e" : "#d97706") + "' title='" + xtit + "'>экономия \u2212" + Math.max(0, xx[0]) + "%</span>" : "") + "<span class=hq style='color:" + ((d.vz || 0) > 0 ? "#22c55e" : "#71717a") + "' title='действия внутри брифов — без перечитывания чата'>вызовы " + (d.vz || 0) + "</span><span class=hq style='color:" + ((d.mm != null ? d.mm : Math.max(0, q - 1)) > 3 ? "#ef4444" : "#71717a") + "' title='запросы к модели сверх первого брифа'>мимо " + (d.mm != null ? d.mm : Math.max(0, q - 1)) + "</span><span class=hq style='color:" + (ern ? "#ef4444" : "#71717a") + "'>ошибок: " + ern + "</span>" + (q > 0 && q <= NORMA ? "<span title='ход выше нормы'>\uD83E\uDD47</span>" : "") + "<span style='color:#9ca3af;font-size:11px'>" + VER + "</span>";
      var hc = "<details class=hc" + (acik ? " open" : "") + "><summary><span class=ha></span><span class=ht>" + "" + "</span>" + sm + "</summary>";
      h = h.replace("</style><div class=hw>", ".hw details.hc>summary .ht{display:none}.hw details.hc>summary>span{flex:0 0 auto}.hw details.hc>summary{list-style:none;cursor:pointer;display:flex;gap:8px;align-items:center;flex-wrap:wrap;white-space:nowrap;row-gap:2px;padding:6px 10px;font-size:13px;border-radius:10px;background:var(--color-background-secondary,#f4f4f5);border-left:5px solid " + cq + "}.hw details.hc>summary::-webkit-details-marker{display:none}.hw .ha:before{content:'\\25B8';display:inline-block;transition:transform .15s}.hw details.hc[open]>summary .ha:before{transform:rotate(90deg)}.hw .ht{flex:1;min-width:120px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.hw .hq,.hw .he,.hw .hv,.hw .hm{font-size:12px;font-weight:600;white-space:nowrap}.hw .he{color:var(--color-text-secondary,#71717a)}.hw details.hc>summary+*{margin-top:8px}@media (prefers-color-scheme:dark){.hw details.hc>summary{background:var(--color-background-secondary,#27272a)}}</style><div class=hw>" + hc);
      root.innerHTML = h + X + "</details></div>";
      var hcEl = root.querySelector("details.hc"); if (hcEl) hcEl.addEventListener("toggle", function () { acik = hcEl.open; });
      var cp = root.querySelector("[data-cp]"); if (cp) cp.onclick = function () { var ok = false; try { navigator.clipboard.writeText(cm); ok = true; } catch (z) {} if (!ok) { try { var ta = document.createElement("textarea"); ta.value = cm; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta); } catch (z2) {} } cp.textContent = "скопировано ✓"; };
      var wb = root.querySelector("[data-wish]"), wi = root.querySelector(".wf input");
      if (wb) wb.onclick = function () { var t = (wi.value || "").trim(); if (!t) return; var w = document.getElementById("hws"); try { if (typeof sendPrompt === "function") { sendPrompt("ekon_uluchshenie: " + t); if (w) w.textContent = "✓ отправлено агенту: " + t; wi.value = ""; } else { var tx = "ekon_uluchshenie: " + t, okc = false; try { navigator.clipboard.writeText(tx); okc = true; } catch (z3) {} if (!okc) { try { var ta2 = document.createElement("textarea"); ta2.value = tx; document.body.appendChild(ta2); ta2.select(); document.execCommand("copy"); document.body.removeChild(ta2); okc = true; } catch (z4) {} } if (w) w.textContent = okc ? "скопировано \u2713 \u2014 отправь агенту: " + t : "отправка недоступна в этом окне"; } } catch (z) { if (w) w.textContent = "не отправилось"; } };
    }
    paint();
    // подробности: отдельный JS-файл с CDN (не растит контекст агента); файл появляется через 1–3 с после итога
    if (!det && d.id) {
      var tries = 0, t = setInterval(function () {
        if ((window.HODQ || {})[d.id]) { clearInterval(t); paint(); return; }
        if (++tries > 14) { clearInterval(t); var m = document.getElementById("hdd"); if (m) m.textContent = "подробности не загрузились (CDN)"; return; }
        var sc = document.createElement("script"); sc.src = CDN + encodeURIComponent(d.id) + ".js?r=" + tries; sc.onload = function () { if ((window.HODQ || {})[d.id]) { clearInterval(t); paint(); } }; document.head.appendChild(sc);
      }, 2500);
    }
  }
})();
