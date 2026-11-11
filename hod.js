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
  function risovat() {
    if (gotov) return true;
    var d = dannye();
    if (!d) return false;
    gotov = true; render(d); return true;
  }
  root.innerHTML = "<div style='font:13px system-ui,sans-serif;color:#71717a'>загрузка…</div>";
  if (!risovat()) {
    var t0 = Date.now(), iv = setInterval(function () { if (risovat() || Date.now() - t0 > 3000) clearInterval(iv); }, 50);
    window.addEventListener("hod", function (ev) { if (!gotov) { var dd = ev && ev.detail; if (dd && typeof dd === "object") window.HOD = dd; risovat(); } });
  }
  function render(d) {
  var NORMA = 4;
  var SP = { pachka: ["пачка", "#2563eb"], skript: ["скрипт", "#7c3aed"], cikl: ["подагент", "#d97706"], dlinnoe: ["длинное", "#0891b2"], gotovyy: ["готовый скрипт", "#059669"], cepochka: ["цепочка", "#db2777"], potok: ["воркфлоу", "#16a34a"], obychnyy: ["одиночный", "#6b7280"] };
  var ST = { ok: ["✓", "#22c55e"], err: ["✗", "#ef4444"], run: ["…", "#d97706"] };
  var e = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var num = function (v) { v = Number(v) || 0; return v >= 1e6 ? (v / 1e6).toFixed(1) + " млн" : v >= 1e3 ? Math.round(v / 1e3) + " тыс." : String(Math.round(v)); };
  var dur = function (ms) { ms = Number(ms) || 0; return ms >= 1000 ? (ms / 1000).toFixed(1) + " с" : ms + " мс"; };
  var css = ".hw{font:13px/1.5 system-ui,-apple-system,sans-serif;color:var(--color-text-primary,#18181b);max-width:780px}.hw *{box-sizing:border-box}" +
    ".hw h3{margin:0 0 2px;font-size:15px;font-weight:600}.hw .sub{color:var(--color-text-secondary,#71717a);font-size:12px}" +
    ".hw .row{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;margin:10px 0}" +
    ".hw .c{border-radius:10px;padding:8px 10px;background:var(--color-background-secondary,#f4f4f5);border:1px solid transparent}" +
    ".hw .c b{display:block;font-size:20px;font-weight:600;line-height:1.2}.hw .c span{font-size:11px;color:var(--color-text-secondary,#71717a)}" +
    ".hw .grn{border-color:#22c55e;background:rgba(34,197,94,.12)}.hw .grn b{color:#22c55e}.hw .red{border-color:#ef4444;background:rgba(239,68,68,.12)}.hw .red b{color:#ef4444}" +
    ".hw .k{border-left:4px solid;border-radius:6px;background:var(--color-background-secondary,#f4f4f5);margin:4px 0;padding:6px 10px;display:flex;gap:8px;align-items:baseline}" +
    ".hw .k .sp{font-size:11px;padding:1px 7px;border-radius:99px;color:#fff;white-space:nowrap}.hw .k .n{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600}" +
    ".hw .k .m{font-size:11px;color:var(--color-text-secondary,#71717a);white-space:nowrap}.hw .k .s{font-weight:700}" +
    ".hw details summary{cursor:pointer;font-size:12px;color:var(--color-text-secondary,#71717a);margin-top:8px}" +
    ".hw .c i{display:block;font-style:normal;font-size:10px;color:#22c55e;line-height:1.3}" +
    ".hw table{width:100%;border-collapse:collapse;margin-top:6px;font-size:12px}.hw th{text-align:left;font-weight:500;font-size:11px;color:var(--color-text-secondary,#71717a);padding:2px 6px;border-bottom:1px solid rgba(128,128,128,.3)}" +
    ".hw td{padding:3px 6px;border-bottom:1px solid rgba(128,128,128,.15);vertical-align:baseline}.hw td.r,.hw th.r{text-align:right;white-space:nowrap}.hw td.nm{word-break:break-word}" +
    ".hw .tot{margin-top:6px;font-size:12px;color:var(--color-text-secondary,#71717a)}" +
    "@media (prefers-color-scheme:dark){.hw{color:var(--color-text-primary,#e4e4e7)}.hw .c,.hw .k{background:var(--color-background-secondary,#27272a)}.hw .sub,.hw .c span,.hw .k .m,.hw details summary,.hw th,.hw .tot{color:var(--color-text-secondary,#a1a1aa)}}";
  var s = d.s || [], q = Number(d.q) || 0, ok = q > 0 && q <= NORMA;
  var h = "<style>" + css + "</style><div class=hw><h3>" + e(d.t || "Ход") + "</h3><div class=sub>" + s.length + " шаг(ов)</div>";
  var n = d.n && typeof d.n === "object" ? d.n : null, zz = Array.isArray(d.z) ? d.z : null, dl = Array.isArray(d.d) ? d.d : null, mm = Number(d.m) || 0, oo = Array.isArray(d.o) ? d.o : null, pp = d.p ? String(d.p) : "";
  var qs = "запросов", ar = "";
  if (n) {
    var pr = ["норма ≤" + NORMA];
    if (n.sr != null) pr.push("у тебя сегодня " + e(n.sr));
    if (n.vse != null) pr.push("у всех " + e(n.vse));
    qs = "запросов · " + pr.join(" · ");
    if (n.pred != null) { var df = q - Number(n.pred); ar = df < 0 ? "<i>▼ лучше прошлого хода (" + e(n.pred) + ")</i>" : df > 0 ? "<i style='color:#ef4444'>▲ хуже прошлого хода (" + e(n.pred) + ")</i>" : "<i style='color:#71717a'>= как в прошлый ход</i>"; }
  }
  h += "<div class=row><div class='c " + (ok ? "grn" : q > NORMA ? "red" : "") + "'><b>" + q + "</b><span>" + qs + "</span>" + (ok ? "<i>✓ выше нормы</i>" : "") + ar + "</div>" +
    "<div class=c><b>" + (Number(d.v) || 0) + "</b><span>вызовов внутри</span></div><div class=c><b>" + num(d.e) + "</b><span>экв. токенов</span></div>";
  if (zz && Number(zz[0]) > 0) h += "<div class='c grn'><b>~" + e(zz[0]) + "</b><span>цепочка сэкономила запросов · ~" + num(zz[1]) + " экв.</span></div>";
  if (dl && Number(dl[0]) > 0) h += "<div class=c><b>" + e(dl[0]) + "</b><span>вызовов в самой длинной цепочке" + (dl[1] != null ? " · рекорд дня " + e(dl[1]) : "") + "</span></div>";
  if (mm > 0) h += "<div class=c><b>🥇 " + mm + "</b><span>ходов выше нормы сегодня</span></div>";
  if (oo && Number(oo[0]) > 0) h += "<div class='c red'><b>" + e(oo[0]) + "</b><span>отказов замка" + (oo[1] ? " · " + e(oo[1]) : "") + "</span></div>";
  h += "</div>";
  if (pp) h += "<div class=sub style='margin:2px 0 6px'>💡 " + e(pp) + "</div>";
  s.forEach(function (x) {
    var sp = SP[x[1]] || [x[1] || "?", "#6b7280"], st = ST[x[2]] || [x[2] || "…", "#d97706"];
    h += "<div class=k style='border-left-color:" + sp[1] + "'><span class=sp style='background:" + sp[1] + "'>" + e(sp[0]) + "</span><span class=n>" + e(x[0]) + "</span><span class=m>" + dur(x[3]) + "</span><span class=s style='color:" + st[1] + "'>" + e(st[0]) + "</span></div>";
  });
  var SW = { ok: "готово", err: "ошибка", run: "идёт" }, tm = 0;
  var tb = "<table><tr><th>№</th><th>шаг</th><th>способ</th><th>статус</th><th class=r>время</th></tr>";
  s.forEach(function (x, i) {
    var sp = SP[x[1]] || [x[1] || "?"], st = ST[x[2]] || [0, "#d97706"];
    tm += Number(x[3]) || 0;
    tb += "<tr><td>" + (i + 1) + "</td><td class=nm>" + e(x[0]) + "</td><td>" + e(sp[0]) + "</td><td style='color:" + st[1] + "'>" + e(SW[x[2]] || x[2] || "идёт") + "</td><td class=r>" + (Number(x[3]) ? e(x[3]) + " мс" : "—") + "</td></tr>";
  });
  tb += "</table><div class=tot>Всего: " + tm + " мс · запросов " + q + " · вызовов внутри " + (Number(d.v) || 0) + " · экв. " + num(d.e) + "</div>";
  h += "<details" + (window.HOD_OPEN || root.hasAttribute("data-open") ? " open" : "") + "><summary>Детали</summary>" + tb + "</details></div>";
  root.innerHTML = h;
  }
})();
